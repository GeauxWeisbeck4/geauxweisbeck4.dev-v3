---
title: "Creating Components for GeauxWeisbeck4.dev"
date: 2024-12-02
description: "I discuss how I created the components that makeS up this website."
tags: ["Digital Garden", "Geaux Code", "Docs"]
---

## Home Page Components

- Creating the Blog Post List for the Home Page:

`src/components/RecentBlogPosts.astro`
```
---
import { getCollection } from 'astro:content';

const allPosts = await getCollection('blog');
const recentPosts = allPosts
  .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
  .slice(0, 3);
---

<section class="my-8">
  <h2 class="text-2xl font-bold mb-4">Recent Blog Posts</h2>
  <div class="grid gap-4 md:grid-cols-3">
    {recentPosts.map((post) => (
      <article class="border rounded-lg p-4 hover:shadow-md transition-shadow">
        <h3 class="text-xl font-semibold mb-2">
          <a href={`/blog/${post.slug}`} class="text-blue-600 hover:underline">
            {post.data.title}
          </a>
        </h3>
        <p class="text-gray-600 mb-2">{post.data.pubDate.toLocaleDateString()}</p>
        <p class="text-sm">{post.data.description}</p>
      </article>
    ))}
  </div>
</section>
```

- Featured Projects Component:

`src/components/FeaturedProjects.astro`
```
---
import { getCollection } from 'astro:content';

const allProjects = await getCollection('projects');
const featuredProjects = allProjects.filter(project => project.data.featured);
---

<section class="my-8">
  <h2 class="text-2xl font-bold mb-4">Featured Projects</h2>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {featuredProjects.map((project) => (
      <article class="border rounded-lg p-4 hover:shadow-md transition-shadow">
        <h3 class="text-xl font-semibold mb-2">
          <a href={`/projects/${project.slug}`} class="text-blue-600 hover:underline">
            {project.data.title}
          </a>
        </h3>
        <p class="text-sm mb-2">{project.data.description}</p>
        <div class="flex flex-wrap gap-2">
          {project.data.tags.map(tag => (
            <span class="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
      </article>
    ))}
  </div>
</section>
```

- Journal Entry List component

`src/components/JournalEntries.astro`
```
---
import { getCollection } from 'astro:content';

const allEntries = await getCollection('journal');
const recentEntries = allEntries
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 5);
---

<section class="my-8">
  <h2 class="text-2xl font-bold mb-4">Recent Journal Entries</h2>
  <ul class="space-y-4">
    {recentEntries.map((entry) => (
      <li class="border-b pb-2">
        <h3 class="text-lg font-semibold">
          <a href={`/journal/${entry.slug}`} class="text-blue-600 hover:underline">
            {entry.data.title}
          </a>
        </h3>
        <p class="text-gray-600 text-sm">{entry.data.date.toLocaleDateString()}</p>
      </li>
    ))}
  </ul>
</section>
```

- Status Update Component

`src/components/StatusUpdates.astro`
```
---
const statusUpdates = {
  time: new Date().toLocaleTimeString(),
  workingOn: "New Astro project",
  latestBlogPost: "Introduction to Astro",
  listeningTo: "Lofi Beats",
  location: "Home Office",
  mood: "Focused",
  nextLiveBroadcast: "Friday, 3 PM EST"
};
---

<section class="my-8">
  <h2 class="text-2xl font-bold mb-4">Current Status</h2>
  <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {Object.entries(statusUpdates).map(([key, value]) => (
      <div class="border rounded-lg p-4">
        <h3 class="text-lg font-semibold mb-2 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</h3>
        <p>{value}</p>
      </div>
    ))}
  </div>
</section>
```
