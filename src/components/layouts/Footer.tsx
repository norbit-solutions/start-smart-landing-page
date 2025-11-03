import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-white text-blue-700 py-10 border-t border-blue-100"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-6 px-6">
        {/* Left section - Logo and contact */}
        <div className="flex flex-col items-start gap-3">
          <Image
            src="/images/Logo.png"
            width={160}
            height={100}
            alt="Logo"
            className="object-contain"
          />

          <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>contact@smartstart.com</span>
            </div>
          </div>
        </div>

        {/* Middle section - Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg mb-1">Quick Links</h4>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <Link href="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right section - Resources */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold text-lg mb-1">Resources</h4>
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <Link href="/faq" className="hover:text-blue-500">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-blue-500">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-blue-500 mt-8">
        © {new Date().getFullYear()} Smart Start. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
