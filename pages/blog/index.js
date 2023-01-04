import Link from "next/link";
import { client } from "libs/client";

import Container from "components/container";
import Meta from "components/meta";

import ConvertDate from 'components/convert-date';

export default function Home({ blog }) {
  return (
    <Container full>
      <Meta/>
      
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/blog/${blog.slug}`}>
                <ConvertDate dateISO={blog.publishedAt}></ConvertDate>
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
  const blogData = await client.get({ endpoint: "blog" });

  return {
    props: {
      blog: blogData.contents,
    },
  };
};