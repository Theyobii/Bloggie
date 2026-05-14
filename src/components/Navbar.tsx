import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { label: 'Inicio', href: '/' },
  { label: 'Blog', href: '/#posts' },
  { label: 'Sobre Nosotros', href: '/about' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'glass shadow-lg shadow-brand-deep/50'
        : 'bg-transparent'
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" id="logo" className="group flex items-center gap-2">
            {/* Icon mark */}
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-highlight to-brand-highlight-300 shadow-md shadow-brand-highlight/25 transition-transform duration-300 group-hover:scale-110">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 text-white"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
              </svg>
            </div>

            {/* Wordmark */}
            <span className="text-2xl font-bold font-display text-gradient-brand tracking-tight">
              Bloggie
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-brand-pastel-500 transition-colors duration-200 hover:text-brand-pastel rounded-lg hover:bg-brand-deep-300/50"
              >
                {link.label}
              </a>
            ))}

          </div>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-btn"
            type="button"
            className="md:hidden flex flex-col items-center justify-center gap-1.5 rounded-lg p-2 text-brand-pastel-500 transition-colors hover:bg-brand-deep-300/50"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''
                }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
                }`}
            />
            <span
              className={`block h-0.5 w-5 rounded bg-current transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="glass mx-4 mb-4 rounded-xl p-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block rounded-lg px-4 py-2.5 text-sm font-medium text-brand-pastel-500 transition-colors hover:bg-brand-deep-300/50 hover:text-brand-pastel"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
