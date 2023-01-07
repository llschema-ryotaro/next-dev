import Link from "next/link";
import Image from 'next/image'

import ConvertDate from 'components/convert-date';

import styles from "styles/blog.module.scss"

export default function PostsBlog({ posts }) {
  return (
    <div className={styles.blogWrap}>
      <ul className={styles.blogList}>
        {posts.map((posts) => (
          <li key={posts.slug} className={styles.blogItem}>
            <Link href={`/blog/${posts.slug}`} className={styles.blogLink}>
              <figure className={styles.blogItemImage}>
                <Image
                  src={posts.eyecatch.url}
                  alt=""
                  fill
                  sizes="(min-width: 1152px) 576px, 50vw"
                  placeholder="blur"
                  blurDataURL={posts.eyecatch.blurDataURL}
                />
              </figure>
              <ConvertDate dateISO={posts.publishedAt}></ConvertDate>
              {posts.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
