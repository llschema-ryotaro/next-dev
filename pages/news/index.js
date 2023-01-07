import { client } from "libs/api";

import Meta from "components/meta";
import Container from "components/container";
import Hero from "components/hero";
import PostsNews from "components/postsNews";

export default function Home({news}) {
  return (
    <>
      <Meta/>
      <Hero title="NEWS" subtitle="日々のニュースをお届けします"/>
      <Container full>
        <Meta/>
        <PostsNews posts={news}/>
      </Container>
    </>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const newsData = await client.get({ endpoint: "news" });

  return {
    props: {
      news: newsData.contents,
    },
  };
};