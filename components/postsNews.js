import Link from "next/link";

import ConvertDate from 'components/convert-date';

import styles from "styles/news.module.scss"

export default function PostsNews({ posts }) {
  return (
    <div className={styles.newsWrap}>
      <ul className={styles.newsList}>
        {posts.map((posts) => (
          <li key={posts.slug} className={styles.newsItem}>
            <Link href={`/news/${posts.slug}`} className={styles.newsLink}>
              <ConvertDate dateISO={posts.publishedAt}></ConvertDate>
              {posts.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
