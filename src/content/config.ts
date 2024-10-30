import { defineCollection, z } from "astro:content";

const committee = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    head: z.string(),
  }),
});

export const collections = {
  committee,
};
