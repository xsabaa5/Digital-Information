import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cardClass = "bg-[#0B1222] border border-[#1A2744] rounded-2xl p-7";

export default function ERPDigital() {
  const erpModules = [
    "Financial, HR, supply chain, and operational management",
    "Customizable to fit organizational workflow and goals",
    "Scalable and adaptable for growing businesses",
    "Integration-ready with third-party and legacy systems",
    "Available in on-premises or cloud deployments",
  ];

  const transformationServices = [
    "Business process re-engineering",
    "System integration and workflow automation",
    "Data migration and analytics enablement",
    "Employee training and local support",
  ];

  const torchFeatures = [
    "Unified dashboard for all operations",
    "AI-driven reporting and analytics",
    "Multi-language and multi-currency support",
    "Cloud-based access with advanced data security",
    "Continuous updates and dedicated technical support",
  ];

  const whyChoose = [
    { title: "Proven Success", desc: "ERP implementations across Iraq and the region" },
    { title: "Local Presence", desc: "On-ground support from Baghdad to Basra and Erbil" },
    { title: "Deep Expertise", desc: "Digital transformation and enterprise software specialists" },
    { title: "Partnership Approach", desc: "From consultation through post-deployment support" },
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
            ERP &{" "}
            <span className="text-[#4F7BF7]">Digital Transformation</span>{" "}
            Software
          </h1>
          <p
            className="text-[#8492af] text-base leading-[1.8] max-w-165 mx-auto"
          >
            Streamline your operations and accelerate growth with advanced ERP
            and automation solutions — including our in-house Torch ERP platform.
          </p>
        </div>
      </section>

      <div className="max-w-280 mx-auto px-6 pb-20">
        {/* ERP Modules */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-[-0.02em]">
            Comprehensive ERP Modules
          </h2>
          <div className={cardClass}>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {erpModules.map((item, i) => (
                <li key={i} className="text-[#9AABBF] text-base leading-[1.6] pl-6 relative">
                  <span className="absolute left-0 text-[#4F7BF7] font-bold">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Two columns: Transformation + Torch */}
        <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className={cardClass}>
            <h3 className="text-xl font-semibold mb-4">
              Digital Transformation Services
            </h3>
            <p className="text-[#8492af] text-base leading-[1.7] mb-5">
              More than software — we enable organizational transformation.
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {transformationServices.map((s, i) => (
                <li key={i} className="text-[#9AABBF] text-base leading-[1.6] pl-5 relative">
                  <span className="absolute left-0 text-[#4F7BF7]">&#8226;</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className={`${cardClass} border border-[rgba(79,123,247,0.25)]`}>
            <span
              className="inline-block py-1 px-3 rounded-md text-[11px] font-semibold text-[#8BAAFE] bg-[rgba(79,123,247,0.1)] mb-3.5"
            >
              Flagship Product
            </span>
            <h3 className="text-xl font-semibold mb-4">
              Torch ERP Platform
            </h3>
            <p className="text-[#8492af] text-base leading-[1.7] mb-5">
              Our in-house enterprise platform designed for businesses in Iraq
              and the Middle East.
            </p>
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              {torchFeatures.map((f, i) => (
                <li key={i} className="text-[#9AABBF] text-base leading-[1.6] pl-5 relative">
                  <span className="absolute left-0 text-[#4F7BF7]">&#8226;</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Why Choose */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-[-0.02em]">
            Why Choose Digital Information
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyChoose.map((item, i) => (
              <div key={i} className={`${cardClass} text-center p-6`}>
                <div
                  className="w-12 h-12 rounded-xl bg-[rgba(79,123,247,0.1)] border border-[rgba(79,123,247,0.15)] flex items-center justify-center mx-auto mb-3.5 text-[#4F7BF7] text-xl font-bold"
                >
                  {i + 1}
                </div>
                <h4 className="text-xl font-semibold mb-1.5">
                  {item.title}
                </h4>
                <p className="text-[#8492af] text-base leading-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <div className={`${cardClass} py-12 px-8`}>
            <h2 className="text-2xl font-bold mb-3">
              Ready to Transform Your Business?
            </h2>
            <p className="text-[#8492af] text-base mb-7">
              From Baghdad to Basra and Erbil — serving Iraq's growing business
              ecosystem.
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
