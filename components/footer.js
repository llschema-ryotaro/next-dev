import Container from 'components/container'
import Logo from 'components/logo'

import styles from 'styles/footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container full>
        <div className={styles.flexContainer}>
          <Logo white />
        </div>
      </Container>
    </footer>
  )
}
