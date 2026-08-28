import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const practitioners = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/practitioners' }),
  schema: z.object({
    name: z.string(),
    shortName: z.string(),
    role: z.string(),
    modality: z.string(),
    profileUrl: z.string(),
    bookingUrl: z.string().optional(),
    portrait: z.string(),
    portraitAlt: z.string(),
    videoUrl: z.string().optional(),
    videoPoster: z.string().optional(),
    intro: z.string(),
    services: z.array(z.string()).default([]),
    conditions: z.array(z.string()).default([]),
    locations: z.array(z.string()).default([]),
    featureOnLinkedPages: z.boolean().default(true),
    featurePriority: z.number().int().default(50),
  }),
});

export const collections = { practitioners };
