# Skill update: swap "problem-led" for "health/goal-led"

**Why:** For a premium, active, community health brand, opening on the patient's pain reads like a pain clinic and sets a negative tone. Leading with the life the patient wants back (and treating root cause as the *method*, not the headline) is warmer, more on-brand, and still converts because it keeps a short beat of empathy.

**Note on applying this:** I can't edit an installed skill from a Cowork session (the version I can see is a read-only cache). Two ways to make it stick:
1. Edit the plugin source directly. If you connect the folder that holds the LHM plugin source (the marketplace repo), I can make these edits for you, then you re-sync the marketplace.
2. Do it yourself via Settings → Capabilities, or with the `cowork-plugin-customizer` skill.

---

## Where it lives

The "problem-led" instruction shaped the page briefs, so it almost certainly sits in these LHM WordPress-hub skills (and possibly the marketing-hub copywriting skill). Search the plugin source for these strings:

- `problem-led`
- `problem-statement` / `problem statement`
- `Validate before you educate`
- `lead with the problem` / `lead with the *situation*`
- `problem → modality` / `problem → Alpha`

Most likely files:
- `lhm-wordpress-hub` → `skills/page-brief-generator/`
- `lhm-wordpress-hub` → `skills/page-copywriter/`
- `lhm-wordpress-hub` → agent `web-copy-orchestrator` / `content-writer`
- `lhm-marketing-hub` → `skills/copywriting/`

---

## The replacement wording (drop-in)

Wherever the skill currently tells the writer to "lead with the problem / validate before you educate," replace it with this:

> **Lead health/goal-led, not problem-led.** Open on the life the reader wants to get back to (their sport, training, family, daily movement), not on their pain. Keep exactly one short beat of empathy that acknowledges they may have tried things that didn't stick, then move to the method. Root cause is *how* we help, not the headline. This keeps the recognition that drives bookings without making a premium, active health brand read like a pain clinic.
>
> **Section order that follows from this:**
> 1. Aspiration first (what "back to normal / back to your best" looks like for this reader).
> 2. One line of empathy (tried things, hasn't stuck, that's usually because the cause hasn't been found yet).
> 3. The method (we take the time, find the root cause, treat and give a plan, build you back up, re-test).
>
> **Do:** get back to what you love, move well, keep you moving, stay doing what matters, results that last, root cause, tailored, we've got your back, community.
> **Avoid:** opening headlines built on pain ("the pain that keeps coming back" as an H1), fear framing, symptom-catalogue openers, and the word "performance".

---

## Hero headline guidance (replace any "problem-led H1" examples)

**Old (problem-led):** "The pain keeps coming back. Let's find out why."
**New (health/goal-led):** "Get back to doing what you love." / "Move well. Live well." / "Built to keep you doing what you love."

Keep the SEO keyword in service and location H1s (e.g. "Osteopathy in Melbourne to keep you moving", "Physio in Newport") and let the goal-led angle live in the subhead and opening section.

---

## What did NOT change

- Root-cause positioning stays. It just moves from the headline to the method.
- The single empathy beat stays. Recognition is what makes the reader book.
- AHPRA rules unchanged: goal-led language ("keep you moving", "results that last") describes the aim of the approach, never a guaranteed outcome. No before/after imagery, no cure claims.
