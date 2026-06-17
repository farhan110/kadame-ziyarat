export type Card = {
  title: string;
  price: string;
  summary: string;
  href: string;
  kicker: string;
};

export type SitePage = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  kind?: "page" | "package" | "faq" | "blog" | "contact" | "testimonials";
  price?: string;
  duration?: string;
  sections: { title: string; body: string[]; items?: string[] }[];
  cards?: Card[];
  relatedSlugs?: string[];
};

export const mainNav = [
  { label: "Umrah", href: "/umrah-packages" },
  { label: "Hajj", href: "/hajj-packages" },
  { label: "Iraq Ziyarat", href: "/iraq-ziyarat" },
  { label: "Ramadan", href: "/ramadan-umrah" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" }
];

const umrahCards: Card[] = [
  { title: "Budget Umrah", price: "₹89,999", summary: "15 days with flights, visa, meals, Ziyarat and complete on ground support.", href: "/umrah-packages/budget", kicker: "15 Days" },
  { title: "Semi Deluxe Umrah", price: "₹99,999", summary: "A balanced package with 3 star hotels closer to Haram and full board meals.", href: "/umrah-packages/semi-deluxe", kicker: "3 Star" },
  { title: "Deluxe Umrah", price: "₹1,14,999", summary: "4 star and 5 star comfort with private transfers and guided Ziyarat.", href: "/umrah-packages/deluxe", kicker: "Comfort" },
  { title: "Super Deluxe Umrah", price: "₹1,39,999", summary: "5 star stays near Haram with premium transport and coordinator care.", href: "/umrah-packages/super-deluxe", kicker: "5 Star" },
  { title: "Premium Umrah", price: "₹1,69,999", summary: "Haram view hotels, double or triple sharing and VIP style service.", href: "/umrah-packages/premium", kicker: "Haram View" },
  { title: "Long Stay Umrah", price: "From ₹1,24,999", summary: "Extended time in Makkah and Madinah for pilgrims who want unhurried worship.", href: "/umrah-packages/long-stay", kicker: "20 Plus Days" },
  { title: "Short Stay Umrah", price: "From ₹79,999", summary: "A complete 10 day journey for professionals and pilgrims with limited leave.", href: "/umrah-packages/short-stay-10-days", kicker: "10 Days" },
  { title: "Umrah Land Package", price: "From ₹39,999", summary: "Book your own flights while we handle visa, hotels, meals and transport.", href: "/umrah-packages/land-only", kicker: "Flexible" }
];

const hajjCards: Card[] = [
  { title: "Long Stay Shifting Hajj", price: "₹6,59,999", summary: "35 to 40 days with VIP Moallim, Category B tent, meals and Ziyarat.", href: "/hajj-packages/long-stay-shifting", kicker: "35 to 40 Days" },
  { title: "Long Stay Non Shifting Hajj", price: "₹7,89,999", summary: "Extended Hajj with the comfort of returning to the same Makkah hotel room.", href: "/hajj-packages/long-stay-non-shifting", kicker: "Comfort" },
  { title: "Short Stay Shifting Hajj", price: "₹5,74,999", summary: "19 to 20 days for pilgrims who need a compact Hajj schedule.", href: "/hajj-packages/short-stay-shifting", kicker: "Short Stay" },
  { title: "Short Stay Non Shifting Hajj", price: "₹7,49,999", summary: "A compact Hajj with non shifting convenience after the Arkan days.", href: "/hajj-packages/short-stay-non-shifting", kicker: "Non Shifting" },
  { title: "15 Day Hajj", price: "From ₹6,25,999", summary: "The most focused Hajj option for pilgrims with minimum time away from home.", href: "/hajj-packages/15-days", kicker: "15 Days" }
];

const ramadanCards: Card[] = [
  { title: "First 20 Days", price: "₹1,19,999", summary: "Arrive before Ramadan, perform Umrah and worship through the first 20 days.", href: "/ramadan-umrah/first-20-days", kicker: "Ramadan" },
  { title: "Last 18 Days", price: "₹1,24,999", summary: "Stay through the last ten nights and seek the blessings of Laylat ul Qadr.", href: "/ramadan-umrah/last-18-days", kicker: "Last Ashra" },
  { title: "Full Month", price: "₹1,44,999", summary: "A complete Ramadan experience from the first Taraweeh until Eid ul Fitr.", href: "/ramadan-umrah/full-month", kicker: "28 Days" },
  { title: "Shaban with Ramadan", price: "₹1,04,999", summary: "Begin in Shaban, settle into Makkah early and transition into Ramadan.", href: "/ramadan-umrah/shaban-with-ramadan", kicker: "17 Days" }
];

const iraqCards: Card[] = [
  { title: "Standard Iraq Ziyarat", price: "From ₹1,09,999", summary: "11 days across Baghdad, Karbala, Najaf, Kufa, Kazmain and Madain.", href: "/iraq-ziyarat/standard", kicker: "11 Days" },
  { title: "Gyarvi Sharif Iraq Ziyarat", price: "From ₹1,14,999", summary: "A special Baghdad departure timed around the 11th of the Islamic month.", href: "/iraq-ziyarat/gyarvi-sharif", kicker: "Special" },
  { title: "Umrah with Iraq Ziyarat", price: "From ₹1,64,999", summary: "25 days covering Makkah, Madinah, Baghdad, Karbala and Najaf.", href: "/iraq-ziyarat/umrah-with-iraq", kicker: "Combined" }
];

const tourCards: Card[] = [
  { title: "Al Aqsa Jerusalem", price: "₹1,59,999", summary: "Masjid Al Aqsa, Dome of the Rock, Jerusalem, Hebron and Bethlehem.", href: "/islamic-tours/al-aqsa-jerusalem", kicker: "6 Days" },
  { title: "Turkey Islamic Tour", price: "₹1,49,999", summary: "Istanbul, Hagia Sophia, Blue Mosque, Topkapi Palace and Bursa.", href: "/islamic-tours/turkey", kicker: "6 Days" },
  { title: "Jordan Islamic Tour", price: "₹1,19,999", summary: "Amman, Petra, Dead Sea, Madaba, Mount Nebo and Islamic heritage sites.", href: "/islamic-tours/jordan", kicker: "6 Days" },
  { title: "Uzbekistan Islamic Tour", price: "₹79,999", summary: "Samarkand, Bukhara, Tashkent, Registan and the legacy of Imam Bukhari.", href: "/islamic-tours/uzbekistan", kicker: "5 Days" }
];

const holidayCards: Card[] = [
  { title: "Umrah with Dubai", price: "₹1,59,999", summary: "Complete Umrah followed by Dubai city tour, desert safari and Burj Khalifa.", href: "/umrah-with-holiday/dubai", kicker: "15 Days" },
  { title: "Umrah with Saudi City Tour", price: "₹1,29,999", summary: "Visit Taif, Jeddah Al Balad and meaningful Saudi sites beyond Haramain.", href: "/umrah-with-holiday/saudi-city-tour", kicker: "15 Days" },
  { title: "Umrah with Turkey", price: "₹1,99,999", summary: "Umrah followed by Istanbul, Blue Mosque, Grand Bazaar and Bosphorus.", href: "/umrah-with-holiday/turkey", kicker: "15 Days" },
  { title: "Umrah with Jordan", price: "₹1,94,999", summary: "Umrah followed by Amman, Petra, Dead Sea and historic Islamic sites.", href: "/umrah-with-holiday/jordan", kicker: "15 Days" }
];

const visaCards: Card[] = [
  { title: "Saudi Arabia Visa", price: "On request", summary: "Umrah visa, Hajj visa, Saudi tourist eVisa, business visa and Nusuk guidance.", href: "/visa-services/saudi-arabia", kicker: "Saudi" },
  { title: "Iraq Visa", price: "On request", summary: "Tourist and Ziyarat visa assistance for Baghdad, Karbala and Najaf.", href: "/visa-services/iraq", kicker: "Iraq" },
  { title: "Dubai Visa", price: "On request", summary: "UAE tourist visa support with 14 day, 30 day and 90 day options.", href: "/visa-services/dubai", kicker: "UAE" },
  { title: "Turkey Visa", price: "On request", summary: "eVisa assistance for Indian passport holders traveling to Turkey.", href: "/visa-services/turkey", kicker: "Turkey" }
];

export const blogPosts = [
  ["how-to-perform-umrah", "How to Perform Umrah, A Complete Step by Step Guide", "how to perform Umrah", "A calm guide to Ihram, Tawaf, Sa'i, Halq and the adab of the journey."],
  ["how-to-perform-hajj", "How to Perform Hajj, The Complete Guide for First Time Pilgrims", "how to perform Hajj", "Understand the days of Mina, Arafat, Muzdalifah, Rami and Tawaf al Ziyarah."],
  ["difference-hajj-umrah", "Difference Between Hajj and Umrah Explained", "Hajj vs Umrah", "A clear comparison of timing, obligation, rituals, duration and cost."],
  ["umrah-packing-list", "Umrah Packing List, What to Pack from India", "Umrah packing list", "Documents, clothes, medicines and small essentials for a smooth journey."],
  ["umrah-without-mahram", "Can Women Go to Umrah Without a Mahram", "Umrah without mahram", "Current group travel guidance and practical planning notes for women pilgrims."],
  ["iraq-ziyarat-guide", "Iraq Ziyarat Guide, Karbala, Najaf and Baghdad", "Iraq Ziyarat guide", "What to expect at the shrines, hotels, transport and local arrangements."],
  ["best-time-for-umrah", "Best Time to Perform Umrah from India", "best time for Umrah", "Compare Ramadan, school holidays, winter months and quieter travel periods."],
  ["shifting-vs-non-shifting-hajj", "Shifting vs Non Shifting Hajj Package", "shifting vs non shifting Hajj", "A practical guide to comfort, movement, cost and who should choose each option."],
  ["umrah-visa-india", "How to Apply for Saudi Umrah Visa from India", "Umrah visa India", "Documents, processing steps, photos, validity and Nusuk related guidance."],
  ["umrah-duas", "Duas to Recite During Umrah", "Umrah duas", "A simple collection of duas and moments for remembrance during Umrah."],
  ["riyad-ul-jannah-appointment", "How to Take Riaz ul Jannah Appointment in Madinah", "Riyad ul Jannah appointment", "A practical guide to booking and preparing for the blessed visit."],
  ["karbala-history", "The Significance of Karbala in Islamic History", "Karbala history", "A reverent introduction to sacrifice, memory and devotion at Karbala."],
  ["ziyarat-places-makkah", "Top Ziyarat Places in Makkah You Must Visit", "Ziyarat in Makkah", "Jabal al Noor, Jabal al Thawr, Mina, Arafat and other meaningful sites."],
  ["ziyarat-places-madinah", "Top Ziyarat Places in Madinah You Must Visit", "Ziyarat in Madinah", "Quba, Qiblatain, Uhud, Baqi and the sacred geography of Madinah."],
  ["umrah-cost-india", "How Much Does Umrah Cost from India in 2026", "Umrah cost India", "Package tiers, season changes and what is usually included in the price."],
  ["hajj-cost-india", "How Much Does Hajj Cost from India in 2026", "Hajj cost India", "Understand shifting, non shifting, short stay and long stay pricing factors."],
  ["ihram-guide", "What to Wear During Umrah", "Ihram rules", "Ihram guidance for men and women with packing and comfort tips."],
  ["umrah-senior-citizens", "Umrah for Senior Citizens, Tips and Advice", "Umrah for elderly", "Mobility, medicine, hotels, group support and pacing the journey."],
  ["gyarvi-sharif-guide", "Gyarvi Sharif, Significance and Visiting Baghdad", "Gyarvi Sharif Baghdad", "A guide for pilgrims planning Iraq Ziyarat around Gyarvi Sharif."],
  ["al-aqsa-tour-guide", "Complete Guide to Masjid Al Aqsa for Indian Travelers", "Al Aqsa tour from India", "Entry, itinerary, prayer arrangements and sacred sites around Jerusalem."]
].map(([slug, title, keyword, excerpt]) => ({ slug, title, keyword, excerpt }));

export const faqItems = [
  { question: "What is included in a typical Umrah package from Kadame Ziyarat?", answer: "Our Umrah packages include return flights from India, Saudi Umrah visa processing, hotel accommodation in Makkah and Madinah, daily meals, airport transfers, internal transport, guided Ziyarat tours and 24/7 on ground support. Specific inclusions vary by package tier." },
  { question: "How far in advance should I book my Umrah or Hajj package?", answer: "We recommend booking at least 2 to 3 months in advance for Umrah and 4 to 6 months for Hajj. Ramadan Umrah and Hajj seats fill quickly because availability is limited." },
  { question: "Can I customize my package dates and duration?", answer: "Yes. We can customize duration, departure date and city around your schedule. Share your preferences and our team will prepare a tailored itinerary." },
  { question: "Do you offer packages for solo female travelers?", answer: "Women under 45 traveling for Umrah without a Mahram must travel with an organized group as per Saudi regulations. We arrange compliant group departures and guide every pilgrim through the requirements." },
  { question: "What documents do I need for Umrah?", answer: "You need a valid Indian passport with minimum 6 months validity, passport sized photographs with white background and completed application forms. For Hajj, additional documents may be required." },
  { question: "What is the payment process?", answer: "A 25% advance confirms your seat. The remaining balance is due 30 days before departure. Bank transfer, UPI, cards and EMI options can be supported." },
  { question: "Is my payment refundable if I cancel?", answer: "Cancellation terms depend on timing. Cancellations more than 45 days before departure usually receive a refund minus processing charges. Later cancellations depend on airline and hotel policies." },
  { question: "Which airlines do you use?", answer: "We use Saudia, IndiGo, Air India and other carriers depending on route and availability. Airline details are confirmed before departure." },
  { question: "What kind of meals are provided?", answer: "Packages include Indian cuisine with a mix of North Indian, South Indian and Hyderabadi dishes. Breakfast, lunch and dinner are served in a group dining arrangement." },
  { question: "What is the currency used in Iraq?", answer: "Iraq primarily uses the US Dollar for tourist transactions. Pilgrims on Iraq Ziyarat tours should carry sufficient USD for personal expenses." }
];

const baseSections = {
  inclusions: ["Return flights from major Indian cities", "Visa processing and documentation guidance", "Hotel accommodation as per package tier", "Daily breakfast, lunch and dinner", "Airport transfers and internal transport", "Guided Ziyarat tours", "Travel kit and pre departure briefing", "24/7 on ground coordinator support"],
  hajj: ["Hajj visa assistance", "VIP Moallim services", "Mina tent accommodation", "Arafat and Muzdalifah movement support", "Daily meals", "Religious scholar and group guide", "Makkah and Madinah Ziyarat", "24/7 support"],
  iraq: ["Return flights to Baghdad", "Iraq visa processing", "3 star and 4 star hotels", "Indian and Arabic meals", "AC bus for all transfers", "Religious guide", "Travel insurance", "Karbala, Najaf, Baghdad, Kufa and Kazmain Ziyarat"]
};

const corePages: SitePage[] = [
  {
    slug: "",
    title: "Kadame Ziyarat, Best Hajj, Umrah and Iraq Ziyarat Packages from India | 2026",
    description: "Kadame Ziyarat offers trusted Hajj, Umrah and Iraq Ziyarat packages from India with affordable pricing, guided spiritual journeys and on ground care.",
    h1: "Your Sacred Journey Begins with Kadame Ziyarat",
    lead: "Every step toward the House of Allah is a step closer to His mercy. Your pilgrimage deserves more than a travel booking. It deserves care, attention and guidance that turns travel into transformation.",
    sections: [
      { title: "Why Choose Kadame Ziyarat", body: ["Thousands of pilgrims trust us with their most sacred journeys. We keep pricing transparent, hotels carefully selected, support available and religious guidance present through the journey."], items: ["Transparent pricing with no hidden costs", "Hotels close to Haram wherever possible", "Dedicated on ground coordinators", "Experienced religious guidance", "Flexible packages for every budget", "Departures from major Indian cities"] },
      { title: "Our Packages at a Glance", body: ["Choose Umrah, Hajj, Ramadan Umrah, Iraq Ziyarat, Umrah with Holiday or Islamic Tours. Each journey is planned with reverence, practical care and clear communication."], items: ["Umrah from ₹79,999", "Hajj 2026 from ₹5,74,999", "Ramadan Umrah from ₹1,04,999", "Iraq Ziyarat from ₹1,09,999", "Umrah with Holiday from ₹1,29,999", "Islamic Tours from ₹79,999"] },
      { title: "Certifications and Trust", body: ["Kadame Ziyarat is built around professional travel standards, careful documentation and pilgrim first service. Your booking, money and journey are handled with responsibility."] }
    ],
    cards: [...umrahCards.slice(0, 3), ...hajjCards.slice(0, 2), ...iraqCards.slice(0, 1)]
  },
  {
    slug: "about-us",
    title: "About Kadame Ziyarat, Trusted Hajj, Umrah and Ziyarat Tour Operator from India",
    description: "Learn about Kadame Ziyarat, a trusted name in Hajj, Umrah and Iraq Ziyarat tours from India.",
    h1: "About Kadame Ziyarat",
    lead: "Kadame Ziyarat means steps of pilgrimage. The name reflects our belief that every step of your sacred journey matters.",
    sections: [
      { title: "Our Mission", body: ["To make sacred travel accessible, affordable and spiritually meaningful for Muslims across India and the world. We combine competitive pricing with genuine care so pilgrims never have to choose between comfort and budget."] },
      { title: "What Drives Us", body: ["We are not just a travel agency. We are a team that understands the emotions, logistics and small details that shape a pilgrimage experience. Our coordinators support pilgrims in Saudi Arabia, Iraq, Turkey and Jordan."] },
      { title: "Our Values", body: ["Honesty in pricing, quality without compromise and a pilgrim first approach guide every package. We handle logistics so you can focus on prayer, Dua and connection with Allah."], items: ["Pilgrims served across India", "Successful Hajj and Umrah groups", "Departures from 15 plus cities", "On ground presence in key sacred destinations"] }
    ]
  },
  {
    slug: "umrah-packages",
    title: "Best Umrah Packages 2026 from India, Affordable Umrah Tours | Kadame Ziyarat",
    description: "Explore Umrah packages from India for 2026 with Budget, Deluxe, Premium, Short Stay and Land Only options starting from ₹39,999.",
    h1: "Umrah Packages 2026 from India",
    lead: "Performing Umrah cleanses the soul, strengthens faith and brings you closer to Allah. Our packages fit different budgets, schedules and comfort needs.",
    sections: [
      { title: "How to Choose the Right Umrah Package", body: ["Budget Umrah gives you a complete experience at the lowest possible cost. Semi Deluxe and Deluxe add better hotel comfort and shorter walking distances. Super Deluxe and Premium are for pilgrims who want 5 star properties, private transport and premium meal service."], items: baseSections.inclusions }
    ],
    cards: umrahCards,
    relatedSlugs: ["faq", "blog/umrah-packing-list", "visa-services/saudi-arabia"]
  },
  {
    slug: "hajj-packages",
    title: "Hajj Packages 2026 from India, Best Hajj Tour Packages | Kadame Ziyarat",
    description: "Book Hajj packages 2026 from India with long stay, short stay, shifting and non shifting options.",
    h1: "Hajj Packages 2026 from India",
    lead: "Hajj is the journey of a lifetime, a profound act of worship that places every believer equal before Allah.",
    sections: [
      { title: "Understanding Hajj Package Types", body: ["Shifting packages involve movement between accommodations during Hajj days. Non shifting packages let your Makkah hotel remain the same before and after the Arkan rituals. Long stay allows extended worship, while short stay is ideal for working professionals."], items: baseSections.hajj }
    ],
    cards: hajjCards,
    relatedSlugs: ["blog/shifting-vs-non-shifting-hajj", "faq", "contact"]
  },
  {
    slug: "ramadan-umrah",
    title: "Ramadan Umrah Packages 2026, Hijri 1447 | Kadame Ziyarat",
    description: "Book Ramadan Umrah packages 2026 from India with first 20 days, last 18 days, full month and Shaban options.",
    h1: "Ramadan Umrah Packages 2026, Hijri 1447",
    lead: "Ramadan is the most sought after time for Umrah, with days of fasting and nights of worship in the Haramain.",
    sections: [
      { title: "Ramadan Packages Overview", body: ["Choose the first 20 days, the last 18 days, a full month, or Shaban with Ramadan. Each package is designed to give you maximum time in worship while keeping meals, transport and group support organized."], items: baseSections.inclusions }
    ],
    cards: ramadanCards
  },
  {
    slug: "iraq-ziyarat",
    title: "Iraq Ziyarat Tour Packages 2026, Baghdad, Karbala, Najaf | Kadame Ziyarat",
    description: "Book Iraq Ziyarat tour packages from India covering Baghdad, Karbala, Najaf, Kufa and Kazmain.",
    h1: "Iraq Ziyarat Tour Packages",
    lead: "Ziyarat is a deeply personal act of devotion, a journey to stand before sacred resting places and reconnect with the foundations of faith.",
    sections: [
      { title: "Karbala, Najaf and Baghdad", body: ["Iraq holds some of the most sacred sites in the Muslim world. The shrine of Imam Ali in Najaf, the hallowed ground of Imam Hussain and Hazrat Abbas in Karbala, and the shrine of Hazrat Abdul Qadir Jilani in Baghdad carry centuries of devotion."], items: baseSections.iraq }
    ],
    cards: iraqCards,
    relatedSlugs: ["blog/iraq-ziyarat-guide", "blog/karbala-history", "visa-services/iraq"]
  },
  {
    slug: "islamic-tours",
    title: "Islamic Tour Packages 2026, Al Aqsa, Turkey, Jordan, Uzbekistan | Kadame Ziyarat",
    description: "Explore Islamic heritage with guided Muslim friendly tours to Al Aqsa, Turkey, Jordan and Uzbekistan.",
    h1: "Islamic Tour Packages",
    lead: "From Masjid Al Aqsa to Ottoman Istanbul and Samarkand, the Muslim world is filled with sites that inspire awe and strengthen faith.",
    sections: [
      { title: "Designed for Muslim Travelers", body: ["Every itinerary includes prayer time arrangements, halal meal options, historically significant mosques and guides who understand the Islamic context of each destination."] }
    ],
    cards: tourCards
  },
  {
    slug: "umrah-with-holiday",
    title: "Umrah with Holiday Packages 2026, Dubai, Turkey, Jordan, Saudi Tour | Kadame Ziyarat",
    description: "Combine Umrah with Dubai, Turkey, Jordan or a Saudi city tour from India starting ₹1,29,999.",
    h1: "Umrah with Holiday Packages",
    lead: "Combine a complete Umrah experience in Makkah and Madinah with a thoughtful family holiday in the region.",
    sections: [
      { title: "Spiritual Journey with Family Time", body: ["After completing Umrah, continue to Dubai, Turkey, Jordan or Saudi city tours with halal meals, prayer planning and family friendly pacing."] }
    ],
    cards: holidayCards
  },
  {
    slug: "visa-services",
    title: "Visa Services, Saudi Arabia, Iraq, Dubai, Turkey and More | Kadame Ziyarat",
    description: "Fast and reliable visa processing for Saudi Arabia, Iraq, Dubai, Turkey, Oman and worldwide destinations.",
    h1: "Visa Services",
    lead: "Navigating visa requirements can be confusing. We handle documentation and guidance so you can focus on your journey.",
    sections: [
      { title: "Visa Support", body: ["We support Saudi Umrah, Hajj and tourist visas, Iraq Ziyarat visas, Dubai tourist visas, Turkey eVisa assistance, Oman eVisa and worldwide visa guidance."], items: ["Saudi Arabia visa", "Iraq visa", "Dubai and UAE visa", "Turkey visa", "Oman visa", "Worldwide visa assistance"] }
    ],
    cards: visaCards
  },
  {
    slug: "blog",
    title: "Hajj, Umrah and Ziyarat Blog, Guides, Tips and News | Kadame Ziyarat",
    description: "Read expert guides on Hajj, Umrah and Ziyarat with packing tips, rituals, visa updates and spiritual insights.",
    h1: "Hajj, Umrah and Ziyarat Blog",
    lead: "Practical guides and spiritual notes for pilgrims preparing for sacred travel.",
    kind: "blog",
    sections: [{ title: "Guides for Pilgrims", body: ["Explore step by step rituals, visa guidance, packing lists, cost explainers and sacred history."] }]
  },
  {
    slug: "faq",
    title: "Frequently Asked Questions, Hajj, Umrah and Ziyarat | Kadame Ziyarat",
    description: "Answers to common questions about Hajj, Umrah, Iraq Ziyarat, visas, packages and travel arrangements.",
    h1: "Frequently Asked Questions",
    lead: "Clear answers for pilgrims planning Hajj, Umrah, Ramadan Umrah, Iraq Ziyarat and visa services.",
    kind: "faq",
    sections: [{ title: "Common Questions", body: ["These answers cover inclusions, booking timelines, customization, documents, payments, meals and Iraq travel guidance."] }]
  },
  {
    slug: "contact",
    title: "Contact Kadame Ziyarat, Enquire About Hajj, Umrah and Ziyarat Packages",
    description: "Contact Kadame Ziyarat for Hajj, Umrah and Ziyarat package enquiries by phone, WhatsApp, email or office visit.",
    h1: "Contact Us",
    lead: "We are here to help you plan your sacred journey with patience, clarity and practical guidance.",
    kind: "contact",
    sections: [{ title: "Reach Our Team", body: ["Whether you have a question about a package, need help choosing an option or want to book directly, reach out through phone, WhatsApp, email or the enquiry form."] }]
  },
  {
    slug: "testimonials",
    title: "Pilgrim Testimonials and Reviews | Kadame Ziyarat",
    description: "Read real reviews from pilgrims who traveled with Kadame Ziyarat for Hajj, Umrah and Iraq Ziyarat.",
    h1: "What Our Pilgrims Say",
    lead: "Warm words from pilgrims who trusted us with their sacred journeys.",
    kind: "testimonials",
    sections: [{ title: "Pilgrim Experiences", body: ["Google Reviews and video testimonials can be connected here when the live review sources are ready."] }]
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy | Kadame Ziyarat",
    description: "Privacy policy for Kadame Ziyarat website visitors and pilgrims.",
    h1: "Privacy Policy",
    lead: "We respect your privacy and protect the information you share while enquiring or booking.",
    sections: [{ title: "Your Information", body: ["We collect contact and travel preference details only to respond to enquiries, prepare package guidance and support bookings. We do not sell personal information."] }]
  },
  {
    slug: "terms-and-conditions",
    title: "Terms and Conditions | Kadame Ziyarat",
    description: "Terms and conditions for Kadame Ziyarat packages and website use.",
    h1: "Terms and Conditions",
    lead: "Please read these terms before confirming a sacred travel package.",
    sections: [{ title: "Booking Terms", body: ["Package prices, flights, hotels and itineraries are subject to availability and supplier confirmations. Cancellation terms depend on airline, hotel and visa policies shared at booking."] }]
  }
];

const packageDetails: SitePage[] = [
  ...umrahCards.map((card) => packagePage(card, "umrah-packages", baseSections.inclusions, "Umrah Package Details", "This package includes return flights from India, Saudi Umrah visa, Makkah and Madinah hotels, meals, transfers, Ziyarat tours and on ground care. Exact hotels are shared before departure and prices may vary by city and travel date.")),
  ...hajjCards.map((card) => packagePage(card, "hajj-packages", baseSections.hajj, "Hajj Package Details", "This Hajj package includes visa assistance, flights, Makkah and Madinah stays, Mina arrangements, Moallim services, meals, religious guidance and movement support through the Arkan days.")),
  ...ramadanCards.map((card) => packagePage(card, "ramadan-umrah", baseSections.inclusions, "Ramadan Umrah Details", "This Ramadan journey is planned around fasting, Taraweeh, Haram access, group meals and peaceful movement between Makkah and Madinah.")),
  ...iraqCards.map((card) => packagePage(card, "iraq-ziyarat", baseSections.iraq, "Iraq Ziyarat Details", "This Ziyarat journey covers the sacred sites of Karbala, Najaf, Kufa, Baghdad, Kazmain, Hilla, Musayyib and Madain with guide support and flexible itinerary handling.")),
  ...tourCards.map((card) => packagePage(card, "islamic-tours", ["Halal meal planning", "Prayer time arrangements", "Guided Islamic heritage visits", "Comfortable hotels", "Airport transfers", "Group support"], "Islamic Tour Details", "This Muslim friendly itinerary is built around sacred history, halal meals, prayer arrangements and meaningful guided visits.")),
  ...holidayCards.map((card) => packagePage(card, "umrah-with-holiday", baseSections.inclusions, "Umrah with Holiday Details", "This package combines complete Umrah arrangements with a family friendly holiday extension after Makkah and Madinah.")),
  ...visaCards.map((card) => packagePage(card, "visa-services", ["Document checklist", "Application review", "Form guidance", "Appointment or eVisa support", "Status updates", "Travel readiness guidance"], "Visa Service Details", "Our team reviews your documents, guides the application process and helps you avoid common errors before travel."))
];

function packagePage(card: Card, parent: string, items: string[], heading: string, body: string): SitePage {
  const slug = card.href.replace("/", "");
  return {
    slug,
    title: `${card.title}, ${card.price} | Kadame Ziyarat`,
    description: `${card.title} from Kadame Ziyarat. ${card.summary}`,
    h1: card.title,
    lead: card.summary,
    kind: "package",
    price: card.price,
    duration: card.kicker,
    sections: [
      { title: heading, body: [body], items },
      { title: "Important Notes", body: ["Flight schedules, hotels and final itinerary are confirmed based on travel date and availability. Ramadan, Muharram, Arbaeen and peak season departures may carry surcharges."] }
    ],
    relatedSlugs: [parent, "faq", "contact"]
  };
}

const cityNames = ["Delhi", "Mumbai", "Lucknow", "Hyderabad", "Kolkata", "Chennai", "Bangalore", "Ahmedabad", "Jaipur", "Srinagar", "Patna", "Guwahati", "Nagpur", "Bhopal", "Kanpur", "Varanasi", "Ranchi", "Indore", "Kozhikode"];

const cityPages: SitePage[] = cityNames.map((city) => ({
  slug: `umrah-from/${city.toLowerCase().replace(" ", "-")}`,
  title: `Umrah Package from ${city} 2026, Best Prices and Trusted Service | Kadame Ziyarat`,
  description: `Book Umrah packages from ${city} starting ₹79,999 with flights, visa, hotels, meals and Ziyarat included.`,
  h1: `Umrah Packages from ${city}`,
  lead: `For Muslims of ${city} and nearby areas, Kadame Ziyarat arranges complete Umrah packages with flights, visa processing, hotels, meals and guided Ziyarat.`,
  sections: [
    { title: `Departures from ${city}`, body: [`Whether you are in ${city} city or nearby districts, we can arrange departure from the nearest convenient airport with complete document guidance and pre departure briefing.`], items: baseSections.inclusions }
  ],
  cards: umrahCards
}));

const blogPages: SitePage[] = blogPosts.map((post) => ({
  slug: `blog/${post.slug}`,
  title: `${post.title} | Kadame Ziyarat`,
  description: post.excerpt,
  h1: post.title,
  lead: post.excerpt,
  sections: [
    { title: "Guide Overview", body: [`This guide is prepared for pilgrims searching for ${post.keyword}. It explains the essentials in warm, simple language and links naturally to relevant Kadame Ziyarat packages.`] },
    { title: "How Kadame Ziyarat Helps", body: ["Our team supports pilgrims with package selection, document checks, pre departure preparation, on ground coordination and guidance at sacred sites."] }
  ],
  relatedSlugs: ["umrah-packages", "hajj-packages", "iraq-ziyarat"]
}));

export const allPages: SitePage[] = [...corePages, ...packageDetails, ...cityPages, ...blogPages];

export function getPageBySlug(slug: string) {
  const normalized = slug.replace(/^\/|\/$/g, "");
  return allPages.find((page) => page.slug === normalized);
}

export const packageGroups = [
  { title: "Umrah", links: umrahCards.map((card) => ({ label: card.title, href: card.href })) },
  { title: "Hajj and Ziyarat", links: [...hajjCards, ...iraqCards].map((card) => ({ label: card.title, href: card.href })) },
  { title: "More Services", links: [...tourCards, ...holidayCards, ...visaCards].map((card) => ({ label: card.title, href: card.href })) }
];
