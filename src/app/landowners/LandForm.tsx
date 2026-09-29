"use client";

import { useState } from 'react';
import { AxiosError } from 'axios';
import { ClipboardList, Mail, MapPin, Phone, Ruler, Send, UserRound } from 'lucide-react';
import api from '@/services/api';

type LandFormValues = {
  name: string;
  email: string;
  landOwner: string;
  propertyLocation: string;
  landArea: string;
  propertyType: string;
  message: string;
  phNo: string;
};

const initialValues: LandFormValues = {
  name: '',
  email: '',
  landOwner: '',
  propertyLocation: '',
  landArea: '',
  propertyType: '',
  message: '',
  phNo: '',
};

function LandForm() {
  const [formData, setFormData] = useState<LandFormValues>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const inputClassName = 'w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#166534] focus:bg-white focus:ring-4 focus:ring-emerald-900/5';
  const labelClassName = 'mb-2 block text-sm font-semibold text-slate-700';

  const updateField = (field: keyof LandFormValues, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  async function addLandDetailsFun(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      const response = await api.post('/add/contact', formData);
      setSuccessMessage(response.data?.message || 'Your land enquiry has been submitted.');
      setFormData(initialValues);
    } catch (err) {
      const error = err as AxiosError<{ message?: string }>;
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#166534]">
            <ClipboardList className="h-4 w-4" /> Landowner enquiry
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Tell Us About Your Land
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Share your contact and property details with our team.
          </p>
        </div>

        <form onSubmit={addLandDetailsFun} className="space-y-7 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8 lg:p-10">
          {successMessage && <p role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800">{successMessage}</p>}
          {errorMessage && <p role="alert" className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-700">{errorMessage}</p>}
          <div>
            <h3 className="mb-4 border-b border-slate-100 pb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#166534]">
              Your contact details
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="land-name" className={labelClassName}>Full name</label>
                <div className="relative">
                  <UserRound className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input id="land-name" name="name" autoComplete="name" required value={formData.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Your full name" className={`${inputClassName} pl-11`} />
                </div>
              </div>
              <div>
                <label htmlFor="land-phone" className={labelClassName}>Phone number</label>
                <div className="relative">
                  <Phone className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input id="land-phone" name="phNo" type="tel" autoComplete="tel" required value={formData.phNo} onChange={(event) => updateField('phNo', event.target.value)} placeholder="e.g. +91 98765 43210" className={`${inputClassName} pl-11`} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="land-email" className={labelClassName}>Email address</label>
                <div className="relative">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input id="land-email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={(event) => updateField('email', event.target.value)} placeholder="you@example.com" className={`${inputClassName} pl-11`} />
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-4 border-b border-slate-100 pb-3 text-xs font-extrabold uppercase tracking-[0.16em] text-[#166534]">
              Property details
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="land-owner" className={labelClassName}>Land owner</label>
                <select id="land-owner" name="landOwner" value={formData.landOwner} onChange={(event) => updateField('landOwner', event.target.value)} className={inputClassName}>
                  <option value="" disabled>Select an option</option>
                  <option value="Land Lors">Land owner</option>
                  <option value="Agent">Agent</option>
                </select>
              </div>
              <div>
                <label htmlFor="property-type" className={labelClassName}>Property type</label>
                <select id="property-type" name="propertyType" value={formData.propertyType} onChange={(event) => updateField('propertyType', event.target.value)} className={inputClassName}>
                  <option value="" disabled>Select property type</option>
                  <option value="Vacant Land">Vacant land</option>
                  <option value="Land With Old Building">Land with old building</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="property-location" className={labelClassName}>Property location</label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input id="property-location" name="propertyLocation" value={formData.propertyLocation} onChange={(event) => updateField('propertyLocation', event.target.value)} placeholder="Area, city, or district" className={`${inputClassName} pl-11`} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="land-area" className={labelClassName}>Land area</label>
                <div className="relative">
                  <Ruler className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input id="land-area" name="landArea" value={formData.landArea} onChange={(event) => updateField('landArea', event.target.value)} placeholder="e.g. 2 acres, 50 cents, 3,600 sq. ft." className={`${inputClassName} pl-11`} />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="land-message" className={labelClassName}>Message</label>
                <div className="relative">
                  <textarea id="land-message" name="message" rows={5} required value={formData.message} onChange={(event) => updateField('message', event.target.value)} placeholder="Add the property location and any other details you would like to share." className={`${inputClassName} resize-y pl-11`} />
                </div>
              </div>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#166534] px-6 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-900/15 transition hover:bg-[#0F2D24] disabled:cursor-not-allowed disabled:opacity-60">
            {isSubmitting ? 'Submitting…' : 'Submit land details'}
            {!isSubmitting && <Send className="h-4 w-4 text-[#F37924]" />}
          </button>
        </form>
      </div>
    </section>
  );
}

export default LandForm;