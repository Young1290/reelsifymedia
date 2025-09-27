import React from "react";
import { Link } from "react-router-dom";
import { Check, MapPin, Phone, CalendarCheck2, Rocket } from "lucide-react";

export default function DroneVideographyKL() {
  const venues = [
    { name: "MiTEC", desc: "Exterior establishing shots and event-day crowd flows (subject to permit)." },
    { name: "KLCC", desc: "Iconic skyline and venue exteriors (drone usage per local regulation)." },
    { name: "Hilton", desc: "Property overview and arrival visuals (venue approval required)." },
  ];
  const bullets = [
    "Licensed operators and flight planning",
    "Permit and venue coordination guidance",
    "4K aerial establishing shots for highlights and reels",
    "Weather and safety-first decision framework",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Drone Videography in Kuala Lumpur",
          areaServed: ["Kuala Lumpur", "PJ", "Selangor"],
          provider: { "@type": "Organization", name: "Reelsify Media" },
          serviceType: "Drone videography",
        }),
      }}/>
      <header className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">← Back to Home</Link>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Drone Videography in KL</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Aerial establishing visuals for events in Kuala Lumpur—MiTEC, KLCC, Hilton—with permits and safety-first planning.</p>
          <div className="mt-6 flex gap-3">
            <a href="https://api.whatsapp.com/send/?phone=60127183499&text&type=phone_number&app_absent=0" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-slate-900 text-white hover:bg-slate-800"><Phone className="h-4 w-4"/> Get Instant Quote</a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-slate-300 hover:bg-slate-50"><CalendarCheck2 className="h-4 w-4"/> Book a Producer Call</a>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="rounded-xl w-12 h-12 grid place-items-center bg-slate-900 text-white mb-4"><Rocket className="h-6 w-6"/></div>
            <h2 className="text-2xl font-bold">What you get</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {bullets.map(b => (
                <li key={b} className="flex gap-2"><Check className="h-5 w-5"/> <span>{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6">
            <h3 className="text-lg font-semibold flex items-center gap-2"><MapPin className="h-5 w-5"/> KL Venue Experience</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              {venues.map(v => (
                <li key={v.name}><strong>{v.name}</strong> — {v.desc}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
