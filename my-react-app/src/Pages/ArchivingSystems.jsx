import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cardClass = "bg-[#0B1222] border border-[#1A2744] rounded-2xl p-7";

export default function ArchivingSystems() {
  const capabilities = [
    "Securely store and organize documents and records",
    "Search and retrieve files instantly",
    "Integrate seamlessly with existing systems",
    "Ensure compliance with local and international standards",
    "Reduce physical storage and streamline operations",
  ];

  const mediaInfoFeatures = [
    "Interactive viewing and browsing with zoom/comparison tools",
    "Smart search and cataloging functionality",
    "Flexible integration with document management systems",
    "Secure access through DRM and user controls",
    "Customizable and scalable architecture",
  ];

  const mediaInfoUsers = [
    "Libraries and archives",
    "Publishers and educational institutions",
    "Decor and design industries",
    "Engineering and technical teams",
    "Scanning bureaus",
  ];

  const whyChoose = [
    "Tailored archiving software for local institutions",
    "Expert installation, training, and technical support",
    "Integration with ERP, workflow, and security systems",
    "Proven reliability with 500+ successful projects",
  ];

  return (
    <div className="bg-[#060B18] min-h-screen text-white font-sans antialiased">
      <Navbar />

      {/* Hero */}
      <section className="pt-25 pb-15 text-center">
        <div className="max-w-200 mx-auto px-6">
          <span
            className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold text-[#8BAAFE] bg-[rgba(79,123,247,.1)] border border-[rgba(79,123,247,.15)] mb-6"
          >
            Solutions
          </span>
          <h1
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] mb-5 tracking-[-0.03em]"
          >
            Secure, Smart, and Scalable{" "}
            <span className="text-[#4F7BF7]">Archiving Solutions</span>
          </h1>
          <p
            className="text-[#8492af] text-base leading-[1.8] max-w-165 mx-auto"
          >
            Enterprise-grade archiving software for Iraqi organizations to
            digitize, organize, and protect records. Serving government
            institutions, enterprises, banks, and educational organizations.
          </p>
        </div>
      </section>

      <div className="max-w-280 mx-auto px-6 pb-20">
        {/* Key Capabilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-[-0.02em]">
            Key Capabilities
          </h2>
          <div className={cardClass}>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {capabilities.map((item, i) => (
                <li key={i} className="text-[#9AABBF] text-base leading-[1.6] pl-6 relative">
                  <span className="absolute left-0 text-[#4F7BF7] font-bold">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* MediaINFO Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-2 tracking-[-0.02em]">
            MediaINFO Digital Library Software
          </h2>
          <p className="text-[#8492af] text-base leading-[1.7] mb-6">
            Powerful digital library and content management platform for storing,
            accessing, and sharing digitized assets. Used by libraries, publishers,
            universities, and archives globally.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className={cardClass}>
              <h3 className="text-xl font-semibold mb-4 text-[#8BAAFE]">
                Features
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {mediaInfoFeatures.map((f, i) => (
                  <li key={i} className="text-[#9AABBF] text-base leading-[1.6] pl-5 relative">
                    <span className="absolute left-0 text-[#4F7BF7]">&#8226;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="text-xl font-semibold mb-4 text-[#8BAAFE]">
                Who Uses MediaINFO
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {mediaInfoUsers.map((u, i) => (
                  <li key={i} className="text-[#9AABBF] text-base leading-[1.6] pl-5 relative">
                    <span className="absolute left-0 text-[#4F7BF7]">&#8226;</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Why Choose */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-[-0.02em]">
            Why Choose Digital Information
          </h2>
          <div
            className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4"
          >
            {whyChoose.map((item, i) => (
              <div key={i} className={`${cardClass} text-center p-6!`}>
                <div
                  className="w-12 h-12 rounded-xl bg-[rgba(79,123,247,.1)] border border-[rgba(79,123,247,.15)] flex items-center justify-center mx-auto mb-3.5 text-[#4F7BF7] text-xl font-bold"
                >
                  {i + 1}
                </div>
                <p className="text-[#9AABBF] text-base leading-[1.6]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center py-12">
          <div className={`${cardClass} py-12! px-8!`}>
            <h2 className="text-2xl font-bold mb-3">
              Ready to Digitize Your Records?
            </h2>
            <p className="text-[#8492af] text-base mb-7">
              Contact us for a consultation on archiving solutions tailored to
              your organization.
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
      <Footer />
    </div>
  );
}
