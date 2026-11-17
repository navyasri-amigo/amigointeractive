import { images } from './brand';

export type ArticleSection = 'news' | 'research' | 'insights';

export interface Article {
  id: string;
  section: ArticleSection;
  category: string;
  tags: string[];
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

// Editorial pieces built around Amigo Interactive's real service areas.
export const articles: Article[] = [
{
  id: 'a1',
  section: 'news',
  category: 'News & Views',
  tags: ['Mobile Advertising', 'Digital Marketing'],
  title: 'Drive engagement effortlessly: our approach to mobile advertising',
  excerpt: 'How targeted, data-driven strategies help brands turn mobile attention into meaningful engagement.',
  date: '2026-10-02',
  readTime: '5 min read',
  image: images.newsMobile
},
{
  id: 'a2',
  section: 'research',
  category: 'Audience Intelligence',
  tags: ['Performance Marketing'],
  title: 'Reading the signals that shape audience engagement',
  excerpt: 'What engagement data can — and can’t — tell you about the people behind every interaction.',
  date: '2026-09-24',
  readTime: '7 min read',
  image: images.newsData
},
{
  id: 'a3',
  section: 'news',
  category: 'Inside Amigo',
  tags: ['Brand Strategy', 'Content'],
  title: 'Where data, creativity and performance meet',
  excerpt: 'A closer look at the Amigo difference and how our teams bring three disciplines into one approach.',
  date: '2026-09-16',
  readTime: '4 min read',
  image: images.editorialTeam
},
{
  id: 'a4',
  section: 'insights',
  category: 'iGaming',
  tags: ['iGaming', 'Mobile Advertising'],
  title: 'Player acquisition in iGaming starts with the right audience',
  excerpt: 'Why tailored digital strategies matter from first impression to lasting player engagement.',
  date: '2026-09-04',
  readTime: '6 min read',
  image: images.heroObject
},
{
  id: 'a5',
  section: 'research',
  category: 'Marketing Trends',
  tags: ['Digital Marketing'],
  title: 'Digital advertising shifts worth watching this year',
  excerpt: 'Formats, channels and audience behaviors reshaping how brands plan their media.',
  date: '2026-08-22',
  readTime: '6 min read',
  image: images.newsMobile
},
{
  id: 'a6',
  section: 'insights',
  category: 'SEO',
  tags: ['SEO', 'Content'],
  title: 'SEO that rises above the noise',
  excerpt: 'Building search visibility that lasts, through strong foundations and genuinely useful content.',
  date: '2026-08-08',
  readTime: '5 min read',
  image: images.newsData
},
{
  id: 'a7',
  section: 'insights',
  category: 'Brand Strategy',
  tags: ['Brand Strategy'],
  title: 'Crafting a memorable identity in a crowded digital space',
  excerpt: 'The building blocks of a brand that people recognize, remember and return to.',
  date: '2026-07-28',
  readTime: '5 min read',
  image: images.careersCulture
}];


export const researchTopics: {title: string;text: string;}[] = [
{ title: 'Digital Advertising', text: 'Formats, placements and the evolving advertising landscape.' },
{ title: 'Marketing Trends', text: 'Shifts in channels, platforms and consumer behavior.' },
{ title: 'Audience Intelligence', text: 'Understanding the people behind every interaction.' }];


export const insightTopics = [
'Digital Marketing',
'Performance Marketing',
'SEO',
'Brand Strategy',
'Content',
'iGaming',
'Mobile Advertising'];


export type PortalTab = 'Latest' | 'Trending' | 'Industry News';
export const portalTabs: PortalTab[] = ['Latest', 'Trending', 'Industry News'];
export const trendingIds = ['a4', 'a1', 'a6', 'a2'];