import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export async function getBlogAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blog',
      queries: {
        fields: 'title,slug,eyecatch,publishedAt',
        orders: '-publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log('~~ getBlogAllPosts ~~')
    console.log(err)
  }
}

export async function getBlogBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: 'blog',
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (err) {
    console.log('~~ getBlogBySlug ~~')
    console.log(err)
  }
}

export async function getNewsBySlug(slug) {
  try {
    const post = await client.get({
      endpoint: 'news',
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (err) {
    console.log('~~ getNewsBySlug ~~')
    console.log(err)
  }
}