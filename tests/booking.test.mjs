import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { matchesAppointment, matchesQuery } from '../src/lib/booking.ts';
const data = JSON.parse(readFileSync(new URL('../src/data/bookings.json', import.meta.url)));
const filter = options => data.appointments.filter(a => matchesAppointment(a, data.categories, options));

test('all booking IDs remain exact strings and match their Cliniko URL', () => {
  for (const [items, key] of [[data.appointments, 'appointment_type_id'], [data.practitioners, 'practitioner_id']]) {
    assert.equal(new Set(items.map(a => a.id)).size, items.length);
    for (const item of items) {
      const url = new URL(item.url);
      assert.equal(url.hostname, 'alpha-sports-medicine-osteopathy.au1.cliniko.com');
      assert.equal(url.protocol, 'https:');
      assert.equal(typeof item.id, 'string');
      assert.equal(url.searchParams.get(key), item.id);
    }
  }
});
test('new patient journey excludes ASAP and return-only consultations', () => {
  const items = filter({patient:'new'});
  assert.ok(items.length);
  assert.ok(items.every(a => a.patient !== 'return' && a.category !== 'asap'));
});
test('return journey excludes first-only consultations', () => {
  assert.ok(filter({patient:'return'}).every(a => a.patient !== 'new'));
});
test('running choices retain locations and separate IDs', () => {
  const items = filter({category:'running',patient:'new'});
  assert.deepEqual(items.map(a => [a.id,a.locations]), [
    ['1476533830453036632',['Newport','Ascot Vale']],
    ['1857784117802828867',['Ascot Vale','Hawthorn']],
  ]);
  assert.equal(items[0].level,'');
  assert.equal(items[1].level,'Director');
});
test('new osteopathy supports Associate, Senior and Director independently', () => {
  for (const level of ['Associate','Senior','Director']) {
    const items=filter({category:'osteopathy',patient:'new',level});
    assert.equal(items.length,1);
    assert.equal(items[0].level,level);
  }
});
test('common search aliases and multiword queries find the right appointments', () => {
  assert.ok(filter({query:'physio'}).some(a => a.category==='physiotherapy'));
  assert.ok(filter({query:'hypermobility'}).some(a => a.sourceLabel==='Hypermobile new patient'));
  assert.equal(filter({query:'running director',patient:'new'})[0].id,'1857784117802828867');
  assert.equal(filter({query:'notarealbooking'}).length,0);
  assert.ok(matchesQuery("Matthew O’Neill matt oneill", "matt o'neill"));
});
test('every browsable category has a usable appointment for both patient paths', () => {
  for(const c of data.categories) for(const patient of ['new','return']) {
    assert.ok(filter({category:c.id,patient}).length,`${c.id}: ${patient}`);
  }
});


test('post-operative and fracture rehab reuses physiotherapy links for each patient path', () => {
  for (const patient of ['all', 'new', 'return']) {
    assert.deepEqual(filter({ category: 'post-operative-fracture-rehab', patient }),
      filter({ category: 'physiotherapy', patient }));
  }
  for (const query of ['post-operative', 'postoperative', 'post op', 'fracture rehab', 'broken bone']) {
    const items = filter({ query });
    assert.ok(items.length, query);
    assert.ok(items.every(a => a.category === 'physiotherapy'), query);
    assert.equal(new Set(items.map(a => a.id)).size, items.length);
  }
});
