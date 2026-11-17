
export type ServiceVisualKey =
  | 'affiliate'
  | 'advertising'
  | 'seo'
  | 'brand'
  | 'strategy'
  | 'video'
  | 'content';

export interface ServiceStep {
  title: string;
  text: string;
}

export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string;
  flow: string[];
  howItWorks: ServiceStep[];
  benefits: ServiceStep[];
  strategy: string;
  performance: string;
  visual: ServiceVisualKey;
}

export const services: Service[] = [
  {
    slug: 'online-advertising',
    title: 'Digital Advertising',
    tagline: 'Targeted reach, maximum impact.',
    description:
      'Engage your audience with cutting-edge display, video and social advertising solutions.',
    overview:
      'From mobile placements to social and video, we plan and run advertising that reaches the people most likely to care.',
    flow: ['Audience', 'Targeting', 'Creative', 'Placement', 'Engagement'],
    howItWorks: [
      {
        title: 'Understand the audience',
        text: 'We map who you need to reach and where they spend their attention.',
      },
      {
        title: 'Build targeted campaigns',
        text: 'Display, video and social formats are matched to each audience and objective.',
      },
      {
        title: 'Launch with intent',
        text: 'Campaigns roll out with clear success measures from day one.',
      },
      {
        title: 'Refine in flight',
        text: 'Targeting, creative and budgets are adjusted based on performance.',
      },
    ],
    benefits: [
      {
        title: 'Precise targeting',
        text: 'Reach audiences defined by real signals, not guesswork.',
      },
      {
        title: 'Format flexibility',
        text: 'Display, video and social working together in one plan.',
      },
      {
        title: 'Mobile-first thinking',
        text: 'Experiences designed for the screens your audience uses most.',
      },
    ],
    strategy:
      'We connect audience insight with channel planning so each placement has a purpose.',
    performance:
      'Data-driven optimization keeps campaigns focused on engagement and results.',
    visual: 'advertising',
  },
  {
    slug: 'seo-optimization',
    title: 'Search Growth & SEO',
    tagline: 'Rise above the noise.',
    description:
      'Enhance your search rankings and boost visibility with expert SEO techniques.',
    overview:
      'We strengthen the technical foundations, content and authority of your site so you are found by the people already looking for what you offer.',
    flow: ['Research', 'Optimize', 'Rank', 'Visibility', 'Growth'],
    howItWorks: [
      {
        title: 'Audit',
        text: 'Review technical health, content and competitive landscape.',
      },
      {
        title: 'Keyword strategy',
        text: 'Identify searches that matter most to your audience and business.',
      },
      {
        title: 'On-site improvements',
        text: 'Optimize structure, speed and content for search and users.',
      },
      {
        title: 'Ongoing growth',
        text: 'Build content and authority to sustain visibility.',
      },
    ],
    benefits: [
      {
        title: 'Sustainable visibility',
        text: 'Organic presence that keeps working over time.',
      },
      {
        title: 'Higher-intent traffic',
        text: 'Visitors arriving with a clear need you can meet.',
      },
      {
        title: 'Stronger foundations',
        text: 'A faster, better structured site that supports every channel.',
      },
    ],
    strategy:
      'SEO is planned alongside your content and brand so every page earns its place in search.',
    performance:
      'We track rankings, visibility and engagement to guide where to focus next.',
    visual: 'seo',
  },
  {
    slug: 'brand-strategy',
    title: 'Brand Identity & Strategy',
    tagline: 'Craft a memorable identity.',
    description:
      'Build a strong brand presence and communicate your message with precision.',
    overview:
      'We help define what your brand stands for, how it sounds and how it looks so your audience recognizes and remembers you.',
    flow: ['Insight', 'Positioning', 'Identity', 'Message', 'Recognition'],
    howItWorks: [
      {
        title: 'Discover',
        text: 'Understand your business, audience and competitive context.',
      },
      {
        title: 'Position',
        text: 'Define the space your brand should own and why it matters.',
      },
      {
        title: 'Express',
        text: 'Shape identity, voice and messaging that bring the position to life.',
      },
      {
        title: 'Activate',
        text: 'Roll the brand out consistently across digital touchpoints.',
      },
    ],
    benefits: [
      {
        title: 'Distinctive presence',
        text: 'Stand out in a crowded digital space.',
      },
      {
        title: 'Consistent message',
        text: 'One clear story across every channel and campaign.',
      },
      {
        title: 'Meaningful connection',
        text: 'An identity your customers relate to and remember.',
      },
    ],
    strategy:
      'Brand decisions are rooted in audience insight, so creativity always has direction.',
    performance:
      'We look at recognition, engagement and response to understand how the brand lands.',
    visual: 'brand',
  },
  {
    slug: 'digital-strategy-planning',
    title: 'Digital Strategy Planning',
    tagline: 'Strategize for success.',
    description:
      'Tailored digital plans that align with your goals and drive impactful results.',
    overview:
      'We bring channels, audiences, creative and measurement together into one plan built around your objectives.',
    flow: ['Goals', 'Audience', 'Channels', 'Plan', 'Results'],
    howItWorks: [
      {
        title: 'Set the goals',
        text: 'Clarify what success looks like and how it will be measured.',
      },
      {
        title: 'Map the audience',
        text: 'Understand who you are reaching and what moves them.',
      },
      {
        title: 'Choose the channels',
        text: 'Select the mix of advertising, content and search that fits.',
      },
      {
        title: 'Plan and adapt',
        text: 'Create a roadmap that evolves with performance data.',
      },
    ],
    benefits: [
      {
        title: 'Clear direction',
        text: 'Every activity connected to a defined objective.',
      },
      {
        title: 'Smarter allocation',
        text: 'Budget focused where it can make the most difference.',
      },
      {
        title: 'Room to adapt',
        text: 'Plans built to respond to what the data shows.',
      },
    ],
    strategy:
      'We start from your business goals and work backwards to the right mix of channels and messages.',
    performance:
      'Regular reviews keep the plan aligned to results as your market changes.',
    visual: 'strategy',
  },
  {
    slug: 'video-content-creation',
    title: 'Video Content Creation',
    tagline: 'Capture attention. Tell your story.',
    description:
      'Create captivating videos that tell your brand story and engage your audience.',
    overview:
      'We develop video concepts, scripts and edits made for the platforms your audience watches.',
    flow: ['Story', 'Script', 'Production', 'Distribution', 'Engagement'],
    howItWorks: [
      {
        title: 'Concept',
        text: 'Ideas grounded in your brand and your audience’s attention.',
      },
      {
        title: 'Script and storyboard',
        text: 'A clear narrative shaped for each format and placement.',
      },
      {
        title: 'Production',
        text: 'Footage, motion and edits crafted for impact.',
      },
      {
        title: 'Distribution',
        text: 'Versions ready for every channel.',
      },
    ],
    benefits: [
      {
        title: 'Stronger storytelling',
        text: 'Bring your brand to life in motion.',
      },
      {
        title: 'Platform-ready',
        text: 'Formats designed for mobile, social and display.',
      },
      {
        title: 'Higher engagement',
        text: 'Content made to stop the scroll.',
      },
    ],
    strategy:
      'Every video has a role in the wider campaign, from awareness to action.',
    performance:
      'View-through and engagement signals guide what we create next.',
    visual: 'video',
  },
  {
    slug: 'content-marketing',
    title: 'Content Marketing',
    tagline: 'Content that converts.',
    description:
      'Engage and inspire with compelling content crafted to drive trust and conversions.',
    overview:
      'We plan and create content that informs, inspires and moves your audience toward action.',
    flow: ['Insight', 'Content', 'Distribution', 'Trust', 'Conversion'],
    howItWorks: [
      {
        title: 'Listen',
        text: 'Understand the questions and interests of your audience.',
      },
      {
        title: 'Plan',
        text: 'Build an editorial plan tied to your goals and search strategy.',
      },
      {
        title: 'Create',
        text: 'Articles, guides and assets crafted with your brand voice.',
      },
      {
        title: 'Distribute',
        text: 'Put content in front of the right people across channels.',
      },
    ],
    benefits: [
      {
        title: 'Lasting trust',
        text: 'Become a credible voice in your category.',
      },
      {
        title: 'Search support',
        text: 'Content that strengthens organic visibility.',
      },
      {
        title: 'Conversion paths',
        text: 'Content designed to guide readers to the next step.',
      },
    ],
    strategy:
      'Content is planned with SEO, brand and campaigns so it works across the whole journey.',
    performance:
      'We measure engagement and conversions to refine topics and formats.',
    visual: 'content',
  },
];
