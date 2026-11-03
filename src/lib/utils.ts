import { BlogContentValue } from '../types/blog';

export function formatDate(dateString?: string): string {
  if (!dateString) return 'Recent';
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
}

export function parseBlogContent(rawContent: BlogContentValue): BlogContentValue {
  if (!rawContent) return rawContent;
  if (typeof rawContent === 'object') return rawContent;
  if (typeof rawContent === 'string') {
    const trimmed = rawContent.trim();
    const match = trimmed.match(/^(?:<p[^>]*>\s*)?(\{\s*(?:&quot;|")type(?:&quot;|")\s*:\s*(?:&quot;|")doc(?:&quot;|")[\s\S]*\})(?:\s*<\/p>)?$/i);
    if (match) {
      try {
        const parsed = JSON.parse(match[1]) as Record<string, unknown>;
        if (parsed && parsed.type === 'doc') return parsed;
      } catch {
        try {
          const decoded = match[1]
            .replace(/&quot;/g, '"')
            .replace(/&#39;|&apos;/g, "'")
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');
          const parsed = JSON.parse(decoded) as Record<string, unknown>;
          if (parsed && parsed.type === 'doc') return parsed;
        } catch {
          // Keep original HTML string if not valid Tiptap JSON
        }
      }
    }
  }
  return rawContent;
}

export function estimateReadingTime(content: BlogContentValue): number {
  if (!content) return 3;
  try {
    const normalized = parseBlogContent(content);
    const text =
      typeof normalized === 'string'
        ? normalized.replace(/<[^>]*>/g, ' ')
        : JSON.stringify(normalized).replace(/[{}[\]":,]/g, ' ');
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.ceil(wordCount / 200);
    return Math.max(1, Math.min(minutes, 15));
  } catch {
    return 3;
  }
}
