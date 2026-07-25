import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const socialProfiles = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
];

import { memo } from 'react';

function FooterComponent() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950/95 py-14 text-slate-200 shadow-soft">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="space-y-8">
          <Logo />
          <p className="max-w-xl leading-7 text-slate-400">
            Tukku’s Kitchen delivers premium vegetarian dining with curated flavors, elegant ambience, and exceptional service.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] bg-white/5 p-5 shadow-glass backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Address</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">Tukku's Kitchen, Near Sakshi Hotel, Katni Road, Maihar, Maihar, Madhya Pradesh, India, 485771</p>
            </div>
            <div className="rounded-[28px] bg-white/5 p-5 shadow-glass backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-secondary">Contact</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">+918962249989</p>
              <p className="mt-2 text-sm leading-7 text-slate-300">tukkuskitchen@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary">Quick Links</p>
            <div className="grid gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-sm text-slate-300 transition duration-300 hover:text-white hover:translate-x-1"
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-secondary">Follow Us</p>
            <div className="flex flex-wrap gap-3">
              {socialProfiles.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition duration-300 hover:-translate-y-1 hover:bg-secondary hover:text-white"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-slate-800 px-4 pt-6 text-sm text-slate-500 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Tukku’s Kitchen. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a href="#privacy" className="transition duration-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#terms" className="transition duration-300 hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
