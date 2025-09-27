import React from "react";
import { Check, Camera, CalendarCheck2, Rocket, Shield, Sparkles, Timer, Phone, Mail, MapPin, ChevronRight, Instagram, Facebook, Linkedin } from "lucide-react";

// NOTE: This is a single-file, production-ready React landing page for Reelsify Media (KL Event Filming focus).
// Styling: TailwindCSS. All elements are self-contained. Replace placeholder assets/links with real ones.
// Components: Navbar, Hero, Trust Logos, Services, Packages, Portfolio, Process, Why Us, Testimonials, FAQ, CTA, Footer.
// Conversion: Above-the-fold WhatsApp & Book-Call CTAs; sticky mobile CTA; schema.org JSON-LD; accessible forms.

export default function ReelsifyKLEventLanding() {
  const logos = [
    { name: "ILN", src: "/images/iln.svg" },
    { name: "MiTEC", src: "/images/mitec.svg" },
    { name: "Muzium Negara", src: "/images/muzium-negara.svg" },
    { name: "MoSTI", src: "/images/mosti.svg" },
  ];

  const packages = [
    {
        tier: "Single Cam",
        price: "RM 1,500",
        desc: "Up to 4 hours • 1 videographer + 1 camera",
        bullets: [
        "1–2 min event highlight film (4K)",
        "50+ edited photos",
        "Lav mic for speeches",
        "48–72h first cut",
        ],
        cta: "First come, first serve",
        popular: false,
      },
    {
      tier: "Half-Day Highlight",
      price: "RM 2,500",
      desc: "Up to 4 hours • 2 videographer + 2 camera",
      bullets: [
        "1–2 min event highlight film (4K)",
        "50+ edited photos",
        "Lav mic for speeches",
        "48–72h first cut",
      ],
      cta: "Get Quote",
      popular: false,
    },
    {
      tier: "Full-Day Story",
      price: "RM 3,500",
      desc: "Up to 8 hours • 2 videographers + 2 cameras",
      bullets: [
        "2–3 min highlight film + 15–30s reel",
        "100+ edited photos",
        "On-site backup & lighting kit",
        "72h delivery (rush available)",
      ],
      cta: "Book This",
      popular: true,
    },

  ];

  const faqs = [
    {
      q: "How fast is delivery?",
      a: "Standard 72h turnaround. 48/24h rush available. Raw footage add-on optional.",
    },
    {
      q: "Is drone included?",
      a: "Drone add-on available subject to venue, weather, and regulations.",
    },
    {
      q: "Same-day edits?",
      a: "Yes—same-day 30–45s teaser option.",
    },
    {
      q: "How to book?",
      a: "50% deposit to secure date; balance upon final delivery.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Reelsify Media — KL Event Filming",
            image: ["https://reelsifymedia.com/og.jpg"],
            url: "https://reelsify.co",
            telephone: "0127183499",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kuala Lumpur",
              addressRegion: "WP Kuala Lumpur",
              addressCountry: "MY"
            },
            areaServed: ["Kuala Lumpur", "PJ", "Selangor"],
            sameAs: [
              "https://www.instagram.com/reelsifymedia/",
              "https://www.facebook.com/p/Reelsify-Media-61552832105598/",
              "https://my.linkedin.com/company/reelsify-media"
            ],
            makesOffer: packages.map(p => ({"@type": "Offer", name: p.tier, price: p.price})),
            priceRange: "RM RM2,500–RM3,500"
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Reelsify Media",
            url: "https://reelsify.co",
            potentialAction: {
              "@type": "SearchAction",
              target: {
                "@type": "EntryPoint",
                urlTemplate: "https://reelsify.co/?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          }
        ])
      }}/>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur bg-white/80 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-xl">
            <Camera className="h-6 w-6" /> Reelsify Media
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="/portfolio" className="hover:text-slate-700">Work</a>
            <a href="#packages" className="hover:text-slate-700">Packages</a>
            <a href="#process" className="hover:text-slate-700">Process</a>
            <a href="/pricing" className="hover:text-slate-700">Pricing</a>
            <a href="/about" className="hover:text-slate-700">About</a>
            <a href="/blog" className="hover:text-slate-700">Blog</a>
            <a href="#faq" className="hover:text-slate-700">FAQ</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
            <a href="https://api.whatsapp.com/send/?phone=60127183499&text&type=phone_number&app_absent=0" className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800">
              <Phone className="h-4 w-4"/> WhatsApp Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10 items-center px-4 py-16 md:py-24">
          <div>
            <p className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-slate-500">
              <Sparkles className="h-3 w-3"/> KL Event Filming Specialists
            </p>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Transform Events into <span className="underline decoration-yellow-300 decoration-8 underline-offset-6">Shareable Stories</span>
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              We turn your event into high-performing short-form content and highlight films—ready to post within the week. From corporate launches to conferences and galas—we’ve got you covered.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://api.whatsapp.com/send/?phone=60127183499&text&type=phone_number&app_absent=0" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-slate-900 text-white hover:bg-slate-800">
                <Phone className="h-4 w-4"/> Get Instant Quote
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-slate-300 hover:bg-slate-50">
                <CalendarCheck2 className="h-4 w-4"/> Book a Producer Call
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2"><Timer className="h-4 w-4"/> 72h Delivery</div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4"/> Backup & Insurance</div>
              <div className="flex items-center gap-2"><Rocket className="h-4 w-4"/> Same-Day Teasers</div>
            </div>
          </div>
          <div className="relative aspect-video rounded-3xl bg-slate-100 shadow-2xl overflow-hidden ring-1 ring-slate-200">
            {/* Replace with real showreel embed */}
            <iframe className="w-full h-full" src="https://www.youtube.com/embed/fnrQ74wp6PU?rel=0&autoplay=1&mute=1&loop=1&playlist=fnrQ74wp6PU" title="Reelsify Event Showreel in Kuala Lumpur" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      </section>

      {/* Trust Logos */}
      <section className="py-8 border-y border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-4">Trusted by</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center opacity-80">
            {logos.map(l => (
              <img key={l.name} src={l.src} alt={`${l.name} logo`} loading="lazy" className="h-8 md:h-10 object-contain mx-auto"/>
            ))}
          </div>
        </div>
      </section>

      {/* Services (Event-focused) */}
      <section id="services" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {icon: <Camera className="h-6 w-6"/>, title: "Event Filming (KL)", desc: "Conference, Launch, Gala, Expo, Graduation, Concert, Roadshow", href: "/event-filming-kl"},
              {icon: <Sparkles className="h-6 w-6"/>, title: "Event Photography (KL)", desc: "Speaker portraits, VIPs, group photos, candid coverage", href: "/event-photography-kl"},
              {icon: <Rocket className="h-6 w-6"/>, title: "Drone Videography (KL)", desc: "Aerial establishing shots and property visuals (permits subject to venue)", href: "/drone-videography-kl"},
            ].map((s) => (
              <a key={s.title} href={s.href} className="rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="rounded-xl w-10 h-10 grid place-items-center bg-slate-900 text-white mb-4">{s.icon}</div>
                <h3 className="font-semibold text-lg">{s.title}</h3>
                <p className="text-slate-600 mt-2">{s.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Event Packages (KL)</h2>
            <a href="#contact" className="text-sm inline-flex items-center gap-1 hover:underline">Need a custom quote? <ChevronRight className="h-4 w-4"/></a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div key={p.tier} className={`rounded-3xl border ${p.popular? 'border-slate-900 shadow-xl' : 'border-slate-200 shadow-sm'} p-6 flex flex-col`}>
                {p.popular && <div className="text-xs uppercase tracking-widest text-white bg-slate-900 inline-block px-3 py-1 rounded-full self-start mb-4">Most Popular</div>}
                <h3 className="text-xl font-bold">{p.tier}</h3>
                <p className="text-3xl font-extrabold mt-2">{p.price}</p>
                <p className="text-slate-600 mt-1">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-slate-700">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex gap-2"><Check className="h-5 w-5 shrink-0"/> <span>{b}</span></li>
                  ))}
                </ul>
                <a href="#contact" className="mt-6 inline-flex items-center justify-center rounded-2xl px-4 py-3 bg-slate-900 text-white hover:bg-slate-800">{p.cta}</a>
                <p className="text-xs text-slate-500 mt-3">Add-ons: Extra hour RM300 • Drone RM400 • Same-day teaser RM500</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="work" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Recent Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* YouTube embeds from client-provided links */}
            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-slate-100">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/fnrQ74wp6PU?rel=0" title="Event videography in KL – highlight 1" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-slate-100">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/QRcsXgC1oW8?rel=0" title="Event videography in KL – highlight 2" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-slate-100">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/9pPGWiHTKDQ?rel=0" title="Event videography in KL – highlight 3" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            {/* Additional placeholders */}
            <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden ring-1 ring-slate-200">
              <img src="/images/portfolio/event-4.svg" alt="Event videography in Kuala Lumpur portfolio image 4" loading="lazy" className="w-full h-full object-cover"/>
            </div>
            <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden ring-1 ring-slate-200">
              <img src="/images/portfolio/event-5.svg" alt="Event videography in Kuala Lumpur portfolio image 5" loading="lazy" className="w-full h-full object-cover"/>
            </div>
            <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden ring-1 ring-slate-200">
              <img src="/images/portfolio/event-6.svg" alt="Event videography in Kuala Lumpur portfolio image 6" loading="lazy" className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="mt-6"><a href="/portfolio" className="inline-flex items-center gap-2 text-slate-900 hover:underline">View full portfolio <ChevronRight className="h-4 w-4"/></a></div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Our 3-Step Process</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{t:"Plan",d:"Pre-production: run-of-show, shot list, venue walk-through, audio I/O."},{t:"Shoot",d:"Multi-cam coverage with redundancy and on-site backup."},{t:"Deliver",d:"72h highlight + reels; optional same-day teaser (30–45s)."}].map((s,idx)=>(
              <div key={s.t} className="rounded-2xl p-6 border border-slate-200 bg-white">
                <div className="text-5xl font-black text-slate-200">0{idx+1}</div>
                <h3 className="text-lg font-semibold mt-2">{s.t}</h3>
                <p className="text-slate-600 mt-2">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Why Reelsify for Events?</h2>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                "Local venue know-how across KL/PJ hotels, halls, and AV standards",
                "Reliable delivery: highlight within 72 hours; reels that perform",
                "Scalable crew and gear for multi-cam, photography, lighting, and drone",
                "Transparent packages and add-ons that fit your budget",
              ].map(li => (
                <li key={li} className="flex gap-2"><Check className="h-5 w-5"/> <span>{li}</span></li>
              ))}
            </ul>
          </div>
          <div className="aspect-video rounded-3xl bg-slate-100 overflow-hidden ring-1 ring-slate-200">
            <img src="/images/behind-the-scenes.svg" alt="Behind the scenes of event filming in Kuala Lumpur" loading="lazy" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Client Love</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Their same-day teaser helped us post during the event!","Super professional with audio—our panel sounded great.","Fast, friendly, and the reels performed really well."].map((t, i)=> (
              <div key={i} className="rounded-2xl p-6 border border-slate-200 bg-white">
                <p className="text-slate-700">“{t}”</p>
                <div className="mt-4 text-sm text-slate-500">— Client {i+1}, Kuala Lumpur</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">FAQ</h2>
          <div className="divide-y divide-slate-200 border-y">
            {faqs.map((f, i)=> (
              <details key={i} className="group">
                <summary className="cursor-pointer list-none py-4 flex items-center justify-between">
                  <span className="font-medium">{f.q}</span>
                  <ChevronRight className="h-5 w-5 transition-transform group-open:rotate-90"/>
                </summary>
                <div className="pb-4 text-slate-600">{f.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Let’s lock your event date</h2>
            <p className="mt-2 text-slate-300">Tell us about your event and the deliverables you need. We’ll reply within the day.</p>
            <div className="mt-6 space-y-3 text-slate-200">
              <div className="flex items-center gap-2"><Phone className="h-4 w-4"/> 0127183499</div>
              <div className="flex items-center gap-2"><Mail className="h-4 w-4"/> gin000103@gmail.com</div>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Kuala Lumpur • PJ • Selangor</div>
            </div>
            <div className="mt-6 flex gap-4">
              <a aria-label="Instagram" href="https://www.instagram.com/reelsifymedia/" className="p-3 rounded-full bg-white/10 hover:bg-white/20"><Instagram className="h-5 w-5"/></a>
              <a aria-label="Facebook" href="https://www.facebook.com/p/Reelsify-Media-61552832105598/" className="p-3 rounded-full bg-white/10 hover:bg-white/20"><Facebook className="h-5 w-5"/></a>
              <a aria-label="LinkedIn" href="https://my.linkedin.com/company/reelsify-media" className="p-3 rounded-full bg-white/10 hover:bg-white/20"><Linkedin className="h-5 w-5"/></a>
            </div>
          </div>

          <form className="bg-white text-slate-900 rounded-2xl p-6 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1 text-sm">Name<input className="border rounded-xl px-3 py-2" placeholder="Your name"/></label>
              <label className="flex flex-col gap-1 text-sm">Email<input className="border rounded-xl px-3 py-2" placeholder="you@email.com"/></label>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <label className="flex flex-col gap-1 text-sm">Phone / WhatsApp<input className="border rounded-xl px-3 py-2" placeholder="+60…"/></label>
              <label className="flex flex-col gap-1 text-sm">Event Date<input type="date" className="border rounded-xl px-3 py-2"/></label>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1 text-sm">Venue / City<input className="border rounded-xl px-3 py-2" placeholder="KLCC, PJ, …"/></label>
              <label className="flex flex-col gap-1 text-sm">Estimated Coverage<select className="border rounded-xl px-3 py-2"><option>Half-Day (≤4h)</option><option>Full-Day (≤8h)</option><option>Multi-Day</option></select></label>
            </div>
            <label className="flex flex-col gap-1 text-sm mt-4">Deliverables<select className="border rounded-xl px-3 py-2"><option>Highlight Film</option><option>Highlight + 1 Reel</option><option>Highlight + 3 Reels</option><option>Raw Footage Add-on</option></select></label>
            <label className="flex flex-col gap-1 text-sm mt-4">Notes<textarea className="border rounded-xl px-3 py-2 min-h-[120px]" placeholder="Tell us about your program, run-of-show, must-capture moments…"/></label>
            <button type="button" className="mt-6 w-full rounded-2xl bg-slate-900 text-white py-3 hover:bg-slate-800">Send Request</button>
            <p className="text-xs text-slate-500 mt-3">By submitting, you agree to be contacted about your inquiry. We reply within one business day.</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 text-sm text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>© {new Date().getFullYear()} Reelsify Media. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="/about" className="hover:text-slate-700">Privacy</a>
            <a href="/about" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <a href="https://api.whatsapp.com/send/?phone=60127183499&text&type=phone_number&app_absent=0" className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full px-5 py-3 bg-slate-900 text-white shadow-2xl">
        <Phone className="h-4 w-4"/> WhatsApp for Quote
      </a>
    </main>
  );
}
