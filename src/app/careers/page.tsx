import type { Metadata } from 'next';
import CareersContent from './CareersContent';

export const metadata: Metadata = {
  title: 'Careers at Prajha Group | Civil Engineering & Real Estate Opportunities',
  description:
    'Explore exciting career opportunities at Prajha Group in Chennai. Join our engineering, project management, site supervision, and architectural teams to build signature infrastructure.',
  alternates: {
    canonical: 'https://www.prajhagroup.com/careers/',
  },
  openGraph: {
    title: 'Careers at Prajha Group | Engineering & Real Estate Opportunities in Chennai',
    description:
      'Join Prajha Group of Companies in Chennai. Discover rewarding roles in Civil Site Engineering, Project Management, BOQ Estimation, and Architecture.',
    url: 'https://www.prajhagroup.com/careers/',
    siteName: 'Prajha Group',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
