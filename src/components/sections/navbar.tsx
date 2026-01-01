"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ChevronDown, ArrowRight, Menu, X, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [emailHovered, setEmailHovered] = useState(false);
  const [phoneHovered, setPhoneHovered] = useState(false);
  const [showEmailPopup, setShowEmailPopup] = useState(false);
  const [showPhonePopup, setShowPhonePopup] = useState(false);
  const emailTimerRef = useRef<NodeJS.Timeout | null>(null);
  const phoneTimerRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const intersectingRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    return () => {
      if (emailTimerRef.current) clearTimeout(emailTimerRef.current);
      if (phoneTimerRef.current) clearTimeout(phoneTimerRef.current);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsContactOpen(false);
        setShowPhone(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectingRef.current.set(entry.target.id, entry.intersectionRatio);
        } else {
          intersectingRef.current.delete(entry.target.id);
        }
      });

      let maxRatio = -1;
      let mostVisibleSection = "";

      intersectingRef.current.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio;
          mostVisibleSection = id;
        }
      });

      if (mostVisibleSection) {
        setActiveSection(mostVisibleSection);
      }
    }, observerOptions);

    const sectionIds = ["hero", "experience", "about-me", "projects"];

    const setupObserver = () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });
    };

    setupObserver();
    const timers = [
      setTimeout(setupObserver, 500),
      setTimeout(setupObserver, 1500),
    ];

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "About Me", href: "#about-me" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "mailto:vsharm21@student.ubc.ca" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[9000] h-[72px] transition-all duration-500 flex items-center",
          isScrolled
            ? "glass-nav after:absolute after:bottom-0 after:left-10 after:right-10 after:h-[1px] after:bg-gradient-to-r after:from-transparent after:via-black/10 after:to-transparent"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-5 md:px-10">
          <Link
            href="/"
            className="group flex items-center h-10 border border-black bg-white overflow-hidden transition-all duration-500 ease-in-out rounded-full"
          >
            <div
              className="flex items-center justify-center h-full bg-white transition-all duration-500 ease-in-out flex-shrink-0 w-[38px]"
            >
              <motion.img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1766305382602.png?width=8000&height=8000&resize=contain"
                alt="Logo Icon"
                className="w-5 h-5 object-contain"
                animate={{ rotate: isScrolled ? 360 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>

            <div
              className={cn(
                "w-[1px] h-full bg-black transition-all duration-500 ease-in-out flex-shrink-0",
                isScrolled ? "opacity-0 w-0" : "opacity-100 w-[1px]"
              )}
            />

            <div
              className={cn(
                "flex items-center px-4 h-full border-r border-black bg-white transition-all duration-500 ease-in-out",
                isScrolled ? "max-w-0 px-0 opacity-0 border-r-0" : "max-w-[200px] opacity-100"
              )}
            >
              <span className="font-sans font-bold text-[14px] tracking-widest uppercase">VARUN</span>
            </div>

            <div
              className={cn(
                "flex items-center px-4 h-full bg-white transition-all duration-500 ease-in-out",
                isScrolled ? "max-w-0 px-0 opacity-0" : "max-w-[100px] opacity-100"
              )}
            >
              <span className="font-sans font-light text-[14px] tracking-widest uppercase">SHARMA</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center">
            <div className="flex gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                if (link.name === "Contact") {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setIsContactOpen(true)}
                      onMouseLeave={() => {
                        setIsContactOpen(false);
                        setShowPhone(false);
                      }}
                      ref={dropdownRef}
                    >
                      <button
                        onClick={() => setIsContactOpen(!isContactOpen)}
                        className={cn(
                          "flex items-center h-10 px-6 border border-black font-mono text-[11px] font-medium uppercase tracking-[0.1em] transition-all rounded-full",
                          isContactOpen
                            ? "bg-black text-white"
                            : "hover:bg-black hover:text-white"
                        )}
                      >
                        {link.name}
                        <ChevronDown className={cn("ml-2 w-3 h-3 transition-transform duration-300", isContactOpen && "rotate-180")} />
                      </button>

                      <AnimatePresence>
                        {isContactOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-0 mt-2 w-48 bg-white border border-black rounded-2xl shadow-xl z-[10000]"
                          >
                            <div className="p-2 flex flex-col gap-1">
                              <div className="relative">
                                <a
                                  href="mailto:vsharm21@student.ubc.ca"
                                  onMouseEnter={() => {
                                    setEmailHovered(true);
                                    emailTimerRef.current = setTimeout(() => {
                                      setShowEmailPopup(true);
                                    }, 1000);
                                  }}
                                  onMouseLeave={() => {
                                    setEmailHovered(false);
                                    setShowEmailPopup(false);
                                    if (emailTimerRef.current) clearTimeout(emailTimerRef.current);
                                  }}
                                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-black hover:text-white transition-colors group/item min-w-[180px]"
                                >
                                  <Mail className="w-4 h-4 flex-shrink-0" />
                                  <span className="font-mono text-[10px] uppercase tracking-wider truncate">
                                    {emailHovered ? "vsharm21@student.ubc.ca" : "Email"}
                                  </span>
                                </a>
                                <AnimatePresence>
                                  {showEmailPopup && (
                                    <motion.a
                                      href="mailto:vsharm21@student.ubc.ca"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -10 }}
                                      onMouseEnter={() => {
                                        setEmailHovered(true);
                                        setShowEmailPopup(true);
                                        if (emailTimerRef.current) clearTimeout(emailTimerRef.current);
                                      }}
                                      onMouseLeave={() => {
                                        setEmailHovered(false);
                                        setShowEmailPopup(false);
                                      }}
                                      className="absolute right-[calc(100%-4px)] top-1/2 -translate-y-1/2 px-4 py-3 bg-black text-white text-[10px] uppercase tracking-widest font-mono rounded-xl shadow-lg flex items-center gap-2 whitespace-nowrap z-[10001]"
                                    >
                                      <ArrowRight className="w-3 h-3 rotate-180" /> Message
                                    </motion.a>
                                  )}
                                </AnimatePresence>
                              </div>

                              <div className="relative">
                                <a
                                  href="tel:+15877039550"
                                  onMouseEnter={() => {
                                    setPhoneHovered(true);
                                    phoneTimerRef.current = setTimeout(() => {
                                      setShowPhonePopup(true);
                                    }, 1000);
                                  }}
                                  onMouseLeave={() => {
                                    setPhoneHovered(false);
                                    setShowPhonePopup(false);
                                    if (phoneTimerRef.current) clearTimeout(phoneTimerRef.current);
                                  }}
                                  className={cn(
                                    "flex items-center gap-3 px-4 py-3 w-full rounded-xl transition-all duration-300",
                                    phoneHovered ? "bg-black text-white" : "hover:bg-black hover:text-white"
                                  )}
                                >
                                  <Phone className="w-4 h-4 flex-shrink-0" />
                                  <span className="font-mono text-[10px] uppercase tracking-wider whitespace-nowrap">
                                    {phoneHovered ? "+1 (587) 703-9550" : "Phone"}
                                  </span>
                                </a>
                                <AnimatePresence>
                                  {showPhonePopup && (
                                    <motion.a
                                      href="tel:+15877039550"
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      exit={{ opacity: 0, x: -10 }}
                                      onMouseEnter={() => {
                                        setPhoneHovered(true);
                                        setShowPhonePopup(true);
                                        if (phoneTimerRef.current) clearTimeout(phoneTimerRef.current);
                                      }}
                                      onMouseLeave={() => {
                                        setPhoneHovered(false);
                                        setShowPhonePopup(false);
                                      }}
                                      className="absolute right-[calc(100%-4px)] top-1/2 -translate-y-1/2 px-4 py-3 bg-black text-white text-[10px] uppercase tracking-widest font-mono rounded-xl shadow-lg flex items-center gap-2 whitespace-nowrap z-[10001]"
                                    >
                                      <ArrowRight className="w-3 h-3 rotate-180" /> Call
                                    </motion.a>
                                  )}
                                </AnimatePresence>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <div key={link.name} className="relative group/item">
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center h-10 px-6 border border-black font-mono text-[11px] font-medium uppercase tracking-[0.1em] transition-all rounded-full",
                        isActive
                          ? "bg-black text-white"
                          : "hover:bg-black hover:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 h-10 w-10 border border-black bg-white flex items-center justify-center transition-colors active:bg-black/10 rounded-full"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {mounted && createPortal(
        <div
          className={cn(
            "fixed inset-0 top-[72px] bg-white z-[8999] transition-transform duration-500 ease-in-out lg:hidden",
            isMobileMenuOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
          <div className="container mx-auto px-5 py-8 flex flex-col gap-4">
            {navLinks.map((link) => {
              if (link.name === "Contact") {
                return (
                  <div key={link.name} className="flex flex-col border-b border-black/10 pb-4">
                    <button
                      onClick={() => setIsContactOpen(!isContactOpen)}
                      className="flex items-center justify-between w-full py-2 -my-2 font-mono text-[13px] uppercase tracking-[0.1em] transition-transform active:bg-black/5 rounded-lg"
                    >
                      {link.name}
                      <ChevronDown className={cn("w-5 h-5 transition-transform", isContactOpen && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {isContactOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="flex flex-col gap-3 mt-4 pl-4 overflow-hidden"
                        >
                          <a
                            href="mailto:vsharm21@student.ubc.ca"
                            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-black/60 hover:text-black transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            vsharm21@student.ubc.ca
                          </a>
                          <a
                            href="tel:+15877039550"
                            className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider text-black/60 hover:text-black transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5" />
                            +1 (587) 703-9550
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <div key={link.name} className="flex flex-col border-b border-black/10 pb-4">
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between font-mono text-[13px] uppercase tracking-[0.1em] hover:translate-x-1 transition-transform"
                  >
                    {link.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Navbar;
