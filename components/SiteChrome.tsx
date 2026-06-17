import Link from "next/link";
import { mainNav, packageGroups } from "@/lib/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-sacredBlack/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/55 bg-greenDeep text-xl font-bold text-gold shadow-glow">KZ</span>
          <span>
            <span className="block font-serif text-2xl font-bold leading-none text-ivory">Kadame Ziyarat</span>
            <span className="block text-xs font-semibold uppercase tracking-[.22em] text-gold/90">Sacred Journey</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold text-ivory/82 lg:flex">
          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-gold">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="rounded-full border border-gold/70 bg-gold px-4 py-2 text-sm font-extrabold text-sacredBlack transition hover:bg-ivory">
          Enquire Now
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="geometric border-t border-gold/20 bg-black px-4 py-14 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_2fr]">
        <div>
          <p className="font-arabic text-3xl text-gold">بِسْمِ ٱللَّٰهِ</p>
          <h2 className="mt-3 font-serif text-4xl font-bold text-ivory">Kadame Ziyarat</h2>
          <p className="mt-3 max-w-md text-ivory/70">Your Sacred Journey, Our Trusted Guidance. Hajj, Umrah and Iraq Ziyarat journeys from India with reverent planning and on ground care.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {packageGroups.map((group) => (
            <div key={group.title}>
              <h3 className="font-serif text-xl font-bold text-gold">{group.title}</h3>
              <div className="mt-4 space-y-2">
                {group.links.slice(0, 6).map((link) => (
                  <Link className="block text-sm text-ivory/70 transition hover:text-gold" href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-gold/15 pt-6 text-sm text-ivory/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Kadame Ziyarat. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/910000000000?text=Assalamu%20alaikum,%20I%20want%20to%20enquire%20about%20Kadame%20Ziyarat%20packages"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-gold/60 bg-greenDeep text-xl font-black text-gold shadow-glow transition hover:scale-105"
    >
      WA
    </a>
  );
}

export function EnquiryForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className={`grid gap-3 rounded-lg border border-gold/30 bg-black/50 p-4 ${compact ? "" : "sm:grid-cols-2"}`}>
      <input className="rounded-md border border-gold/20 bg-ivory px-4 py-3 text-sacredBlack outline-none focus:border-gold" placeholder="Name" />
      <input className="rounded-md border border-gold/20 bg-ivory px-4 py-3 text-sacredBlack outline-none focus:border-gold" placeholder="Phone" />
      <input className="rounded-md border border-gold/20 bg-ivory px-4 py-3 text-sacredBlack outline-none focus:border-gold" placeholder="Email" />
      <input className="rounded-md border border-gold/20 bg-ivory px-4 py-3 text-sacredBlack outline-none focus:border-gold" placeholder="City" />
      <select className="rounded-md border border-gold/20 bg-ivory px-4 py-3 text-sacredBlack outline-none focus:border-gold">
        <option>Umrah Packages</option>
        <option>Hajj Packages</option>
        <option>Iraq Ziyarat</option>
        <option>Ramadan Umrah</option>
        <option>Visa Services</option>
      </select>
      <textarea className="min-h-28 rounded-md border border-gold/20 bg-ivory px-4 py-3 text-sacredBlack outline-none focus:border-gold sm:col-span-2" placeholder="Message" />
      <button className="rounded-full bg-gold px-6 py-3 font-extrabold text-sacredBlack transition hover:bg-ivory sm:col-span-2" type="button">
        Begin Your Journey
      </button>
    </form>
  );
}
