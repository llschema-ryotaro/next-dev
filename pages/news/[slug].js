import { getNewsBySlug } from '../../libs/api';
import { client } from '../../libs/client';
import ConvertDate from '../../components/convert-date';
import styles from '../../styles/container.module.scss';

export default function News({ news }) {
  return (
    <main claaaName={styles.main}>
      <h1 className={styles.title}>{news.title}</h1>
      <ConvertDate dateISO={news.publishedAt}></ConvertDate>
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
  const slug = context.params.slug || null
  const post = await getNewsBySlug(slug) || null

  return {
    props: {
      news: post,
    },
  };
};