// pages/test/[id].js
import { client } from "../../libs/client";
import styles from '../../styles/Home.module.scss';

export default function TestId({ test }) {
  return (
    <main claaaName={styles.main}>
      <h1 className={styles.title}>{test.title}</h1>
      <p className={styles.publishedAt}>{test.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${test.news}`,
        }}
      />
    </main>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "test" });

  const paths = data.contents.map((content) => `/test/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "test", contentId: id });

  return {
    props: {
      test: data,
    },
  };
};