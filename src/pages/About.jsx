import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">← Back to Home</Link>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">About Reelsify Media</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">We help brands and organizers in Kuala Lumpur turn events into shareable stories through fast, reliable video production.</p>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 prose prose-slate">
          <p>
            Our team specializes in event videography for conferences, product launches, galas, and corporate gatherings across KL, PJ, and Selangor. We focus on
            efficient on-site workflows, clean audio capture, and quick turnarounds so your content is ready to publish while the momentum is still high.
          </p>
          <p>
            From single-cam highlight coverage to multi-cam productions with lighting and drone add-ons, we scale the crew to your program and venue.
          </p>
        </div>
      </section>
    </main>
  );
}
