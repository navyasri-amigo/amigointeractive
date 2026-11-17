export type RegionId = 'india' | 'usa';

export interface Region {
  id: RegionId;
  name: string;
  center: [number, number];
  coverage: string;
}

export const regions: Region[] = [
  {
    id: 'india',
    name: 'India',
    center: [78.4867, 17.385],
    coverage: 'First Floor, Dwaraka Summit, Plot no. 83, Kavuri Hills, Jubilee Hills, Hyderabad, Telangana 500033',
  },
  {
    id: 'usa',
    name: 'United States',
    center: [-75.1398, 38.7746],
    coverage: '16192 Coastal Highway Lewes, Delaware, 19958.',
  },
];
