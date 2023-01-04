import styles from '/styles/container.module.scss'

export default function Container({ children, large = false, small = false, full = false }) {
  return (
    <div className={large ? styles.large : small ? styles.small : full ? styles.full : styles.default }>
      {children}
    </div>
  )
}
