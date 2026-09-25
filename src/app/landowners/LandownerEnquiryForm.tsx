'use client';

import { useState } from 'react';
import {
  AlertCircle,
  BarChart3,
  Building,
  Building2,
  Check,
  Compass,
  ExternalLink,
  FileText,
  Image as ImageIcon,
  Layers,
  Mail,
  MapPin,
  Paperclip,
  Phone,
  Ruler,
  Send,
  Sparkles,
  User,
} from 'lucide-react';
import api from '@/services/api';

type FormData = {
  fullName: string;
  phone: string;
  email: string;
  propertyLocation: string;
  districtCity: string;
  landArea: string;
  propertyType: string;
  existingStructure: string;
  roadWidth: string;
  currentLandUse: string;
  message: string;
};

const initialFormData: FormData = {
  fullName: '',
  phone: '',
  email: '',
  propertyLocation: '',
  districtCity: '',
  landArea: '',
  propertyType: 'Residential Land',
  existingStructure: 'No',
  roadWidth: '',
  currentLandUse: '',
  message: '',
};

export default function LandownerEnquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [documentFile, setDocumentFile] = useState<File | null>(null);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [uploadedDocUrl, setUploadedDocUrl] = useState('');
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      let docUrl = '';
      let imgUrl = '';

      if (documentFile) {
        const uploadData = new FormData();
        uploadData.append('file', documentFile);
        const response = await api.post('/upload/document', uploadData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        docUrl = response.data?.url || '';
        setUploadedDocUrl(docUrl);
      }

      if (photoFile) {
        const uploadData = new FormData();
        uploadData.append('image', photoFile);
        const response = await api.post('/upload/image', uploadData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        imgUrl = response.data?.url || '';
        setUploadedPhotoUrl(imgUrl);
      }

      const fullPropertyDetails = `
=== LANDOWNER ENQUIRY DETAILS ===
- District / City: ${formData.districtCity}
- Land Area: ${formData.landArea}
- Property Type: ${formData.propertyType}
- Existing Structure: ${formData.existingStructure}
- Road Width / Access: ${formData.roadWidth || 'N/A'}
- Current Land Use: ${formData.currentLandUse || 'N/A'}
- Description & Objective: ${formData.message}
- Uploaded Document (R2): ${docUrl || 'None'}
- Uploaded Photo (R2): ${imgUrl || 'None'}
      `.trim();

      const response = await api.post('/add/contact', {
        name: formData.fullName,
        email: formData.email || 'not-provided@landowner.com',
        phNo: formData.phone,
        message: fullPropertyDetails,
        directorRole: 'Landowner Joint Venture',
        propertyLocation: `${formData.propertyLocation} (${formData.districtCity})`,
        file: docUrl || imgUrl || '',
      });

      if (response.data?.success) {
        setSubmitted(true);
      } else {
        setError(response.data?.message || 'Failed to submit property enquiry. Please try again.');
      }
    } catch (submitError: any) {
      console.error('Landowner enquiry submit error:', submitError);
      setError(
        submitError.response?.data?.message ||
          'Failed to submit enquiry. Please check your internet connection and try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setUploadedDocUrl('');
    setUploadedPhotoUrl('');
    setDocumentFile(null);
    setPhotoFile(null);
    setFormData(initialFormData);
  };

  return (
    <section id="land-enquiry-form" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#166534]/10 text-[#166534] text-[11px] font-bold uppercase tracking-wider border border-[#166534]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#F37924]" />
            <span>LANDOWNER ENQUIRY FORM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Submit Your Land Details</h2>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed font-medium">
            Interested in exploring a joint venture for your property? Share the details below and our team will review your enquiry.
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
              <div className="w-16 h-16 rounded-full bg-[#166534] text-white flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#0F2D24]">Land Enquiry Submitted Successfully!</h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
                Thank you for sharing your property details with Prajha Group. Our real estate development team will evaluate your submission and contact you shortly.
              </p>
              {(uploadedDocUrl || uploadedPhotoUrl) && (
                <div className="space-y-2 pt-2">
                  {uploadedDocUrl && <UploadedFile url={uploadedDocUrl} label="Document Uploaded to Cloudflare R2:" linkText="View PDF" icon={<Paperclip className="w-4 h-4 text-[#166534] shrink-0" />} />}
                  {uploadedPhotoUrl && <UploadedFile url={uploadedPhotoUrl} label="Photo Uploaded to Cloudflare R2:" linkText="View Photo" icon={<ImageIcon className="w-4 h-4 text-[#166534] shrink-0" />} />}
                </div>
              )}
              <button onClick={resetForm} className="px-6 py-2.5 rounded-xl bg-[#166534] text-white text-xs font-bold hover:bg-[#0F2D24] transition-colors inline-flex items-center gap-2 cursor-pointer mt-3">
                Submit Another Land Enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormSection title="Your Details">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Field label="Full Name *" icon={<User />} value={formData.fullName} required placeholder="e.g. Ramesh Kumar" onChange={(value) => setFormData({ ...formData, fullName: value })} />
                  <Field label="Phone Number *" icon={<Phone />} value={formData.phone} required type="tel" placeholder="+91 94999 33461" onChange={(value) => setFormData({ ...formData, phone: value })} />
                  <Field label="Email Address" icon={<Mail />} value={formData.email} type="email" placeholder="ramesh@example.com" onChange={(value) => setFormData({ ...formData, email: value })} />
                </div>
              </FormSection>

              <FormSection title="Property Details">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Property Location *" icon={<MapPin />} value={formData.propertyLocation} required placeholder="e.g. Velachery, OMR, Porur, Tambaram" onChange={(value) => setFormData({ ...formData, propertyLocation: value })} />
                  <Field label="District / City" icon={<Building />} value={formData.districtCity} placeholder="e.g. Chennai, Coimbatore, Madurai, Trichy" onChange={(value) => setFormData({ ...formData, districtCity: value })} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Field label="Land Area *" icon={<Ruler />} value={formData.landArea} required placeholder="e.g. 50 Cents, 2 Acres, 3600 sq.ft" onChange={(value) => setFormData({ ...formData, landArea: value })} />
                  <SelectField label="Property Type *" icon={<Layers />} value={formData.propertyType} options={['Residential Land', 'Commercial Property', 'Existing Property', 'Other']} onChange={(value) => setFormData({ ...formData, propertyType: value })} />
                  <SelectField label="Existing Structure — Yes / No" icon={<Building2 />} value={formData.existingStructure} options={['No', 'Yes']} onChange={(value) => setFormData({ ...formData, existingStructure: value })} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Road Width / Access" icon={<Compass />} value={formData.roadWidth} placeholder="e.g. 40 ft road access, 60 ft main road" onChange={(value) => setFormData({ ...formData, roadWidth: value })} />
                  <Field label="Current Land Use" icon={<BarChart3 />} value={formData.currentLandUse} placeholder="e.g. Agricultural, Vacant Plot, Commercial" onChange={(value) => setFormData({ ...formData, currentLandUse: value })} />
                </div>
              </FormSection>

              <FormSection title="Additional Details">
                <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5"><FileText className="w-3.5 h-3.5 text-[#166534]" /> Tell us about your property & what you are looking to achieve with the property?</label>
                <textarea rows={4} placeholder="Provide details about your property, title clarity, target project type (residential apartments, commercial complex, joint development terms), or what you are looking to achieve..." value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all resize-none font-medium" />
              </FormSection>

              <FormSection title="Optional Uploads">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <FileField label="Upload Property Documents" icon={<Paperclip />} accept=".pdf,.doc,.docx" file={documentFile} onChange={setDocumentFile} />
                  <FileField label="Upload Property Photos" icon={<ImageIcon />} accept="image/*" file={photoFile} onChange={setPhotoFile} />
                </div>
              </FormSection>

              <button type="submit" disabled={loading} className="w-full py-4 rounded-2xl bg-[#166534] hover:bg-[#0F2D24] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer mt-6">
                {loading ? <span>Uploading Files & Submitting Land Details...</span> : <><span>Submit Land Details</span><Send className="w-4 h-4 text-[#F37924]" /></>}
              </button>
              <p className="text-[11px] text-slate-400 text-center leading-relaxed font-medium pt-2">Submission of property details does not constitute acceptance of a joint venture proposal. Each property is subject to individual legal, technical and development evaluation.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FormSection({ title, children }: { title: string; children: React.ReactNode }) {
  return <div className="space-y-4"><h3 className="text-xs font-extrabold uppercase tracking-widest text-[#166534] border-b border-slate-100 pb-2">{title}</h3>{children}</div>;
}

function Field({ label, icon, value, onChange, placeholder, type = 'text', required = false }: { label: string; icon: React.ReactNode; value: string; onChange: (value: string) => void; placeholder: string; type?: string; required?: boolean }) {
  return <div className="space-y-1.5"><label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">{icon}{label}</label><input type={type} required={required} placeholder={placeholder} value={value} onChange={(event) => onChange(event.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all font-medium" /></div>;
}

function SelectField({ label, icon, value, options, onChange }: { label: string; icon: React.ReactNode; value: string; options: string[]; onChange: (value: string) => void }) {
  return <div className="space-y-1.5"><label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">{icon}{label}</label><select value={value} onChange={(event) => onChange(event.target.value)} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#166534] focus:bg-white focus:outline-none text-xs sm:text-sm text-slate-900 transition-all font-bold">{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>;
}

function FileField({ label, icon, accept, file, onChange }: { label: string; icon: React.ReactNode; accept: string; file: File | null; onChange: (file: File | null) => void }) {
  return <div className="space-y-1.5"><label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">{icon}{label}</label><div className="relative border-2 border-dashed border-slate-200 rounded-2xl p-4 bg-slate-50 hover:bg-emerald-50/50 hover:border-emerald-300 transition-all text-center cursor-pointer"><input type="file" accept={accept} onChange={(event) => onChange(event.target.files?.[0] || null)} className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" /><div className="flex flex-col items-center justify-center gap-1"><span className="text-xs font-bold text-slate-700">{file ? file.name : label}</span><span className="text-[11px] text-slate-400">{file ? `${(file.size / 1024).toFixed(1)} KB` : 'Optional'}</span></div></div></div>;
}

function UploadedFile({ url, label, linkText, icon }: { url: string; label: string; linkText: string; icon: React.ReactNode }) {
  return <div className="p-3 rounded-xl bg-white border border-emerald-200 inline-flex items-center gap-2 text-xs font-semibold text-slate-700 max-w-full overflow-hidden text-ellipsis mr-2">{icon}<span className="truncate">{label}</span><a href={url} target="_blank" rel="noopener noreferrer" className="text-[#166534] hover:underline font-bold inline-flex items-center gap-1 shrink-0"><span>{linkText}</span><ExternalLink className="w-3 h-3" /></a></div>;
}
