// Case-study content for /portfolio/[slug]. Every fact here was taken from the
// client's live website; screenshots live in /public/portfolio/<slug>/.

export type Shot = { src: string; label: string };

export type CaseStudy = {
  slug: string;
  title: string;
  category: string;
  industry: string;
  location?: string;
  url?: string;
  accent: string;
  tagline: string;
  overview: string;
  goal: string;
  design: string[];
  features: { title: string; desc: string }[];
  stack?: string[];
  desktop: string;
  homeFull?: string;
  pages: Shot[];
  mobile: string[];
};

const shots = (slug: string, pages: string[]) => ({
  desktop: `/portfolio/${slug}/desktop.jpg`,
  homeFull: `/portfolio/${slug}/home-full.jpg`,
  pages: pages.map((label, i) => ({ src: `/portfolio/${slug}/page${i + 1}-full.jpg`, label })),
  mobile: [`/portfolio/${slug}/mobile0.jpg`, `/portfolio/${slug}/mobile1.jpg`],
});

export const caseStudies: CaseStudy[] = [
  {
    slug: "justin-carter-engineering",
    title: "Justin Carter Engineering",
    category: "Oil & Gas Website",
    industry: "Oil & Gas Engineering",
    accent: "#f97316",
    tagline: "A cinematic corporate website for an offshore and onshore engineering firm.",
    overview:
      "Justin Carter Engineering delivers integrated offshore and onshore engineering solutions for the energy sector — from platform design to pipeline integrity.",
    goal:
      "Present the firm as a serious, safety-first engineering partner, communicate its scale at a glance and turn visitors into consultation requests.",
    design: [
      "The homepage opens on a full-bleed video hero framed by a rounded, angled container, with a bold two-line headline and a large outlined wordmark sitting quietly in the background.",
      "A black-and-orange palette carries the brand from the logo through every call to action, while a vertical social rail and scroll cue add an editorial, premium feel. Directly below the hero, a clean stats strip puts completed projects, engineering staff, global clients and active contracts front and centre.",
    ],
    features: [
      { title: "Video hero", desc: "Full-width motion hero with play control and slide indicators." },
      { title: "Investor section", desc: "Dedicated Investors page alongside Services, Team and Operations." },
      { title: "Key figures", desc: "A stats strip that shows the firm's track record instantly." },
      { title: "Consultation CTAs", desc: "Persistent Contact Us and Request Consultation actions plus live chat." },
    ],
    desktop: "/portfolio/justin-carter-engineering/desktop.jpg",
    pages: [],
    mobile: [],
  },
  {
    slug: "fpc-couture",
    title: "FPC Couture",
    category: "Fashion Ecommerce",
    industry: "Luxury Menswear",
    url: "https://fpccouture.com/",
    accent: "#ef4444",
    tagline: "A luxury menswear store crafted for class and worn with confidence.",
    overview:
      "FPC Couture is a menswear label built on the fusion of timeless elegance and everyday comfort — offering senators, native wear, shoes and slides for the modern man.",
    goal:
      "Give the brand an online flagship that feels as refined as the clothing, lets customers shop the full range from anywhere and ships worldwide.",
    design: [
      "We let the photography lead: wide, airy layouts on a white canvas put the garments centre stage, with a minimal navigation bar and a scrolling ‘Worldwide shipping available’ ribbon.",
      "Collections such as Senators, Shoes, Slides and New Ins sit one click from the homepage, and the store adapts into an app-like mobile experience with a fixed bottom bar for Shop, Account, Search and Wishlist.",
    ],
    features: [
      { title: "Full online store", desc: "Product catalogue with categories, search, sorting and filters." },
      { title: "Wishlist & accounts", desc: "Customers can save favourites, register and sign in." },
      { title: "Order tracking", desc: "A dedicated Track Item page so buyers can follow their orders." },
      { title: "Worldwide shipping", desc: "Shipping message carried across the whole store." },
      { title: "Mobile shopping bar", desc: "Thumb-friendly bottom navigation on phones." },
      { title: "Blog & Instagram", desc: "Content and social feed to keep the brand fresh." },
    ],
    stack: ["WordPress", "WooCommerce"],
    ...shots("fpc-couture", ["Shop", "About Us"]),
  },
  {
    slug: "simtek-devices",
    title: "Simtek Devices",
    category: "Electronics Ecommerce",
    industry: "Consumer Electronics",
    url: "https://simtekdevices.com/",
    accent: "#2563eb",
    tagline: "A gadget marketplace built for fast product discovery and Naira checkout.",
    overview:
      "Simtek Devices is a reliable source for authentic smartphones, accessories and high-performance gadgets — from the latest iPhones to powerbanks, smartwatches, AirPods and speakers.",
    goal:
      "Create a large-catalogue store where shoppers can find the exact device they want in seconds and buy with confidence.",
    design: [
      "A deep navy header with a bright blue search bar makes search the heart of the experience, supported by an always-visible All Categories mega-menu with clear icons for every department.",
      "Trust is designed in: shipping, 24/7 support, return & refund and secure checkout badges sit right under the hero, while Hot Deals, Brands, New Arrivals and Top Selling give shoppers multiple routes to the right product.",
    ],
    features: [
      { title: "Category mega-menu", desc: "Phones, laptops, gaming, audio, cameras, wearables and more." },
      { title: "Smart product search", desc: "Category-scoped search right in the header." },
      { title: "Deals & best sellers", desc: "Hot Deals, Top Selling and time-limited offers." },
      { title: "Naira pricing & cart", desc: "Live cart total, wishlist and secure checkout." },
      { title: "Order tracking", desc: "Customers can track orders without contacting support." },
      { title: "Brand pages", desc: "Shop by brand across the full catalogue." },
    ],
    stack: ["WordPress", "WooCommerce"],
    ...shots("simtek-devices", ["Shop", "About Us"]),
  },
  {
    slug: "brianna-integrated",
    title: "Brianna Integrated",
    category: "Oil & Gas Website",
    industry: "Oil & Gas Services",
    location: "Lekki, Lagos · Houston, USA",
    url: "https://www.briannaintegrated.com/",
    accent: "#22c55e",
    tagline: "A bold corporate presence for an international oil and gas services company.",
    overview:
      "Brianna Integrated Limited (BIL) is an international company with indigenous roots, providing EPCIC, inspection, maintenance & repair and subsea services to the oil and gas industry.",
    goal:
      "Communicate BIL's credibility and scope of services to operators and partners, and make it easy to reach its Nigeria and US offices.",
    design: [
      "Dramatic industrial photography is paired with a confident green brand colour. The hero slider leads with clear statements such as ‘We Build Carefully’, followed by a bold stats band for years of experience, clients, projects and employees.",
      "Inner pages share a consistent banner style, and the site collapses cleanly into a mobile layout with a compact menu so field teams and partners can browse on the go.",
    ],
    features: [
      { title: "Hero slider", desc: "Rotating messages highlighting BIL's core strengths." },
      { title: "Service showcase", desc: "Engineering, renovation, and IT solutions & technical support." },
      { title: "Vision, mission & values", desc: "Clear corporate positioning on the homepage." },
      { title: "Two-office contact", desc: "Nigeria and US office details with an enquiry form." },
      { title: "News section", desc: "Latest company news and a newsletter sign-up." },
    ],
    stack: ["Next.js"],
    ...shots("brianna-integrated", ["About Us", "Contact Us"]),
  },
  {
    slug: "techron-integrated",
    title: "Techron Integrated",
    category: "Engineering Website",
    industry: "Oil & Gas Engineering",
    location: "Lekki, Lagos",
    url: "https://www.techronintegrated.com/",
    accent: "#eab308",
    tagline: "Engineering excellence showcased through a bold, modern corporate site.",
    overview:
      "Techron Integrated Services is a fully indigenous, multi-disciplinary company delivering engineering, procurement, construction and installation solutions to the oil & gas, marine and infrastructure sectors.",
    goal:
      "Position Techron as a trusted, future-ready partner and present six service lines clearly to clients across Nigeria and West Africa.",
    design: [
      "A deep navy and amber palette gives the brand authority and warmth. The animated hero slider sits over industrial imagery, and an amber stats band reinforces experience, clients, projects and workforce.",
      "Inner pages use refined split layouts with highlighted ‘standard’ cards, rounded pill buttons and generous spacing — a premium, product-grade look that is rare in the sector.",
    ],
    features: [
      { title: "Six service lines", desc: "Engineering, procurement, IMR, subsea & marine, manpower and solar." },
      { title: "Why Choose Techron", desc: "Expertise, end-to-end delivery, quality, HSE and innovation." },
      { title: "Animated hero", desc: "Slider with clear Our Services and Contact Us actions." },
      { title: "Latest news", desc: "Project and HSE milestones published on the homepage." },
      { title: "Contact hub", desc: "Email, phone and enquiry options in one place." },
    ],
    stack: ["Next.js"],
    ...shots("techron-integrated", ["About Us", "Contact"]),
  },
  {
    slug: "pearse-energy",
    title: "Pearse Energy",
    category: "Energy Services Website",
    industry: "Oil & Gas Services",
    url: "https://pearseenergy.com/",
    accent: "#16a34a",
    tagline: "A solution-provider website for engineering, procurement and inspection services.",
    overview:
      "Pearse Energy is a solution provider to the oil & gas industry, offering engineering designs, procurement, inspection, maintenance & repair, wellhead maintenance, marine, subsea and safety services.",
    goal:
      "Present a broad service portfolio in a structured way and drive qualified ‘Get a Quote’ enquiries from operators.",
    design: [
      "A dark, cinematic hero slider with green accents sets a premium tone, cycling through the company's strengths — certified professionals, latest technology and on-time delivery.",
      "Each service has its own dedicated page under a clear Services menu, while track-record counters, a ‘Why Choose Us’ section and a news feed of project highlights build trust as visitors scroll.",
    ],
    features: [
      { title: "8 service pages", desc: "Each service line explained on its own page." },
      { title: "Get a Quote", desc: "Prominent quote CTA in the header on every page." },
      { title: "Track record", desc: "Projects, client satisfaction and awards counters." },
      { title: "Project news", desc: "Updates on contracts and industry partnerships." },
    ],
    stack: ["WordPress"],
    ...shots("pearse-energy", ["Services", "About Us"]),
  },
  {
    slug: "gil-mining",
    title: "GIL Mining",
    category: "Mining Website",
    industry: "Mining & Minerals",
    location: "Nigeria",
    url: "https://www.gbadafu.com/",
    accent: "#c2581e",
    tagline: "An investor-ready website for a trusted name in Nigeria's mining sector.",
    overview:
      "Gbadafu International Limited (GIL) is a mining company specialising in mineral exploration, extraction and processing, mining equipment supply, import & export and general contracts.",
    goal:
      "Build credibility with investors, partners and clients, and give the company a professional home for its services, documents and financial information.",
    design: [
      "A navy and copper palette gives the brand a grounded, trustworthy feel. The hero introduces GIL as a ‘Trusted name in the mining sector’ with clear Discover More and Contact Us actions.",
      "A full Investor Relations area — corporate information and financial reports — sits alongside detailed service pages, an executives page, a CEO message and a gallery, all within a clean, structured navigation.",
    ],
    features: [
      { title: "Investor relations", desc: "Corporate information and financial reports pages." },
      { title: "7 service pages", desc: "Gold, copper, iron ore, minerals, equipment and contracts." },
      { title: "Company profile", desc: "Profile, CEO message, executives and GIL documents." },
      { title: "Gallery & news", desc: "Visual updates and latest company news." },
    ],
    stack: ["Next.js"],
    ...shots("gil-mining", ["Services", "Investor Relations"]),
  },
  {
    slug: "cityview-bar-lodge",
    title: "Cityview Bar & Lodge",
    category: "Hospitality Website",
    industry: "Hospitality & Nightlife",
    location: "Ejigbo, Lagos",
    url: "https://www.cityview.com.ng/",
    accent: "#d4af37",
    tagline: "Bar, lodge, nightclub, gym and events — one premium destination online.",
    overview:
      "Cityview is a hotel, nightclub, gym and event centre in Ejigbo, Lagos — bringing a bar, lodge, apartments, gym and events together under one roof.",
    goal:
      "Showcase every Cityview experience in one place and turn visitors into reservations for stays, tables, events and gym memberships.",
    design: [
      "Black and gold set a luxurious nightlife mood. The video hero pairs an elegant serif wordmark with a tracked ‘Bar · Lodge · Night Club · Gym · Events’ line that tells visitors everything at a glance.",
      "A persistent ‘Make a Reservation’ button follows visitors through the site, leading to a dark, focused booking form where guests choose what they want to reserve, the date and number of guests.",
    ],
    features: [
      { title: "Online reservations", desc: "One form for lodge stays, tables, events and gym." },
      { title: "Video hero", desc: "Atmospheric motion hero with Watch Video action." },
      { title: "Experiences grid", desc: "Bar & lounge, night club, gym, events and lodge." },
      { title: "Testimonials", desc: "Guest reviews to build trust before booking." },
    ],
    stack: ["Next.js"],
    ...shots("cityview-bar-lodge", ["Reservations"]),
  },
  {
    slug: "petra-wassaif-camp",
    title: "Petra Wassaif Camp",
    category: "Travel & Booking Website",
    industry: "Travel & Hospitality",
    location: "Little Petra, Jordan",
    url: "https://wassaif.com/",
    accent: "#a0522d",
    tagline: "A warm Bedouin welcome, told through a calm, editorial booking site.",
    overview:
      "Petra Wassaif Camp is a Bedouin camp in the hills of Albida, Little Petra, established in 2019 to share the beauty, peace and hospitality of Petra.",
    goal:
      "Help international travellers feel the camp before they arrive, compare rooms and experiences, and book directly or via WhatsApp.",
    design: [
      "An elegant serif typeface, warm sand tones and a terracotta accent create a calm, editorial feel inspired by the desert. Sunset video and photography do the storytelling.",
      "Content is organised around how travellers plan — Our Camp, Accommodation, Experiences, Petra and Little Petra — with Book Your Stay always in reach and a floating WhatsApp button for instant questions.",
    ],
    features: [
      { title: "Direct booking", desc: "Find & Reserve flow plus a persistent Book Your Stay CTA." },
      { title: "WhatsApp booking", desc: "Floating WhatsApp button for quick enquiries." },
      { title: "Room types", desc: "King, Twin and Triple en-suite rooms with inclusions." },
      { title: "Destination guides", desc: "Dedicated Petra, Little Petra and sunsets pages." },
      { title: "Gallery & reviews", desc: "Camp life gallery and guest reviews." },
    ],
    ...shots("petra-wassaif-camp", ["Accommodation", "Experiences"]),
  },
  {
    slug: "seacomida",
    title: "Seacomida",
    category: "Food Ecommerce",
    industry: "Food & Beverage",
    location: "Nigeria",
    url: "https://seacomida.com/",
    accent: "#d4a959",
    tagline: "A cinematic online store for Nigeria's home of premium smoked delicacies.",
    overview:
      "Seacomida is a proudly Nigerian food brand specialising in premium smoked proteins — goat, beef, ram, chicken and more — prepared, sealed fresh and ready to eat.",
    goal:
      "Make the products look as good as they taste and let customers order their favourite smoked delicacies online for delivery.",
    design: [
      "Dark, smoky backgrounds and gold accents give the brand a premium, fire-kissed identity. A cinematic hero slider with elegant serif headlines — ‘The art of slow smoke’ — sells the craft before the product.",
      "The store presents the Ganado™ range in clean product cards, with the process story (selected, slow-smoked, sealed fresh), testimonials and a WhatsApp shortcut supporting the path to purchase.",
    ],
    features: [
      { title: "Online store", desc: "Full product catalogue with cart and checkout." },
      { title: "Cinematic slider", desc: "Full-screen hero slides for each product story." },
      { title: "Product range", desc: "Dry and ready-to-eat Ganado™ collections." },
      { title: "Order support", desc: "Track order, delivery info and WhatsApp chat." },
      { title: "Testimonials & FAQ", desc: "Social proof and answers before purchase." },
    ],
    stack: ["WordPress", "WooCommerce"],
    ...shots("seacomida", ["Shop", "About"]),
  },
  {
    slug: "focus-on-disability-foundation",
    title: "Focus on Disability Foundation",
    category: "NGO Website",
    industry: "Non-Profit",
    location: "Nigeria",
    url: "https://www.fodfoundation.org/",
    accent: "#e8793f",
    tagline: "A hopeful, action-led website for a foundation changing lives across Nigeria.",
    overview:
      "Focus on Disability Foundation is a registered non-profit working to represent and uplift people living with disabilities in Nigeria and across Africa.",
    goal:
      "Tell the foundation's story with dignity, show its impact and make it effortless for supporters to donate or volunteer.",
    design: [
      "Deep green and warm orange balance trust with energy. The hero's ‘Every Ability Deserves Opportunity’ message is supported by real photography from the foundation's work.",
      "Donate Now is visible in the header on every page, programme cards explain each area of work, and dedicated donation and volunteer journeys turn goodwill into action.",
    ],
    features: [
      { title: "Online donations", desc: "Dedicated donation page and site-wide Donate Now CTA." },
      { title: "Volunteer sign-up", desc: "Get Involved journey for new volunteers." },
      { title: "Programmes", desc: "Mobility, skills, child care, education and advocacy." },
      { title: "News & team", desc: "Latest news, articles and team profiles." },
      { title: "FAQs", desc: "Clear answers for donors and partners." },
    ],
    stack: ["Next.js"],
    ...shots("focus-on-disability-foundation", ["About Us", "Donate"]),
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
