// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ news, blog }) {
  return (
    <>
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
    </>
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