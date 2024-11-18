import { expect, test, vi } from 'vitest';
import { getStaticPaths } from '../src/pages/blog/[...page].astro';

vi.mock('astro:content', () => ({
  getCollection: vi.fn(() => Promise.resolve([
    { data: { date: new Date('2023-05-01') } },
    { data: { date: new Date('2023-05-02') } },
    { data: { date: new Date('2023-05-03') } },
    { data: { date: new Date('2023-05-04') } },
    { data: { date: new Date('2023-05-05') } },
    { data: { date: new Date('2023-05-06') } },
  ])),
}));

test('getStaticPaths returns correct number of pages', async () => {
  const mockPaginate = vi.fn((items, options) => {
    const totalPages = Math.ceil(items.length / options.pageSize);
    return Array.from({ length: totalPages }, (_, i) => ({
      params: { page: i === 0 ? undefined : String(i + 1) },
      props: { page: { data: items.slice(i * options.pageSize, (i + 1) * options.pageSize) } },
    }));
  });

  try {
    const result = await getStaticPaths({ paginate: mockPaginate });
    expect(result).toHaveLength(2);
    expect(mockPaginate).toHaveBeenCalledWith(expect.any(Array), { pageSize: 5 });
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    throw error;
  }
});

test('getStaticPaths sorts posts correctly', async () => {
  const mockPaginate = vi.fn((items) => [{ props: { page: { data: items } } }]);

  try {
    const result = await getStaticPaths({ paginate: mockPaginate });
    const sortedDates = result[0].props.page.data.map(post => post.data.date);
    expect(sortedDates).toEqual([
      new Date('2023-05-06'),
      new Date('2023-05-05'),
      new Date('2023-05-04'),
      new Date('2023-05-03'),
      new Date('2023-05-02'),
      new Date('2023-05-01'),
    ]);
  } catch (error) {
    console.error('Error in getStaticPaths:', error);
    throw error;
  }
});
