import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { IBlog } from '../../../types/blog';
import BlogFaqAccordion from '../../components/BlogFaqAccordion';
import { formatDate, estimateReadingTime } from '../../../lib/utils';
import { 
  Calendar, 
  User, 
  Tag, 
  HelpCircle, 
  ArrowLeft, 
  Clock, 
  Share2, 
  Building2, 
  CheckCircle2, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

interface PublicBlogDetailProps {
  params: Promise<{ slug: string }>;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api';

async function fetchPublicBlog(slug: string): Promise<IBlog | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/slug/${slug}`, {
      cache: 'no-store'
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data || null;
  } catch {
    return null;
  }
}

// Generate Dynamic Next.js Metadata for SEO
export async function generateMetadata({ params }: PublicBlogDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await fetchPublicBlog(slug);

  if (!blog) {
    return {
      title: 'Publication Not Found | Prajha Groups',
      description: 'The requested corporate publication could not be found.'
    };
  }

  const title = blog.seo?.title || `${blog.title} | Prajha Groups`;
  const description = blog.seo?.description || blog.excerpt || `Read ${blog.title} published by Prajha Groups.`;
  const image = blog.seo?.ogImage || blog.mainImage?.url || blog.coverImage?.url || blog.featuredImage?.url;

  return {
    title,
    description,
    keywords: blog.seo?.keywords || blog.tags || [],
    alternates: {
      canonical: blog.seo?.canonicalUrl || `https://prajhagroups.com/blogs/${blog.slug}`
    },
    openGraph: {
      title: blog.seo?.ogTitle || title,
      description: blog.seo?.ogDescription || description,
      url: `https://prajhagroups.com/blogs/${blog.slug}`,
      siteName: 'Prajha Groups',
      images: image ? [{ url: image }] : [],
      type: 'article',
      publishedTime: blog.publishedAt || blog.createdAt
    }
  };
}

export default async function PublicBlogDetailPage({ params }: PublicBlogDetailProps) {
  const { slug } = await params;
  const blog = await fetchPublicBlog(slug);

  if (!blog) {
    notFound();
  }

  // Google FAQ Structured Data Schema
  const faqSchema = blog.faqs && blog.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': blog.faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  } : null;

  // Render Tiptap JSON nodes into clean React elements
  const renderTiptapNode = (node: any, index: number): React.ReactNode => {
    if (!node) return null;

    if (node.type === 'text') {
      let textContent: React.ReactNode = node.text;

      if (node.marks) {
        node.marks.forEach((mark: any) => {
          if (mark.type === 'bold') textContent = <strong key={index}>{textContent}</strong>;
          if (mark.type === 'italic') textContent = <em key={index}>{textContent}</em>;
          if (mark.type === 'underline') textContent = <u key={index}>{textContent}</u>;
          if (mark.type === 'strike') textContent = <s key={index}>{textContent}</s>;
          if (mark.type === 'code') textContent = <code key={index} className="bg-slate-100 text-[#f37924] px-1.5 py-0.5 rounded font-mono text-xs">{textContent}</code>;
          if (mark.type === 'highlight') textContent = <mark key={index} className="bg-amber-200 px-1 rounded">{textContent}</mark>;
          if (mark.type === 'link') {
            textContent = (
              <a key={index} href={mark.attrs?.href} target="_blank" rel="noopener noreferrer" className="text-[#166534] underline font-bold hover:text-[#f37924] transition-colors">
                {textContent}
              </a>
            );
          }
        });
      }
      return textContent;
    }

    const children = node.content ? node.content.map((child: any, i: number) => renderTiptapNode(child, i)) : null;
    const alignClass = node.attrs?.textAlign ? `text-${node.attrs.textAlign}` : '';

    switch (node.type) {
      case 'doc':
        return <div key={index} className="space-y-4">{children}</div>;
      case 'heading':
        const level = node.attrs?.level || 2;
        if (level === 1) return <h1 key={index} className={`text-2xl sm:text-4xl font-black text-slate-900 mt-8 mb-4 tracking-tight ${alignClass}`}>{children}</h1>;
        if (level === 2) return <h2 key={index} className={`text-xl sm:text-3xl font-extrabold text-slate-900 mt-7 mb-3 tracking-tight ${alignClass}`}>{children}</h2>;
        if (level === 3) return <h3 key={index} className={`text-lg sm:text-2xl font-bold text-slate-900 mt-6 mb-2.5 ${alignClass}`}>{children}</h3>;
        return <h4 key={index} className={`text-base sm:text-lg font-bold text-slate-800 mt-4 mb-2 ${alignClass}`}>{children}</h4>;
      case 'paragraph':
        return <p key={index} className={`text-slate-700 leading-relaxed text-base sm:text-lg mb-4 font-normal ${alignClass}`}>{children}</p>;
      case 'bulletList':
        return <ul key={index} className="list-disc list-inside space-y-2 my-4 text-base text-slate-700 font-medium pl-2">{children}</ul>;
      case 'orderedList':
        return <ol key={index} className="list-decimal list-inside space-y-2 my-4 text-base text-slate-700 font-medium pl-2">{children}</ol>;
      case 'listItem':
        return <li key={index} className="leading-relaxed">{children}</li>;
      case 'taskList':
        return <ul key={index} className="space-y-2.5 my-4">{children}</ul>;
      case 'taskItem':
        return (
          <li key={index} className="flex items-center gap-2 text-base text-slate-800 font-medium">
            <input type="checkbox" checked={node.attrs?.checked} readOnly className="rounded accent-[#166534] w-4 h-4" />
            <span>{children}</span>
          </li>
        );
      case 'blockquote':
        return (
          <blockquote key={index} className="border-l-4 border-[#166534] pl-5 py-3.5 my-6 italic text-slate-800 bg-emerald-50/60 rounded-r-2xl font-medium text-base sm:text-lg">
            {children}
          </blockquote>
        );
      case 'codeBlock':
        return (
          <pre key={index} className="bg-slate-900 text-slate-100 p-5 rounded-2xl overflow-x-auto text-xs font-mono my-6 shadow-md">
            <code>{children}</code>
          </pre>
        );
      case 'horizontalRule':
        return <hr key={index} className="my-8 border-slate-200" />;
      case 'image':
        return (
          <img
            key={index}
            src={node.attrs?.src}
            alt={node.attrs?.alt || ''}
            className="rounded-2xl max-w-full my-8 border border-slate-200 shadow-md mx-auto object-cover"
          />
        );
      case 'table':
        return (
          <div key={index} className="overflow-x-auto my-8 border border-slate-200 rounded-2xl shadow-xs">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              {children}
            </table>
          </div>
        );
      case 'tableRow':
        return <tr key={index} className="border-b border-slate-200 hover:bg-slate-50/50">{children}</tr>;
      case 'tableHeader':
        return <th key={index} className="bg-slate-100 font-extrabold p-3.5 border-r border-slate-200 text-slate-900">{children}</th>;
      case 'tableCell':
        return <td key={index} className="p-3.5 border-r border-slate-200 text-slate-700 font-medium">{children}</td>;
      default:
        return <div key={index}>{children}</div>;
    }
  };

  const articleImage = blog.mainImage?.url || blog.coverImage?.url || blog.featuredImage?.url;

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col text-slate-900 font-sans pb-20">
      {/* FAQ Schema Script */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}


      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
        {/* Back Link */}
        <div>
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs font-extrabold text-[#166534] hover:text-[#f37924] transition-colors bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-xs"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Articles
          </Link>
        </div>

        {/* Article Header Card */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 space-y-6 shadow-xs">
          <div className="flex items-center gap-3 text-xs font-bold text-slate-500 flex-wrap">
            <span className="px-3.5 py-1 bg-[#166534]/15 text-[#166534] border border-[#166534]/30 rounded-full font-black uppercase text-xs">
              {blog.category || 'General'}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-[#f37924]" /> {estimateReadingTime(blog.content)} min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {blog.title}
          </h1>

          {blog.excerpt && (
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-[#f37924] pl-4">
              {blog.excerpt}
            </p>
          )}

          {/* Author & Publication Details */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#166534] to-[#f37924] text-white flex items-center justify-center font-bold text-sm shadow-xs">
                {blog.author?.name ? blog.author.name[0] : 'P'}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-black text-slate-900">{blog.author?.name || 'Prajha Executive Team'}</span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#166534]" /> Published on {formatDate(blog.publishedAt || blog.createdAt)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Cover / Feature Image */}
        {articleImage && (
          <div className="rounded-3xl overflow-hidden border border-slate-200/90 max-h-[550px] shadow-sm bg-white">
            <img
              src={articleImage}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Rich Content Article Body */}
        <article className="bg-white p-6 sm:p-12 rounded-3xl border border-slate-200/90 shadow-xs space-y-4">
          {renderTiptapNode(blog.content, 0)}
        </article>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <Tag className="w-4 h-4 text-[#166534]" />
            <span className="text-xs font-bold text-slate-500 uppercase mr-1">Tags:</span>
            {blog.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-800 rounded-xl text-xs font-bold">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* FAQ Accordion Section */}
        {blog.faqs && blog.faqs.length > 0 && (
          <BlogFaqAccordion faqs={blog.faqs} />
        )}
      </main>
    </div>
  );
}
