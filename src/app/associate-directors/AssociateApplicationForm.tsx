'use client';

import { useState } from 'react';
import {
  AlertCircle,
  Briefcase,
  Check,
  ExternalLink,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  Send,
  Sparkles,
  User,
} from 'lucide-react';
import api from '@/services/api';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  role: 'Director - Business Development',
  message: '',
};

export default function AssociateApplicationForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [uploadedR2Url, setUploadedR2Url] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      let pdfFileUrl = '';
      if (selectedFile) {
        const fileFormData = new FormData();
        fileFormData.append('file', selectedFile);
        const uploadResponse = await api.post('/upload/document', fileFormData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        pdfFileUrl = uploadResponse.data?.url || '';
        setUploadedR2Url(pdfFileUrl);
      }

      const response = await api.post('/add/contact', {
        name: formData.name,
        email: formData.email,
        phNo: formData.phone,
        message: formData.message,
        directorRole: formData.role,
        file: pdfFileUrl,
        propertyLocation: 'Associate Director Application',
      });

      if (response.data?.success) {
        setSubmitted(true);
      } else {
        setError(response.data?.message || 'Application submission failed. Please try again.');
      }
    } catch (submitError: any) {
      console.error('Associate Director form submission error:', submitError);
      setError(
        submitError.response?.data?.message ||
          'Failed to upload PDF document or submit form. Please check server connection.'
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setUploadedR2Url('');
    setFormData(initialFormData);
    setSelectedFile(null);
  };

  return (
    <section id="apply-today" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-[11px] font-bold uppercase tracking-wider border border-[#166534]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
            <span>DIRECT APPLICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Apply Today • Are You Ready to Lead?</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Contact Us today or apply directly to learn more about this exciting leadership opportunity. Let&apos;s build the future together.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-xl relative overflow-hidden">
          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {submitted ? (
            <div className="p-8 rounded-2xl bg-[#F0FDF4] border border-emerald-300 space-y-4 text-center animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#166534] text-white flex items-center justify-center mx-auto shadow-md"><Check className="w-8 h-8" /></div>
              <h3 className="text-xl font-bold text-[#0F2D24]">Application Submitted Successfully!</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                Thank you for applying for <span className="font-bold text-[#166534]">{formData.role}</span>. Our executive board will review your profile and contact you shortly.
              </p>
              {uploadedR2Url && (
                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 inline-flex items-center gap-2 text-xs font-semibold text-slate-700 max-w-full overflow-hidden text-ellipsis">
                  <Paperclip className="w-4 h-4 text-[#166534] shrink-0" /><span className="truncate">Cloudflare R2 PDF Attached:</span>
                  <a href={uploadedR2Url} target="_blank" rel="noopener noreferrer" className="text-[#166534] hover:underline font-bold inline-flex items-center gap-1 shrink-0">View File <ExternalLink className="w-3 h-3" /></a>
                </div>
              )}
              <div><button onClick={resetForm} className="px-6 py-2.5 rounded-xl bg-[#166534] text-white text-xs font-bold hover:bg-[#0F2D24] transition-colors inline-flex items-center gap-2 cursor-pointer mt-2">Submit Another Application</button></div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Name *" icon={<User />} value={formData.name} placeholder="e.g. Ramesh K" required onChange={(value) => setFormData({ ...formData, name: value })} />
                <Field label="Phone No *" icon={<Phone />} value={formData.phone} type="tel" placeholder="+91 94999 33461" required onChange={(value) => setFormData({ ...formData, phone: value })} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Email *" icon={<Mail />} value={formData.email} type="email" placeholder="ramesh@example.com" required onChange={(value) => setFormData({ ...formData, email: value })} />
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><Briefcase className="w-3.5 h-3.5 text-[#166534]" /> Select Director Role *</label>
                  <select value={formData.role} onChange={(event) => setFormData({ ...formData, role: event.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all font-semibold">
                    <option>Director - Business Development</option><option>Director - Construction Management</option><option>Director - Facility Management</option>
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#166534]" /> Message with your town name *</label>
                <textarea rows={4} required placeholder="Enter your background and specify your target town in Tamil Nadu (e.g. Madurai, Coimbatore, Trichy, Salem, Chennai)..." value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all resize-none" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><Paperclip className="w-3.5 h-3.5 text-[#166534]" /> Attach Your Profile (Resume / Portfolio PDF)</label>
                <div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-4 bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all text-center cursor-pointer">
                  <input type="file" accept=".pdf,.doc,.docx" onChange={(event) => setSelectedFile(event.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" />
                  <div className="flex flex-col items-center justify-center gap-1.5"><Paperclip className="w-5 h-5 text-[#166534]" /><span className="text-xs font-bold text-slate-700">{selectedFile ? selectedFile.name : 'Click or Drag to Upload Resume / Profile (PDF, DOC)'}</span><span className="text-[11px] text-slate-400">{selectedFile ? `${(selectedFile.size / 1024).toFixed(1)} KB` : 'No file chosen'}</span></div>
                </div>
              </div>
              <button type="submit" disabled={loading} className="w-full py-4 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer mt-4">
                {loading ? <span>Uploading PDF & Submitting...</span> : <><span>Submit Application</span><Send className="w-4 h-4 text-[#F37924]" /></>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, icon, value, type = 'text', placeholder, required = false, onChange }: { label: string; icon: React.ReactNode; value: string; type?: string; placeholder: string; required?: boolean; onChange: (value: string) => void }) {
  return <div className="space-y-1.5"><label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">{icon}{label}</label><input type={type} required={required} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all" /></div>;
}
