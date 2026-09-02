import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight, ArrowLeft, Play, Check, ChevronDown, Star, Utensils, Building2, CarFront, Phone, Mail, Instagram,
  Film, Clapperboard, Award, Users, Clock, TrendingUp, X
} from 'lucide-react';

const ThemeStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700;800&display=swap');

    [class~="bg-ink"] { background-color: #050505; }
    [class~="bg-panel"] { background-color: #121110; }
    [class~="text-gold"] { color: #C9A227; }
    [class~="bg-gold"] { background-color: #C9A227; }
    [class~="border-gold"] { border-color: #C9A227; }
    [class~="fill-gold"] { fill: #C9A227; }
    [class~="font-display"] { font-family: 'Bebas Neue', sans-serif; letter-spacing: 0.01em; }
    [class~="font-body"] { font-family: 'Inter', sans-serif; }

    [class~="border-gold/30"] { border-color: rgba(201,162,39,0.3); }
    [class~="bg-gold/10"] { background-color: rgba(201,162,39,0.1); }
    [class~="from-gold/10"] { --tw-gradient-from: rgba(201,162,39,0.1); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(201,162,39,0)); }

    [class~="hover:bg-gold-light"]:hover { background-color: #E4C158; }
    [class~="hover:border-gold"]:hover { border-color: #C9A227; }
    [class~="hover:text-gold"]:hover { color: #C9A227; }
    [class~="hover:border-gold/40"]:hover { border-color: rgba(201,162,39,0.4); }
    [class~="focus-visible:outline-gold"]:focus-visible { outline-color: #C9A227; }
    [class~="focus:border-gold"]:focus { border-color: #C9A227; }
    .group:hover [class~="group-hover:text-gold"] { color: #C9A227; }
    .group:hover [class~="group-hover:text-gold/20"] { color: rgba(201,162,39,0.2); }

    [class~="text-[9px]"] { font-size: 9px; }
    [class~="text-[10px]"] { font-size: 10px; }
    [class~="text-[11px]"] { font-size: 11px; }
    [class~="tracking-[0.2em]"] { letter-spacing: 0.2em; }
    [class~="tracking-[0.25em]"] { letter-spacing: 0.25em; }
    [class~="tracking-[0.3em]"] { letter-spacing: 0.3em; }
    [class~="leading-[0.95]"] { line-height: 0.95; }
    [class~="opacity-[0.05]"] { opacity: 0.05; }
    [class~="min-h-[120px]"] { min-height: 120px; }
    [class~="w-[320px]"] { width: 320px; }
    [class~="z-[100]"] { z-index: 100; }
    [class~="border-t-[5px]"] { border-top-width: 5px; }
    [class~="border-l-[8px]"] { border-left-width: 8px; }
    [class~="border-b-[5px]"] { border-bottom-width: 5px; }

    .sprocket-row { display: flex; gap: 6px; padding: 5px 14px; background: #000; }
    .sprocket-hole { width: 6px; height: 6px; border-radius: 50%; background: #2b2b2b; flex-shrink: 0; }
    .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
    .scrollbar-hide::-webkit-scrollbar { display: none; }
    .grain-overlay {
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
      mix-blend-mode: overlay;
    }
    .marquee {
      -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
      mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    }
    ::selection { background: #C9A227; color: #000; }
  `}</style>
);

function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: name, ...params });
  }
}
const openWhatsApp = (source = 'unknown') => {
  trackEvent('whatsapp_click', { source });

  const phone = '201101190310';
  const message = encodeURIComponent(
    "Hi, I'd like to book a project with Aoqab Studios."
  );

  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
};

const FILMSTRIP_WORK = [
  {
    title: '4M AQB', client: '4MATIC', category: 'Automotive',
    challenge: '4MATIC needed a high-impact film to introduce the brand and make the vehicle feel as powerful on screen as it does on the road.',
  approach: 'We built the film around dynamic driving sequences, controlled camera movement and detailed automotive shots, creating a premium visual that puts the car at the center of the story.',
  result: '3.2x engagement.',
    videoUrl: '',
  },
  {
  title: '4M AQB', client: '4MATIC', category: 'Automotive',
  challenge: '4MATIC needed a high-impact film to introduce the brand and make the vehicle feel as powerful on screen as it does on the road.',
  approach: 'We built the film around dynamic driving sequences, controlled camera movement and detailed automotive shots, creating a premium visual that puts the car at the center of the story.',
  result: '3.2x engagement.',
  videoUrl: '',
},
{
  title: 'YA3', client: 'YUCK', category: 'Food Industry',
  challenge: 'YUCK needed a campaign that could make the product instantly appealing while capturing the energy and personality behind the brand.',
  approach: 'We created a fast-paced visual concept built around the food, movement and bold brand identity, combining product-focused shots with lifestyle moments designed for social-first content.',
  result: 'Gained Over 70 New Customers.',
  videoUrl: '',
},
{
  title: 'TESLA CYPERTRUCK', client: '4MATIC', category: 'Automotive',
  challenge: 'The Cybertruck needed to stand out as more than another vehicle showcase, with a visual treatment that matched its unconventional design.',
  approach: 'We leaned into the Cybertruck’s futuristic shape and aggressive character, using cinematic compositions, controlled lighting and detailed exterior shots to make the vehicle the hero.',
  result: '21 People Asked About the Car.',
  videoUrl: '',
},
{
  title: 'PANDA', client: 'SUSHIANA', category: 'Food Industry',
  challenge: 'SUSHIANA needed a campaign that could turn a simple food product into a memorable visual experience and give the audience a reason to engage with it.',
  approach: 'We focused on texture, movement and close-up food cinematography, building a playful sequence that makes the product feel fresh, satisfying and instantly recognizable.',
  result: 'Gained Over 60 New Customers.',
  videoUrl: '',
},
{
  title: 'EL ALAMEN INVESTING STRATGIE', client: 'DEAL REALESTATE', category: 'Realestate',
  challenge: 'DEAL REALESTATE needed to communicate the investment opportunity in El Alamein in a way that felt aspirational while still giving potential buyers a clear sense of the opportunity.',
  approach: 'We combined cinematic property visuals with lifestyle-focused sequences, highlighting the destination, development and investment potential through a premium real-estate narrative.',
  result: '+54% site traffic in launch week.',
  videoUrl: '',
},
{
  title: 'HYDE-PARK PROJECT', client: 'GREY COLLECTIVE', category: 'Realestate',
  challenge: 'Grey Collective needed to present the Hyde Park project as a premium lifestyle destination rather than simply another real-estate development.',
  approach: 'We built the film around the experience of living in the project, combining architectural details, surrounding spaces and lifestyle moments into one cohesive visual story.',
  result: '+67% site traffic in launch week.',
  videoUrl: '',
},
{
  title: 'GARDEN RENOVATIONS', client: 'ELAZEZYA', category: 'Brand Anthem',
  challenge: 'ELAZEZYA needed to showcase the transformation of outdoor spaces while communicating the craftsmanship and attention to detail behind every project.',
  approach: 'We focused on the contrast between before and after, using cinematic shots of the finished spaces and carefully composed details to turn the renovation process into a visual brand story.',
  result: '+41% site traffic in launch week.',
  videoUrl: '',
},
{
  title: 'البطاريه عندنا', client: 'VOLTEER', category: 'Commercial',
  challenge: 'VOLTEER needed a commercial that could communicate its battery offering quickly while remaining memorable and entertaining enough to work across digital platforms.',
  approach: 'We built the concept around a simple, recognizable idea and delivered it with fast pacing, product-focused shots and a strong commercial visual style designed to grab attention immediately.',
  result: 'The first patch sold out in 9 days.',
  videoUrl: '',
},
];

const SERVICES = [
  { icon: Film, category: 'Commercial', title: 'Commercials', desc: 'Short, high-impact films built to sell a product or moment — cut for paid media from day one.' },
  { icon: Award, category: 'Brand Anthem', title: 'Brand Anthems', desc: 'Signature films that define who a brand is, used across launches, pitch decks and paid social.' },
  { icon: Utensils, category: 'Food Industry', title: 'Food Industry', desc: 'Cinematic films that make every dish, ingredient and dining experience look irresistible — crafted to drive appetite and attention.' },
  { icon: Building2, category: 'Realestate', title: 'Realestate', desc: 'Cinematic property films that capture spaces, architecture and lifestyle — designed to make every property feel worth experiencing.' },
  { icon: CarFront, category: 'Automotive', title: 'Automotive', desc: 'High-energy films that capture the design, performance and character of every vehicle — built to make people stop, watch and want the drive.' },
];

const CATEGORIES = ['All', ...SERVICES.map(s => s.category)];

const PROCESS_STEPS = [
  { n: '01', title: 'Discovery', desc: 'A 20-minute strategy call — we learn your brand, your goals, and what "success" looks like. No pitch deck.' },
  { n: '02', title: 'Direction', desc: 'A full concept, shot list and script arrive within 3 business days for your approval.' },
  { n: '03', title: 'Creation', desc: 'Full cinema-grade crew — director, DP, sound, lighting. You show up, we handle everything else.' },
  { n: '04', title: 'Refinement', desc: 'First cut in 2-5 business days, with revision rounds built into every package.' },
  { n: '05', title: 'Delivery', desc: 'Final files land in every aspect ratio and format your campaign needs — ready to publish.' },
];

const FAQS = [
  { q: 'How fast can you actually turn a video around?', a: "Most single deliverables ship in 5-10 business days after the shoot. Campaigns with multiple videos run 3-4 weeks depending on scope. We'll give you an exact date before you sign anything not a range." },
  { q: 'What if we dont like the first cut?', a: "Every package includes revision rounds within the original scope, and Campaign or Retainer clients get unlimited revisions. You're never stuck with a first draft you don't love." },
  { q: 'What does working together actually look like day-to-day?', a: "You'll have one point of contact from kickoff to delivery, weekly check-ins during production, and access to selects during editing on Campaign and Retainer plans so you're never waiting in the dark for a status update." },
  { q: 'How do you decide if a project is the right fit?', a: "On the strategy call, not before. We'll ask about your goals and timeline, and tell you plainly if we're not the right studio for the brief that's a five-minute conversation, not a sales pitch." },
  { q: "What's actually included in the price?", a: 'Creative direction, full crew, equipment, editing, color grading, and sound design. The only add-ons are talent fees, permits, or specialty equipment if your concept needs them and we flag those upfront, never after the shoot.' },
  { q: 'Do you work with brands outside Cairo?', a: "Yes we regularly shoot across Egypt and can coordinate remote-first workflows for post-production with any client, anywhere." },
];

const CLIENT_LOGOS = ['4MATIC', 'GREY COLLECTIVE', 'DEAL ESTATE', 'VOLTEER', 'ELAZEZYA', 'YUCK'];

const TIMELINE_OPTIONS = ['ASAP', 'Within 1 month', '13 months', 'Just exploring'];

const STATS = [
  { num: '3+', label: 'Years' },
  { num: '400+', label: 'Projects Delivered' },
  { num: '30+', label: 'Brands Served' },
  { num: '7', label: 'Awards' },
];

const IMPACT_STATS = [
  { num: '400+', label: 'Projects delivered', chart: 'bar' },
  { num: '30+', label: 'Brands served', chart: 'donut' },
  { num: '7', label: 'Industry awards', chart: 'line' },
  { num: '98%', label: 'Client retention rate', chart: 'bar' },
];

const MILESTONES = [
  { year: '2024', label: 'Studio founded' },
  { year: '2025', label: 'First brand anthem film' },
  { year: '2026', label: 'Expanding into documentary' },
];

const TEAM = [
  { initials: 'Y.F.', role: 'Founder & Creative Director' },
];

const NEWS_ITEMS = [
  { source: 'Alexandria Mediterranean Countries Film', category: 'Awards', date: '28 Aug 2025', headline: 'افلام مسابقه شباب مصر' },
  { source: 'المصري اليوم', category: 'Awards', date: '26 Aug 2026', headline: 'مهرجان الاسكندريه السينمااي عن قاامه افلام مسابقه شباب مصر بدورته ال 41' },
  { source: 'صدي البلد', category: 'Awards', date: 'Mar 2026', headline: 'مهرجان الاسكندريه السينمااي عن قاامه افلام مسابقه شباب مصر.' },
];

const NEWS_FILTERS = ['All', 'Awards'];

const NAV_ITEMS = [
  { key: 'work', label: 'Work' },
  { key: 'services', label: 'Services' },
  { key: 'about', label: 'About' },
  { key: 'impact', label: 'Impact' },
  { key: 'news', label: 'News' },
];

function useScrollReveal(page) {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const els = document.querySelectorAll('.reveal');
    if (prefersReduced) {
      els.forEach(el => el.classList.add('opacity-100', 'translate-y-0'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });
    els.forEach(el => {
      el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [page]);
}

const Eyebrow = ({ children }) => (
  <p className="text-gold text-xs font-bold tracking-[0.3em] uppercase mb-4">{children}</p>
);

const PrimaryButton = ({ children, onClick, className = '', href }) => {
  const Comp = href ? 'a' : 'button';
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 bg-gold text-black font-bold uppercase tracking-widest text-xs hover:bg-gold-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-all duration-300 ${className}`}
    >
      {children}
    </Comp>
  );
};

const SecondaryButton = ({ children, onClick, className = '', href }) => {
  const Comp = href ? 'a' : 'button';
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/25 text-white font-bold uppercase tracking-widest text-xs hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold transition-all duration-300 ${className}`}
    >
      {children}
    </Comp>
  );
};

const PageHero = ({ eyebrow, title, desc }) => (
  <section className="pt-40 pb-16 px-6 reveal">
    <div className="max-w-4xl mx-auto text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="font-display text-5xl md:text-6xl text-white uppercase tracking-tight mb-5">{title}</h1>
      {desc && <p className="text-zinc-400 text-base max-w-2xl mx-auto">{desc}</p>}
    </div>
  </section>
);

const MiniChart = ({ type }) => {
  if (type === 'donut') {
    return (
      <svg viewBox="0 0 60 60" className="w-16 h-16">
        <circle cx="30" cy="30" r="24" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="7" />
        <circle cx="30" cy="30" r="24" fill="none" stroke="#C9A227" strokeWidth="7" strokeDasharray="150.7" strokeDashoffset="55" strokeLinecap="round" transform="rotate(-90 30 30)" />
      </svg>
    );
  }
  if (type === 'line') {
    return (
      <svg viewBox="0 0 80 40" className="w-20 h-10">
        <polyline points="2,32 16,22 30,26 44,12 58,16 78,4" fill="none" stroke="#C9A227" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  const heights = [10, 18, 14, 24, 16, 21];
  return (
    <svg viewBox="0 0 80 32" className="w-20 h-8">
      {heights.map((h, i) => (
        <rect key={i} x={i * 13 + 2} y={32 - h} width="8" height={h} fill="rgba(255,255,255,0.15)" />
      ))}
    </svg>
  );
};

const Hero = ({ onCtaClick, onWatchWork }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 45% at 50% 8%, rgba(201,162,39,0.16), transparent 65%)' }}
    />
    <div aria-hidden="true" className="grain-overlay absolute inset-0 pointer-events-none opacity-[0.05]" />

    <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
      <Eyebrow>Cairo's Cinematic Production House</Eyebrow>
      <h1 className="font-display text-5xl sm:text-7xl md:text-8xl tracking-tight mb-6 uppercase text-white leading-[0.95]">
        Video that <br />
        <span className="text-gold">converts,</span> not <br />
        just impresses.
      </h1>
      <p className="text-lg md:text-xl text-zinc-400 mb-4 max-w-2xl mx-auto font-light">
        We produce commercials, brand films and campaigns for Egypt's fastest-growing brands averaging the engagement of their previous content.
      </p>
      <p className="text-sm text-zinc-500 mb-10 max-w-xl mx-auto uppercase tracking-widest">
        Creative thinking. Exceptional execution. Measurable results.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <PrimaryButton onClick={() => onCtaClick('hero')}>Book a Free Strategy Call <ArrowRight size={14} /></PrimaryButton>
        <SecondaryButton onClick={onWatchWork}>Watch Our Work <Play size={13} /></SecondaryButton>
      </div>
    </div>
  </section>
);

const StatsBar = () => (
  <section className="bg-black border-y border-white/5 reveal">
    <div className="max-w-7xl mx-auto px-6 py-10">
      <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.25em] text-center mb-8">By The Numbers</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <div key={i} className="text-center">
            <p className="font-display text-4xl md:text-5xl text-gold mb-1">{s.num}</p>
            <p className="text-zinc-400 text-[11px] uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedWork = ({ onPreview, onViewAll }) => (
  <section className="py-28 px-6 reveal">
    <div className="max-w-6xl mx-auto">
      <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <Eyebrow>Selected Work</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">Recent Projects</h2>
        </div>
        <button onClick={onViewAll} className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-gold transition-colors inline-flex items-center gap-1.5">
          View All Work <ArrowRight size={12} />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {FILMSTRIP_WORK.slice(0, 3).map((clip) => (
          <button
            key={clip.title}
            onClick={() => onPreview(clip)}
            className="group relative aspect-video bg-gradient-to-br from-zinc-800 via-zinc-900 to-black cursor-pointer overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-5">
              <span className="text-gold text-[9px] font-bold uppercase tracking-[0.2em] mb-1">{clip.category}</span>
              <h3 className="font-display text-xl text-white uppercase tracking-tight leading-tight">{clip.title}</h3>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1">{clip.client}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  </section>
);

const ClientLogosAndNews = ({ onViewNews }) => (
  <section className="py-20 px-6 bg-panel border-y border-white/5 reveal">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.25em] mb-6">Trusted By Brands Including</p>
        <div className="marquee overflow-hidden">
          <div className="flex items-center gap-8 flex-wrap">
            {CLIENT_LOGOS.map((name, i) => (
              <span key={i} className="font-display text-lg text-zinc-400 tracking-wide whitespace-nowrap">{name}</span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-zinc-500 text-[11px] font-bold uppercase tracking-[0.25em]">Latest News</p>
          <button onClick={onViewNews} className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 hover:text-gold transition-colors">See All</button>
        </div>
        <div className="space-y-3">
          {NEWS_ITEMS.slice(0, 2).map((n, i) => (
            <div key={i} className="border border-white/10 bg-black/40 p-4">
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest mb-1.5">{n.source} \u00b7 {n.date}</p>
              <p className="text-white text-sm font-bold leading-snug">{n.headline}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Services = ({ onCategoryClick, onCtaClick }) => (
  <section className="py-16 px-6 reveal">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="p-7 border border-white/5 bg-panel hover:border-gold/40 transition-colors group flex flex-col">
              <Icon size={22} className="text-gold mb-5" />
              <h3 className="font-display text-xl text-white uppercase tracking-tight mb-2">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-5 flex-1">{s.desc}</p>
              <button
                onClick={() => onCategoryClick(s.category)}
                className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-gold transition-colors inline-flex items-center gap-1.5"
              >
                See {s.category} examples <ArrowRight size={12} />
              </button>
            </div>
          );
        })}
        <div className="p-7 border border-dashed border-white/15 flex flex-col justify-center items-start gap-3">
          <p className="text-zinc-400 text-sm leading-relaxed">Not sure which lane fits your brief?</p>
          <SecondaryButton onClick={() => onCtaClick('services_unsure')} className="!px-5 !py-3">Ask on a Call</SecondaryButton>
        </div>
      </div>
    </div>
  </section>
);

const Filmstrip = ({ onPreview, activeCategory, onFilterChange }) => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const videoRefs = useRef([]);

  const visibleWork = activeCategory === 'All'
    ? FILMSTRIP_WORK
    : FILMSTRIP_WORK.filter(c => c.category === activeCategory);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === hoveredIndex) { v.currentTime = 0; v.play().catch(() => { }); }
      else v.pause();
    });
  }, [hoveredIndex, activeCategory]);

  return (
    <section className="pb-24 reveal">
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter work by category">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-colors border ${activeCategory === cat
                ? 'bg-gold text-black border-gold'
                : 'border-white/15 text-zinc-400 hover:border-gold hover:text-gold'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="sprocket-row mb-1">
        {Array.from({ length: 40 }).map((_, i) => <div key={i} className="sprocket-hole" />)}
      </div>

      <div ref={scrollRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-1 px-4 min-w-max bg-black py-4 border-y-2 border-black">
          {visibleWork.length === 0 && (
            <div className="w-full py-16 text-center text-zinc-600 text-sm uppercase tracking-widest">No projects in this category yet.</div>
          )}
          {visibleWork.map((clip, i) => (
            <button
              key={clip.title}
              onClick={() => onPreview(clip)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative w-[320px] aspect-video shrink-0 bg-gradient-to-br from-zinc-800 via-zinc-900 to-black cursor-pointer overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
            >
              {clip.videoUrl && (
                <video
                  ref={el => (videoRefs.current[i] = el)}
                  className="absolute inset-0 w-full h-full object-cover"
                  src={clip.videoUrl}
                  muted
                  loop
                  playsInline
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <span className="text-gold text-[9px] font-bold uppercase tracking-[0.2em] mb-1">{clip.category}</span>
                <h3 className="font-display text-xl text-white uppercase tracking-tight leading-tight">{clip.title}</h3>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1 mb-1.5">{clip.client}</p>
                <p className="text-zinc-300 text-[11px] leading-snug opacity-0 group-hover:opacity-100 transition-opacity duration-300">{clip.result}</p>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300 backdrop-blur-sm bg-black/30">
                <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white border-b-[5px] border-b-transparent ml-0.5" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="sprocket-row mt-1">
        {Array.from({ length: 40 }).map((_, i) => <div key={i} className="sprocket-hole" />)}
      </div>
    </section>
  );
};

const AboutPage = () => (
  <>
    <PageHero
      eyebrow="About Aoqab Studios"
      title="A Cairo studio built for brands that need more than pretty footage"
      desc="Founded to close the gap between agency-grade creative thinking and same-week production speed — every project runs through one dedicated crew, from concept to final delivery."
    />
    <section className="pb-20 px-6 reveal">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        <div className="p-7 border border-white/10 bg-panel">
          <p className="text-gold text-[11px] font-bold uppercase tracking-[0.25em] mb-3">Mission</p>
          <p className="text-zinc-300 text-sm leading-relaxed">Give every brand we work with a film that performs like a media buy, not just a portfolio piece.</p>
        </div>
        <div className="p-7 border border-white/10 bg-panel">
          <p className="text-gold text-[11px] font-bold uppercase tracking-[0.25em] mb-3">Approach & Values</p>
          <ul className="text-zinc-300 text-sm leading-relaxed space-y-1.5">
            <li>Push back on weak briefs, respectfully</li>
            <li>One crew, start to finish</li>
            <li>Cut for the platform it will run on</li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <Eyebrow>Timeline</Eyebrow>
        <h2 className="font-display text-3xl text-white uppercase tracking-tight mb-10">Milestones</h2>
        <div className="relative">
          <div className="absolute left-0 right-0 top-2.5 h-px bg-white/15" />
          <div className="flex justify-between">
            {MILESTONES.map((m, i) => (
              <div key={i} className="flex flex-col items-center text-center flex-1">
                <div className="w-2.5 h-2.5 rounded-full bg-gold relative z-10 mb-4" />
                <p className="text-white text-sm font-bold">{m.year}</p>
                <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1 max-w-[90px]">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mb-16">
        <Eyebrow>Impact Snapshot</Eyebrow>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => (
            <div key={i} className="border border-white/10 bg-panel p-5 text-center">
              <p className="font-display text-3xl text-gold mb-1">{s.num}</p>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto">
        <Eyebrow>Leadership</Eyebrow>
        <h2 className="font-display text-3xl text-white uppercase tracking-tight mb-8">Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {TEAM.map((t, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 rounded-full border-2 border-gold bg-black flex items-center justify-center mx-auto mb-3">
                <span className="font-display text-lg text-gold">{t.initials}</span>
              </div>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

const ImpactPage = ({ onCtaClick }) => (
  <>
    <PageHero
      eyebrow="Our Impact"
      title="By the numbers"
      desc="A quick look at what steady, same-week production has added up to across five years of client work."
    />
    <section className="pb-24 px-6 reveal">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
        {IMPACT_STATS.map((s, i) => (
          <div key={i} className="flex items-center justify-between p-7 border border-white/10 bg-panel">
            <div>
              <p className="font-display text-4xl text-gold mb-1">{s.num}</p>
              <p className="text-zinc-400 text-sm">{s.label}</p>
            </div>
            <MiniChart type={s.chart} />
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto">
        <Eyebrow>Clients & Partners</Eyebrow>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {CLIENT_LOGOS.map((name, i) => (
            <div key={i} className="border border-white/10 bg-panel flex items-center justify-center h-20 text-zinc-500 font-display text-lg uppercase tracking-tight">
              {name}
            </div>
          ))}
        </div>
        <div className="text-center border border-dashed border-white/15 p-10">
          <p className="text-white font-display text-2xl uppercase tracking-tight mb-4">Let's build your next campaign</p>
          <PrimaryButton onClick={() => onCtaClick('impact_cta')}>Book a Free Strategy Call <ArrowRight size={14} /></PrimaryButton>
        </div>
      </div>
    </section>
  </>
);

const NewsPage = () => {
  const [filter, setFilter] = useState('All');
  const [showAll, setShowAll] = useState(false);
  const filtered = filter === 'All' ? NEWS_ITEMS : NEWS_ITEMS.filter(n => n.category === filter);
  const visible = showAll ? filtered : filtered.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="News & Press"
        title="Where Aoqab has been featured"
        desc="Press mentions, newsletter features, and award wins — updated as they happen."
      />
      <section className="pb-24 px-6 reveal">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {NEWS_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => { setFilter(f); setShowAll(false); }}
                className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-widest transition-colors border ${filter === f ? 'bg-gold text-black border-gold' : 'border-white/15 text-zinc-400 hover:border-gold hover:text-gold'
                  }`}
              >
                {f}
              </button>
            ))}
          </div>

          {visible.length === 0 ? (
            <p className="text-zinc-600 text-sm uppercase tracking-widest text-center py-16">No items in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {visible.map((n, i) => (
                <div key={i} className="border border-white/10 bg-panel p-6 flex flex-col">
                  <p className="text-gold text-[9px] font-bold uppercase tracking-[0.2em] mb-3">{n.category}</p>
                  <p className="text-white text-sm font-bold leading-snug mb-4 flex-1">{n.headline}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-zinc-500 text-[10px] uppercase tracking-widest">{n.source}-{n.date}</p>
                    <span className="text-gold text-[11px] font-bold">Read</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!showAll && filtered.length > 3 && (
            <div className="text-center mt-10">
              <SecondaryButton onClick={() => setShowAll(true)}>Load More</SecondaryButton>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

const Process = () => (
  <section className="py-28 px-6 reveal">
    <div className="max-w-6xl mx-auto">
      <div className="mb-16 text-center">
        <Eyebrow>How It Works</Eyebrow>
        <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">Discovery to Delivery</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {PROCESS_STEPS.map((s, i) => (
          <div key={i} className="relative p-6 border border-white/5 bg-panel hover:border-gold/40 transition-colors group">
            <span className="font-display text-5xl text-white/10 group-hover:text-gold/20 transition-colors">{s.n}</span>
            <h3 className="font-display text-lg text-white uppercase tracking-tight mt-3 mb-2">{s.title}</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const LeadForm = ({ id }) => (
  <section id={id} className="py-28 px-6 bg-panel border-y border-white/5 reveal">
    <div className="max-w-xl mx-auto text-center">
      <Eyebrow>Get Started</Eyebrow>

      <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">
        Book Your Strategy Call
      </h2>

      <p className="text-zinc-500 text-sm mt-4 mb-8">
        20 minutes. No pitch deck. Just a real conversation about what you're trying to make happen.
      </p>

      <PrimaryButton onClick={() => openWhatsApp('lead_form')}>
        Book Now <ArrowRight size={14} />
      </PrimaryButton>
    </div>
  </section>
);

const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <section className="py-28 px-6 reveal">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12 text-center">
          <Eyebrow>Questions</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-white uppercase tracking-tight">Before You Ask</h2>
        </div>
        <div className="space-y-2">
          {FAQS.map((f, i) => (
            <div key={i} className="border border-white/10 rounded-lg overflow-hidden bg-panel">
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-white/5 transition-colors">
                <span className="text-white font-bold text-sm">{f.q}</span>
                <ChevronDown size={16} className={`text-gold shrink-0 transition-transform duration-200 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <div className="px-5 pb-5 text-zinc-400 text-sm leading-relaxed">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FinalCta = ({ onCtaClick }) => (
  <section className="py-28 px-6 border-t border-white/5">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="font-display text-4xl md:text-6xl text-white uppercase tracking-tight leading-none mb-6">
        Your Next Campaign<br /><span className="text-gold">Starts With a Call.</span>
      </h2>
      <p className="text-zinc-500 text-sm mb-8">No pitch deck. No pressure. Just a straight answer on fit and timeline.</p>
      <PrimaryButton onClick={() => onCtaClick('final_cta')}>Book a Free Strategy Call <ArrowRight size={14} /></PrimaryButton>
    </div>
  </section>
);

const ContactPage = ({ onCtaClick }) => (
  <>
    <PageHero eyebrow="Contact" title="Let's talk about your next film" />
    <Process />
    <LeadForm id="lead-form" />
    <FAQ />
    <FinalCta onCtaClick={onCtaClick} />
  </>
);

const Footer = ({ onNavigate }) => (
  <footer className="bg-black py-14 border-t border-white/10 px-6 pb-24 md:pb-14">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8">
      <div>
        <div className="font-display text-2xl text-white mb-2">AOQAB<span className="text-gold">.</span></div>
        <p className="text-zinc-600 text-xs uppercase tracking-widest">Cairo, Egypt</p>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {NAV_ITEMS.map(item => (
          <button key={item.key} onClick={() => onNavigate(item.key)} className="text-zinc-400 text-xs uppercase tracking-widest hover:text-gold transition-colors">{item.label}</button>
        ))}
      </div>
      <div className="flex flex-col gap-3 md:items-end">
        <a href="mailto:hello@aoqab.com" className="text-zinc-400 text-sm hover:text-gold transition-colors flex items-center gap-2"><Mail size={13} /> hello@aoqab.com</a>
        <a href="tel:+201101190310" className="text-zinc-400 text-sm hover:text-gold transition-colors flex items-center gap-2"><Phone size={13} /> +20 110 119 0310</a>
        <a href="https://www.instagram.com/aoqab_studio/" target="_blank" rel="noreferrer" className="text-zinc-400 text-sm hover:text-gold transition-colors flex items-center gap-2"><Instagram size={13} /> @aoqab_studio</a>
      </div>
    </div>
    <p className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-zinc-700 text-[10px] uppercase tracking-widest">{new Date().getFullYear()} Aoqab Studios. All rights reserved.</p>
  </footer>
);

const MobileCta = ({ onCtaClick }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 p-3 bg-black/90 backdrop-blur-md border-t border-white/10">
      <PrimaryButton onClick={() => onCtaClick('mobile_sticky')} className="w-full !py-3.5">Book a Free Strategy Call <ArrowRight size={14} /></PrimaryButton>
    </div>
  );
};

const CaseStudyModal = ({ clip, onClose, onCtaClick }) => {
  if (!clip) return null;
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto p-6" onClick={onClose}>
      <div className="max-w-3xl mx-auto py-10" onClick={e => e.stopPropagation()}>
        <div className="flex justify-end mb-4">
          <button onClick={onClose} aria-label="Close case study" className="text-white hover:text-gold transition-colors bg-white/10 rounded-full p-2"><X size={20} /></button>
        </div>

        <div className="w-full aspect-video bg-zinc-900 border border-white/10 rounded-lg flex items-center justify-center mb-8 overflow-hidden">
          {clip.videoUrl
            ? <video className="w-full h-full object-cover" src={clip.videoUrl} controls />
            : <p className="text-zinc-600 text-sm uppercase tracking-widest px-6 text-center">Video goes here for "{clip.title}"</p>}
        </div>

        <span className="text-gold text-[10px] font-bold uppercase tracking-[0.25em]">{clip.category}</span>
        <h3 className="text-white font-display text-3xl md:text-4xl uppercase mt-2 mb-1">{clip.title}</h3>
        <p className="text-zinc-500 text-sm uppercase tracking-widest mb-8">{clip.client}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div>
            <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">Challenge</p>
            <p className="text-zinc-300 text-sm leading-relaxed">{clip.challenge}</p>
          </div>
          <div>
            <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">Approach</p>
            <p className="text-zinc-300 text-sm leading-relaxed">{clip.approach}</p>
          </div>
          <div>
            <p className="text-gold text-[10px] font-bold uppercase tracking-widest mb-2">Result</p>
            <p className="text-zinc-300 text-sm leading-relaxed">{clip.result}</p>
          </div>
        </div>

        <PrimaryButton onClick={() => onCtaClick(`case_study_${clip.category}`)}>Start a Similar Project <ArrowRight size={14} /></PrimaryButton>
      </div>
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState('home');
  const [previewClip, setPreviewClip] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [pendingScroll, setPendingScroll] = useState(null);
  useScrollReveal(page);

  useEffect(() => {
    if (pendingScroll) {
      const el = document.getElementById(pendingScroll);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setPendingScroll(null);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [page]);

  const navigate = (key) => {
    trackEvent('page_view', { page: key });
    setPage(key);
  };

  const scrollToForm = (source) => {
    openWhatsApp(source);
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    trackEvent('service_card_click', { category: cat });
    navigate('work');
  };

  const handlePreview = (clip) => {
    trackEvent('view_case_study', { title: clip.title, category: clip.category });
    setPreviewClip(clip);
  };

  const handleCaseStudyCta = (source) => {
    setPreviewClip(null);
    scrollToForm(source);
  };

  return (
    <div className="bg-ink min-h-screen font-body text-white selection:bg-gold selection:text-black overflow-x-hidden">
      <ThemeStyles />
      <Nav page={page} onNavigate={navigate} onCtaClick={scrollToForm} />

      {page === 'home' && (
        <>
          <Hero onCtaClick={scrollToForm} onWatchWork={() => navigate('work')} />
          <StatsBar />
          <FeaturedWork onPreview={handlePreview} onViewAll={() => navigate('work')} />
          <ClientLogosAndNews onViewNews={() => navigate('news')} />
        </>
      )}
      {page === 'work' && (
        <>
          <PageHero eyebrow="Selected Work" title="The Reel" desc="Click a project for the full case study — challenge, approach and result." />
          <Filmstrip onPreview={handlePreview} activeCategory={activeCategory} onFilterChange={setActiveCategory} />
        </>
      )}
      {page === 'services' && (
        <>
          <PageHero eyebrow="What We Make" title="Five Ways We Tell Your Story" desc="Every project starts by placing your brief in one of these lanes — it's how we scope, crew and price accurately before day one." />
          <Services onCategoryClick={handleCategoryClick} onCtaClick={scrollToForm} />
        </>
      )}
      {page === 'about' && <AboutPage />}
      {page === 'impact' && <ImpactPage onCtaClick={scrollToForm} />}
      {page === 'news' && <NewsPage />}
      {page === 'contact' && <ContactPage onCtaClick={scrollToForm} />}

      <Footer onNavigate={navigate} />
      <CaseStudyModal clip={previewClip} onClose={() => setPreviewClip(null)} onCtaClick={handleCaseStudyCta} />
      <MobileCta onCtaClick={scrollToForm} />
    </div>
  );
}