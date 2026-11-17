import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { RegionId, regions } from '../../data/regions';
import { MAP_H, MAP_W, generateDots, project, zoomViewBox } from '../../utils/worldMap';
import { EASE_IN_OUT } from '../../utils/motion';

type WorldMapProps = {
  selected: RegionId | null;
  onSelect?: (id: RegionId) => void;
  interactive?: boolean;
  className?: string;
};

const ALL_DOTS = generateDots();

export function WorldMap({ selected, onSelect, interactive = true, className = '' }: WorldMapProps) {
  const reduce = useReducedMotion();
  const region = regions.find((r) => r.id === selected);
  const full = `0 0 ${MAP_W} ${MAP_H}`;
  const viewBox = region ? zoomViewBox(region.center) : full;
  const dots = useMemo(() => ALL_DOTS, []);

  return (
    <motion.svg
      viewBox={full}
      animate={{ viewBox }}
      transition={{ duration: reduce ? 0 : 0.45, ease: EASE_IN_OUT }}
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label={region ? `World map zoomed to ${region.name}` : 'World map of Amigo Interactive regions'}>
      
      <g>
        {dots.map((d, i) => {
          const isOn = selected ? d.region === selected : false;
          return (
            <circle
              key={i}
              cx={d.x}
              cy={d.y}
              r={2.7}
              fill={selected ? isOn ? '#2563EB' : '#E1E7F0' : '#C7D5EB'}
              style={{ transition: 'fill 300ms cubic-bezier(0.23,1,0.32,1)' }} />);


        })}
      </g>
      {regions.map((r) => {
        const [cx, cy] = project(r.center[0], r.center[1]);
        const isActive = r.id === selected;
        return (
          <g
            key={r.id}
            onClick={interactive && onSelect ? () => onSelect(r.id) : undefined}
            style={{ cursor: interactive ? 'pointer' : 'default' }}
            aria-hidden>
            
            {!reduce &&
            <motion.circle
              cx={cx}
              cy={cy}
              fill={isActive ? '#2563EB' : '#7C3AED'}
              initial={{ r: 6, opacity: 0.45 }}
              animate={{ r: isActive ? 26 : 16, opacity: 0 }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }} />

            }
            <circle cx={cx} cy={cy} r={18} fill="transparent" />
            <circle cx={cx} cy={cy} r={isActive ? 7 : 5.5} fill={isActive ? '#2563EB' : '#7C3AED'} stroke="#fff" strokeWidth={2.5} />
          </g>);

      })}
    </motion.svg>);

}