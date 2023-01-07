import styles from '/styles/section.module.scss'

export default function Section({ children, title = false }) {
  return (
    <section className={styles.section}>
      {title && (<h2 className={styles.sectionTitle}>{title}</h2>)}
      <div className={styles.sectionContents}>
        {children}
      </div>
    </section>
  )
}
