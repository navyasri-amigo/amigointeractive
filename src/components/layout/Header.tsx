
import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronDownIcon,
  MenuIcon,
  XIcon,
} from 'lucide-react';

import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';
import { MenuKey, navItems } from '../../data/navigation';
import { EASE } from '../../utils/motion';

export function Header() {
  const [active, setActive] = useState<MenuKey | null>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  const previousScrollY = useRef(0);
  const openTimer = useRef<number | undefined>(undefined);
  const closeTimer = useRef<number | undefined>(undefined);

  // Show header when scrolling up and hide when scrolling down
  useEffect(() => {
    previousScrollY.current = window.scrollY;
    setHeaderVisible(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const previousY = previousScrollY.current;
      const scrollingUp = currentScrollY < previousY;

      if (currentScrollY < 80) {
        setHeaderVisible(true);
      } else if (scrollingUp) {
        setHeaderVisible(true);
      } else if (currentScrollY > previousY) {
        setHeaderVisible(false);
        setActive(null);
        setMobileOpen(false);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  // Reset navigation on route change
  useEffect(() => {
    setActive(null);
    setMobileOpen(false);
    setHeaderVisible(true);
    previousScrollY.current = window.scrollY;
  }, [location.pathname, location.hash]);

  // Escape key closes menus
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActive(null);
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', onKey);

    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const clearTimers = () => {
    window.clearTimeout(openTimer.current);
    window.clearTimeout(closeTimer.current);
  };

  const scheduleOpen = (key: MenuKey) => {
    clearTimers();

    if (active) {
      setActive(key);
      return;
    }

    openTimer.current = window.setTimeout(() => {
      setActive(key);
    }, 90);
  };

  const scheduleClose = () => {
    clearTimers();

    closeTimer.current = window.setTimeout(() => {
      setActive(null);
    }, 180);
  };

  return (
    <>
      {/* Mega Menu Backdrop */}
      <AnimatePresence>
        {active && headerVisible && (
          <motion.div
            key="mega-backdrop"
            aria-hidden
            className="fixed inset-0 z-40 bg-[rgba(230,238,250,0.25)] backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      {/* Main Header */}
      <motion.header
        initial={false}
        animate={{
          opacity: headerVisible ? 1 : 0,
          y: headerVisible ? 0 : -100,
        }}
        transition={{
          duration: 0.3,
          ease: EASE,
        }}
        style={{
          pointerEvents: headerVisible ? 'auto' : 'none',
        }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
        onMouseLeave={scheduleClose}
        onMouseEnter={() => window.clearTimeout(closeTimer.current)}
      >
        {/* Navbar */}
        <div className="mx-auto max-w-site rounded-[20px] border border-transparent bg-transparent shadow-none backdrop-blur-0">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:h-[70px]">

            {/* Logo */}
            <Link
              to="/"
              aria-label="Amigo Interactive — home"
              className="shrink-0"
            >
              <img
                src="/Amigo.png"
                alt="Amigo Interactive"
                className="h-14 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary"
              className="hidden items-center gap-0.5 lg:flex"
            >
              {navItems.map((item) => {
                const isOpen = active === item.key;

                return (
                  <button
                    key={item.key}
                    type="button"
                    onMouseEnter={() => scheduleOpen(item.key)}
                    onClick={() =>
                      setActive((a) =>
                        a === item.key ? null : item.key
                      )
                    }
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className="relative flex h-10 items-center gap-1 whitespace-nowrap rounded-full px-3 text-[14px] font-semibold text-white transition-colors hover:text-white/80 xl:px-3.5"
                  >
                    {isOpen && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-white/10"
                        transition={{
                          duration: 0.3,
                          ease: EASE,
                        }}
                      />
                    )}

                    <span className="relative">
                      {item.label}
                    </span>

                    <motion.span
                      className="relative"
                      animate={{
                        rotate: isOpen ? 180 : 0,
                      }}
                      transition={{
                        duration: 0.25,
                        ease: EASE,
                      }}
                    >
                      <ChevronDownIcon
                        aria-hidden
                        className="h-3.5 w-3.5"
                      />
                    </motion.span>
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white/20 lg:hidden"
            >
              {mobileOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu */}
        {headerVisible && <MegaMenu active={active} />}
      </motion.header>

      {/* Mobile Navigation */}
      <MobileMenu
        open={mobileOpen && headerVisible}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}
