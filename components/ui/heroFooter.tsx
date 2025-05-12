"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { FaUpwork, FaXTwitter } from "react-icons/fa6";

interface FooterNavItem {
  label: string;
  href: string;
}

interface SocialLink {
  icon: React.ElementType;
  href: string;
  label: string;
}

const footerNavItems: FooterNavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Project",
    href: "/project",
  },
  {
    label: "Blogs",
    href: "/blog",
  },
];

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    href: "https://github.com/imPiyushkashyap",
    label: "GitHub",
  },
  {
    icon: FaXTwitter,
    href: "https://x.com/PiyushK44808060",
    label: "Twitter",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
    label: "LinkedIn",
  },
  {
    icon: FaUpwork,
    href: "https://www.upwork.com/freelancers/~01aaf78f140ef80cb0?mp_source=share",
    label: "Upwork",
  },

  {
    icon: Mail,
    href: "mailto:piyush.kashyap.in@gmail.com",
    label: "Email",
  },
];

export function HeroFooter() {
  return (
    <footer className="w-full">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm md:justify-start">
            {footerNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon size={20} />
                </Link>
              );
            })}
          </div>
        </div>
        {/* Copyright */}
        <div className="mt-8  pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Piyush K. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default HeroFooter;
