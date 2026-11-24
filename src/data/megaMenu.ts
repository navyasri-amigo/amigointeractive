export type AboutFeature = 'company' | 'locations' | 'how' | 'what';

export const aboutItems: {id: AboutFeature;n: string;title: string;desc: string;cta: string;to: string;}[] = [
{
  id: 'company',
  n: '01',
  title: 'Company Information',
  desc: 'Discover Amigo Interactive, our vision, our capabilities and the ideas behind the work we create.',
  cta: 'Explore Company',
  to: '/about#company'
},
{
  id: 'locations',
  n: '02',
  title: 'Our Locations',
  desc: 'Explore our global presence and discover where Amigo Interactive operates.',
  cta: 'View Locations',
  to: '/locations'
},
{
  id: 'how',
  n: '03',
  title: 'How We Work',
  desc: 'Explore our approach to strategy, creativity, technology and performance.',
  cta: 'Our Working Strategy',
  to: '/about#how'
},
{
  id: 'what',
  n: '04',
  title: 'What We Do',
  desc: 'Explore the services and digital solutions we provide to brands, advertisers and partners.',
  cta: 'Explore Services',
  to: '/services'
}];


export type NewsSectionId = 'news' | 'research' | 'insights' | 'portal';

export const newsSections: {id: NewsSectionId;n: string;title: string;desc: string;cta: string;to: string;}[] = [
{
  id: 'news',
  n: '01',
  title: 'News & Views',
  desc: 'Explore the latest news, perspectives, ideas and developments from Amigo Interactive.',
  cta: 'View All News & Views',
  to: '/news#latest'
},
{
  id: 'research',
  n: '02',
  title: 'Research & Intelligence',
  desc: 'Discover research, data and insights shaping digital advertising, marketing and audience engagement.',
  cta: 'Explore Research',
  to: '/news#research'
},
{
  id: 'insights',
  n: '03',
  title: 'Marketing Insights',
  desc: 'Practical perspectives on the disciplines that move modern marketing.',
  cta: 'Explore Marketing Insights',
  to: '/news#insights'
},
{
  id: 'portal',
  n: '04',
  title: 'News Portal',
  desc: 'Stay connected with the latest developments, industry updates and perspectives.',
  cta: 'Visit News Portal',
  to: '/news#portal'
}];


export const careersSections = {
  why: 'Work on meaningful digital experiences across advertising, marketing, technology and emerging industries.',
  life: ['Team', 'Culture', 'Collaboration', 'Growth'],
  culture: ['Creative', 'Collaborative', 'Curious', 'Driven', 'Human']
};