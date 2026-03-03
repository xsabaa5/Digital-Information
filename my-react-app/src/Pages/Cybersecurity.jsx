import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cardClass = "bg-[#0B1222] border border-[#1A2744] rounded-2xl p-7";

export default function Cybersecurity() {
  const { t } = useTranslation();
  const capabilities = t("cybersecurity.capabilities", { returnObjects: true });
  const whyChoose = t("cybersecurity.why", { returnObjects: true });

  return (
    <div className="bg-[#060B18] min-h-screen text-white font-sans antialiased">
      <Navbar />

      {/* Hero */}
      <section className="pt-25 pb-15 text-center">
        <div className="max-w-200 mx-auto px-6">
          <span
            className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold text-[#8BAAFE] bg-[rgba(79,123,247,0.1)] border border-[rgba(79,123,247,0.15)] mb-6"
          >
            {t("cybersecurity.badge")}
          </span>
          <h1
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] mb-5 tracking-[-0.03em]"
          >
            {t("cybersecurity.heading")}{" "}
            <span className="text-[#4F7BF7]">{t("cybersecurity.headingHighlight")}</span>
          </h1>
          <p
            className="text-[#8492af] text-base leading-[1.8] max-w-165 mx-auto"
          >
            {t("cybersecurity.subheading")}
          </p>
        </div>
      </section>

      <div className="max-w-280 mx-auto px-6 pb-20">
        {/* Capabilities */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 tracking-[-0.02em]"
          >
            {t("cybersecurity.capabilitiesTitle")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {(Array.isArray(capabilities) ? capabilities : []).map((cap, i) => (
              <div key={i} className={cardClass}>
                <div
                  className="w-10 h-10 rounded-[10px] bg-[rgba(79,123,247,0.1)] border border-[rgba(79,123,247,0.15)] flex items-center justify-center text-[#4F7BF7] font-bold text-base mb-4"
                >
                  {i + 1}
                </div>
                <h3 className="text-xl font-semibold mb-2.5">
                  {cap.title}
                </h3>
                <p
                  className={`text-[#8492af] text-base leading-[1.7] ${cap.features && cap.features.length ? "mb-4" : "mb-0"}`}
                >
                  {cap.desc}
                </p>
                {cap.features && cap.features.length > 0 && (
                  <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                    {cap.features.map((f, j) => (
                      <li
                        key={j}
                        className="text-[#9AABBF] text-base leading-[1.6] pl-5 relative"
                      >
                        <span className="absolute left-0 text-[#4F7BF7]">
                          &#8226;
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 tracking-[-0.02em]"
          >
            {t("cybersecurity.whyTitle")}
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {(Array.isArray(whyChoose) ? whyChoose : []).map((item, i) => (
              <div
                key={i}
                className={`${cardClass} text-center p-6!`}
              >
                <p
                  className="text-[28px] font-bold text-[#4F7BF7] mb-2 tracking-[-0.02em]"
                >
                  {item.stat}
                </p>
                <p className="text-[#8492af] text-base leading-normal">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <div
            className={`${cardClass} py-12 px-8 border-[rgba(79,123,247,0.2)]!`}
          >
            <h2 className="text-2xl font-bold mb-3">
              {t("cybersecurity.ctaTitle")}
            </h2>
            <p
              className="text-[#8492af] text-base mx-auto mb-7 max-w-120"
            >
              {t("cybersecurity.ctaDesc")}
            </p>
            <a
              href="mailto:info@diginfoiq.com"
              className="inline-block py-2.5 px-6 rounded-full text-[17px] font-semibold bg-[#0075FF] text-white no-underline shadow-[0_0_20px_rgba(79,123,247,0.35),0_4px_12px_rgba(79,123,247,0.2)] tracking-[0.01em]"
            >
              {t("cybersecurity.ctaBtn")}
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
