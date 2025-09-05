"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";
import { assets } from "../assets/assets";
import { navigationData } from "../data/navigationData";

const navItems = ["Markets", "Platforms", "Learning", "Company", "Support"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const closeTimeoutRef = useRef(null);
  const navContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        navContainerRef.current &&
        !navContainerRef.current.contains(e.target) &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target)
      ) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleNavItemEnter = (item) => {
    clearCloseTimeout();
    setOpenDropdown(item);
  };

  const handleNavAreaLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleDropdownEnter = () => {
    clearCloseTimeout();
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const renderDropdownContent = (menuName) => {
    const menuData = navigationData[menuName];
    if (!menuData) return null;

    return (
      <div className="fixed inset-x-0 z-40 top-16">
        <div className="py-1">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div
              className="dropdown-menu mx-auto w-full max-w-[1100px] mt-0 animate-fadeInDown rounded-2xl border border-white/10 bg-white/15 backdrop-blur-2xl shadow-xl overflow-hidden"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="px-4 sm:px-6 md:px-8 lg:px-10 py-2 max-h-[70vh] overflow-y-auto">
                {menuData.sections.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="mb-2 last:mb-0">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 pb-1 border-b border-gray-100">
                      {section.title}
                    </h3>
                    <div
                      className={`grid gap-2 ${
                        menuName === "Markets" && sectionIdx === 0
                          ? "grid-cols-3"
                          : menuName === "Platforms" && sectionIdx === 0
                          ? "grid-cols-2"
                          : menuName === "Platforms" && sectionIdx === 1
                          ? "grid-cols-2"
                          : menuName === "Platforms" && sectionIdx === 2
                          ? "grid-cols-3"
                          : menuName === "Company" && sectionIdx === 0
                          ? "grid-cols-3"
                          : menuName === "Company" && sectionIdx === 1
                          ? "grid-cols-2"
                          : menuName === "Company" && sectionIdx === 2
                          ? "grid-cols-3"
                          : "grid-cols-2"
                      } sm:grid-cols-2 md:grid-cols-3`}
                    >
                      {section.items.map((item, itemIdx) => (
                        <a
                          key={itemIdx}
                          href="#"
                          className="dropdown-item group p-4 block rounded-lg transition-all duration-200 hover:bg-white/10"
                          onClick={(e) => {
                            e.preventDefault();
                            console.log(`Navigating to: ${item.name}`);
                            setOpenDropdown(null);
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-xl flex-shrink-0 mt-0.5 opacity-70">
                              {item.icon}
                            </span>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-200 mb-2 text-sm leading-tight">
                                {item.name}
                              </h4>
                              <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav
      className={`text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(88,28,135,0.25)] bg-gradient-to-r from-purple-900/60 via-fuchsia-800/55 to-purple-950/60 ${
        isScrolled
          ? "bg-gradient-to-r from-purple-950/70 via-fuchsia-900/65 to-purple-950/75"
          : ""
      }`}
    >
      <div className="max-w-[95%] mx-auto sm:max-w-[90%] lg:max-w-[90%]">
        <div
          className="flex items-center justify-between"
          style={{ height: "72px" }}
        >
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <img
                src={assets.logo}
                alt="ThinkMarkets"
                className="h-10 sm:h-12 md:h-14 lg:h-26 w-auto"
                loading="lazy"
              />
            </a>
          </div>

          {/* Desktop Menu - unchanged */}
          <div className="hidden lg:block" ref={navContainerRef}>
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <div
                  key={item}
                  className="dropdown-container relative"
                  onMouseEnter={() => handleNavItemEnter(item)}
                  onMouseLeave={handleNavAreaLeave}
                >
                  <button className="nav-link flex items-center gap-2 px-4 text-sm font-medium text-white hover:text-purple-300 transition-colors duration-200">
                    {item}
                    {navigationData[item] && (
                      <ChevronDown
                        className={`w-4 transition-transform duration-200 ${
                          openDropdown === item ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Desktop - unchanged */}
          <div className="hidden lg:flex items-center justify-center gap-5">
            <button className="btn-secondary px-6 py-2 text-sm font-medium text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-200">
              Login
            </button>
            <button className="btn px-6 py-2 text-sm font-bold text-white rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/20 transition-all duration-200">
              Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Dropdown Menus - unchanged */}
      {!mobileOpen &&
        openDropdown &&
        navigationData[openDropdown] &&
        renderDropdownContent(openDropdown)}

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden mobile-menu animate-slideDown bg-gradient-to-b from-purple-950/90 via-fuchsia-900/85 to-purple-950/90 backdrop-blur-2xl border-t border-white/10"
          ref={mobileMenuRef}
        >
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              <div
                key={item}
                className="border-b border-gray-700/50 last:border-b-0"
              >
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item ? null : item)
                  }
                  className="flex items-center justify-between w-full px-4 py-4 text-base font-medium text-white hover:text-purple-200 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                  aria-expanded={openDropdown === item}
                  aria-haspopup="true"
                >
                  <span>{item}</span>
                  {navigationData[item] && (
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openDropdown === item ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {openDropdown === item && navigationData[item] && (
                  <div className="pl-4 pr-2 pb-4 space-y-2 bg-purple-900/20 rounded-lg mx-2 mb-2 max-h-[50vh] overflow-y-auto">
                    {navigationData[item].sections.map((section, sectionIdx) => {
                      const isLargeList = section.items.length > 6;
                      return (
                        <div key={sectionIdx} className="space-y-2">
                          <h3 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                            {section.title}
                          </h3>
                          <div
                            className={`${
                              isLargeList
                                ? "flex flex-col snap-y snap-mandatory scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-900/50"
                                : "space-y-2"
                            }`}
                            style={
                              isLargeList
                                ? { scrollSnapType: "y mandatory" }
                                : {}
                            }
                          >
                            {section.items.map((subItem, itemIdx) => (
                              <a
                                key={itemIdx}
                                href="#"
                                className={`flex items-center gap-3 p-3 text-sm rounded-lg hover:bg-white/10 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                  isLargeList ? "snap-start mb-2" : ""
                                }`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  console.log(`Navigating to: ${subItem.name}`);
                                  setMobileOpen(false);
                                  setOpenDropdown(null);
                                }}
                              >
                                <span className="text-lg text-purple-300 group-hover:text-purple-100 transition-colors duration-200">
                                  {subItem.icon}
                                </span>
                                <div className="flex-1">
                                  <div className="font-medium text-white group-hover:text-purple-200">
                                    {subItem.name}
                                  </div>
                                  {subItem.description && (
                                    <div className="text-xs text-gray-400 line-clamp-2">
                                      {subItem.description}
                                    </div>
                                  )}
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile buttons */}
            <div className="pt-4 space-y-3">
              <div className="flex gap-3">
                <button
                  className="flex-1 p-2 text-white hover:text-purple-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5 mx-auto" />
                </button>
                <button
                  className="flex-1 p-2 text-white hover:text-purple-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded"
                  aria-label="Change Language"
                >
                  <Globe className="w-5 h-5 mx-auto" />
                </button>
              </div>
              <button className="w-full px-4 py-3 text-sm font-medium text-white rounded-full border border-white/20 hover:bg-white/10 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                Login
              </button>
              <button className="w-full px-4 py-3 text-sm font-bold text-white rounded-full bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}