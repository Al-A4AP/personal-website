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
  const [hovered, setHovered] = useState<string | null>(null);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0d0d0f] border-t border-white/[0.06] mt-20 overflow-hidden">
      {/* Background blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-red-500/5 blur-[80px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-8">
        {/* Ikon panah tengah - sebelum grid*/}
        <div className="flex justify-center mb-10">
          <img
            src={UpArrow}
            alt="Arrow Up"
            className="w-8 h-8 cursor-pointer animate-bounce"
            onClick={scrollToTop}
          />
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
              <li>SME Development Specialist</li>
              <li>Full Stack Web Developer</li>
            </ul>
          </div>

          {/* Untuk NAVIGATE*/}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-4 font-medium">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group inline-flex items-center gap-2"
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
                  onMouseEnter={() => setHovered(s.label)}
                  onMouseLeave={() => setHovered(null)}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-all duration-200 group w-fit"
                >
                  <span
                    className={`p-2 rounded-lg border transition-all duration-200 ${
                      hovered === s.label
                        ? "bg-red-400/10 border-red-400/30 text-red-300"
                        : "bg-white/[0.03] border-white/[0.06] text-gray-500"
                    }`}
                  >
                    <img src={s.img} alt={s.label} className="w-5 h-5" />
                  </span>
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
          <span className="text-gray-700">
            Built with React & Tailwind CSS 😵‍💫😵‍💫🤯
          </span>
        </div>
      </div>
    </footer>
  );
}
