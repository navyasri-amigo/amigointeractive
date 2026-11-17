import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRightIcon, MapPinIcon, XIcon } from 'lucide-react';
import { WorldMap } from './WorldMap';
import { RegionId, regions } from '../../data/regions';
import { EASE } from '../../utils/motion';

type LocationFinderProps = {
  heading?: React.ReactNode;
  compact?: boolean;
};

const officeDetails: Record<
  RegionId,
  {
    company: string;
    city: string;
    address: string;
  }
> = {
  apac: {
    company: 'Amigo Interactive Inc',
    city: 'Hyderabad, Telangana, India',
    address:
      'First Floor, Dwaraka Summit, Plot no. 83, Kavuri Hills, Jubilee Hills, Hyderabad, Telangana 500033',
  },
  americas: {
    company: 'Amigo Interactive Inc',
    city: 'Lewes, Delaware, USA',
    address: '16192 Coastal Highway, Lewes, Delaware, 19958',
  },
  europe: {
    company: 'Amigo Interactive Inc',
    city: 'Contact our team for details',
    address: 'Please contact our team for office information.',
  },
  mea: {
    company: 'Amigo Interactive Inc',
    city: 'Contact our team for details',
    address: 'Please contact our team for office information.',
  },
};

export function LocationFinder({
  heading,
  compact = false,
}: LocationFinderProps) {
  const [selected, setSelected] = useState<RegionId | null>(null);
  const region = regions.find((r) => r.id === selected);
  const office = selected ? officeDetails[selected] : null;

  return (
    <div
      className={`grid gap-8 lg:grid-cols-12 ${
        compact ? 'lg:gap-10' : 'lg:gap-16'
      }`}
    >
      <div className="flex flex-col lg:col-span-4">
        {heading}

        <ul
          className={`${heading ? 'mt-8' : ''} border-t border-line`}
          aria-label="Regions"
        >
          {regions.map((r) => {
            const isActive = r.id === selected;

            return (
              <li key={r.id} className="border-b border-line">
                <button
                  type="button"
                  onClick={() =>
                    setSelected(isActive ? null : r.id)
                  }
                  aria-pressed={isActive}
                  className={`group flex w-full items-center justify-between rounded-xl px-2 text-left transition-colors duration-200 ${
                    compact ? 'py-3.5' : 'py-5'
                  } ${
                    isActive
                      ? 'bg-sky text-brand'
                      : 'text-ink hover:bg-sky/60 hover:text-brand'
                  }`}
                >
                  <span>
                    <span
                      className={`block font-bold tracking-tight ${
                        compact ? 'text-lg' : 'text-2xl'
                      }`}
                    >
                      {r.name}
                    </span>

                    <span className="mt-0.5 block text-[13px] text-muted">
                      {r.coverage}
                    </span>
                  </span>

                  <ArrowRightIcon
                    aria-hidden
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      isActive
                        ? 'translate-x-1'
                        : 'group-hover:translate-x-1'
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-[13px] leading-relaxed text-muted">
          Select a region to view office details and connect with
          the Amigo Interactive team.
        </p>
      </div>

      <div className="relative min-w-0 overflow-hidden rounded-[24px] border border-line bg-canvas lg:col-span-8">
        <div
          aria-hidden
          className="bg-grid absolute inset-0 opacity-50"
        />

        <div
          className={`relative ${
            compact ? 'p-6' : 'p-6 sm:p-10'
          }`}
        >
          <WorldMap
            selected={selected}
            onSelect={(id) =>
              setSelected(id === selected ? null : id)
            }
          />
        </div>

        <AnimatePresence mode="wait">
          {region && office ? (
            <motion.div
              key={region.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 24 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative mx-4 mb-4 min-w-0 rounded-2xl border border-line bg-white p-5 shadow-[0_24px_50px_-24px_rgba(23,32,51,0.3)] sm:absolute sm:bottom-5 sm:right-5 sm:m-0 sm:w-[360px] sm:max-w-[calc(100%-2rem)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand">
                    {region.name}
                  </p>

                  <p className="mt-1 break-words text-lg font-bold text-ink">
                    {office.company}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close region details"
                  className="shrink-0 rounded-full p-1 text-muted transition-colors hover:bg-sky hover:text-ink"
                >
                  <XIcon className="h-4 w-4" />
                </button>
              </div>

              <dl className="mt-4 space-y-3 text-sm">
                <Row
                  label="Coverage"
                  value={region.coverage}
                />

                <Row
                  label="City / Country"
                  value={office.city}
                />

                <div className="border-t border-line pt-3">
                  <dt className="mb-1.5 text-muted">
                    Address
                  </dt>

                  <dd className="break-words text-left font-medium leading-6 text-ink [overflow-wrap:anywhere]">
                    {office.address}
                  </dd>
                </div>
              </dl>

              <Link
                to="/contact"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand"
                data-cursor="go"
              >
                Contact our team
                <ArrowRightIcon
                  aria-hidden
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative mx-4 mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-[13px] font-medium text-body sm:absolute sm:bottom-5 sm:left-5 sm:m-0"
            >
              <MapPinIcon
                aria-hidden
                className="h-4 w-4 text-brand"
              />
              Select a region to explore
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="grid grid-cols-[100px_minmax(0,1fr)] gap-3 border-t border-line pt-2.5 first:border-0 first:pt-0">
      <dt className="text-muted">{label}</dt>

      <dd className="min-w-0 break-words text-right font-medium text-ink">
        {value}
      </dd>
    </div>
  );
}
