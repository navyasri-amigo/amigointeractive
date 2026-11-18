
export type AboutFeature =
  | 'company'
  | 'locations'
  | 'how'
  | 'what'
  | 'why'
  | 'life'
  | 'culture';

export const aboutItems: {
  id: AboutFeature;
  n: string;
  title: string;
  desc: string;
  cta: string;
  to: string;
}[] = [
  {
    id: 'company',
    n: '01',
    title: 'Company Information',
    desc: 'Discover Amigo Interactive, our vision, our capabilities and the ideas behind the work we create.',
    cta: 'Explore Company',
    to: '/about#company',
  },
  {
    id: 'locations',
    n: '02',
    title: 'Our Locations',
    desc: 'Explore our global presence and discover where Amigo Interactive operates.',
    cta: 'View Locations',
    to: '/locations',
  },
  {
    id: 'how',
    n: '03',
    title: 'How We Work',
    desc: 'Explore our approach to strategy, creativity, technology and performance.',
    cta: 'Our Working Strategy',
    to: '/about#how',
  },
  {
    id: 'what',
    n: '04',
    title: 'What We Do',
    desc: 'Explore the services and digital solutions we provide to brands, advertisers and partners.',
    cta: 'Explore Services',
    to: '/services',
  },
  {
    id: 'why',
    n: '05',
    title: 'Why Amigo',
    desc: 'Work on meaningful digital experiences across advertising, marketing, technology and emerging industries.',
    cta: 'Discover Why Amigo',
    to: '/about#why',
  },
  {
    id: 'life',
    n: '06',
    title: 'Life at Amigo',
    desc: 'Discover our team, culture, collaboration and opportunities for growth.',
    cta: 'Explore Life at Amigo',
    to: '/about#life',
  },
  {
    id: 'culture',
    n: '07',
    title: 'Our Culture',
    desc: 'Creative, Collaborative, Curious, Driven and Human.',
    cta: 'Discover Our Culture',
    to: '/about#culture',
  },
];

export type NewsSectionId = 'news' | 'research' | 'insights' | 'portal';

export const newsSections: {
  id: NewsSectionId;
  n: string;
  title: string;
  desc: string;
  cta: string;
  to: string;
}[] = [
  {
    id: 'news',
    n: '01',
    title: 'News & Views',
    desc: 'Explore the latest news, perspectives, ideas and developments from Amigo Interactive.',
    cta: 'View All News & Views',
    to: '/news#latest',
  },
  {
    id: 'research',
    n: '02',
    title: 'Research & Intelligence',
    desc: 'Discover research, data and insights shaping digital advertising, marketing and audience engagement.',
    cta: 'Explore Research',
    to: '/news#research',
  },
  {
    id: 'insights',
    n: '03',
    title: 'Marketing Insights',
    desc: 'Practical perspectives on the disciplines that move modern marketing.',
    cta: 'Explore Marketing Insights',
    to: '/news#insights',
  },
  {
    id: 'portal',
    n: '04',
    title: 'News Portal',
    desc: 'Stay connected with the latest developments, industry updates and perspectives.',
    cta: 'Visit News Portal',
    to: '/news#portal',
  },
];

export const careersSections = {
  why: 'Work on meaningful digital experiences across advertising, marketing, technology and emerging industries.',
  life: ['Team', 'Culture', 'Collaboration', 'Growth'],
  culture: ['Creative', 'Collaborative', 'Curious', 'Driven', 'Human'],
};
