import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <p className={styles.copyright}>7copy; Copyright {new Date().getFullYear()} by Worldwise Inc.</p>
  </footer>
  )
}

export default Footer