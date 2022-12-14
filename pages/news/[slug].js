// pages/test/[id].js
import { client } from "../../libs/client";
import styles from '../../styles/Home.module.scss';

export default function NewsId({ news }) {
  return (
    <main claaaName={styles.main}>
      <h1 className={styles.title}>{news.title}</h1>
      <p className={styles.publishedAt}>{news.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${news.content}`,
        }}
      />
    </main>
  );
}




// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => `/news/${content.slug}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      news: data,
    },
  };
};