'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import api from '../../../services/api';
import { IBlog } from '../../types/blog';
import { formatDate, estimateReadingTime } from '../../lib/utils';
import { 
  Search, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Building2, 
  FileText,
  Filter,
  Tag
} from 'lucide-react';

const CATEGORIES = [
  'All',
  'General',
  'Business Development',
  'Construction & Infrastructure',
  'Facility Management',
  'Real Estate & Land Acquisition',
  'Corporate News'
];

export default function BlogsListingPage() {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const fetchPublishedBlogs = async () => {
    setLoading(true);
    try {
      const res = await api.get('/blogs?status=published');
      const data = res.data?.data || [];
      setBlogs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching public blogs:', err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublishedBlogs();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesSearch = 
        !searchQuery ||
        (blog.title && blog.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (blog.excerpt && blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (blog.category && blog.category.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = 
        selectedCategory === 'All' ||
        (blog.category && blog.category.toLowerCase() === selectedCategory.toLowerCase());

      return matchesSearch && matchesCategory;
    });
  }, [blogs, searchQuery, selectedCategory]);

  const featuredBlog = useMemo(() => {
    return filteredBlogs.length > 0 ? filteredBlogs[0] : null;
  }, [filteredBlogs]);

  const remainingBlogs = useMemo(() => {
    return filteredBlogs.length > 0 ? filteredBlogs.slice(1) : [];
  }, [filteredBlogs]);

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col text-slate-900 font-sans pb-16">
      {/* Hero Header Section */}
      <section className="relative bg-gradient-to-r from-[#0c2419] via-[#103c2a] to-[#165532] text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-[#166534]/50 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#20b26c]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-[1440px] mx-auto text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-extrabold tracking-wide backdrop-blur-md text-emerald-300 mx-auto">
            <Sparkles className="w-4 h-4 text-[#f37924]" />
            Prajha Groups Insights & Publications
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight font-playfair">
            Explore Corporate Updates & Industry Insights
          </h1>

          <p className="text-sm sm:text-base text-emerald-100/80 font-medium max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest news on Business Development, Construction Projects, Facility Management, and Land Acquisition.
          </p>

          {/* Search Box */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles by title, topic, or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white text-slate-900 text-sm font-medium border border-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-[73px] z-20 shadow-xs">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 overflow-x-auto custom-scrollbar">
          <span className="text-xs font-extrabold uppercase text-slate-400 tracking-wider shrink-0 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5 text-[#166534]" /> Category:
          </span>
          {CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat ? 'bg-[#166534] text-white shadow-sm' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {loading ? (
          /* Loading Skeletons */
          <div className="space-y-8">
            <div className="w-full h-80 bg-slate-200 rounded-3xl animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-72 bg-slate-200 rounded-3xl animate-pulse" />
              <div className="h-72 bg-slate-200 rounded-3xl animate-pulse" />
              <div className="h-72 bg-slate-200 rounded-3xl animate-pulse" />
            </div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          /* Empty State */
          <div className="bg-white border border-slate-200 rounded-3xl p-16 text-center space-y-4 max-w-lg mx-auto shadow-xs">
            <div className="w-14 h-14 bg-emerald-50 text-[#166534] rounded-2xl flex items-center justify-center mx-auto border border-emerald-100">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-black text-slate-900">No Articles Found</h3>
            <p className="text-xs text-slate-500 font-medium">
              We couldn't find any published articles matching your criteria. Try adjusting your search query or selected category.
            </p>
          </div>
        ) : (
          <>
            {/* Featured Blog Hero Card */}
            {featuredBlog && (
              <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 group">
                <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-100">
                  <img
                    src={featuredBlog.coverImage?.url || featuredBlog.featuredImage?.url || featuredBlog.mainImage?.url || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=1200&q=80'}
                    alt={featuredBlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 bg-[#166534] text-white text-xs font-black rounded-full shadow-md uppercase tracking-wider">
                      Featured Publication
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-500 flex-wrap">
                      <span className="px-2.5 py-1 bg-emerald-50 text-[#166534] border border-emerald-200 rounded-full font-extrabold uppercase text-[10px]">
                        {featuredBlog.category || 'General'}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#f37924]" /> {estimateReadingTime(featuredBlog.content)} min read
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-3xl font-black text-slate-900 group-hover:text-[#166534] transition-colors leading-tight font-playfair">
                      <Link href={`/blogs/${featuredBlog.slug}`}>
                        {featuredBlog.title}
                      </Link>
                    </h2>

                    {featuredBlog.excerpt && (
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed line-clamp-3">
                        {featuredBlog.excerpt}
                      </p>
                    )}
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#166534] to-[#f37924] text-white flex items-center justify-center font-bold text-xs">
                        {featuredBlog.author?.name ? featuredBlog.author.name[0] : 'P'}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold text-slate-900">{featuredBlog.author?.name || 'Prajha Executive Team'}</span>
                        <span className="text-[10px] text-slate-400 font-medium">{formatDate(featuredBlog.publishedAt || featuredBlog.createdAt)}</span>
                      </div>
                    </div>

                    <Link
                      href={`/blogs/${featuredBlog.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-[#166534] text-white hover:bg-[#12542a] text-xs font-extrabold rounded-xl shadow-xs transition-all"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Grid of Remaining Published Articles */}
            {remainingBlogs.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2 font-playfair">
                    <FileText className="w-5 h-5 text-[#166534]" /> Recent Articles ({remainingBlogs.length})
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                  {remainingBlogs.map((blog) => (
                    <article
                      key={blog._id}
                      className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="space-y-4">
                        {/* Cover Image */}
                        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                          <img
                            src={blog.coverImage?.url || blog.featuredImage?.url || blog.mainImage?.url || 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&w=800&q=80'}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-black rounded-full shadow-xs uppercase">
                              {blog.category || 'General'}
                            </span>
                          </div>
                        </div>

                        {/* Article Text Content */}
                        <div className="px-6 space-y-2">
                          <div className="flex items-center gap-3 text-[11px] font-bold text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-[#166534]" /> {formatDate(blog.publishedAt || blog.createdAt)}
                            </span>
                            <span>•</span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5 text-[#f37924]" /> {estimateReadingTime(blog.content)} min read
                            </span>
                          </div>

                          <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-[#166534] transition-colors leading-snug line-clamp-2 font-playfair">
                            <Link href={`/blogs/${blog.slug}`}>
                              {blog.title}
                            </Link>
                          </h4>

                          {blog.excerpt && (
                            <p className="text-xs text-slate-600 font-medium leading-relaxed line-clamp-2">
                              {blog.excerpt}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="p-6 pt-4 border-t border-slate-100 flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-xs font-bold text-slate-700 truncate max-w-[120px]">{blog.author?.name || 'Prajha Team'}</span>
                        </div>

                        <Link
                          href={`/blogs/${blog.slug}`}
                          className="text-xs font-bold text-[#166534] group-hover:text-[#f37924] flex items-center gap-1 transition-colors"
                        >
                          <span>Read More</span>
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
