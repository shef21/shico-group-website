import Link from "next/link";
import { brandName, coreServices } from "@/lib/brand";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-4">
              {brandName}
            </h3>
            <p className="text-white/80 text-base leading-relaxed">
              A single strategic partner that builds, optimizes, and scales
              businesses.
            </p>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-lg font-semibold tracking-tight mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {coreServices.map((service, index) => (
                <li key={index}>
                  <Link
                    href="#services"
                    className="text-white/80 hover:text-white hover:opacity-90 transition-all duration-150 text-base"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold tracking-tight mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#about"
                  className="text-white/80 hover:text-white hover:opacity-90 transition-all duration-150 text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-white/80 hover:text-white hover:opacity-90 transition-all duration-150 text-base"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-white/80 hover:text-white hover:opacity-90 transition-all duration-150 text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-8 border-t border-white/10 mb-8">
          <div className="flex flex-wrap gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:opacity-90 transition-all duration-150 text-base"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:opacity-90 transition-all duration-150 text-base"
            >
              Twitter
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white hover:opacity-90 transition-all duration-150 text-base"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-white/60 text-sm text-center">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
