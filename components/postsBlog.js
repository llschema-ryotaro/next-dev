import Link from "next/link";
import Image from 'next/image'

import ConvertDate from 'components/convert-date';

import styles from "styles/blog.module.scss"

import { gsap, Power4 } from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Power4);

export default function PostsBlog({ posts }) {

  (() => {gsap.fromTo(
    ".jsFadein",
    {
      y: 5,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      delay: 0.4,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".jsFadein",
        start: "top 85%",
      },
    }
  )});

  return (
    <ul className={styles.blogList}>
      {posts.map((posts) => (
        <li key={posts.slug} className={`${styles.blogItem} ${styles.jsFadein}`}>
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
            <div className={styles.blogDesc}>
              <ConvertDate dateISO={posts.publishedAt}></ConvertDate>
              <h2 className={styles.blogTitle}>{posts.title}</h2>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}