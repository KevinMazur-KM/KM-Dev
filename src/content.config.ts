import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const visualSchema = z.object({
  family: z.enum([
    "intelligence",
    "systems",
    "organization",
    "automation",
    "transformation",
    "building",
    "leadership",
    "strategy",
  ]),
  image: z.enum([
    "intelligence-01", "intelligence-02", "intelligence-03",
    "systems-01", "systems-02", "systems-03",
    "organization-01", "organization-02",
    "automation-01", "automation-02", "automation-03",
    "transformation-01", "transformation-02", "transformation-03",
    "building-01", "building-02",
    "leadership-01", "leadership-02",
    "strategy-01", "strategy-02",
  ]),
}).refine(({ family, image }) => image.startsWith(`${family}-`), {
  message: "Visual image must belong to the selected visual family.",
  path: ["image"],
});

const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    topics: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    visual: visualSchema,
  }),
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    type: z.enum(["case-study", "project", "field-note"]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    visual: visualSchema,
  }),
});

export const collections = { writing, work };
