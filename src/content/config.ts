import { defineCollection, reference, z } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        description: z.string(),
    }),
});

const notesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        category: z.string(),
        description: z.string().optional(),
    }),
});

const projectsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        dueDate: z.date().optional(),
        startDate: z.date().optional(),
        completeDate: z.date().optional(),
        progress: z.number().min(0).max(100),
        tags: z.array(z.string()),
        coverImage: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        projectUrl: z.string().url().optional(),
        gitUrl: z.string().url(),
        category: z.enum(['JavaScript', 'Go Lang', 'Python', 'CLI', 'Hacking', 'Computer Science']),
        featured: z.boolean().default(false),
    }),
});

const journalCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        description: z.string(),
    }),
});

// const sprints = defineCollection({
//     type: 'data',
//     schema: z.object({
//         title: z.string(),
//         sprintNumber: z.number().int().positive(),
//         startDate: z.string(),
//         endDate: z.string(),
//         tasksCompletionPercentage: z.number().min(0).max(100),
//         tags: z.array(z.string()),
//         description: z.string(),
//     }),
// })



export const collections = {
    posts: postsCollection,
    notes: notesCollection,
    projects: projectsCollection,
    journal: journalCollection,
};
