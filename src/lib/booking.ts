export type Patient = 'all' | 'new' | 'return';
export interface Appointment {
  id: string; label: string; sourceLabel: string; category: string;
  patient: string; level: string; aliases: string; locations: string[];
}
export interface Category { id: string; label: string; aliases: string }
export const normalise = (value: string) => value.toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/['’]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
export function matchesQuery(text: string, query: string) {
  const haystack = normalise(text);
  return normalise(query).split(' ').filter(Boolean).every(word => haystack.includes(word));
}
export function matchesAppointment(item: Appointment, categories: Category[], options: {
  query?: string; patient?: Patient; category?: string; level?: string;
}) {
  if (options.patient && options.patient !== 'all' && item.patient !== 'both' && item.patient !== options.patient) return false;
  if (options.category && options.category !== item.category) return false;
  if (options.level && options.level !== item.level) return false;
  const category = categories.find(c => c.id === item.category);
  return matchesQuery([item.label, item.sourceLabel, item.aliases, item.level, category?.label,
    category?.aliases, ...item.locations, item.patient === 'return' ? 'return existing follow up' : item.patient === 'new' ? 'new first initial' : ''].join(' '), options.query || '');
}
