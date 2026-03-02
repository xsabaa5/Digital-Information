import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cardClass = "bg-[#0B1222] border border-[#1A2744] rounded-2xl p-7";

export default function Cybersecurity() {
  const capabilities = [
    {
      title: "24/7 SOC Monitoring & Threat Intelligence",
      desc: "Our Security Operations Center operates continuously, identifying and neutralizing threats instantly with proactive monitoring, threat hunting, and incident response.",
      features: [
        "Real-time monitoring & behavioral analysis",
        "Advanced threat intelligence (IoCs & anomaly detection)",
        "<15s average response time",
      ],
    },
    {
      title: "Zero-Day Exploit & Malware Protection",
      desc: "AI-driven analytics and quantum-resistant encryption block zero-day exploits, malware, and ransomware before they spread.",
      features: [
        "99.7% protection rate",
        "AI & machine-learning based threat prediction",
        "Automated patch and containment systems",
      ],
    },
    {
      title: "Multi-Layered Network & System Defense",
      desc: "Integration of firewalls, intrusion detection, DDoS protection, endpoint security, and data encryption.",
      features: [
        "Perimeter Defense: Next-gen firewalls, IDS, DDoS protection",
        "Threat Intelligence: Real-time analytics & behavioral tracking",
        "Endpoint Protection: Device control, advanced antivirus, encryption",
        "Data Protection: Backup, recovery, access control, audit trails",
      ],
    },
    {
      title: "Cyber Defense Consulting & Training",
      desc: "Security audits, risk assessments, compliance guidance, and customized cybersecurity training for IT and management staff.",
      features: [],
    },
  ];

  const whyChoose = [
    { stat: "2020", label: "Trusted cybersecurity provider in Iraq since" },
    { stat: "99.98%", label: "Threat detection rate" },
    {
      stat: "24/7",
      label: "Local technical support and fast on-site response",
    },
    {
      stat: "AI",
      label: "Driven security architecture for proactive protection",
    },
  ];

  return (
    <div className="bg-[#060B18] min-h-screen text-white font-sans antialiased">
      <Navbar />

      {/* Hero */}
      <section className="pt-25 pb-15 text-center">
        <div className="max-w-200 mx-auto px-6">
          <span
            className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold text-[#8BAAFE] bg-[rgba(79,123,247,0.1)] border border-[rgba(79,123,247,0.15)] mb-6"
          >
            Solutions
          </span>
          <h1
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] mb-5 tracking-[-0.03em]"
          >
            Enterprise-Grade{" "}
            <span className="text-[#4F7BF7]">Cybersecurity</span>
          </h1>
          <p
            className="text-[#8492af] text-base leading-[1.8] max-w-165 mx-auto"
          >
            Protect your digital infrastructure with AI-powered, multi-layered
            defense systems. Safeguarding Iraqi businesses, government entities,
            and institutions from cyber threats.
          </p>
        </div>
      </section>

      <div className="max-w-280 mx-auto px-6 pb-20">
        {/* Capabilities */}
        <section className="mb-16">
          <h2
            className="text-2xl font-bold mb-6 tracking-[-0.02em]"
          >
            Our Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {capabilities.map((cap, i) => (
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
                  className={`text-[#8492af] text-base leading-[1.7] ${cap.features.length ? "mb-4" : "mb-0"}`}
                >
                  {cap.desc}
                </p>
                {cap.features.length > 0 && (
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
            Why Choose Digital Information
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChoose.map((item, i) => (
              <div
                key={i}
                className={`${cardClass} text-center !p-6`}
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
            className={`${cardClass} py-12 px-8 !border-[rgba(79,123,247,0.2)]`}
          >
            <h2 className="text-2xl font-bold mb-3">
              Protect Your Business Today
            </h2>
            <p
              className="text-[#8492af] text-base mx-auto mb-7 max-w-120"
            >
              Cyber threats don't wait. Contact Digital Information to secure
              your infrastructure with advanced cybersecurity solutions.
            </p>
            <a
              href="mailto:info@diginfoiq.com"
              className="inline-block py-2.5 px-6 rounded-full text-[17px] font-semibold bg-[#0075FF] text-white no-underline shadow-[0_0_20px_rgba(79,123,247,0.35),0_4px_12px_rgba(79,123,247,0.2)] tracking-[0.01em]"
            >
              Contact Us
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
