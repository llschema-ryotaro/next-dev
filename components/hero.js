import styles from 'styles/hero.module.scss'
import Image from 'next/image'
import demoImage from 'image/demo.jpg'

export default function Hero({ title, subtitle, imageOn = false }) {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={demoImage}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}
