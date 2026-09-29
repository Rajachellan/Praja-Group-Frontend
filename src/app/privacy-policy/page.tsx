import type { Metadata } from 'next';
import {
  Cookie,
  Database,
  FileCheck2,
  LockKeyhole,
  Mail,
  Phone,
  ShieldCheck,
  UserRoundCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Prajha Group',
  description: 'Privacy Policy for www.prajhagroup.com.',
  alternates: { canonical: 'https://www.prajhagroup.com/privacy-policy/' },
};

const sections = [
  {
    number: '01',
    title: 'Introduction & Scope',
    icon: ShieldCheck,
    content: (
      <p>
        Prajha Group (“we,” “us,” or “our”) operates{' '}
        <a href="https://www.prajhagroup.com/" className="font-semibold text-[#166534] underline decoration-[#F37924]/50 underline-offset-4">
          www.prajhagroup.com
        </a>
        . This policy applies to information collected through this website, including information you submit through contact forms.
      </p>
    ),
  },
  {
    number: '02',
    title: 'Types of Data Collected',
    icon: Database,
    content: (
      <ul>
        <li><strong>Personal information:</strong> Name, email address, phone number, address, and other details you provide through contact forms.</li>
        <li><strong>Usage data:</strong> IP address, browser type, device information, and access times. Cookies and analytics data may also be collected.</li>
      </ul>
    ),
  },
  {
    number: '03',
    title: 'Purposes of Data Use',
    icon: UserRoundCheck,
    content: (
      <ul>
        <li>Responding to enquiries or service requests.</li>
        <li>Improving our website and business operations.</li>
        <li>Sending updates or marketing communications with your consent.</li>
        <li>Legal compliance and internal record-keeping.</li>
      </ul>
    ),
  },
  {
    number: '04',
    title: 'Data Sharing & Disclosure',
    icon: FileCheck2,
    content: (
      <ul>
        <li>Information may be shared with service providers, such as hosting or analytics providers.</li>
        <li>Information may be disclosed to legal or regulatory bodies when required.</li>
        <li>Information may be shared in aggregate or anonymized form. We do not sell or rent personal information.</li>
      </ul>
    ),
  },
  {
    number: '05',
    title: 'Cookies & Tracking Technologies',
    icon: Cookie,
    content: (
      <>
        <p>We may use session cookies and analytics cookies.</p>
        <p>You can manage or remove cookies through your browser settings.</p>
      </>
    ),
  },
  {
    number: '06',
    title: 'Data Security',
    icon: LockKeyhole,
    content: (
      <p>
        We use safeguards such as encryption and access controls to protect information. No system is completely secure, but we make efforts to protect your information.
      </p>
    ),
  },
  {
    number: '07',
    title: 'Children’s Privacy',
    icon: ShieldCheck,
    content: <p>We do not knowingly collect personal information from users under 13.</p>,
  },
  {
    number: '08',
    title: 'User Rights',
    icon: UserRoundCheck,
    content: (
      <>
        <p>You may request access to, correction of, or deletion of your personal information. You may also withdraw your consent.</p>
        <p>To make a request or withdraw consent, contact us by email or phone using the details below.</p>
      </>
    ),
  },
  {
    number: '09',
    title: 'Policy Updates',
    icon: FileCheck2,
    content: (
      <p>
        Updates to this policy will be posted on this page. The date of the latest revision is displayed above.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#F7F8F5] text-slate-900">
      <header className="relative overflow-hidden bg-[#142D23] text-white">
        <div className="pointer-events-none absolute -right-24 -top-40 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-8 top-12 h-64 w-64 rounded-full bg-[#F37924]/15 blur-[90px]" />
        <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FFC17A]">Prajha Group</p>
          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-6xl">Privacy Policy</h1>
          <p className="mt-6 text-sm font-medium text-white/70">Last updated: September 29, 2026</p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white px-5 shadow-sm sm:px-10">
          {sections.map(({ number, title, icon: Icon, content }) => (
            <section key={number} className="grid gap-4 py-7 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-6 sm:py-9">
              <div className="flex items-center gap-3 sm:block">
                <span className="font-mono text-xs font-bold tracking-widest text-[#F37924]">{number}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-[#166534] sm:mt-3">
                  <Icon className="h-4 w-4" />
                </span>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold tracking-tight text-[#142D23] sm:text-2xl">{title}</h2>
                <div className="policy-copy mt-3 space-y-3 text-sm leading-7 text-slate-600 sm:text-[15px]">{content}</div>
              </div>
            </section>
          ))}

          <section className="grid gap-4 py-7 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-6 sm:py-9">
            <div className="flex items-center gap-3 sm:block">
              <span className="font-mono text-xs font-bold tracking-widest text-[#F37924]">10</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-[#166534] sm:mt-3"><Mail className="h-4 w-4" /></span>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold tracking-tight text-[#142D23] sm:text-2xl">Contact Information</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">For privacy enquiries:</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <a href="mailto:prajhaconnect@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-[#166534] transition hover:bg-emerald-100">
                  <Mail className="h-4 w-4" /> prajhaconnect@gmail.com
                </a>
                <a href="tel:+919499933461" className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-[#166534] transition hover:bg-emerald-100">
                  <Phone className="h-4 w-4" /> +91 94999 33461
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
      <style>{`.policy-copy ul { list-style: none; padding: 0; margin: 0; display: grid; gap: .65rem; } .policy-copy li { position: relative; padding-left: 1.25rem; } .policy-copy li::before { content: ''; position: absolute; left: .1rem; top: .8rem; width: .35rem; height: .35rem; border-radius: 9999px; background: #f37924; }`}</style>
    </main>
  );
}
