
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, ChevronDownIcon } from 'lucide-react';
import { images } from '../../data/brand';
import { ArrowButton } from '../ui/ArrowButton';

const positionDetails = [
  {
    title: 'Email Marketing Designer',
    category: 'Marketing & Creative',
    description:
      'Design engaging email campaigns, promotional creatives, newsletters and responsive HTML email templates. Optimize layouts, typography, images and calls to action for a polished email experience.',
    skills:
      'HTML5, inline CSS, responsive email design, visual design and email-client compatibility.',
  },
  {
    title: 'UI/UX Designer',
    category: 'Design & Experience',
    description:
      'Create intuitive website and application interfaces, user flows, wireframes and prototypes. Turn requirements into accessible, user-friendly digital experiences with consistent visual design.',
    skills:
      'Figma, wireframing, prototyping, responsive web design and UI/UX principles.',
  },
];

export function CareersPanel() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="grid grid-cols-12">
      {/* Left: Introduction */}
      <div className="col-span-4 flex flex-col border-r border-line p-10">
        <p className="text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] text-ink">
          Build
          <br />
          what’s <span className="text-brand">next.</span>
        </p>

        <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-body">
          Explore opportunities to grow your career with Amigo Interactive.
        </p>

        <div className="mt-auto pt-8">
          <ArrowButton to="/careers">View Careers</ArrowButton>
        </div>
      </div>

      {/* Middle: Open Positions only */}
      <div className="col-span-5 flex flex-col justify-center p-8">
        <div className="rounded-2xl border border-line p-7 transition-colors duration-200 hover:bg-sky">
          <div className="flex items-center justify-between gap-3">
            <Link
              to="/careers#positions"
              className="text-xl font-bold tracking-tight text-ink transition-colors hover:text-brand"
            >
              Open Positions
            </Link>

            <button
              type="button"
              onClick={() => setExpanded((value) => !value)}
              aria-expanded={expanded}
              aria-label="Toggle open positions"
              className="flex shrink-0 items-center gap-2 text-xs font-semibold text-brand"
            >
              <span>{expanded ? 'Show Less' : 'View Roles'}</span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  expanded ? 'rotate-180' : ''
                }`}
              />
            </button>
          </div>

          <p className="mt-3 text-[13px] leading-relaxed text-body">
            Discover opportunities to grow your career with Amigo Interactive.
          </p>

          <Link
            to="/careers#positions"
            className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand"
          >
            View Current Opportunities
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </Link>
        </div>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="mt-4 space-y-3">
                {positionDetails.map((position) => (
                  <article
                    key={position.title}
                    className="rounded-2xl border border-line bg-white p-5"
                  >
                    <p className="text-xs font-bold uppercase tracking-wider text-brand">
                      {position.category}
                    </p>

                    <h3 className="mt-2 text-lg font-extrabold text-ink">
                      {position.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-body">
                      {position.description}
                    </p>

                    <p className="mt-3 text-xs font-semibold text-ink">
                      Relevant Skills
                    </p>
                    <p className="mt-1 text-sm leading-6 text-body">
                      {position.skills}
                    </p>

                    <Link
                      to="/contact"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                    >
                      Apply for this Role
                      <ArrowRightIcon className="h-4 w-4" />
                    </Link>
                  </article>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right: Existing image */}
      <div className="col-span-3 flex flex-col p-5 pl-0">
        <div className="relative flex-1 overflow-hidden rounded-[20px] bg-sky">
          <img
            src={images.careersCulture}
            alt="Team brainstorming together"
            className="h-full min-h-[200px] w-full object-cover"
          />
        </div>

        <p className="mt-4 text-2xl font-extrabold leading-[1.02] tracking-tight text-ink">
          Create.
          <br />
          <span className="text-brand">Collaborate.</span>
          <br />
          <span className="text-violet">Grow.</span>
        </p>
      </div>
    </div>
  );
}
