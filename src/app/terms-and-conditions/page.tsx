import type { Metadata } from 'next';
import {
  FileText,
  CheckCircle2,
  Copyright,
  AlertTriangle,
  Scale,
  ExternalLink,
  RefreshCw,
  Gavel,
  Mail,
  Phone,
  Globe,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Prajha Group',
  description: 'Terms and Conditions for www.prajhagroup.com.',
  alternates: { canonical: 'https://www.prajhagroup.com/terms-and-conditions/' },
};

const sections = [
  {
    number: '01',
    title: 'Terms and Conditions',
    icon: FileText,
    content: (
      <p>
        Welcome to Prajha Group. These Terms and Conditions govern your access to and use of the Website operated by Prajha Group. By accessing or using this Website, you agree to comply with and be bound by these Terms. If you do not agree with any part of these Terms, please do not use our website.
      </p>
    ),
  },
  {
    number: '02',
    title: 'Use of the Website',
    icon: CheckCircle2,
    content: (
      <p>
        You agree to use this Website only for lawful purposes. You are prohibited from using the site to engage in any activity that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or otherwise objectionable.
      </p>
    ),
  },
  {
    number: '03',
    title: 'Intellectual Property Rights',
    icon: Copyright,
    content: (
      <p>
        All content, design, logos, text, images, graphics, and other materials on this Website are the intellectual property of Prajha Group or its licensors and are protected under applicable copyright and trademark laws. You may not reproduce, distribute, modify, or display any part of this Website without prior written permission.
      </p>
    ),
  },
  {
    number: '04',
    title: 'Disclaimer of Warranties',
    icon: AlertTriangle,
    content: (
      <p>
        The Website and its content are provided on an “as-is” and “as-available” basis. Prajha Group makes no warranties, either express or implied, regarding the Website, including but not limited to accuracy, completeness, reliability, or availability.
      </p>
    ),
  },
  {
    number: '05',
    title: 'Limitation of Liability',
    icon: Scale,
    content: (
      <p>
        Prajha Group shall not be liable for any direct, indirect, incidental, special, or consequential damages that result from the use or inability to use this Website, including but not limited to reliance on any information obtained from the Website.
      </p>
    ),
  },
  {
    number: '06',
    title: 'Third-Party Links',
    icon: ExternalLink,
    content: (
      <p>
        This Website may contain links to third-party websites. These links are provided for your convenience only and do not signify endorsement. Prajha Group is not responsible for the content or practices of any linked third-party sites.
      </p>
    ),
  },
  {
    number: '07',
    title: 'Changes to Terms',
    icon: RefreshCw,
    content: (
      <p>
        Prajha Group reserves the right to modify or revise these Terms at any time without prior notice. Your continued use of the Website following the posting of changes constitutes your acceptance of those changes.
      </p>
    ),
  },
  {
    number: '08',
    title: 'Governing Law',
    icon: Gavel,
    content: (
      <p>
        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of Chennai, Tamil Nadu.
      </p>
    ),
  },
];

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#F7F8F5] text-slate-900">
      <header className="relative overflow-hidden bg-[#142D23] text-white">
        <div className="pointer-events-none absolute -right-24 -top-40 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute right-8 top-12 h-64 w-64 rounded-full bg-[#F37924]/15 blur-[90px]" />
        <div className="relative mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FFC17A]">Prajha Group</p>
          <h1 className="mt-5 font-heading text-4xl font-semibold tracking-tight sm:text-6xl">Terms and Conditions</h1>
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
                <div className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">{content}</div>
              </div>
            </section>
          ))}

          <section className="grid gap-4 py-7 sm:grid-cols-[56px_minmax(0,1fr)] sm:gap-6 sm:py-9">
            <div className="flex items-center gap-3 sm:block">
              <span className="font-mono text-xs font-bold tracking-widest text-[#F37924]">09</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-[#166534] sm:mt-3">
                <Mail className="h-4 w-4" />
              </span>
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold tracking-tight text-[#142D23] sm:text-2xl">Contact Us</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="mailto:prajhaconnect@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-[#166534] transition hover:bg-emerald-100"
                >
                  <Mail className="h-4 w-4" /> prajhaconnect@gmail.com
                </a>
                <a
                  href="tel:+919499933461"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-[#166534] transition hover:bg-emerald-100"
                >
                  <Phone className="h-4 w-4" /> +91 9499933461
                </a>
                <a
                  href="https://www.prajhagroup.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-[#166534] transition hover:bg-emerald-100"
                >
                  <Globe className="h-4 w-4" /> https://www.prajhagroup.com
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
