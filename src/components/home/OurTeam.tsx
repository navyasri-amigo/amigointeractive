
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Linkedin, Sparkles } from 'lucide-react';

type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
};

const teamMembers: TeamMember[] = [
  { name: 'Venkat Sai Deshpande', role: 'Director', image: '/pic3.jpg', linkedin: '' },
  { name: 'Sai Sharath chandra', role: 'Email Deliverability & Account Manager', image: '/pic6.jpg', linkedin: '' },
  { name: 'Sharmila Parchuri', role: 'Client growth & Patnerships Lead', image: '/pic8.jpg', linkedin: '' },
  { name: 'Mohan Kumar Swamy', role: 'Digital Marketing Executive / Specialist', image: '/pic4.jpg', linkedin: '' },
  { name: 'Prem Kumar', role: 'Campaign Manager', image: '/pic10.jpg', linkedin: '' },
  { name: 'Praveen', role: 'Email Deliverability Specialist', image: '/pic1.jpg', linkedin: '' },
  { name: 'Prasad', role: 'Manager', image: '/pic2.jpg', linkedin: '' },
  { name: 'Navyasri', role: 'UI/UX Designer', image: '/pic9.jpg', linkedin: '' },
  { name: 'Anvesh kumar', role: 'Campaign manager', image: '/pic1.jpg', linkedin: '' },
  { name: 'Kiran kumar', role: 'Content Strategist / Creator', image: '/pic7.jpg', linkedin: '' },
];

const cardVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
    rotate: direction > 0 ? 12 : -12,
    scale: 0.88,
  }),
  center: {
    opacity: 1,
    x: 0,
    rotate: 0,
    scale: 1,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    rotate: direction > 0 ? -12 : 12,
    scale: 0.88,
  }),
};

export function OurTeam() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const activeMember = teamMembers[activeIndex];

  // Automatic clockwise carousel
  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      setDirection(1);
      setActiveIndex((current) =>
        (current + 1) % teamMembers.length
      );
    }, 3000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  // Previous team member
  const previous = () => {
    setDirection(-1);
    setActiveIndex((current) =>
      (current - 1 + teamMembers.length) % teamMembers.length
    );
  };

  // Next team member - clockwise
  const next = () => {
    setDirection(1);
    setActiveIndex((current) =>
      (current + 1) % teamMembers.length
    );
  };

  return (
    <section
      id="our-team"
      className="relative isolate overflow-hidden bg-[#f7f9ff] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-96 w-96 rounded-full bg-blue-200/50 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-purple-200/50 blur-[100px]" />

      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-700 shadow-sm">
              <Sparkles size={15} />
              The People of Amigo
            </div>

            <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Great work starts
              <br />
              with{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                great people.
              </span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-slate-600 sm:text-base">
            Meet the creative thinkers, strategists and digital specialists
            turning ambitious ideas into meaningful digital experiences.
          </p>
        </motion.div>

        {/* Carousel layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

          {/* Left information panel */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Meet our team
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeMember.name}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
                  {activeMember.name}
                </h3>

                {activeMember.role && (
                  <p className="mt-3 inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
                    {activeMember.role}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-600">
              Different perspectives. Shared ambition. One team working
              together to create smarter strategies, stronger connections
              and better results.
            </p>

            {/* Arrow navigation only */}
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                onClick={previous}
                aria-label="Previous team member"
                className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-sm transition-all duration-300 hover:-translate-x-1 hover:border-blue-500 hover:text-blue-600"
              >
                <ArrowLeft size={22} />
              </button>

              <button
                type="button"
                onClick={next}
                aria-label="Next team member clockwise"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-indigo-200 transition-all duration-300 hover:translate-x-1 hover:scale-105"
              >
                <ArrowRight size={22} />
              </button>
            </div>
          </motion.div>

          {/* Right animated image card */}
          <div
            className="order-1 mx-auto w-full max-w-md lg:order-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={(event) => {
              if (
                !event.currentTarget.contains(
                  event.relatedTarget as Node | null
                )
              ) {
                setIsPaused(false);
              }
            }}
          >
            <div className="relative mx-auto aspect-[4/4.5] w-full max-w-[390px]">

              {/* Background card one */}
              <motion.div
                aria-hidden="true"
                animate={{
                  rotate: -10,
                  x: -12,
                  y: 12,
                  scale: 0.92,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-3 rounded-[2rem] border border-blue-100 bg-gradient-to-br from-blue-200 to-indigo-100 shadow-xl"
              />

              {/* Background card two */}
              <motion.div
                aria-hidden="true"
                animate={{
                  rotate: 8,
                  x: 10,
                  y: 5,
                  scale: 0.96,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-2 rounded-[2rem] border border-purple-100 bg-gradient-to-br from-purple-200 to-pink-100 shadow-xl"
              />

              {/* Animated team image */}
              <AnimatePresence initial={false} mode="wait" custom={direction}>
                <motion.article
                  key={activeMember.name}
                  custom={direction}
                  variants={cardVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 220, damping: 24 },
                    rotate: { type: 'spring', stiffness: 220, damping: 24 },
                    opacity: { duration: 0.25 },
                    scale: { duration: 0.35 },
                  }}
                  className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white bg-white shadow-2xl shadow-indigo-900/15"
                >
                  <div className="relative h-full overflow-hidden bg-gradient-to-br from-blue-100 via-white to-purple-100">

                    {activeMember.image ? (
                      <img
                        src={activeMember.image}
                        alt={activeMember.name}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.18),transparent_48%)]" />

                        <motion.div
                          initial={{ rotate: 180, scale: 0.5, opacity: 0 }}
                          animate={{ rotate: 0, scale: 1, opacity: 1 }}
                          transition={{ duration: 0.65, ease: 'easeOut' }}
                          className="relative flex h-36 w-36 items-center justify-center rounded-full border-[6px] border-white bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-4xl font-black text-white shadow-2xl shadow-indigo-300/60"
                        >
                          {String(activeIndex + 1).padStart(2, '0')}
                        </motion.div>

                        <p className="relative mt-6 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                          Team Amigo
                        </p>
                      </div>
                    )}

                    {/* Image bottom information */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent p-6 pt-24 sm:p-8 sm:pt-28">
                      <div className="flex items-end justify-between gap-3">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                            Our people
                          </p>

                          <p className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
                            {activeMember.name}
                          </p>

                          <p className="mt-1 text-sm text-white/80">
                            {activeMember.role}
                          </p>
                        </div>

                        {activeMember.linkedin && (
                          <a
                            href={activeMember.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Connect with ${activeMember.name} on LinkedIn`}
                            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur transition hover:bg-white hover:text-indigo-700"
                          >
                            <Linkedin size={18} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Member label */}
                    <div className="absolute left-5 top-5 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-bold text-indigo-800 shadow-sm backdrop-blur-md">
                      MEMBER {String(activeIndex + 1).padStart(2, '0')}
                    </div>

                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

            <p className="mt-8 text-center text-xs font-medium tracking-wide text-slate-500">
              {isPaused
                ? 'Paused — move the pointer away to resume'
                : 'Automatically exploring our team'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
