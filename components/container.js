import styles from '/styles/container.module.scss'

export default function Container({ children, large = false, small = false }) {
  return (
    <div className={large ? styles.large : small ? styles.small : styles.default }>
      {children}
    </div>
  )
}
