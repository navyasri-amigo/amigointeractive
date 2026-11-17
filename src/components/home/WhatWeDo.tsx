
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../../data/services';

const serviceImages: Record<string, string> = {
  'affiliate-marketing': '/services/affiliate.png',
  'online-advertising': '/services/advertising.png',
  'seo-optimization': '/services/seo.png',
  'brand-strategy': '/services/brand.png',
  'digital-strategy-planning': '/services/strategy.png',
  'video-content-creation': '/services/video.png',
  'content-marketing': '/services/content.png',
};

export function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-[#f4f6ff] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[600px] rounded-full bg-gradient-to-br from-blue-300 to-violet-400 opacity-20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              AMIGO INTERACTIVE
            </p>
            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              What we <span className="text-blue-600">do.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm leading-6 text-slate-600">
              Discover our diverse range of services designed to elevate
              your brand and maximize your online presence.
            </p>
            <Link
              to="/services"
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-blue-600"
            >
              All services <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className={`group overflow-hidden rounded-xl bg-white p-3 shadow-sm transition-all duration-300 hover:shadow-xl ${
                index === 3 || index === 6 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden rounded-lg bg-gradient-to-br from-blue-100 to-violet-100">
                <img
                  src={serviceImages[service.slug]}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="px-2 pb-2 pt-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="mt-1 text-sm font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-1 text-xs font-semibold text-slate-600">
                  {service.tagline}
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {service.description}
                </p>

                <Link
                  to={`/services/${service.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-blue-600"
                >
                  Read More
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
