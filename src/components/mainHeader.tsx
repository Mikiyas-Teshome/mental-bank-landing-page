"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react"; // hamburger icon and close icon
import { useState } from "react";
import Logo from "./Icons/logo";
import Wrapper from "./Wrapper";

const MainHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Wrapper>
      <div className="container mx-auto w-full flex items-center justify-between lg:mx-9 xl:mx-[3.125rem] mt-7 pl-4 xl:pl-[2.8125rem] pr-[1.625rem] py-5 rounded-xl bg-white/25 backdrop-blur-[4.375rem]">
        {/* Logo */}
        <div>
          <Link href="/">
            <Logo fill="#0F0D15" width="47" height="40" className="" />
          </Link>
        </div>

        {/* Nav Links (hidden on small screens) */}
        <div className="hidden sm:flex items-center gap-4 lg:gap-8 xl:gap-12 text-sm md:text-lg xl:text-xl text-header">
          <Link href="/#home" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link
            href="/#features"
            className="hover:text-primary transition-colors">
            Feature
          </Link>
          <Link
            href="/#how-it-works"
            className="hover:text-primary transition-colors">
            How it works
          </Link>
          <Link href="/#faq" className="hover:text-primary transition-colors">
            FAQ
          </Link>
          <Link
            href="/#testimonials"
            className="hover:text-primary transition-colors">
            Testimonial
          </Link>
        </div>

        {/* Download button + hamburger menu */}
        <div className="flex items-center gap-3">
          <button className="bg-button px-4 py-1 md:px-4 md:py-2 text-white rounded-md cursor-pointer">
            Download
          </button>

          {/* Hamburger only on small screens */}
          <button
            className="sm:hidden text-header cursor-pointer"
            onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[6.5rem] left-0 right-0 bg-white/25 backdrop-blur-[4.375rem] rounded-b-xl py-4 px-4 text-header z-50">
          <div className="flex flex-col items-start gap-4 text-base">
            <Link
              href="/#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link
              href="/#features"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors">
              Feature
            </Link>
            <Link
              href="/#how-it-works"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors">
              How it works
            </Link>
            <Link
              href="/#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link
              href="/#testimonials"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-primary transition-colors">
              Testimonial
            </Link>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default MainHeader;
