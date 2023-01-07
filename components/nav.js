import { useState } from 'react'
import Link from 'next/link'
import styles from 'styles/nav.module.scss'

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav} aria-label="メニューを開く">
        <span className={styles.bar}></span>
      </button>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">
            <span onClick={closeNav}>Home</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/news">
            <span onClick={closeNav}>News</span>
          </Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/blog">
            <span onClick={closeNav}>Blog</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
