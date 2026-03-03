import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const cardClass = "bg-[#0B1222] border border-[#1A2744] rounded-2xl p-7";

export default function ArchivingSystems() {
  const { t } = useTranslation();
  const capabilities = t("archiving.capabilities", { returnObjects: true });
  const mediaInfoFeatures = t("archiving.features", { returnObjects: true });
  const mediaInfoUsers = t("archiving.users", { returnObjects: true });
  const whyChoose = t("archiving.why", { returnObjects: true });

  return (
    <div className="bg-[#060B18] min-h-screen text-white font-sans antialiased">
      <Navbar />

      {/* Hero */}
      <section className="pt-25 pb-15 text-center">
        <div className="max-w-200 mx-auto px-6">
          <span
            className="inline-block py-1.5 px-4 rounded-full text-xs font-semibold text-[#8BAAFE] bg-[rgba(79,123,247,.1)] border border-[rgba(79,123,247,.15)] mb-6"
          >
            {t("archiving.badge")}
          </span>
          <h1
            className="text-[clamp(32px,4vw,48px)] font-bold leading-[1.2] mb-5 tracking-[-0.03em]"
          >
            {t("archiving.heading")}{" "}
            <span className="text-[#4F7BF7]">{t("archiving.headingHighlight")}</span>
          </h1>
          <p
            className="text-[#8492af] text-base leading-[1.8] max-w-165 mx-auto"
          >
            {t("archiving.subheading")}
          </p>
        </div>
      </section>

      <div className="max-w-280 mx-auto px-6 pb-20">
        {/* Key Capabilities */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 tracking-[-0.02em]">
            {t("archiving.keyCaps")}
          </h2>
          <div className={cardClass}>
            <ul className="list-none p-0 m-0 flex flex-col gap-4">
              {(Array.isArray(capabilities) ? capabilities : []).map((item, i) => (
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
            {t("archiving.mediaInfoTitle")}
          </h2>
          <p className="text-[#8492af] text-base leading-[1.7] mb-6">
            {t("archiving.mediaInfoDesc")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className={cardClass}>
              <h3 className="text-xl font-semibold mb-4 text-[#8BAAFE]">
                {t("archiving.featuresTitle")}
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {(Array.isArray(mediaInfoFeatures) ? mediaInfoFeatures : []).map((f, i) => (
                  <li key={i} className="text-[#9AABBF] text-base leading-[1.6] pl-5 relative">
                    <span className="absolute left-0 text-[#4F7BF7]">&#8226;</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className={cardClass}>
              <h3 className="text-xl font-semibold mb-4 text-[#8BAAFE]">
                {t("archiving.usersTitle")}
              </h3>
              <ul className="list-none p-0 m-0 flex flex-col gap-3">
                {(Array.isArray(mediaInfoUsers) ? mediaInfoUsers : []).map((u, i) => (
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
            {t("archiving.whyTitle")}
          </h2>
          <div
            className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-4"
          >
            {(Array.isArray(whyChoose) ? whyChoose : []).map((item, i) => (
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
              {t("archiving.ctaTitle")}
            </h2>
            <p className="text-[#8492af] text-base mb-7">
              {t("archiving.ctaDesc")}
            </p>
            <a
              href="mailto:info@diginfoiq.com"
              className="inline-block py-2.5 px-6 rounded-full text-[17px] font-semibold bg-[#0075FF] text-white no-underline shadow-[0_0_20px_rgba(79,123,247,.35),0_4px_12px_rgba(79,123,247,.2)] tracking-[0.01em]"
            >
              {t("archiving.ctaBtn")}
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
