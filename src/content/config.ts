import { z, defineCollection } from 'astro:content';

// Import Loaders
import { glob, file } from 'astro/loaders';

const entriesCollection = defineColection({
    loader: glob({ pattern: "**\/*.md", base: "./data/journal"})
    type: "content",
    schema: z.object({
        entryDate: z.date(),
        title: z.string(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const notesCollection = defineCollection({
    type: "content",
    schema: z.object({
        publishDate: z.date().optional(),
        updateDate: z.date().optional(),
        title: z.string(),
        excerpt: z.string().optional(),
        tags: z.array(z.string()).optional(),
        noteCategory: reference('noteCategories'),
    })
})

const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        publishDate: z.date().optional(),
        updateDate: z.date().optional(),
        draft: z.boolean().optional(),
        title: z.string(),
        excerpt: z.string().optional(),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
        metadata: metadataDefinition(),
    }),
});

const noteCategories = defineCollection({
    type: "data",
    schema: z.object({
        title: z.string(),
        slug: z.string(),
        description: z.string(),
        notes: z.array(
            z.object({
                title: z.string(),
                slug: z.string(),

            })
        ),
        tags: z.array(z.string()),
    })
});
