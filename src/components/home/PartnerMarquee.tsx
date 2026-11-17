
import React from 'react';
import { partners } from '../../data/partners';

export function PartnerMarquee() {
  const loop = [...partners, ...partners];

  return (
    <section
      id="partners"
      aria-labelledby="partners-heading"
      className="relative isolate overflow-hidden border-y border-blue-200/70 bg-gradient-to-r from-blue-100 via-slate-50 to-purple-100 py-14"
    >
      {/* Soft blue background effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 -z-10 h-56 w-56 rounded-full bg-blue-300/40 blur-3xl"
      />

      {/* Soft purple background effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -bottom-20 -z-10 h-56 w-56 rounded-full bg-purple-300/40 blur-3xl"
      />

      {/* Partner logos */}
      <div className="container-site flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
        <h2
          id="partners-heading"
          className="shrink-0 text-[13px] font-bold uppercase leading-relaxed tracking-[0.16em] text-ink lg:w-56"
        >
          Powering better digital connections
        </h2>

        <div className="marquee mask-fade-x relative flex-1 overflow-hidden">
          <ul className="animate-marquee flex w-max items-center gap-16 pr-16">
            {loop.map((p, i) => (
              <li
                key={`${p.name}-${i}`}
                aria-hidden={i >= partners.length}
                className={`select-none whitespace-nowrap text-[28px] text-[#8793A8] transition-colors duration-300 hover:text-brand ${p.className}`}
              >
                {p.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}