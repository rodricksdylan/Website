/**
 * CMS-ready data shape for In the Media page.
 * Replace with fetch() or getStaticProps when connecting a headless CMS or API.
 */

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary?: string;
  url?: string;
  source?: string;
  /** Optional image URL (e.g. from the article page or CMS). External domains must be in next.config.js images.remotePatterns. */
  imageUrl?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'Brokers benefit from natural-language AI assistants',
    date: '2026-02-11',
    summary: 'Australian insurance brokers operate in increasingly complex environments. InsurAI tools sit alongside existing policy, CRM and compliance systems, allowing brokers to use plain English to retrieve information, prepare documentation and manage administrative tasks through a conversational interface. Brought to you by InsurAI.',
    url: 'https://www.insurancenews.com.au/inside-information/brokers-benefit-from-natural-language-ai-assistants',
    source: 'Insurance News',
  },
  {
    id: '2',
    title: 'InsurAI wins PitchLIVE26 at Insurtech Australia conference',
    date: '2026-02-19',
    summary: 'Insurtech Australia’s InsurtechLIVE26 in Sydney – InsurAI took out the #PitchLIVE26 winner’s gong alongside fellow finalists Crikey AI, PropertyExpert Global and Voxworks.',
    url: 'https://www.linkedin.com/posts/insurtechlive26-pitchlive26-insurtechlive26-ugcPost-7430122247010562048-e89t?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA3O8aUBqAGTYXThMjYhtnI1jpyhQhHAo3A',
    source: 'Insurtech Australia (LinkedIn)',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5622AQGt73rL3J7QCA/feedshare-shrink_800/B56Zx0YzC_HYAg-/0/1771479183817?e=1773273600&v=beta&t=EFI5FUGldkpdtuDyus_dacIVEhtkM4hOIN0BwdMVNCY',
  },
  {
    id: '3',
    title: 'Bringing the win back to Tassie!',
    date: '2026-02-19',
    summary: 'Co-founder Dylan Rodricks on winning PitchLIVE26: "Had an absolute blast pitching live today. It\'s an honor to be recognized, especially among such a talented group of innovators. Deeply grateful to Insurtech Australia for the platform and the constant support."',
    url: 'https://www.linkedin.com/posts/dylan-rodricks-03170265_insurtechlive26-insurancetech-activity-7429769547232133121-pIPG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAA3O8aUBqAGTYXThMjYhtnI1jpyhQhHAo3A',
    source: 'Dylan Rodricks (LinkedIn)',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D5622AQEbsxQoTi2UZQ/feedshare-shrink_800/B56ZxvYCBaIIAg-/0/1771395096923?e=1773273600&v=beta&t=Am_CzdBZTUd_Tm1uBmvyhE7rSvCcnUuX-l7GACYxgDg',
  },
  {
    id: '4',
    title: 'AI assistant \'tailor-made for brokers\'',
    date: '2025-06-23',
    summary: 'Hobart broker Dylan Rodricks has launched InsurAI, using AI to make quoting, comparing policies and managing renewals easier. The system was trained on policies, wordings and exclusions to create an insurance-specific assistant. PolicyBot lets brokers chat to pull information from PDSs; Quotex connects with broking software for quotes and renewals.',
    url: 'https://www.insurancenews.com.au/insurtech/ai-assistant-tailor-made-for-brokers',
    source: 'Insurance News',
  },
  {
    id: '5',
    title: 'InsurtechLIVE reveals pitch contest finalists',
    date: '2026-02-16',
    summary: 'Four start-ups selected for the pitch competition at InsurtechLIVE26: CrikeyAI, Hobart-based InsurAI, PropertyExpert and Voxworks. InsurAI says its smart automation tools streamline application processing, policy look-ups and data retrieval, cutting hours of work down to minutes.',
    url: 'https://www.insurancenews.com.au/insurtech/insurtech-live-reveals-pitch-contest-finalists',
    source: 'Insurance News',
  },
];
