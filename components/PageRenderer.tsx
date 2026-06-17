import Link from "next/link";
import { EnquiryForm } from "@/components/SiteChrome";
import { allPages, blogPosts, faqItems, packageGroups, type SitePage } from "@/lib/content";
import { breadcrumbSchema, faqSchema, productSchema } from "@/lib/schema";

export function PageRenderer({ page }: { page: SitePage | undefined }) {
  if (!page) return null;
  const isHome = page.slug === "";
  const related = page.relatedSlugs?.map((slug) => allPages.find((item) => item.slug === slug)).filter(Boolean) as SitePage[] | undefined;

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(page)) }} />
      {page.kind === "package" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(page)) }} />}
      {page.kind === "faq" && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <Hero page={page} isHome={isHome} />
      {!isHome && <Breadcrumbs page={page} />}
      <Content page={page} />
      {page.kind === "faq" && <FAQSection />}
      {page.kind === "blog" && <BlogGrid />}
      {page.kind === "contact" && <ContactPanel />}
      {page.kind === "testimonials" && <Testimonials />}
      {related && related.length > 0 && <Related pages={related} />}
      <CTA />
    </main>
  );
}

function Hero({ page, isHome }: { page: SitePage; isHome: boolean }) {
  const immersive = page.slug.includes("iraq-ziyarat") || isHome;
  return (
    <section className={`geometric relative ${immersive ? "bg-shrine" : "bg-[linear-gradient(135deg,#111,#1A3C2A_70%,#111)]"} px-4 py-20 sm:px-6 lg:px-8 lg:py-28`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(197,160,40,.28),transparent_24%),radial-gradient(circle_at_18%_82%,rgba(107,29,42,.28),transparent_26%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_.95fr]">
        <div className="reveal">
          <p className="font-arabic text-4xl text-gold sm:text-5xl">بِسْمِ ٱللَّٰهِ</p>
          <p className="mt-5 text-sm font-extrabold uppercase tracking-[.28em] text-gold/90">Your Sacred Journey, Our Trusted Guidance</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-bold leading-[.98] text-ivory sm:text-7xl">
            {page.h1}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/78">{page.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-gold px-6 py-3 font-extrabold text-sacredBlack transition hover:bg-ivory">
              Begin Your Journey
            </Link>
            <Link href="/faq" className="rounded-full border border-gold/60 px-6 py-3 font-extrabold text-gold transition hover:bg-gold hover:text-sacredBlack">
              Enquire Now
            </Link>
          </div>
        </div>
        <div className="float-soft hidden lg:block">
          <div className="arch min-h-[520px] border border-gold/45 bg-[linear-gradient(rgba(17,17,17,.16),rgba(17,17,17,.82)),url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1100&q=80')] bg-cover bg-center shadow-glow" />
        </div>
      </div>
    </section>
  );
}

function Breadcrumbs({ page }: { page: SitePage }) {
  const parts = page.slug.split("/");
  return (
    <nav className="mx-auto max-w-7xl px-4 pt-8 text-sm text-ivory/55 sm:px-6 lg:px-8" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-gold">Home</Link>
      {parts.map((part, index) => {
        const href = `/${parts.slice(0, index + 1).join("/")}`;
        return (
          <span key={href}>
            <span className="mx-2 text-gold/60">/</span>
            <Link href={href} className="capitalize hover:text-gold">{part.replaceAll("-", " ")}</Link>
          </span>
        );
      })}
    </nav>
  );
}

function Content({ page }: { page: SitePage }) {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_380px]">
        <article className="space-y-10">
          {page.sections.map((section) => (
            <section key={section.title} className="reveal rounded-lg border border-gold/18 bg-ivory p-6 text-sacredBlack shadow-[0_24px_60px_rgba(0,0,0,.22)] sm:p-8">
              <p className="font-arabic text-3xl text-gold">ٱلسَّلَامُ عَلَيْكُمْ</p>
              <h2 className="mt-2 font-serif text-3xl font-bold text-greenDeep sm:text-4xl">{section.title}</h2>
              <div className="mt-5 space-y-4 text-[1.02rem] leading-8 text-black/76">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.items && <FeatureList items={section.items} />}
            </section>
          ))}
          {page.cards && <CardGrid cards={page.cards} />}
        </article>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          {page.price && (
            <div className="pulse-glow rounded-lg border border-gold/55 bg-black p-6">
              <p className="text-sm font-extrabold uppercase tracking-[.25em] text-gold/80">Package Price</p>
              <p className="mt-3 font-serif text-4xl font-bold text-gold">{page.price}</p>
              {page.duration && <p className="mt-2 text-ivory/70">{page.duration}</p>}
              <Link href="/contact" className="mt-6 inline-block rounded-full bg-gold px-5 py-3 font-extrabold text-sacredBlack">
                Enquire Now
              </Link>
            </div>
          )}
          <div className="rounded-lg border border-gold/25 bg-greenDeep/80 p-5">
            <h3 className="font-serif text-2xl font-bold text-gold">Quick Enquiry</h3>
            <p className="mt-2 text-sm leading-6 text-ivory/70">Share your city, travel month and preferred package. Our team will respond with guidance.</p>
            <div className="mt-4">
              <EnquiryForm compact />
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="rounded-md border border-gold/25 bg-white/60 p-4 text-sm font-semibold leading-6 text-greenDeep">
          {item}
        </div>
      ))}
    </div>
  );
}

function CardGrid({ cards }: { cards: NonNullable<SitePage["cards"]> }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => (
        <Link key={card.href} href={card.href} className="group rounded-lg border border-gold/35 bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-glow">
          <p className="text-xs font-extrabold uppercase tracking-[.24em] text-gold/70">{card.kicker}</p>
          <h3 className="mt-3 font-serif text-3xl font-bold text-ivory">{card.title}</h3>
          <p className="mt-3 text-2xl font-extrabold text-gold">{card.price}</p>
          <p className="mt-3 text-sm leading-6 text-ivory/68">{card.summary}</p>
          <span className="mt-5 inline-block font-extrabold text-gold">Begin Your Journey</span>
        </Link>
      ))}
    </div>
  );
}

function FAQSection() {
  return (
    <section className="bg-ivory px-4 py-16 text-sacredBlack sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {faqItems.map((item) => (
          <details key={item.question} className="group border-b border-gold/35 py-5">
            <summary className="cursor-pointer list-none font-serif text-2xl font-bold text-greenDeep">{item.question}</summary>
            <p className="mt-3 leading-8 text-black/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function BlogGrid() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className="rounded-lg border border-gold/30 bg-black p-6 transition hover:border-gold hover:shadow-glow">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-gold/70">{post.keyword}</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-ivory">{post.title}</h2>
            <p className="mt-4 text-sm leading-6 text-ivory/65">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ContactPanel() {
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        <div className="rounded-lg border border-gold/30 bg-greenDeep p-8">
          <h2 className="font-serif text-4xl font-bold text-gold">Contact Details</h2>
          <div className="mt-6 space-y-3 text-ivory/78">
            <p>Phone: Your phone number</p>
            <p>WhatsApp: Your WhatsApp number</p>
            <p>Email: info@kadameziyarat.com</p>
            <p>Office Address: Your full address</p>
            <p>Office Hours: Monday to Saturday, 10:00 AM to 7:00 PM IST. WhatsApp support is available 7 days a week.</p>
          </div>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    ["Ameen Khan", "Lucknow", "The group guidance made our first Umrah calm and meaningful. Every detail was handled with patience."],
    ["Saba Fatima", "Mumbai", "Our Iraq Ziyarat was deeply moving. The route, hotels and shrine visits were planned with great care."],
    ["Mohammed Arif", "Hyderabad", "Transparent pricing and kind support from departure to return. We felt looked after throughout."]
  ];
  return (
    <section className="px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
        {reviews.map(([name, city, quote]) => (
          <figure key={name} className="rounded-lg border border-gold/30 bg-black p-6">
            <blockquote className="text-lg leading-8 text-ivory/78">"{quote}"</blockquote>
            <figcaption className="mt-5 font-bold text-gold">{name}, {city}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Related({ pages }: { pages: SitePage[] }) {
  return (
    <section className="bg-greenDeep px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-serif text-4xl font-bold text-gold">Related Journeys</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {pages.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="rounded-lg border border-gold/25 bg-black/40 p-5 transition hover:border-gold">
              <h3 className="font-serif text-2xl font-bold text-ivory">{page.h1}</h3>
              <p className="mt-2 text-sm text-ivory/65">{page.price || page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="geometric bg-black px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="font-arabic text-4xl text-gold">يَا رَبّ</p>
        <h2 className="mt-3 font-serif text-5xl font-bold text-ivory">Begin with clarity, travel with trust</h2>
        <p className="mx-auto mt-4 max-w-2xl text-ivory/70">Tell us the journey in your heart. We will help you choose the package, documents and dates with care.</p>
        <Link href="/contact" className="mt-8 inline-block rounded-full bg-gold px-7 py-3 font-extrabold text-sacredBlack">
          Begin Your Journey
        </Link>
      </div>
    </section>
  );
}
