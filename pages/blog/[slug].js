import { getBlogBySlug } from 'libs/api';
import { client } from 'libs/client';

import ConvertDate from 'components/convert-date';
import Container from 'components/container';
import Meta from 'components/meta';

import styles from 'styles/article.module.scss';

export default function Blog({ blog }) {
  return (
    <Container>
      <Meta pageTitle="ブログ" pageDesc="ブログ" />
      <div className={styles.article}>
        <h1 className={styles.title}>{blog.title}</h1>
        <ConvertDate dateISO={blog.publishedAt}></ConvertDate>
        <div
          dangerouslySetInnerHTML={{
            __html: `${blog.content}`,
          }}
        />
      </div>
    </Container>
  );
}



// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content) => `/blog/${content.slug}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const slug = context.params.slug || null
  const post = await getBlogBySlug(slug) || null

  return {
    props: {
      blog: post,
    },
  };
};