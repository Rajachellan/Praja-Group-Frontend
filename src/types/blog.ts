export interface IBlogImage {
  url: string;
  publicId?: string;
  alt?: string;
}

export interface IAuthor {
  name: string;
  id?: string;
}

export interface IFAQ {
  question: string;
  answer: string;
}

export interface ISEO {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}

export interface ITiptapMark {
  type: string;
  attrs?: Record<string, string | undefined>;
}

export interface ITiptapNode {
  type?: string;
  text?: string;
  marks?: ITiptapMark[];
  attrs?: {
    level?: number;
    textAlign?: string | null;
    checked?: boolean;
    src?: string;
    alt?: string;
    href?: string;
  };
  content?: ITiptapNode[];
}

export type BlogContentValue = string | ITiptapNode | Record<string, unknown> | null | undefined;

export interface IBlog {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: IBlogImage | string;
  coverImage?: IBlogImage | string;
  mainImage?: IBlogImage | string;
  images?: string;
  metaTitle?: string;
  metaDesc?: string;
  content: BlogContentValue; // Tiptap JSON Document or HTML string

  category: string;
  tags: string[];
  author: IAuthor;
  faqs: IFAQ[];
  seo: ISEO;
  status: 'draft' | 'published' | 'publish' | 'private' | 'scheduled';
  publishedAt?: string;
  scheduledAt?: string;
  createdAt: string;
  updatedAt: string;
}
