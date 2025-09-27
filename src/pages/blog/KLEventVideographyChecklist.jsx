import React from "react";
import { Link } from "react-router-dom";

export default function KLEventVideographyChecklist() {
  const title = "Event Videography in KL: A Complete Planning Checklist";
  const description = "A practical, field-tested checklist to plan event videography in Kuala Lumpur: run-of-show, audio I/O, crew, lighting, backups, and delivery.";
  const published = "2025-09-27";
  const modified = "2025-09-27";
  const url = "https://reelsify.co/blog/kl-event-videography-checklist";

  const sections = [
    {
      h: "1) Goals and deliverables",
      items: [
        "Primary deliverables: highlight film length (1–2 min, 2–3 min), reels (15–45s), full recordings if required",
        "Platform targets: Instagram Reels, LinkedIn, YouTube, website hero",
        "Tone and references: 2–3 example videos from brand or past events",
        "Turnaround: standard 72h, rush 48/24h, same-day teaser option",
      ],
    },
    {
      h: "2) Run-of-show and key moments",
      items: [
        "Program rundown with timestamps (walk-in, keynote, panel, demo, award, networking)",
        "Must-capture list: VIPs, client logos, product shots, crowd moments",
        "Stage choreography: entrances/exits, cue-to-cue timing",
      ],
    },
    {
      h: "3) Venue walk-through",
      items: [
        "Camera positions: front-of-house, side angles, balcony",
        "Lighting conditions: stage wash vs ambient, color temperature, hotspots",
        "Power and load-in: sockets, distro, cable runs, safety",
      ],
    },
    {
      h: "4) Audio I/O (clean panel sound)",
      items: [
        "Coordinate with venue/AV: mixer model, outputs available (XLR/TRS)",
        "Redundant capture: board feed + on-camera shotgun + lav on emcee/keynote",
        "Mics count: handhelds, lavs, gooseneck; spare batteries",
        "Recording levels: -12 dBFS average, peaks under -6 dBFS",
      ],
    },
    {
      h: "5) Crew and coverage",
      items: [
        "Single-cam vs multi-cam: when to add second/third camera",
        "Operator roles: A-cam stage, B-cam audience/side, roaming gimbal",
        "Photography add-on: shot list for VIPs and group photos",
      ],
    },
    {
      h: "6) Media and backups",
      items: [
        "Cards: ample SD/CFexpress with labeled rotation",
        "On-site offload: dual backup to SSD + checksum verification",
        "File naming convention: EVENT_YYYYMMDD_camX",
      ],
    },
    {
      h: "7) Post and delivery",
      items: [
        "Select music and pacing by audience and platform",
        "Color pipeline: match camera profiles (Log/Rec.709)",
        "Deliverables: highlight + reels; captions/subtitles; social crops",
        "Client review: frame.io / Google Drive link, versioning, approvals",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: title,
            description,
            datePublished: published,
            dateModified: modified,
            author: { "@type": "Organization", name: "Reelsify Media" },
            publisher: { "@type": "Organization", name: "Reelsify Media" },
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
          }),
        }}
      />

      <header className="border-b border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Link to="/blog" className="text-sm text-slate-600 hover:text-slate-900">← Back to Blog</Link>
          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
          <p className="mt-3 text-slate-600">{description}</p>
          <div className="mt-3 text-xs text-slate-500">Updated {modified} • Kuala Lumpur</div>
        </div>
      </header>

      <article className="py-12">
        <div className="mx-auto max-w-3xl px-4 prose prose-slate">
          <p>
            Planning an event video in Kuala Lumpur? Use this checklist to align goals, ensure clean audio, and capture all the key moments—while keeping your edit ready for fast turnaround.
          </p>

          {sections.map(block => (
            <section key={block.h}>
              <h2>{block.h}</h2>
              <ul>
                {block.items.map(it => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </section>
          ))}

          <h2>Free template</h2>
          <p>
            Want a copy of our event video run-of-show + shotlist template? Reach out and we’ll share a Google Doc version you can customize.
          </p>

          <div className="not-prose mt-8 flex gap-3">
            <a href="https://api.whatsapp.com/send/?phone=60127183499&text&type=phone_number&app_absent=0" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-slate-900 text-white hover:bg-slate-800">WhatsApp Us</a>
            <Link to="/services/event-filming" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 border border-slate-300 hover:bg-slate-50">Learn about Event Filming</Link>
          </div>
        </div>
      </article>
    </main>
  );
}
