
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  ChevronDownIcon,
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { careersSections } from '../../data/megaMenu';
import { images } from '../../data/brand';
import { ArrowButton } from '../ui/ArrowButton';

const sectionDetails: Record<string, string> = {
  'Why Amigo':
    'Be part of a team bringing creativity, technology, data and marketing together. Collaborate on meaningful digital experiences, learn new skills and contribute ideas that make a difference.',

  'Life at Amigo':
    'Work in a collaborative environment where people share ideas, support one another and grow together. Every project is an opportunity to learn, create and make an impact.',

  'Open Positions':
    'Explore opportunities to grow your career with Amigo Interactive. We welcome creative and motivated people interested in email marketing design and UI/UX design.',

  'Our Culture':
    'Our culture is built around creativity, collaboration, curiosity, drive and humanity. We value fresh ideas, open communication, shared learning and meaningful teamwork.',
};

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
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setExpanded((current) => (current === title ? null : title));
  };

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
          Join a team combining creativity, technology, data and marketing to
          build meaningful digital experiences.
        </p>

        <div className="mt-auto pt-8">
          <ArrowButton to="/careers">View Careers</ArrowButton>
        </div>
      </div>

      {/* Middle: Careers sections */}
      <div className="col-span-5 grid grid-cols-2">
        {/* Why Amigo */}
        <Block
          title="Why Amigo"
          to="/careers#why"
          expanded={expanded === 'Why Amigo'}
          onToggle={() => toggleSection('Why Amigo')}
          className="border-b border-r"
        >
          <p className="text-[13px] leading-relaxed text-body">
            {careersSections.why}
          </p>
        </Block>

        {/* Life at Amigo */}
        <Block
          title="Life at Amigo"
          to="/careers#life"
          expanded={expanded === 'Life at Amigo'}
          onToggle={() => toggleSection('Life at Amigo')}
          className="border-b"
        >
          <ul className="flex flex-wrap gap-1.5">
            {careersSections.life.map((item) => (
              <li
                key={item}
                className="rounded-full bg-sky px-3 py-1 text-xs font-semibold text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
        </Block>

        {/* Open Positions */}
        <Block
          title="Open Positions"
          to="/careers#positions"
          expanded={expanded === 'Open Positions'}
          onToggle={() => toggleSection('Open Positions')}
          className="border-r"
        >
          <p className="text-[13px] leading-relaxed text-body">
            Discover opportunities to grow your career with Amigo Interactive.
          </p>

          <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand">
            View Current Opportunities
            <ArrowRightIcon aria-hidden className="h-3.5 w-3.5" />
          </span>
        </Block>

        {/* Our Culture */}
        <Block
          title="Our Culture"
          to="/careers#culture"
          expanded={expanded === 'Our Culture'}
          onToggle={() => toggleSection('Our Culture')}
        >
          <p className="text-[13px] font-semibold leading-relaxed text-ink">
            {careersSections.culture.join(' · ')}
          </p>
        </Block>
      </div>

      {/* Right: Existing image and tagline */}
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

      {/* Expandable information panel */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key={expanded}
            id="careers-more-info"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="col-span-12 overflow-hidden"
          >
            <div className="border-t border-line bg-sky/60 px-8 py-7 sm:px-10">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-brand">
                    Explore Careers
                  </p>

                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink">
                    {expanded}
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-body">
                    {sectionDetails[expanded]}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setExpanded(null)}
                  className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-ink transition-colors hover:bg-sky"
                  aria-label="Close expanded information"
                >
                  Show Less
                  <ChevronDownIcon
                    aria-hidden
                    className="h-4 w-4 rotate-180"
                  />
                </button>
              </div>

              {expanded === 'Open Positions' ? (
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  {positionDetails.map((position) => (
                    <article
                      key={position.title}
                      className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-shadow duration-200 hover:shadow-md sm:p-6"
                    >
                      <p className="text-xs font-bold uppercase tracking-wider text-brand">
                        {position.category}
                      </p>

                      <h4 className="mt-3 text-xl font-extrabold tracking-tight text-ink">
                        {position.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-body">
                        {position.description}
                      </p>

                      <div className="mt-4">
                        <p className="text-xs font-bold uppercase tracking-wider text-ink">
                          Relevant Skills
                        </p>
                        <p className="mt-2 text-sm leading-6 text-body">
                          {position.skills}
                        </p>
                      </div>

                      <div className="mt-auto pt-6">
                        <Link
                          to="/contact"
                          className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
                        >
                          Apply for this Role
                          <ArrowRightIcon
                            aria-hidden
                            className="h-4 w-4"
                          />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <Link
                  to={`/careers#${
                    {
                      'Why Amigo': 'why',
                      'Life at Amigo': 'life',
                      'Our Culture': 'culture',
                    }[expanded]
                  }`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand hover:underline"
                >
                  Explore More
                  <ArrowRightIcon aria-hidden className="h-4 w-4" />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Block({
  title,
  to,
  children,
  className = '',
  expanded,
  onToggle,
}: {
  title: string;
  to: string;
  children: React.ReactNode;
  className?: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border-line p-7 transition-colors duration-200 hover:bg-sky ${
        className
      } ${expanded ? 'bg-sky' : ''}`}
    >
      <div className="flex items-center justify-between gap-2">
        <Link
          to={to}
          className="text-lg font-bold tracking-tight text-ink transition-colors hover:text-brand"
        >
          {title}
        </Link>

        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls="careers-more-info"
          aria-label={`${
            expanded ? 'Hide' : 'Show'
          } more information about ${title}`}
          className="flex shrink-0 items-center gap-1 text-xs font-semibold text-brand"
        >
          <span className="hidden sm:inline">
            {expanded ? 'Show Less' : 'More Info'}
          </span>

          {expanded ? (
            <ChevronDownIcon
              aria-hidden
              className="h-4 w-4 rotate-180 transition-transform"
            />
          ) : (
            <ArrowRightIcon
              aria-hidden
              className="h-4 w-4 transition-transform hover:translate-x-1"
            />
          )}
        </button>
      </div>

      <div className="mt-3">{children}</div>
    </div>
  );
}