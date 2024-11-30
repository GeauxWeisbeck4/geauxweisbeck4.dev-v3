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
        sprint: z.enum(['Sprint 7','Sprint 8', 'Sprint 9']),
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

const dailyToolsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        link: z.string().url(),
        description: z.string(),
        category: z.string(),
    }),
});

const resourcesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        url: z.string().url(),
        description: z.string(),
        tags: z.array(z.string()),
        projectPage: z.string().url(),
    }),
});

const articlesCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        url: z.string().url(),
        description: z.string(),
        category: z.enum(['Programming', 'Entrepreneurship', 'Personal']),
    }),
});

const startersCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        demoUrl: z.string().url(),
        coverImage: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
        projectUrl: z.string().url(),
    }),
});

const openSourceCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        repositoryUrl: z.string().url(),
    }),
});

export const collections = {
    posts: postsCollection,
    notes: notesCollection,
    projects: projectsCollection,
    journal: journalCollection,
    dailyTools: dailyToolsCollection,
    resources: resourcesCollection,
    articles: articlesCollection,
    starters: startersCollection,
    openSource: openSourceCollection,
};
