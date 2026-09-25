'use client';

import { useState } from 'react';
import {
  Building2,
  Check,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from 'lucide-react';
import { AxiosError } from 'axios';
import api from '../../../services/api';

const initialForm = {
  name: '',
  email: '',
  message: '',
  phone: '',
  propertyLocation: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/add/contact', {
        name: form.name,
        email: form.email,
        message: form.message,
        phNo: form.phone ? Number(form.phone) : undefined,
        propertyLocation: form.propertyLocation,
      });
      alert(response.data.message);
      setSubmitted(true);
    } catch (submitError) {
      const axiosError = submitError as AxiosError<{ message: string }>;
      setError(axiosError.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm(initialForm);
    setError('');
  };

  return (
    <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full pointer-events-none" />
      <div className="space-y-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#166534] mb-1"><span>Direct Consultation Form</span></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Send Us a Message</h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">Select your interest area and provide details. We respond within 2 to 4 business hours.</p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-[#F0FDF4] border border-emerald-300 space-y-4 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#166534] text-white flex items-center justify-center mx-auto shadow-md"><Check className="w-8 h-8" /></div>
            <h3 className="text-xl font-bold text-[#0F2D24]">Message Delivered Successfully!</h3>
            <button onClick={resetForm} className="px-6 py-2.5 rounded-xl bg-[#166534] text-white text-xs font-bold hover:bg-[#0F2D24] transition-colors inline-flex items-center gap-2">Send Another Message</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Full Name *" icon={<User />} value={form.name} placeholder="e.g. Rajesh Kumar" required onChange={(value) => updateField('name', value)} />
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-[#166534]" /> Mobile Number *</label>
                <div className="relative"><span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">+91</span><input type="tel" required placeholder="94999 33461" value={form.phone} onChange={(event) => updateField('phone', event.target.value.replace(/\D/g, ''))} className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all" /></div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Email Address *" icon={<Mail />} value={form.email} type="email" placeholder="rajesh@example.com" required onChange={(value) => updateField('email', value)} />
              <Field label="Project / Property Location" icon={<Building2 />} value={form.propertyLocation} placeholder="e.g. OMR / Velachery / Chennai" onChange={(value) => updateField('propertyLocation', value)} />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><MessageSquare className="w-3.5 h-3.5 text-[#166534]" /> Detailed Requirement / Query *</label>
              <textarea rows={4} required placeholder="Tell us about your project requirements, plot extent, construction budget, or property management needs..." value={form.message} onChange={(event) => updateField('message', event.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all resize-none" />
            </div>
            {error && <p role="alert" className="text-sm font-medium text-red-600">{error}</p>}
            <button type="submit" disabled={loading} className="w-full py-4 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer">
              {loading ? <span>Sending Message...</span> : <><span>Submit Consultation Enquiry</span><Send className="w-4 h-4 text-[#F37924]" /></>}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, icon, value, type = 'text', placeholder, required = false, onChange }: { label: string; icon: React.ReactNode; value: string; type?: string; placeholder: string; required?: boolean; onChange: (value: string) => void }) {
  return <div className="space-y-1.5"><label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">{icon}{label}</label><input type={type} required={required} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all" /></div>;
}
