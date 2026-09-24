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

export function estimateReadingTime(content: any): number {
  if (!content) return 3;
  try {
    const text = JSON.stringify(content).replace(/[{}[\]":,]/g, ' ');
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const minutes = Math.ceil(wordCount / 200);
    return Math.max(1, Math.min(minutes, 15));
  } catch {
    return 3;
  }
}
