import { RegionId } from '../data/regions';

export const MAP_W = 1000;
export const MAP_H = 394; // 142° of latitude (84°N → 58°S) at the same scale as longitude

type Poly = [number, number][];

// Simplified continent outlines (lon, lat) — used only to place a decorative dot grid.
const LAND: Poly[] = [
// North America
[[-168, 66], [-162, 70], [-140, 70], [-125, 71], [-95, 72], [-80, 73], [-65, 62], [-55, 52], [-66, 45], [-70, 42], [-76, 35], [-81, 31], [-80, 25], [-84, 30], [-90, 29], [-97, 26], [-97, 21], [-90, 21], [-87, 16], [-83, 10], [-79, 8], [-82, 8], [-86, 12], [-92, 15], [-105, 20], [-110, 24], [-112, 30], [-117, 32], [-121, 35], [-124, 40], [-124, 48], [-130, 55], [-140, 60], [-152, 58], [-165, 60]],
// Greenland
[[-55, 60], [-45, 60], [-20, 70], [-20, 80], [-40, 83], [-60, 80], [-70, 77], [-55, 70]],
// South America
[[-79, 8], [-72, 12], [-62, 11], [-52, 5], [-35, -5], [-37, -12], [-40, -22], [-48, -26], [-53, -34], [-58, -38], [-65, -42], [-68, -52], [-72, -50], [-74, -40], [-71, -30], [-71, -18], [-76, -14], [-81, -5], [-80, 0], [-77, 4]],
// Europe
[[-10, 36], [-9, 43], [-2, 44], [-4, 48], [2, 51], [5, 53], [8, 57], [5, 62], [12, 66], [20, 70], [30, 71], [40, 68], [45, 60], [40, 48], [30, 45], [28, 41], [22, 37], [18, 40], [12, 44], [15, 38], [8, 44], [3, 42], [-1, 37]],
// UK & Ireland
[[-6, 50], [1, 51], [-1, 55], [-3, 58], [-6, 57], [-10, 52]],
// Africa
[[-17, 21], [-16, 28], [-10, 30], [-6, 36], [10, 37], [20, 32], [32, 31], [34, 27], [38, 18], [43, 12], [51, 12], [44, 0], [40, -10], [40, -16], [35, -24], [33, -30], [27, -34], [19, -35], [16, -28], [12, -18], [13, -8], [9, -1], [9, 4], [3, 6], [-8, 4], [-13, 8], [-17, 14]],
// Madagascar
[[44, -25], [50, -16], [49, -12], [44, -16]],
// Asia
[[28, 41], [36, 36], [35, 32], [43, 13], [52, 16], [57, 23], [60, 25], [67, 24], [72, 20], [77, 8], [80, 13], [80, 16], [87, 22], [92, 22], [98, 16], [100, 6], [104, 1], [104, 10], [109, 12], [108, 21], [117, 23], [122, 30], [121, 38], [118, 40], [122, 40], [126, 37], [129, 35], [130, 42], [135, 44], [141, 50], [140, 54], [135, 55], [143, 59], [155, 59], [160, 61], [170, 65], [180, 68], [180, 71], [140, 72], [113, 74], [100, 77], [80, 73], [70, 73], [60, 69], [45, 68], [40, 66], [45, 60], [40, 48], [50, 45], [47, 40], [40, 42]],
// Japan
[[130, 31], [140, 35], [142, 40], [141, 45], [145, 44], [140, 42], [136, 35], [131, 34]],
// Sumatra / Java
[[95, 5], [105, -6], [115, -8], [120, -9], [114, -6], [106, -3], [98, 2]],
// Borneo
[[109, 1], [114, 5], [119, 6], [118, 0], [116, -4], [111, -3]],
// New Guinea
[[131, -1], [141, -3], [150, -10], [141, -9], [135, -4]],
// Australia
[[114, -22], [114, -34], [118, -35], [124, -33], [131, -31], [138, -35], [141, -38], [147, -39], [150, -37], [153, -28], [153, -25], [146, -19], [142, -11], [136, -12], [136, -15], [130, -12], [123, -17]],
// New Zealand
[[172, -34], [178, -38], [174, -42], [167, -46], [172, -41]]];


function inside([x, y]: [number, number], poly: Poly) {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) hit = !hit;
  }
  return hit;
}

export function regionOf(lon: number, lat: number): RegionId {
  if (lon < -25) return 'americas';
  if (lat > 36 && lon < 60) return 'europe';
  if (lon < 60) return 'mea';
  return 'apac';
}

export interface MapDot {
  x: number;
  y: number;
  region: RegionId;
}

export function project(lon: number, lat: number): [number, number] {
  return [(lon + 180) / 360 * MAP_W, (84 - lat) / 360 * MAP_W];
}

export function generateDots(cols = 110): MapDot[] {
  const step = 360 / cols;
  const rows = Math.round(142 / step);
  const dots: MapDot[] = [];
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      const lon = -180 + (i + 0.5) * step;
      const lat = 84 - (j + 0.5) * step;
      if (LAND.some((p) => inside([lon, lat], p))) {
        const [x, y] = project(lon, lat);
        dots.push({ x, y, region: regionOf(lon, lat) });
      }
    }
  }
  return dots;
}

export function zoomViewBox(center: [number, number], zoom = 1.9) {
  const [cx, cy] = project(center[0], center[1]);
  const w = MAP_W / zoom;
  const h = MAP_H / zoom;
  const x = Math.min(Math.max(cx - w / 2, 0), MAP_W - w);
  const y = Math.min(Math.max(cy - h / 2, 0), MAP_H - h);
  return `${x} ${y} ${w} ${h}`;
}