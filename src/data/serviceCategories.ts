
import { images } from './brand';

export interface MenuServiceItem {
  title: string;
  to: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  summary: string;
  image: string;
  items: MenuServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'marketing',
    title: 'Marketing',
    summary: 'Channels that reach, engage and convert.',
    image: images.newsMobile,
    items: [
      { title: 'Digital Marketing', to: '/services/online-advertising' },
      { title: 'Performance Marketing', to: '/services/online-advertising' },
      { title: 'Affiliate Marketing', to: '/services/affiliate-marketing' },
      { title: 'Content Marketing', to: '/services/content-marketing' },
      { title: 'SEO Optimization', to: '/services/seo-optimization' },
    ],
  },
  {
    id: 'strategy',
    title: 'Strategy & Brand',
    summary: 'Direction and identity behind every campaign.',
    image: images.editorialTeam,
    items: [
      { title: 'Brand Strategy', to: '/services/brand-strategy' },
      { title: 'Digital Strategy', to: '/services/digital-strategy-planning' },
      { title: 'Creative Branding', to: '/services/brand-strategy' },
      { title: 'Audience Strategy', to: '/services/digital-strategy-planning' },
    ],
  },
  {
    id: 'creative',
    title: 'Creative & Content',
    summary: 'Stories and experiences that earn attention.',
    image: images.careersCulture,
    items: [
      { title: 'Creative Campaigns', to: '/services/brand-strategy' },
      { title: 'Video Content', to: '/services/video-content-creation' },
      { title: 'Digital Content', to: '/services/content-marketing' },
      { title: 'Campaign Experiences', to: '/services/online-advertising' },
    ],
  },
  {
    id: 'specialized',
    title: 'Specialized Solutions',
    summary: 'Focused expertise for specific growth goals.',
    image: images.heroObject,
    items: [
      { title: 'Mobile Advertising', to: '/services/online-advertising' },
      { title: 'Data-Driven Marketing', to: '/#data-driven' },
      { title: 'Audience Growth', to: '/services/affiliate-marketing' },
    ],
  },
];