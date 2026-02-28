import Navbar from "../components/Navbar";

const cardClass = "bg-[#0B1222] border border-[#1A2744] rounded-2xl p-7";

export default function SecurityElectronics() {
  const sections = [
    {
      title: "X-Ray Scanners & Metal Detectors",
      desc: "Advanced screening and detection for airports, ministries, logistics centers, and corporate facilities across Iraq.",
      brands: "RAPISCAN, GARRETT, ASTROPHYSICS",
      features: [
        "Multi-view imaging with deep penetration capability",
        "Weather-resistant designs for indoor and outdoor deployment",
        "Instant alerts and intuitive user interfaces enabling quick response",
      ],
    },
    {
      title: "Access Control & Surveillance Systems",
      desc: "Smart monitoring and access solutions for facility protection using biometric readers, facial recognition, turnstiles, CCTV, and thermal imaging.",
      brands: "HIKVISION, MEERAAG, SAFRAN, Motorola",
      features: [
        "Government and public institutions",
        "Corporate offices and banks",
        "Industrial and educational campuses",
      ],
      featureLabel: "Target Applications",
    },
    {
      title: "Communication & Office Automation",
      desc: "Professional communication systems and office management solutions enabling seamless coordination.",
      brands: "Icom, Hytera, Motorola",
      features: [
        "Two-way radios and dispatch communication",
        "Integrated automation and office management systems",
      ],
    },
  ];

  const whyChoose = [
    "Trusted by Iraq's leading enterprises and institutions",
    "Authorized distributor of premier global security and electronics brands",
    "Local installation, training, and 24/7 technical support",
    "Custom solutions for government, commercial, and industrial clients",
  ];

  return (
    <div className="bg-[#060B18] min-h-screen text-white font-sans antialiased">
      <Navbar />

      {/* Hero */}
      <section className="pt-25 pb-15 text-center">
        <div className="max-w-200 mx-auto px-6">
          <span className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold text-[#8BAAFE] bg-[rgba(79,123,247,.1)] border border-[rgba(79,123,247,.15)] mb-6">
            Solutions
          </span>
          <h1 className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] mb-5 tracking-[-0.03em]">
            Security &{" "}
            <span className="text-[#4F7BF7]">Office Electronics</span>
          </h1>
          <p className="text-[#8492af] text-base leading-[1.8] max-w-165 mx-auto">
            Complete hardware solutions for a safer, smarter workplace.
            Integrated security and office electronics protecting operations and
            enhancing workplace productivity.
          </p>
        </div>
      </section>

      <div className="max-w-280 mx-auto px-6 pb-20">
        {/* Solution Cards */}
        <section className="mb-16">
          <div className="flex flex-col gap-5">
            {sections.map((s, i) => (
              <div key={i} className={cardClass}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <span className="self-start py-1 px-3 rounded-md text-[11px] font-semibold text-[#8BAAFE] bg-[rgba(79,123,247,.1)] shrink-0">
                    {s.brands}
                  </span>
                </div>
                <p className="text-[#8492af] text-base leading-[1.7] mb-5">
                  {s.desc}
                </p>
                {s.featureLabel && (
                  <p className="text-[#5A6A8A] text-xs font-semibold mb-2.5 uppercase tracking-[0.06em]">
                    {s.featureLabel}
                  </p>
                )}
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                  {s.features.map((f, j) => (
                    <li key={j} className="text-[#9AABBF] text-base leading-[1.6] pl-5 relative">
                      <span className="absolute left-0 text-[#4F7BF7]">&#8226;</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-[-0.02em]">
            Why Choose Digital Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChoose.map((item, i) => (
              <div key={i} className={`${cardClass} flex items-center gap-4 p-5!`}>
                <div className="w-10 h-10 rounded-[10px] bg-[rgba(79,123,247,.1)] border border-[rgba(79,123,247,.15)] flex items-center justify-center text-[#4F7BF7] font-bold shrink-0">
                  &#10003;
                </div>
                <p className="text-[#9AABBF] text-base leading-normal">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <div className={`${cardClass} py-12! px-8!`}>
            <h2 className="text-2xl font-bold mb-3">
              Secure & Modernize Your Workplace
            </h2>
            <p className="text-[#8492af] text-base mb-7">
              Contact us for a consultation or on-site product demonstration.
            </p>
            <a
              href="mailto:info@diginfoiq.com"
              className="inline-block py-2.5 px-6 rounded-full text-[17px] font-semibold bg-[#0075FF] text-white no-underline shadow-[0_0_20px_rgba(79,123,247,.35),0_4px_12px_rgba(79,123,247,.2)] tracking-[0.01em]"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
