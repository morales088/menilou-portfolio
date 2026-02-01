export interface Media {
  type: 'image' | 'video';
  url: string;
  alt: string;
}

export interface Service {
  name: string;
  media: Media[];
  tools?: string[];
  outcomes?: string[];
}

export interface Client {
  id: string;
  slug: string;
  name: string;
  industry: string;
  coverImage: string;
  shortDescription: string;
  services: Service[];
  galleryVideos?: Media[];
}

export const clientsData: Client[] = [
  {
    id: '1',
    slug: 'beauty-aesthetic-client',
    name: 'Beauty Aesthetic Client',
    industry: 'Beauty & Wellness',
    coverImage: '/portfolio/beauty-aesthetic/cover.png',
    shortDescription: 'Social media management and content creation for a beauty brand focused on aesthetic treatments and skincare.',
    services: [
      {
        name: 'Social Media Management',
        media: [
          { type: 'image', url: '/portfolio/beauty-aesthetic/social-1.png', alt: 'Instagram post design' },
          { type: 'image', url: '/portfolio/beauty-aesthetic/social-2.png', alt: 'Social media content' },
          { type: 'image', url: '/portfolio/beauty-aesthetic/social-3.png', alt: 'Brand content' },
          { type: 'image', url: '/portfolio/beauty-aesthetic/social-4.png', alt: 'Promotional post' },
          { type: 'image', url: '/portfolio/beauty-aesthetic/social-5.png', alt: 'Engagement content' },
          { type: 'image', url: '/portfolio/beauty-aesthetic/social-6.png', alt: 'Story template' },
        ],
        tools: ['Canva', 'Meta Business Suite', 'Instagram', 'Facebook'],
        outcomes: ['Increased engagement by 150%', 'Consistent brand presence', 'Professional visual identity'],
      },
    ],
  },
  {
    id: '2',
    slug: 'fitness-client',
    name: 'Fitness Client',
    industry: 'Health & Fitness',
    coverImage: '/portfolio/fitness/cover.png',
    shortDescription: 'Social media strategy and lead generation for nutrition and fitness coaching business.',
    services: [
      {
        name: 'Social Media Management',
        media: [
          { type: 'image', url: '/portfolio/fitness/social-1.png', alt: 'Fitness content' },
          { type: 'image', url: '/portfolio/fitness/social-2.png', alt: 'Workout motivation' },
          { type: 'image', url: '/portfolio/fitness/social-3.png', alt: 'Health tips' },
          { type: 'video', url: '/portfolio/fitness/video-social-1.mp4', alt: 'Motivational fitness reel' },
          { type: 'video', url: '/portfolio/fitness/video-social-2.mp4', alt: 'Training motivation content' },
        ],
        tools: ['Facebook', 'Instagram', 'TikTok', 'Canva', 'Capcut'],
        outcomes: ['Enhanced brand visibility', 'Consistent posting schedule', 'Community growth'],
      },
      {
        name: 'Lead Generation',
        media: [
          { type: 'image', url: '/portfolio/fitness/lead-1.png', alt: 'Lead magnet design' },
          { type: 'image', url: '/portfolio/fitness/lead-2.png', alt: 'Call-to-action graphics' },
        ],
        tools: ['GoHighLevel', 'Meta Ads Manager'],
        outcomes: ['Generated 50+ qualified leads monthly', 'Improved conversion rates', 'Automated follow-up systems'],
      },
      {
        name: 'Content Creation',
        media: [
          { type: 'image', url: '/portfolio/fitness/content-1.png', alt: 'Educational content' },
        ],
        tools: ['Canva', 'Capcut'],
        outcomes: ['Engaging visual content', 'Brand storytelling', 'Increased audience retention'],
      },
    ],
    galleryVideos: [
      { type: 'video', url: '/portfolio/fitness/video-gallery-1.mp4', alt: 'Fitness reel sample 1' },
      { type: 'video', url: '/portfolio/fitness/video-gallery-2.mp4', alt: 'Bicep exercise demo' },
      { type: 'video', url: '/portfolio/fitness/video-gallery-3.mp4', alt: 'Triceps workout video' },
      { type: 'video', url: '/portfolio/fitness/video-gallery-4.mp4', alt: 'POV workout content' },
      { type: 'video', url: '/portfolio/fitness/video-gallery-5.mp4', alt: 'Ski-erg training video' },
      { type: 'video', url: '/portfolio/fitness/video-gallery-6.mp4', alt: 'Triceps training reel' },
    ],
  },
  {
    id: '3',
    slug: 'real-estate-client',
    name: 'Real Estate Client',
    industry: 'Real Estate & Legal',
    coverImage: '/portfolio/realestate/cover.png',
    shortDescription: 'Email marketing automation and community management for a real estate lawyer.',
    services: [
      {
        name: 'Email Marketing',
        media: [
          { type: 'image', url: '/portfolio/realestate/email-1.png', alt: 'Email campaign' },
          { type: 'image', url: '/portfolio/realestate/email-2.png', alt: 'Newsletter design' },
        ],
        tools: ['HighLevel', 'Mailchimp'],
        outcomes: ['35% email open rate', 'Automated nurture sequences', 'Increased client bookings'],
      },
      {
        name: 'Social Media Management',
        media: [
          { type: 'image', url: '/portfolio/realestate/social-1.png', alt: 'Property showcase' },
          { type: 'image', url: '/portfolio/realestate/social-2.png', alt: 'Market updates' },
          { type: 'video', url: '/portfolio/realestate/video-social-1.mp4', alt: 'Bloom residences property video' },
          { type: 'video', url: '/portfolio/realestate/video-social-2.mp4', alt: 'Benefits of owning real estate' },
        ],
        tools: ['Facebook', 'Instagram', 'LinkedIn', 'Capcut'],
        outcomes: ['Professional online presence', 'Increased property inquiries', 'Authority building'],
      },
      {
        name: 'Content Creation',
        media: [
          { type: 'video', url: '/portfolio/realestate/video-content-1.mp4', alt: 'Meet the team video' },
          { type: 'video', url: '/portfolio/realestate/video-content-2.mp4', alt: 'Personal branding content' },
        ],
        tools: ['Canva', 'Capcut', 'Instagram Reels'],
        outcomes: ['Brand credibility', 'Personal connection with clients', 'Professional presentation'],
      },
      {
        name: 'CRM Management',
        media: [
          { type: 'image', url: '/portfolio/realestate/crm-1.png', alt: 'CRM workflow' },
          { type: 'image', url: '/portfolio/realestate/crm-2.png', alt: 'Client database' },
        ],
        tools: ['HighLevel', 'ManyChat', 'Skool'],
        outcomes: ['Streamlined client communications', 'Automated appointment scheduling', 'Organized contact database'],
      },
    ],
    galleryVideos: [
      { type: 'video', url: '/portfolio/realestate/video-gallery-1.mp4', alt: 'Calm residences showcase' },
      { type: 'video', url: '/portfolio/realestate/video-gallery-2.mp4', alt: 'Hope residences property tour' },
      { type: 'video', url: '/portfolio/realestate/video-gallery-3.mp4', alt: 'Generate passive income tips' },
      { type: 'video', url: '/portfolio/realestate/video-gallery-4.mp4', alt: 'Real estate marketing sample' },
    ],
  },
  {
    id: '4',
    slug: 'fashion-client',
    name: 'Fashion Client',
    industry: 'Fashion & Apparel',
    coverImage: '/portfolio/fashion/cover.png',
    shortDescription: 'Social media management and visual content creation for fashion brands and clothing businesses.',
    services: [
      {
        name: 'Social Media Management',
        media: [
          { type: 'image', url: '/portfolio/fashion/social-1.png', alt: 'Fashion content' },
          { type: 'image', url: '/portfolio/fashion/social-2.png', alt: 'Style posts' },
          { type: 'image', url: '/portfolio/fashion/social-3.png', alt: 'Product showcase' },
          { type: 'video', url: '/portfolio/fashion/video-social-1.mp4', alt: 'Fashion reel sample' },
          { type: 'video', url: '/portfolio/fashion/video-social-2.mp4', alt: 'Style content video' },
        ],
        tools: ['Instagram', 'Pinterest', 'TikTok', 'Canva', 'Capcut'],
        outcomes: ['Increased brand visibility', 'Engaging fashion content', 'Trend-focused strategy'],
      },
      {
        name: 'Content Creation',
        media: [
          { type: 'image', url: '/portfolio/fashion/content-1.png', alt: 'Lookbook design' },
          { type: 'image', url: '/portfolio/fashion/content-2.png', alt: 'Brand visuals' },
        ],
        tools: ['Canva', 'Adobe Express'],
        outcomes: ['Professional fashion photography', 'Cohesive brand aesthetic', 'Seasonal campaigns'],
      },
    ],
    galleryVideos: [
      { type: 'video', url: '/portfolio/fashion/video-gallery-1.mp4', alt: 'Fashion reel collection' },
      { type: 'video', url: '/portfolio/fashion/video-gallery-2.mp4', alt: 'Style showcase video' },
      { type: 'video', url: '/portfolio/fashion/video-gallery-3.mp4', alt: 'Fashion content sample' },
    ],
  },
  {
    id: '5',
    slug: 'lifestyle-client',
    name: 'Lifestyle Client',
    industry: 'Lifestyle & Wellness',
    coverImage: '/portfolio/lifestyle/cover.png',
    shortDescription: 'Content strategy and social media management for lifestyle brands promoting wellness and balanced living.',
    services: [
      {
        name: 'Social Media Management',
        media: [
          { type: 'image', url: '/portfolio/lifestyle/social-1.png', alt: 'Lifestyle content' },
          { type: 'image', url: '/portfolio/lifestyle/social-2.png', alt: 'Wellness posts' },
          { type: 'image', url: '/portfolio/lifestyle/social-3.png', alt: 'Daily inspiration' },
          { type: 'video', url: '/portfolio/lifestyle/video-social-1.mp4', alt: 'Lifestyle tips video' },
          { type: 'video', url: '/portfolio/lifestyle/video-social-2.mp4', alt: 'Wellness content reel' },
        ],
        tools: ['Instagram', 'Facebook', 'Pinterest', 'Canva', 'Capcut'],
        outcomes: ['Authentic lifestyle content', 'Community engagement', 'Brand storytelling'],
      },
      {
        name: 'Content Creation',
        media: [
          { type: 'image', url: '/portfolio/lifestyle/content-1.png', alt: 'Lifestyle graphics' },
          { type: 'image', url: '/portfolio/lifestyle/content-2.png', alt: 'Inspirational content' },
        ],
        tools: ['Canva', 'Capcut'],
        outcomes: ['Relatable visual content', 'Wellness-focused messaging', 'Aspirational branding'],
      },
    ],
    galleryVideos: [
      { type: 'video', url: '/portfolio/lifestyle/video-gallery-1.mp4', alt: 'Lifestyle brand content' },
      { type: 'video', url: '/portfolio/lifestyle/video-gallery-2.mp4', alt: 'Relatable lifestyle reel' },
    ],
  },
  {
    id: '6',
    slug: 'others-client',
    name: 'Various Industries',
    industry: 'Multiple Industries',
    coverImage: '/portfolio/others/cover.png',
    shortDescription: 'Diverse VA services including social media, content creation, and administrative support across various industries.',
    services: [
      {
        name: 'Social Media Management',
        media: [
          { type: 'image', url: '/portfolio/others/social-1.png', alt: 'Social media content' },
          { type: 'image', url: '/portfolio/others/social-2.png', alt: 'Engagement posts' },
        ],
        tools: ['Facebook', 'Instagram', 'Canva'],
        outcomes: ['Versatile content creation', 'Consistent brand messaging', 'Cross-industry expertise'],
      },
      {
        name: 'Content Creation',
        media: [
          { type: 'image', url: '/portfolio/others/content-1.png', alt: 'Content graphics' },
          { type: 'image', url: '/portfolio/others/content-2.png', alt: 'Educational material' },
        ],
        tools: ['Canva', 'Adobe Express', 'Capcut'],
        outcomes: ['High-quality visuals', 'Brand-aligned content', 'Quick turnaround'],
      },
      {
        name: 'Graphic Design',
        media: [
          { type: 'image', url: '/portfolio/others/design-1.png', alt: 'Design work' },
          { type: 'image', url: '/portfolio/others/design-2.png', alt: 'Creative graphics' },
        ],
        tools: ['Canva', 'Photoshop'],
        outcomes: ['Professional designs', 'Brand consistency', 'Creative solutions'],
      },
    ],
  },
];

export function getClientBySlug(slug: string): Client | undefined {
  return clientsData.find(client => client.slug === slug);
}

export function getAllClientSlugs(): string[] {
  return clientsData.map(client => client.slug);
}
