import type { Metadata } from 'next';
import BlogsListing from './BlogsListing';

export const metadata: Metadata = {
  title: 'Blogs - Prajha Group of Company | Project Management Construction',
  description:
    'Why Choosing the Right Construction Company Matters for Your Project When embarking on any construction project, selecting the best construction company is crucial for success. Whether it’s a residential construction in Chennai or a large-scale',
  alternates: {
    canonical: 'https://www.prajhagroup.com/blogs/',
  },
  openGraph: {
    title: 'Blogs - Prajha Group of Company | Project Management Construction',
    description:
      'Why Choosing the Right Construction Company Matters for Your Project When embarking on any construction project, selecting the best construction company is crucial for success. Whether it’s a residential construction in Chennai or a large-scale',
    type: 'website',
    url: 'https://www.prajhagroup.com/blogs/',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogsListingPage() {
  return <BlogsListing />;
}
