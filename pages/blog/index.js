import { getBlogAllPosts } from "libs/api";
import { eyecatchLocal } from 'libs/constants'

import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import PostsBlog from "components/postsBlog";

import { getPlaiceholder } from 'plaiceholder'

export default function Home({ blog }) {
  return (
    <>
      <Meta/>
      <Hero title="BLOG" subtitle="日々のブログを書いています"></Hero>
      <Container full>
        <PostsBlog posts={blog}/>
      </Container>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const posts = await getBlogAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      blog: posts,
    },
  };
};