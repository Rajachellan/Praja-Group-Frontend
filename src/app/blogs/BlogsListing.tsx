'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Calendar, Clock, FileText, Filter, Search, Sparkles, User } from 'lucide-react';
import api from '../../../services/api';
import { IBlog } from '../../types/blog';
import { estimateReadingTime, formatDate } from '../../lib/utils';

const categories = ['All', 'General', 'Business Development', 'Construction & Infrastructure', 'Facility Management', 'Real Estate & Land Acquisition', 'Corporate News'];

export default function BlogsListing() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    api.get('/blogs?status=published').then((response) => {
      const data = response.data?.data || [];
      setBlogs(Array.isArray(data) ? data : []);
    }).catch((error) => {
      console.error('Error fetching public blogs:', error);
      setBlogs([]);
    }).finally(() => setLoading(false));
  }, []);

  const filteredBlogs = useMemo(() => blogs.filter((blog) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = !query || [blog.title, blog.excerpt, blog.category].some((value) => value?.toLowerCase().includes(query));
    const matchesCategory = selectedCategory === 'All' || blog.category?.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  }), [blogs, searchQuery, selectedCategory]);

  const featuredBlog = filteredBlogs[0];
  const remainingBlogs = filteredBlogs.slice(1);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col text-slate-900 font-sans pb-16">
      <section className="relative bg-gradient-to-r from-[#0c2419] via-[#103c2a] to-[#165532] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#166534]/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#20b26c]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1440px] mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-extrabold tracking-wide backdrop-blur-md text-emerald-300 mx-auto"><Sparkles className="w-4 h-4 text-[#f37924]" />Prajha Groups Insights & Publications</div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight font-playfair">Explore Corporate Updates & Industry Insights</h1>
          <p className="text-sm sm:text-base text-emerald-100/80 font-medium max-w-2xl mx-auto leading-relaxed">Stay updated with the latest news on Business Development, Construction Projects, Facility Management, and Land Acquisition.</p>
          <div className="pt-4 max-w-xl mx-auto relative"><Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" /><input type="text" placeholder="Search articles by title, topic, or category..." value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 text-sm font-medium border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 shadow-lg" /></div>
        </div>
      </section>

      <div className="bg-white border-b border-slate-200 sticky top-[73px] z-20 shadow-xs"><div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 overflow-x-auto custom-scrollbar"><span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider shrink-0 mr-2 flex items-center gap-1"><Filter className="w-3.5 h-3.5 text-[#166534]" /> Category:</span>{categories.map((category) => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === category ? 'bg-[#166534] text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>{category}</button>)}</div></div>

      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {loading ? <LoadingState /> : !featuredBlog ? <EmptyState /> : <>
          <article className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
            <BlogImage blog={featuredBlog} featured />
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6"><div className="space-y-3"><div className="flex items-center gap-3 text-xs font-bold text-slate-500 flex-wrap"><span className="px-2.5 py-1 bg-emerald-50 text-[#166534] border border-emerald-200 rounded-full font-extrabold uppercase text-[10px]">{featuredBlog.category || 'General'}</span><span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#f37924]" /> {estimateReadingTime(featuredBlog.content)} min read</span></div><h2 className="text-xl sm:text-3xl font-black text-slate-900 group-hover:text-[#166534] transition-colors leading-tight font-playfair"><Link href={`/blogs/${featuredBlog.slug}`}>{featuredBlog.title}</Link></h2>{featuredBlog.excerpt && <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed line-clamp-3">{featuredBlog.excerpt}</p>}</div><BlogFooter blog={featuredBlog} featured /></div>
          </article>
          {remainingBlogs.length > 0 && <div className="space-y-6"><h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2 font-playfair"><FileText className="w-5 h-5 text-[#166534]" /> Recent Articles ({remainingBlogs.length})</h3><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">{remainingBlogs.map((blog) => <article key={blog._id} className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"><BlogImage blog={blog} /><div className="px-6 pt-4 space-y-2"><div className="flex items-center gap-3 text-[11px] font-bold text-slate-400"><span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#166534]" /> {formatDate(blog.publishedAt || blog.createdAt)}</span><span>•</span><span><Clock className="w-3.5 h-3.5 inline text-[#f37924]" /> {estimateReadingTime(blog.content)} min</span></div><h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#166534] transition-colors leading-snug line-clamp-2 font-playfair"><Link href={`/blogs/${blog.slug}`}>{blog.title}</Link></h4>{blog.excerpt && <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">{blog.excerpt}</p>}</div><BlogFooter blog={blog} /></article>)}</div></div>}
        </>}
      </main>
    </div>
  );
}

function BlogImage({ blog, featured = false }: { blog: IBlog; featured?: boolean }) {
  const image = blog.coverImage?.url || blog.featuredImage?.url || blog.mainImage?.url || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80';
  return <div className={`${featured ? 'lg:col-span-7 h-72 sm:h-96 lg:h-auto' : 'h-48 sm:h-52'} relative overflow-hidden bg-slate-100`}><img src={image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /><span className="absolute top-3 left-3 px-2.5 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-black rounded-full shadow-xs uppercase">{blog.category || 'General'}</span></div>;
}

function BlogFooter({ blog, featured = false }: { blog: IBlog; featured?: boolean }) {
  return <div className={`${featured ? 'pt-4' : 'p-6 pt-4 mt-4'} border-t border-slate-100 flex items-center justify-between`}><span className="flex items-center gap-2 text-xs font-bold text-slate-700 truncate"><User className="w-3.5 h-3.5 text-slate-400" />{blog.author?.name || 'Prajha Team'}</span><Link href={`/blogs/${blog.slug}`} className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#166534] text-white hover:bg-[#12542a] text-xs font-extrabold rounded-xl shadow-xs transition-all">Read Article <ArrowRight className="w-4 h-4" /></Link></div>;
}

function LoadingState() {
  return <div className="space-y-8"><div className="w-full h-80 bg-slate-200 rounded-3xl animate-pulse" /><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="h-72 bg-slate-200 rounded-3xl animate-pulse" /><div className="h-72 bg-slate-200 rounded-3xl animate-pulse" /><div className="h-72 bg-slate-200 rounded-3xl animate-pulse" /></div></div>;
}

function EmptyState() {
  return <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center space-y-4 max-w-lg mx-auto shadow-xs"><div className="w-14 h-14 bg-emerald-50 text-[#166534] rounded-2xl flex items-center justify-center mx-auto border border-emerald-100"><BookOpen className="w-7 h-7" /></div><h3 className="text-lg font-black text-slate-900">No Articles Found</h3><p className="text-xs text-slate-500 font-medium">We couldn&apos;t find any published articles matching your criteria.</p></div>;
}
