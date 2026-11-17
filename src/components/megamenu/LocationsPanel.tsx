import React from 'react';
import { LocationFinder } from '../locations/LocationFinder';
import { ArrowLink } from '../ui/ArrowLink';

export function LocationsPanel() {
  return (
    <div className="p-8 xl:p-10">
      <LocationFinder
        compact
        heading={
        <div>
            <p className="text-5xl font-extrabold leading-[0.95] tracking-[-0.045em] text-ink">
              Our
              <br />
              <span className="text-brand">locations.</span>
            </p>
            <p className="mt-4 text-[15px] text-body">Connect with Amigo Interactive.</p>
            <ArrowLink to="/locations" className="mt-4">
              Open Location Finder
            </ArrowLink>
          </div>
        } />
      
    </div>);

}