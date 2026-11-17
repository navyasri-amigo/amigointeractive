export type MenuKey = 'about' | 'services' | 'news' | 'careers' | 'locations';

export interface NavLink {
  label: string;
  to: string;
}

export interface NavItem {
  key: MenuKey;
  label: string;
  to: string;
  links: NavLink[];
}

export const navItems: NavItem[] = [
{
  key: 'about',
  label: 'About Us',
  to: '/about',
  links: [
  { label: 'Company Information', to: '/about#company' },
  { label: 'Our Locations', to: '/about#locations' },
  { label: 'How We Work', to: '/about#how' },
  { label: 'What We Do', to: '/services' }]

},
{
  key: 'services',
  label: 'What We Do',
  to: '/services',
  links: [
  { label: 'All Services', to: '/services' },
  { label: 'Affiliate Marketing', to: '/services/affiliate-marketing' },
  { label: 'Online Advertising', to: '/services/online-advertising' },
  { label: 'SEO Optimization', to: '/services/seo-optimization' },
  { label: 'Brand Strategy', to: '/services/brand-strategy' },
  { label: 'Digital Strategy Planning', to: '/services/digital-strategy-planning' },
  { label: 'Video Content Creation', to: '/services/video-content-creation' },
  { label: 'Content Marketing', to: '/services/content-marketing' }]

},
{
  key: 'news',
  label: 'News & Views',
  to: '/news',
  links: [
  { label: 'News & Views', to: '/news#latest' },
  { label: 'Research & Intelligence', to: '/news#research' },
  { label: 'Marketing Insights', to: '/news#insights' },
  { label: 'News Portal', to: '/news#portal' }]

},
{
  key: 'careers',
  label: 'Careers',
  to: '/careers',
  links: [
  { label: 'Why Amigo', to: '/careers#why' },
  { label: 'Life at Amigo', to: '/careers#life' },
  { label: 'Our Culture', to: '/careers#culture' },
  { label: 'Open Positions', to: '/careers#positions' }]

},
{
  key: 'locations',
  label: 'Office Locations',
  to: '/locations',
  links: [
  { label: 'Location Finder', to: '/locations' },
  { label: 'Contact', to: '/contact' }]

}];


export const footerNav: NavLink[] = [
{ label: 'Home', to: '/' },
{ label: 'About Us', to: '/about' },
{ label: 'What We Do', to: '/services' },
{ label: 'News & Views', to: '/news' },
{ label: 'Careers', to: '/careers' },
{ label: 'Office Locations', to: '/locations' },
{ label: 'Testimonials', to: '/testimonials' },
{ label: 'Contact', to: '/contact' }];


export const businessNav: NavLink[] = [
{ label: 'Advertiser Signup', to: '/advertiser-signup' },
{ label: 'Publisher Signup', to: '/publisher-signup' }];


export const globalRegions = ['Global', 'Americas', 'Europe', 'Asia Pacific', 'Middle East & Africa'];