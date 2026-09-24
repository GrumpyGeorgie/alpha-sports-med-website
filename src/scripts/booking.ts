import data from '../data/bookings.json';
import { matchesAppointment, matchesQuery, type Patient } from '../lib/booking';

const get = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const search = get<HTMLInputElement>('booking-search');
let path: 'home' | 'new' | 'return' | 'staff' = 'home';
let category = '';
let patient: Patient = 'all';
let level = '';
const appointments = [...document.querySelectorAll<HTMLElement>('[data-appointment]')];
const practitioners = [...document.querySelectorAll<HTMLElement>('[data-practitioner]')];
const patientButtons = [...document.querySelectorAll<HTMLButtonElement>('[data-patient]')];
const levelSelect = get<HTMLSelectElement>('practitioner-level');
function render(focus = false) {
  const query = search.value.trim();
  const searching = Boolean(query);
  const staffOnly = path === 'staff' && !searching;
  const showResults = searching || Boolean(category) || staffOnly;
  get('start-options').hidden = path !== 'home' || searching || Boolean(category);
  get('category-options').hidden = showResults;
  get('results').hidden = !showResults;
  get('flow-toolbar').hidden = searching || (path === 'home' && !category);
  get('flow-trail').textContent = [path === 'new' ? 'New patient' : path === 'return' ? 'Returning patient' : path === 'staff' ? 'Book by practitioner' : 'Browse appointments', data.categories.find(c => c.id === category)?.label].filter(Boolean).join(' / ');
  get('clear-search').hidden = !searching;
  get('category-heading').textContent = path === 'new' ? 'What can we help you with?' : path === 'return' ? 'What are you coming back for?' : 'Or browse by what you need';
  get('category-context').textContent = path === 'new' ? 'Find your first appointment' : path === 'return' ? 'Find a return appointment' : 'First and return appointments';
  // Search is a global shortcut, independent of where the visitor was in the wizard.
  const activeCategory = searching ? '' : category;
  const baseMatches = data.appointments.filter(a => !staffOnly && matchesAppointment(a, data.categories, { query, patient, category: activeCategory }));
  const levels = [...new Set(baseMatches.map(a => a.level).filter(Boolean))];
  if (level && !levels.includes(level)) level = '';
  levelSelect.value = level;
  [...levelSelect.options].forEach(option => { option.hidden = Boolean(option.value) && !levels.includes(option.value); });
  const visible = baseMatches.filter(a => !level || a.level === level);
  const staff = (searching || staffOnly) && !level ? data.practitioners.filter(p => matchesQuery(p.name + ' ' + p.aliases, query)) : [];
  appointments.forEach(el => { el.hidden = !visible.some(a => a.id === el.dataset.appointment); });
  practitioners.forEach(el => { el.hidden = !staff.some(p => p.id === el.dataset.practitioner); });
  get('appointment-filters').hidden = staffOnly;
  get('level-filter').hidden = levels.length < 2;
  get('level-help').hidden = levels.length < 2;
  get('staff-help').hidden = !staffOnly;
  get('staff-results-heading').hidden = staffOnly || !staff.length;
  get('no-results').hidden = Boolean(visible.length || staff.length);
  get('results-heading').textContent = searching ? `Results for “${query}”` : staffOnly ? 'Who would you like to see?' : data.categories.find(c => c.id === category)?.label || 'Appointments';
  get('result-count').textContent = showResults ? `${visible.length + staff.length} ${visible.length + staff.length === 1 ? 'option' : 'options'}` : '';
  patientButtons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.patient === patient)));
  if (focus) get(showResults ? 'results-heading' : path === 'home' ? 'start-heading' : 'category-heading').focus();
}
function reset() {
  path = 'home'; category = ''; patient = 'all'; level = ''; search.value = ''; render();
}
document.querySelectorAll<HTMLButtonElement>('[data-path]').forEach(button => button.addEventListener('click', () => {
  path = button.dataset.path as typeof path; category = ''; level = '';
  patient = path === 'new' ? 'new' : path === 'return' ? 'return' : 'all'; render(true);
}));
document.querySelectorAll<HTMLButtonElement>('[data-category]').forEach(button => button.addEventListener('click', () => {
  category = button.dataset.category!; level = ''; render(true);
}));
get('flow-back').addEventListener('click', () => { if (category) { category = ''; level = ''; render(true); } else { reset(); } });
get('flow-reset').addEventListener('click', reset);
get('reset-results').addEventListener('click', () => { reset(); search.focus(); });
get('clear-search').addEventListener('click', () => { search.value = ''; patient = path === 'new' ? 'new' : path === 'return' ? 'return' : 'all'; level = ''; render(); search.focus(); });
search.addEventListener('input', () => { patient = 'all'; level = ''; render(); });
search.addEventListener('keydown', event => { if (event.key === 'Escape') { search.value = ''; render(); } });
patientButtons.forEach(button => button.addEventListener('click', () => { patient = button.dataset.patient as Patient; if (category && !search.value.trim()) path = patient === 'all' ? 'home' : patient; level = ''; render(); }));
levelSelect.addEventListener('change', () => { level = levelSelect.value; render(); });
render();
