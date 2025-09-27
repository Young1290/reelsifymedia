import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      title: "Event Videography in KL: A Planning Checklist",
      excerpt: "A practical list to ensure smooth coverage: run-of-show, audio I/O, lighting, and more.",
      url: "#",
    },
    {
      title: "How We Deliver 72h Event Highlights",
      excerpt: "Our workflow and backups to keep quality high while moving fast.",
      url: "#",
    },
    {
      title: "Conference Filming Audio Guide",
      excerpt: "Clean panel sound in hotel ballrooms—mics, mixers, and placements.",
      url: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <Link to="/" className="text-sm text-slate-600 hover:text-slate-900">← Back to Home</Link>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">Blog</h1>
          <p className="mt-3 text-slate-600 max-w-2xl">Guides, checklists, and case studies about event videography in Kuala Lumpur.</p>
        </div>
      </header>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6">
          {posts.map(p => (
            <article key={p.title} className="rounded-2xl border border-slate-200 p-6">
              <h2 className="text-lg font-semibold">{p.title}</h2>
              <p className="text-slate-600 mt-2">{p.excerpt}</p>
              <div className="mt-4"><a href={p.url} className="text-slate-900 hover:underline">Read more</a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
