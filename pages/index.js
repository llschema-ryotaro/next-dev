// pages/index.js
import Link from "next/link";
import { client } from "../libs/client";

export default function Home({ test }) {
  return (
    <div>
      <ul>
        {test.map((test) => (
          <li key={test.id}>
            <Link href={`/test/${test.id}`}>
              {test.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "test" });

  return {
    props: {
      test: data.contents,
    },
  };
};