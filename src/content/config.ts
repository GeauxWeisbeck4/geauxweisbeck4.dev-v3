import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string(),
        description: z.string(),
    }),
});

export const collections = { posts: postsCollection };
