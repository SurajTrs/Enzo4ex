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
  // Generate footer sections from navigationData
  const getFooterSections = () => {
    const sections = [];

    // Markets section
    if (navigationData.Markets) {
      sections.push({
        title: "Markets",
        links: navigationData.Markets.sections.flatMap((section) =>
          section.items.map((item) => ({ label: item.name, to: fallbackTo('markets', item.name, item.link) }))
        ),
      });
    }

    // Platforms section
    if (navigationData.Platforms) {
      sections.push({
        title: "Platforms",
        links: navigationData.Platforms.sections.flatMap((section) =>
          section.items.map((item) => ({ label: item.name, to: fallbackTo('platforms', item.name, item.link) }))
        ),
      });
    }

    // Learning section
    if (navigationData.Learning) {
      sections.push({
        title: "Learning",
        links: navigationData.Learning.sections
          .flatMap((section) => section.items.map((item) => ({ label: item.name, to: fallbackTo('learning', item.name, item.link || '/help') })))
          .concat([
            { label: "Trading guides", to: "/help" },
            { label: "Market analysis", to: "/market-news" },
            { label: "Educational videos", to: "/help" },
          ]),
      });
    }

    // Company section
    if (navigationData.Company) {
      sections.push({
        title: "Company",
        links: navigationData.Company.sections.flatMap((section) =>
          section.items.map((item) => ({ label: item.name, to: fallbackTo('company', item.name, item.link) }))
        ),
      });
    }

    // Support section
    if (navigationData.Support) {
      sections.push({
        title: "Support",
        links: navigationData.Support.sections.flatMap((section) =>
          section.items.map((item) => ({ label: item.name, to: fallbackTo('support', item.name, item.link || '/support') }))
        ),
      });
    }

    // Removed Legal section per request

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
              <img
                src={assets.logo}
                alt="Enzo4ex"
                className="h-12 md:h-14 lg:h-25 w-35"
              />
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
        <div className="mt-8 max-w-[90%] mx-auto">
          <p className="text-center text-white mb-4">Payment methods</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-1/10 border border-white/9 rounded-lg flex justify-center items-center">
              <img
                src={assets.bankwire}
                alt="Bankwire"
                className=" px-2 py-5 rounded-lg"
              />
            </div>
            <div className="w-1/10 border border-white/9 rounded-lg flex justify-center items-center">
              <img
                src={assets.visa}
                alt="Visa"
                className="  px-2 py-5 rounded-lg"
              />
            </div>
            <div className="w-1/10 border border-white/9 rounded-lg flex justify-center items-center">
              <img
                src={assets.masterCard}
                alt="MasterCard"
                className="  px-2 py-5 rounded-lg"
              />
            </div>
            <div className="w-1/10 border border-white/9 rounded-lg flex justify-center items-center">
              <img
                src={assets.skrill}
                alt="Skrill"
                className="  px-2 py-5 rounded-lg"
              />
            </div>
            <div className="w-1/10 border border-white/9 rounded-lg flex justify-center items-center">
              <img
                src={assets.neteller}
                alt="Neteller"
                className="  px-2 py-5 rounded-lg"
              />
            </div>
            <div className="w-1/10 border border-white/9 rounded-lg flex justify-center items-center">
              <img
                src={assets.swift}
                alt="Swift"
                className="  px-2 py-5 rounded-lg"
              />
            </div>
            <div className="w-1/10 border border-white/9 rounded-lg flex justify-center items-center">
              <img
                src={assets.applePay}
                alt="Apple Pay"
                className="  px-2 py-5 rounded-lg"
              />
            </div>
            <div className="w-1/10 border border-white/9 rounded-lg flex justify-center items-center">
              <img
                src={assets.gpay}
                alt="Google Pay"
                className="  px-2 py-5 rounded-lg"
              />
            </div>
            <div className="w-1/10 border border-white/9 rounded-lg flex justify-center items-center">
              <img
                src={assets.crypto}
                alt="Crypto"
                className="  px-2 py-5 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Footer Links - Dynamic from navigationData */}
        <div className="mt-10 border-t border-white/10 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-sm">
              {footerSections.map((section, index) => (
                <nav key={index} aria-label={section.title} className="space-y-3">
                  <h3 className="font-semibold text-white/90 text-xs uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.to}
                          className="text-white/80 hover:text-white transition-colors duration-150 text-sm underline-offset-4 decoration-white/20 hover:decoration-white"
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
            Financial Services Authority, Firm Reference Number SD060. Registered
            address: CT House, Office 9B, Providence, Mahe, Seychelles. Company
            number 8424818-1. Clients will engage with services offered by Enzo4ex
            Global Markets Int Limited, unless otherwise stated, please see the
            legal documents, including the Terms & Conditions for specific
            details.
          </p>

          <p>
            Enzo4ex Global Markets (STL) Limited is registered in Saint Lucia,
            registration number: 2023-00272. Registered address: Ground Floor, the
            Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia.
            Please see the legal documents, including the Terms & Conditions for
            specific details.
          </p>

          <p>
            Enzo4ex (Payments) Limited is registered in the United Kingdom,
            Company number 10537331. Registered address: G07, 35 New Broad St,
            London EC2M 1NH.
          </p>

          <p>
            Enzo4ex UK Ltd is registered in the United Kingdom, Company number
            11054653. Registered address: G07, 35 New Broad St, London EC2M 1NH.
          </p>

          <p>
            The information on this site is not directed to residents of the
            United States, Canada, Bermuda, the European Union, Australia, United
            Kingdom, Russia and Japan and is not intended for distribution to, or
            use by, any person in any country or jurisdiction where such
            distribution or use would be contrary to local law or regulation.
          </p>

          <p>
            2025 This website and technology/platform services are owned and
            operated by TF Global Markets (Aust) Pty Limited, with Registered
            address: Level 14, 333 Collins Street, Melbourne VIC Australia 3000.
            ABN: 69158361561 (part of the Enzo4ex Group).
          </p>
        </div>
      </div>
    </footer>
  );
}
