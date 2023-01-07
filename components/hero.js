import styles from 'styles/hero.module.scss'
import Image from 'next/image'
import demoImage from 'image/demo.jpg'

export default function Hero({ mv = false, title, subtitle = false, imageOn = false }) {
  return (
    <div className={mv ? styles.heroMainvisual : styles.heroContainer}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>{title}</h1>
        {subtitle && (<p className={styles.subTitle}>{subtitle}</p>)}
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            src={demoImage}
            alt=""
            fill
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  )
}
