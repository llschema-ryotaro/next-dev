import { client, getBlogAllPosts } from "libs/api";
import { eyecatchLocal } from 'libs/constants'

import Meta from "components/meta";
import Container from "components/container";
import Section from "components/section";
import PostsNews from "components/postsNews";
import PostsBlog from "components/postsBlog";

import { getPlaiceholder } from 'plaiceholder'



export default function Home({ news, blog }) {
  return (
    <Container full>
      <Meta/>

      <Section title="NEWS">
        <PostsNews posts={news}/>
      </Section>
      
      
      <Section title="BLOG">
        <PostsBlog posts={blog}/>
      </Section>
      
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