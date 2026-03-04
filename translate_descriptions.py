#!/usr/bin/env python3
"""Translate product descriptions from English to Arabic using Google Translate."""

import json
import re
import time
import sys
from deep_translator import GoogleTranslator

INPUT_FILE = "my-react-app/public/products.json"
OUTPUT_FILE = "my-react-app/public/products.json"
CHUNK_SIZE = 4500  # Google Translate limit is ~5000 chars

translator = GoogleTranslator(source='en', target='ar')


def split_html_chunks(html, max_size=CHUNK_SIZE):
    """Split HTML into chunks at tag boundaries, respecting max_size."""
    if len(html) <= max_size:
        return [html]

    chunks = []
    current = ""
    # Split by block-level tags to keep structure intact
    parts = re.split(r'(<(?:h[1-6]|p|div|ul|ol|li|table|tr|td|th|br|hr)[^>]*>)', html)

    for part in parts:
        if len(current) + len(part) > max_size and current:
            chunks.append(current)
            current = part
        else:
            current += part

    if current:
        chunks.append(current)

    # If any chunk is still too large, force-split it
    final_chunks = []
    for chunk in chunks:
        if len(chunk) <= max_size:
            final_chunks.append(chunk)
        else:
            # Split at sentence boundaries
            sentences = re.split(r'(?<=[.!?])\s+', chunk)
            sub_chunk = ""
            for s in sentences:
                if len(sub_chunk) + len(s) > max_size and sub_chunk:
                    final_chunks.append(sub_chunk)
                    sub_chunk = s
                else:
                    sub_chunk += (" " if sub_chunk else "") + s
            if sub_chunk:
                final_chunks.append(sub_chunk)

    return final_chunks


def translate_description(description):
    """Translate an HTML description from English to Arabic."""
    if not description or not description.strip():
        return ""

    chunks = split_html_chunks(description)
    translated_parts = []

    for chunk in chunks:
        if not chunk.strip():
            translated_parts.append(chunk)
            continue

        try:
            result = translator.translate(chunk)
            translated_parts.append(result)
            time.sleep(0.3)  # Rate limiting
        except Exception as e:
            print(f"  Warning: Translation failed for chunk ({len(chunk)} chars): {e}")
            translated_parts.append(chunk)  # Keep original on failure
            time.sleep(1)  # Longer wait after error

    return "".join(translated_parts)


def main():
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        products = json.load(f)

    total = len(products)
    translated_count = 0
    skipped_count = 0

    for i, product in enumerate(products):
        name = product.get("name", "Unknown")
        pid = product.get("id", "?")

        # Skip if already has Arabic description
        if product.get("description_ar"):
            skipped_count += 1
            print(f"[{i+1}/{total}] Skipping {name} (already translated)")
            continue

        description = product.get("description", "")
        if not description or not description.strip():
            skipped_count += 1
            print(f"[{i+1}/{total}] Skipping {name} (no description)")
            continue

        print(f"[{i+1}/{total}] Translating: {name} ({len(description)} chars)...", end=" ", flush=True)

        try:
            arabic_desc = translate_description(description)
            product["description_ar"] = arabic_desc
            translated_count += 1
            print("Done")
        except Exception as e:
            print(f"FAILED: {e}")
            continue

        # Save progress every 10 products
        if translated_count % 10 == 0:
            with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
                json.dump(products, f, ensure_ascii=False, indent=2)
            print(f"  [Progress saved: {translated_count} translated]")

    # Final save
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(products, f, ensure_ascii=False, indent=2)

    print(f"\nComplete! Translated: {translated_count}, Skipped: {skipped_count}, Total: {total}")


if __name__ == "__main__":
    main()
