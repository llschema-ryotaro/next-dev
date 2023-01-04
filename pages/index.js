import Link from "next/link";
import { client } from "libs/client";

import Container from "components/container";
import Meta from "components/meta";
import ConvertDate from 'components/convert-date';

export default function Home({ news, blog }) {
  return (
    <Container full>
      <Meta/>
      <div>
        <ul>
          {news.map((news) => (
            <li key={news.slug}>
              <Link href={`/news/${news.slug}`}>
                {news.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const newsData = await client.get({ endpoint: "news" });
  const blogData = await client.get({ endpoint: "blog" });

  return {
    props: {
      news: newsData.contents,
      blog: blogData.contents,
    },
  };
};