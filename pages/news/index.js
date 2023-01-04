import Link from "next/link";
import { client } from "libs/client";

import Container from "components/container";
import Meta from "components/meta";
import ConvertDate from 'components/convert-date';

export default function Home({ news }) {
  return (
    <Container full>
      <Meta/>
      <div>
        <ul>
          {news.map((news) => (
            <li key={news.slug}>
              <Link href={`/news/${news.slug}`}>
                <ConvertDate dateISO={news.publishedAt}></ConvertDate>
                {news.title}
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

  return {
    props: {
      news: newsData.contents,
    },
  };
};