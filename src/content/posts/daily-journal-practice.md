---
title: "Creating Previews with Astro and JavaScript"
author: "Andrew Weisbeck"
date: 2024-12-04
description: "Learn how I created the Journal Entry preview feature for the home page journal entries component."
---

Here is the component for my Home page journal entries:

```
---
// src/components/JournalEntries.astro
import { getCollection } from 'astro:content';

const allEntries = await getCollection('journal');
const recentEntries = allEntries
  .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  .slice(0, 10);

// Split the entries into two columns
const leftColumnEntries = recentEntries.slice(0, 5);
const rightColumnEntries = recentEntries.slice(5, 10);
---

<section class="my-8">
  <h2 class="text-2xl font-bold mb-4">Recent Journal Entries</h2>
  <div class="grid md:grid-cols-2 gap-8">
    <div>
      <ul class="list-disc list-inside space-y-4">
        {leftColumnEntries.map((entry) => (
          <li>
            <div class="inline-block">
              <h3 class="inline text-lg font-semibold">
                <a href={`/journal/${entry.slug}`} class="text-blue-600 hover:underline">
                  {entry.data.title}
                </a>
              </h3>
              <span class="text-gray-600 text-sm ml-2">
                {entry.data.date.toLocaleDateString()}
              </span>
            </div>
            <p class="text-gray-700 mt-1">{entry.data.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <ul class="list-disc list-inside space-y-4">
        {rightColumnEntries.map((entry) => (
          <li>
            <div class="inline-block">
              <h3 class="inline text-lg font-semibold">
                <a href={`/journal/${entry.slug}`} class="text-blue-600 hover:underline">
                  {entry.data.title}
                </a>
              </h3>
              <span class="text-gray-600 text-sm ml-2">
                {entry.data.date.toLocaleDateString()}
              </span>
            </div>
            <p class="text-gray-700 mt-1">{entry.data.description}</p>
          </li>
        ))}
      </ul>
    </div>
  </div>
</section>
```
