import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { navigationData } from "../data/navigationData";
import footerBg from "../assets/footer1.png";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaDiscord,
  FaTelegramPlane,
} from "react-icons/fa";

export default function Footer() {
  const slugify = (s) => s.toLowerCase().replace(/\s+/g, '-');
  const fallbackTo = (sectionKey, name, explicit) =>
    explicit || `/${sectionKey.toLowerCase()}/${slugify(name)}`;
  const getFooterSections = () => {
    const sections = [];

    if (navigationData.Markets) {
      sections.push({
        title: "Markets",
        links: navigationData.Markets.sections.flatMap((section) =>
          section.items
            .filter((item) =>
              ![
                'ETFs',
                'Futures',
                'Gold',
                'Synthetic indices',
                'Classic leverage',
                'Dynamic leverage tiers',
              ].includes(item.name)
            )
            .map((item) => ({ label: item.name, to: fallbackTo('markets', item.name, item.link) }))
        ),
      });

      // Premium Markets (manual entries)
      sections.push({
        title: "Premium Markets",
        links: [
          { label: "ETFs", to: "/etf" },
          { label: "Futures", to: "/futures" },
          { label: "Gold", to: "/gold" },
          { label: "Synthetic indices", to: "/synthetic-indices" },
          { label: "Classic leverage", to: "/classic-leverage" },
          { label: "Dynamic leverage tiers", to: "/dynamic-leverage" },
        ],
      });
    }

    if (navigationData.Platforms) {
      sections.push({
        title: "Platforms",
        links: navigationData.Platforms.sections.flatMap((section) =>
          section.items
            .filter((item) =>
              ![
                'Account types',
                'Deposit & withdraw',
                'Dynamic leverage',
                'Demo account',
              ].includes(item.name)
            )
            .map((item) => ({ label: item.name, to: fallbackTo('platforms', item.name, item.link) }))
        ),
      });

      // Premium Platforms (manual entries)
      sections.push({
        title: "Premium Platforms",
        links: [
          { label: "Account types", to: "/account-types" },
          { label: "Deposit & withdraw", to: "/deposit-withdraw" },
          { label: "Dynamic leverage", to: "/dynamic-leverage" },
          { label: "Demo account", to: "/demo-account" },
        ],
      });
    }

    if (navigationData.Learning) {
      sections.push({
        title: "Learning",
        links: navigationData.Learning.sections
          .flatMap((section) => section.items.map((item) => ({ label: item.name, to: fallbackTo('learning', item.name, item.link || '/help') })))
          .concat([
            { label: "Market analysis", to: "/market-news" },
          ]),
      });
    }

    if (navigationData.Company) {
      sections.push({
        title: "Company",
        links: navigationData.Company.sections.flatMap((section) =>
          section.items.map((item) => ({ label: item.name, to: fallbackTo('company', item.name, item.link) }))
        ),
      });
    }

    if (navigationData.Support) {
      sections.push({
        title: "Support",
        links: navigationData.Support.sections.flatMap((section) =>
          section.items.map((item) => ({ label: item.name, to: fallbackTo('support', item.name, item.link || '/support') }))
        ),
      });
    }


    return sections;
  };

  const footerSections = getFooterSections();

  return (
    <footer className="relative text-white py-12 border-t border-white/10 overflow-hidden rounded-t-3xl md:rounded-t-[64px]">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img src={footerBg} alt="" className="w-full h-full object-cover" style={{filter: 'blur(18px)', transform: 'scale(1.1)'}} />
      </div>

      <div className="relative">
        {/* Top Section */}
        <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-600">
            {/* Logo */}
            <div className="flex items-center">
              <div className="bg-white rounded-xl p-2 shadow-sm">
                <img
                  src={assets.logo}
                  alt="Enzo4ex"
                  className="h-12 md:h-14 lg:h-25 w-35 object-contain"
                />
              </div>
            </div>

            <p className="text-white text-md text-center lg:text-left">
              Need to get in touch? Contact our client support team 24/7 via{" "}
              <Link
                to="/contact"
                className="text-white hover:text-purple-400 underline transition-colors duration-200"
              >
                live chat
              </Link>{" "}
              .
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-lg">
              <a
                href="#"
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                <FaDiscord />
              </a>
              <a
                href="#"
                className="text-white hover:text-purple-300 transition-colors duration-200"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <section aria-labelledby="payment-methods-heading" className="mt-8 max-w-[90%] mx-auto">
          <h2 id="payment-methods-heading" className="text-center text-white mb-3 text-xs font-semibold uppercase tracking-[0.22em]">Payment methods</h2>
          <div className="mx-auto mb-6 h-px w-28 bg-white/20" />
          {(() => {
            const paymentMethods = [
              { src: assets.bankwire, alt: 'Bank Wire' },
              { src: assets.visa, alt: 'Visa' },
              { src: assets.masterCard, alt: 'MasterCard' },
              { src: assets.skrill, alt: 'Skrill' },
              { src: assets.neteller, alt: 'Neteller' },
              { src: assets.swift, alt: 'SWIFT' },
              { src: assets.applePay, alt: 'Apple Pay' },
              { src: assets.gpay, alt: 'Google Pay' },
              { src: assets.crypto, alt: 'Crypto' },
            ];
            return (
              <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md p-3 sm:p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 sm:gap-4">
                  {paymentMethods.map((m, i) => (
                    <li key={i} className="list-none">
                      <div
                        className="h-16 md:h-20 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shadow-sm transition duration-200 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_0_3px_rgba(168,85,247,0.35),0_8px_20px_rgba(168,85,247,0.15)] focus-within:ring-2 focus-within:ring-purple-400/40"
                        title={m.alt}
                      >
                        <img
                          src={m.src}
                          alt={m.alt}
                          loading="lazy"
                          className="max-h-10 md:max-h-12 object-contain opacity-100 contrast-110 brightness-105 drop-shadow-sm"
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })()}
        </section>

        {/* Footer Links - Dynamic from navigationData */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-x-8 gap-y-10 items-stretch text-sm">
              {footerSections.map((section, index) => (
                <nav key={index} aria-label={section.title} className="h-full flex flex-col">
                  <h3 className="mb-3 font-semibold text-white/90 text-xs uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-2 leading-relaxed">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.to}
                          className="text-white/80 hover:text-white transition-colors duration-150 text-sm underline-offset-4 decoration-white/20 hover:decoration-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>

        {/* Risk Warning + Legal Disclaimers */}
        <div className="mt-8 border-t border-white/10 pt-6 text-xs text-white/80 space-y-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>
            <span className="font-semibold">Risk Warning:</span> Derivative
            products are leveraged products and can result in losses that exceed
            initial deposits. Please ensure you fully understand the risks and
            take care to manage your exposure and seek independent advice if
            necessary.
          </p>

          <p>
            Enzo4ex Group is a global financial services provider, Enzo4ex is a
            registered trademark of the group, that operates among various
            entities. For more information please visit the About Us section.
          </p>

          <p>
  Enzo4ex Global Markets Int Limited is authorised and regulated by the
  Financial Services Authority. Clients will engage with services offered by Enzo4ex
  Global Markets Int Limited, unless otherwise stated, please see the
  legal documents, including the Terms & Conditions for specific
  details.
</p>

          <p>
          The information on this site is not directed to residents of the United States, Canada, Bermuda, the European Union, Australia, United Kingdom, Russia and Japan and is not intended for distribution to, or use by, any person in any country or jurisdiction where such distribution or use would be contrary to local law or regulation.
          </p>

          <p>
          2025 This website and technology/platform services are owned and operated by Enzo4ex Group.
          </p>
        </div>
      </div>
    </footer>
  );
}
