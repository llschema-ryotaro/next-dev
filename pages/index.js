import { client, getBlogAllPosts } from "libs/api";
import { eyecatchLocal } from 'libs/constants'

import Container from "components/container";
import Meta from "components/meta";
import PostsNews from "components/postsNews";
import PostsBlog from "components/postsBlog";

import { getPlaiceholder } from 'plaiceholder'



export default function Home({ news, blog }) {
  return (
    <Container full>
      <Meta/>

      <h2>NEWS</h2>
      <PostsNews posts={news}/>
      
      <h2>BLOG</h2>
      <PostsBlog posts={blog}/>
      
    </Container>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const newsData = await client.get({ endpoint: "news" });

  const blogPosts = await getBlogAllPosts();

  for (const blogPost of blogPosts) {
    if (!blogPost.hasOwnProperty('eyecatch')) {
      blogPost.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(blogPost.eyecatch.url)
    blogPost.eyecatch.blurDataURL = base64
  }


  return {
    props: {
      news: newsData.contents,
      blog: blogPosts,
    },
  };
};