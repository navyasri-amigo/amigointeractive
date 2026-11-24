
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
} from 'lucide-react';

import { Logo } from '../Logo';
import { company } from '../../data/brand';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-footer">
      <div className="container-site py-8 sm:py-10 lg:py-12">

        {/* Main footer */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">

          {/* Brand section */}
          <div className="lg:col-span-4">
            <Link
              to="/"
              aria-label="Amigo Interactive home"
              className="inline-flex"
            >
              <Logo size="md" />
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-body">
              Amigo Interactive brings together creativity, data, and
              technology to build meaningful digital experiences and help
              brands grow in a connected world.
            </p>

            {/* Social links */}
            <div className="mt-5 flex flex-wrap items-center gap-5">
              <a
                href="https://www.linkedin.com/company/amigo-interactive-inc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Amigo Interactive on LinkedIn"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-200 hover:text-brand"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href="https://www.instagram.com/amigointeractive?srtk=MWgyZXE0Y3dzazE4OQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Amigo Interactive on Instagram"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors duration-200 hover:text-brand"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Explore links */}
          <div className="lg:col-span-2">
            <FooterColumn title="Explore">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/services">What We Do</FooterLink>
              <FooterLink to="/news">News & Views</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterColumn>
          </div>

          {/* Contact section */}
          <div className="lg:col-span-2">
            <FooterColumn title="Contact">
              <FooterLink to="/contact">Contact Us</FooterLink>

              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-2 text-sm leading-6 text-body transition-colors duration-200 hover:text-brand"
                >
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Email Us
                </a>
              </li>
            </FooterColumn>
          </div>

          {/* Office Locations */}
          <div className="lg:col-span-4">
            <FooterColumn title="Office Location">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                {/* USA Office */}
                <li className="flex items-start gap-2 text-sm leading-6 text-body">
                  <MapPin
                    className="mt-1 h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <address className="not-italic">
                    <strong className="block text-ink">USA</strong>
                    Amigo Interactive Inc.
                    <br />
                    16192 Coastal Highway,
                    <br />
                    Lewes, Delaware 19958,
                    <br />
                    USA
                  </address>
                </li>

                {/* India Office */}
                <li className="flex items-start gap-2 text-sm leading-6 text-body">
                  <MapPin
                    className="mt-1 h-4 w-4 shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <address className="not-italic">
                    <strong className="block text-ink">India</strong>
                    First Floor, Dwaraka Summit,
                    <br />
                    Plot no. 83, Kavuri Hills,
                    <br />
                    Jubilee Hills, Hyderabad,
                    <br />
                    Telangana 500033
                  </address>
                </li>

              </div>

              {/* Google Maps Links */}
              <div className="mt-4 flex flex-wrap gap-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=16192+Coastal+Highway+Lewes+Delaware+19958+USA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-ink"
                >
                  USA Maps
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=First+Floor+Dwaraka+Summit+Plot+83+Kavuri+Hills+Hyderabad+Telangana+500033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:text-ink"
                >
                  India Maps
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </FooterColumn>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-5 lg:mt-10 lg:flex-row lg:items-center lg:justify-between">

          {/* Copyright */}
          <p className="text-xs leading-5 text-muted">
            © {new Date().getFullYear()} Amigo Interactive. All rights reserved.
          </p>

          {/* Brand values */}
          <p className="text-xs leading-5 text-muted">
            Creativity <span className="mx-1">·</span>
            Data <span className="mx-1">·</span>
            Technology <span className="mx-1">·</span>
            Performance
          </p>

          {/* Legal links and Back to Top */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              to="/privacy-policy"
              className="text-xs font-medium text-body transition-colors duration-200 hover:text-brand"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-xs font-medium text-body transition-colors duration-200 hover:text-brand"
            >
              Terms of Use
            </Link>

            <button
              type="button"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
              className="inline-flex items-center gap-1 text-xs font-semibold text-body transition-colors duration-200 hover:text-brand"
            >
              Back to Top
              <ArrowUpRight
                className="h-3.5 w-3.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-ink">
        {title}
      </h3>

      <ul className="mt-3 space-y-2.5">
        {children}
      </ul>
    </div>
  );
}

function FooterLink({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        to={to}
        className="inline-block text-sm leading-5 text-body transition-colors duration-200 hover:text-brand"
      >
        {children}
      </Link>
    </li>
  );
}
