import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  const packages = [
    { tier: "Single Cam", price: "RM 1,500", desc: "Up to 4 hours • 1 videographer + 1 camera" },
    { tier: "Half-Day Highlight", price: "RM 2,500", desc: "Up to 4 hours • 2 videographers + 2 cameras" },
    { tier: "Full-Day Story", price: "RM 3,500", desc: "Up to 8 hours • 2 videographers + 2 cameras" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">← Back to Home</Link>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Pricing</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Transparent packages that scale with your program. Add-ons available for lighting, drone, and extra hours.</p>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {packages.map(p => (
            <div key={p.tier} className="rounded-3xl border border-slate-200 p-6">
              <h3 className="text-xl font-bold">{p.tier}</h3>
              <div className="text-3xl font-extrabold mt-2">{p.price}</div>
              <p className="text-slate-600 mt-1">{p.desc}</p>
              <div className="mt-6"><a href="/#contact" className="inline-flex items-center justify-center rounded-2xl px-4 py-3 bg-slate-900 text-white hover:bg-slate-800">Get Quote</a></div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
