import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const videos = [
    { id: "fnrQ74wp6PU", title: "Event Video 1" },
    { id: "QRcsXgC1oW8", title: "Event Video 2" },
    { id: "9pPGWiHTKDQ", title: "Event Video 3" },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">← Back to Home</Link>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Portfolio</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Recent event highlights and reels from Kuala Lumpur, PJ, and Selangor.</p>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map(v => (
              <div key={v.id} className="aspect-video rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-slate-100">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
