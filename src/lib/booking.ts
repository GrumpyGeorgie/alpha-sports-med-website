export type Patient = 'all' | 'new' | 'return';
export interface Appointment {
  id: string; label: string; sourceLabel: string; category: string;
  patient: string; level: string; aliases: string; locations: string[];
}
export interface Category { id: string; label: string; aliases: string; appointmentCategory?: string }
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
  const selectedCategory = categories.find(c => c.id === options.category);
  if (options.category && (selectedCategory?.appointmentCategory || options.category) !== item.category) return false;
  if (options.level && options.level !== item.level) return false;
  const categoryTerms = categories.filter(c => (c.appointmentCategory || c.id) === item.category)
    .map(c => `${c.label} ${c.aliases}`).join(' ');
  return matchesQuery([item.label, item.sourceLabel, item.aliases, item.level, categoryTerms, ...item.locations, item.patient === 'return' ? 'return existing follow up' : item.patient === 'new' ? 'new first initial' : ''].join(' '), options.query || '');
}
