import { defineCollection, reference, z } from 'astro:content';

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string(),
        description: z.string(),
    }),
});

const notesCollection = defineColection({
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
        sprintNumber: reference('sprints'),
        progress: z.number().min(0).max(100),
        tags: z.array(z.string()),
        coverImage: z.object({
            src: z.string(),
            alt: z.string(),
        }),
        projectUrl: z.string().url().optional(),
        gitUrl: z.string().url(),
        category: z.enum(['JavaScript', 'Go Lang', 'Python', 'CLI', 'Hacking', 'Computer Science']),
    }),
});

const sprintsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        sprintNumber: z.number().int().positive(),
        startDate: z.date(),
        endDate: z.date(),
        tasksCompletionPercentage: z.number().min(0).max(100),
        tags: z.array(z.string()),
        description: z.string(),
    }),
})

export const collections = {
    posts: postsCollection,
    notes: notesCollection,
    projects: projectsCollection,
    sprints: sprintsCollection,
};
