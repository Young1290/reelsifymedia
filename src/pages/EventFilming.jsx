import React from "react";
import { Camera, Check, Phone, CalendarCheck2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function EventFilming() {
  const bullets = [
    "Multi-cam event coverage in KL / PJ",
    "Clean panel and keynote audio capture",
    "72-hour highlight delivery; optional same-day teaser",
    "Scalable crew, lighting, and drone add-ons",
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">← Back to Home</Link>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Event Filming in Kuala Lumpur</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Reliable, scalable video coverage for conferences, launches, galas, and corporate events across KL, PJ, and Selangor.</p>
          <div className="mt-6 flex gap-3">
            <a href="https://api.whatsapp.com/send/?phone=60127183499&text&type=phone_number&app_absent=0" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-slate-900 text-white hover:bg-slate-800"><Phone className="h-4 w-4"/> Get Instant Quote</a>
            <a href="/#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-slate-300 hover:bg-slate-50"><CalendarCheck2 className="h-4 w-4"/> Book a Producer Call</a>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="rounded-xl w-12 h-12 grid place-items-center bg-slate-900 text-white mb-4"><Camera className="h-6 w-6"/></div>
            <h2 className="text-2xl font-bold">What you get</h2>
            <ul className="mt-4 space-y-3 text-slate-700">
              {bullets.map(b => (
                <li key={b} className="flex gap-2"><Check className="h-5 w-5"/> <span>{b}</span></li>
              ))}
            </ul>
          </div>
          <div className="aspect-video rounded-3xl bg-slate-100 overflow-hidden ring-1 ring-slate-200">
            <img loading="lazy" src="/images/behind-the-scenes.svg" alt="Event videography in Kuala Lumpur behind the scenes" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>
    </main>
  );
}
