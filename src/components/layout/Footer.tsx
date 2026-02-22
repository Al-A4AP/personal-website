import { useState } from "react";
import GithubImg from "../../assets/github.png";
import LinkedinImg from "../../assets/linkedin.png";
import EmailImg from "../../assets/email.png";
import UpArrow from "../../assets/up.svg";

type NavLink = {
  label: string;
  href: string;
};

type SocialLink = {
  label: string;
  href: string;
  img: string;
};

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Testimonials", href: "#testimonials" },
];

const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Al-A4AP", img: GithubImg },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammadalinarasa/",
    img: LinkedinImg,
  },
  { label: "Email", href: "mailto:aliputrasati@gmail.com", img: EmailImg },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative dark:bg-black border-t border-white/[0.06] mt-20 overflow-hidden">
      {/* Untuk Background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-500/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-8">
        {/* Ikon panah tengah - sebelum grid*/}
        <div className="flex justify-center mb-10">
          <a
            href="#Home"
            className="text-gray-600 dark:text-gray-300 hover:text-red-400 transition"
          >
            <img
              src={UpArrow}
              alt="Arrow Up"
              className="h-8 w-8 animate-bounce transition-all duration-300"
              onClick={scrollToTop}
            />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/[0.06]">
          {/* untuk Malik Kiri*/}
          <div>
            <h3 className="text-white font-semibold text-xl tracking-wide mb-3">
              M
              <span className="text-red-400 font-bold drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]">
                áli
              </span>
              k
            </h3>
            <ul className="text-sm text-gray-500 leading-relaxed space-y-1 max-w-[220px]">
              <li>Banking & Finance Professional</li>
              <li>MSMEs Development Specialist</li>
              <li>Full Stack Web Developer</li>
            </ul>
          </div>

          {/* Untuk NAVIGATE*/}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-4 font-medium">
              Navigate
            </p>
            <ul className="space-y-2 ">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-indigo-300 transition-colors duration-200 relative group inline-flex items-center gap-2"
                  >
                    <span className="w-0 h-px bg-red-400 group-hover:w-4 transition-all duration-300 inline-block" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Untuk CONNECT - Social Link*/}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-4 font-medium">
              Connect
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium rounded-md border border-white/[0.06] text-gray-400 px-4 py-2 hover:bg-indigo-300 hover:text-gray-900 transition duration-300 w-40 group"
                >
                  <img
                    src={s.img}
                    alt={s.label}
                    className="w-5 h-5 transition-all duration-300 group-hover:brightness-0"
                  />
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Untuk Footer Bawah*/}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <span>
            © {new Date().getFullYear()} M
            <span className="text-red-400 font-bold drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]">
              áli
            </span>
            k. All rights reserved.
          </span>
          <span className="text-gray-600">
            Built with React & Tailwind CSS 😵‍💫😵‍💫🤯
          </span>
        </div>
      </div>
    </footer>
  );
}
