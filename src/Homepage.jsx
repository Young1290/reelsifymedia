import React from "react";
import { Check, Camera, CalendarCheck2, Rocket, Shield, Sparkles, Timer, Phone, Mail, MapPin, ChevronRight, Instagram, Facebook, Linkedin } from "lucide-react";

// NOTE: This is a single-file, production-ready React landing page for Reelsify Media (KL Event Filming focus).
// Styling: TailwindCSS. All elements are self-contained. Replace placeholder assets/links with real ones.
// Components: Navbar, Hero, Trust Logos, Services, Packages, Portfolio, Process, Why Us, Testimonials, FAQ, CTA, Footer.
// Conversion: Above-the-fold WhatsApp & Book-Call CTAs; sticky mobile CTA; schema.org JSON-LD; accessible forms.

export default function ReelsifyKLEventLanding() {
  const logos = [
    { name: "ILN", src: "/images/ILN.png" },
    { name: "MiTEC", src: "/images/mitec.png" },
    { name: "Muzium Negara", src: "/images/muzium-negara.png" },
    { name: "MoSTI", src: "/images/mosti.png" },
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

  // GA4 event helper
  const trackEvent = (action, params) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", action, params);
    }
  };

  // Load Instagram embed script
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

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
            <a
              href="https://api.whatsapp.com/send/?phone=60127183499&text&type=phone_number&app_absent=0"
              className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-slate-900 text-white hover:bg-slate-800"
              onClick={() => trackEvent("whatsapp_click", { event_category: "engagement", event_label: "WhatsApp Contact (Nav)" })}
            >
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
              <a
                href="https://api.whatsapp.com/send/?phone=60127183499&text&type=phone_number&app_absent=0"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-slate-900 text-white hover:bg-slate-800"
                onClick={() => trackEvent("whatsapp_click", { event_category: "engagement", event_label: "WhatsApp Contact (Hero)" })}
              >
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
              <img key={l.name} src={l.src} alt={`${l.name} logo`} loading="lazy" className="h-12 md:h-16 object-contain mx-auto"/>
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
            {/* Additional YouTube embeds */}
            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-slate-100">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/5Yxb5Srw4Ms?rel=0" title="Event videography in KL – highlight 4" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-slate-100">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/Y9WCCfXQwh4?rel=0" title="Event videography in KL – highlight 5" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden ring-1 ring-slate-200">
              <blockquote className="instagram-media w-full h-full" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/C_P73LhylLP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" data-instgrm-version="14">
                <div className="flex items-center justify-center h-full">
                  <a href="https://www.instagram.com/reel/C_P73LhylLP/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-slate-900">
                    View Instagram Reel
                  </a>
                </div>
              </blockquote>
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
            <img src="/images/BTS.jpg" alt="Behind the scenes of event filming in Kuala Lumpur" loading="lazy" className="w-full h-full object-cover"/>
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
              <a
                href="tel:0127183499"
                className="flex items-center gap-2 hover:underline"
                onClick={() => trackEvent("phone_click", { event_category: "engagement", event_label: "Phone Call" })}
              >
                <Phone className="h-4 w-4"/> 012-718 3499
              </a>
              <a
                href="mailto:gin000103@gmail.com"
                className="flex items-center gap-2 hover:underline"
                onClick={() => trackEvent("email_click", { event_category: "engagement", event_label: "Email Contact" })}
              >
                <Mail className="h-4 w-4"/> gin000103@gmail.com
              </a>
              <div className="flex items-center gap-2"><MapPin className="h-4 w-4"/> Kuala Lumpur • PJ • Selangor</div>
            </div>
            <div className="mt-6 flex gap-4">
              <a aria-label="Instagram" href="https://www.instagram.com/reelsifymedia/" className="p-3 rounded-full bg-white/10 hover:bg-white/20"><Instagram className="h-5 w-5"/></a>
              <a aria-label="Facebook" href="https://www.facebook.com/p/Reelsify-Media-61552832105598/" className="p-3 rounded-full bg-white/10 hover:bg-white/20"><Facebook className="h-5 w-5"/></a>
              <a aria-label="LinkedIn" href="https://my.linkedin.com/company/reelsify-media" className="p-3 rounded-full bg-white/10 hover:bg-white/20"><Linkedin className="h-5 w-5"/></a>
            </div>
          </div>

          <form
            name="contact"
            className="bg-white text-slate-900 rounded-2xl p-6 shadow-2xl"
            onSubmit={(e) => {
              e.preventDefault();
              trackEvent("form_submit", { event_category: "lead", event_label: "Contact Form" });
              
              // Get form data
              const formData = new FormData(e.target);
              const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                eventDate: formData.get('event-date'),
                venue: formData.get('venue'),
                coverage: formData.get('coverage'),
                deliverables: formData.get('deliverables'),
                notes: formData.get('notes')
              };

              // Format message for WhatsApp
              const message = `🎬 *New Event Inquiry - Reelsify Media*

👤 *Client Details:*
• Name: ${data.name}
• Email: ${data.email}
• Phone: ${data.phone}

📅 *Event Information:*
• Date: ${data.eventDate}
• Venue: ${data.venue}
• Coverage: ${data.coverage}
• Deliverables: ${data.deliverables}

📝 *Additional Notes:*
${data.notes || 'No additional notes provided'}

---
Submitted via reelsify.co contact form`;

              // Create WhatsApp URL with pre-filled message
              const whatsappUrl = `https://api.whatsapp.com/send/?phone=60127183499&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
              
              // Directly redirect to WhatsApp (no new tab, immediate redirect)
              window.location.href = whatsappUrl;
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1 text-sm">Name<input name="name" required className="border rounded-xl px-3 py-2" placeholder="Your name"/></label>
              <label className="flex flex-col gap-1 text-sm">Email<input name="email" type="email" required className="border rounded-xl px-3 py-2" placeholder="you@email.com"/></label>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <label className="flex flex-col gap-1 text-sm">Phone / WhatsApp<input name="phone" type="tel" required className="border rounded-xl px-3 py-2" placeholder="+60…"/></label>
              <label className="flex flex-col gap-1 text-sm">Event Date<input name="event-date" type="date" required className="border rounded-xl px-3 py-2"/></label>
            </div>
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <label className="flex flex-col gap-1 text-sm">Venue / City<input name="venue" required className="border rounded-xl px-3 py-2" placeholder="KLCC, PJ, …"/></label>
              <label className="flex flex-col gap-1 text-sm">Estimated Coverage<select name="coverage" required className="border rounded-xl px-3 py-2"><option value="">Select coverage</option><option>Half-Day (≤4h)</option><option>Full-Day (≤8h)</option><option>Multi-Day</option></select></label>
            </div>
            <label className="flex flex-col gap-1 text-sm mt-4">Deliverables<select name="deliverables" required className="border rounded-xl px-3 py-2"><option value="">Select deliverables</option><option>Event Highlight</option><option>Event Highlight + Edited Photos</option><option>Edited Photos</option><option>Others</option></select></label>
            <label className="flex flex-col gap-1 text-sm mt-4">Notes<textarea name="notes" className="border rounded-xl px-3 py-2 min-h-[120px]" placeholder="Tell us about your program, run-of-show, must-capture moments…"/></label>
            <button type="submit" className="mt-6 w-full rounded-2xl bg-slate-900 text-white py-3 hover:bg-slate-800 flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
              </svg>
              Send to WhatsApp
            </button>
            <p className="text-xs text-slate-500 mt-3">Clicking will open WhatsApp with your inquiry pre-filled. We reply within one business day.</p>
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
      <a
        href="https://api.whatsapp.com/send/?phone=60127183499&text&type=phone_number&app_absent=0"
        className="fixed md:hidden bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full px-5 py-3 bg-slate-900 text-white shadow-2xl"
        onClick={() => trackEvent("whatsapp_click", { event_category: "engagement", event_label: "WhatsApp Contact (Mobile Sticky)" })}
      >
        <Phone className="h-4 w-4"/> WhatsApp for Quote
      </a>
    </main>
  );
}
