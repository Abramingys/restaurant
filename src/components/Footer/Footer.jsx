import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <div className={styles.brand}>🍽️ Restaurant</div>
        <p className={styles.text}>Delight every meal with a fresh new menu and expert local taste.</p>
      </div>

      <div className={styles.links}>
        <div className={styles.column}>
          <h4>Company</h4>
          <a href='#'>About</a>
          <a href='#'>Careers</a>
          <a href='#'>Press</a>
        </div>
        <div className={styles.column}>
          <h4>Support</h4>
          <a href='#'>Help Center</a>
          <a href='#'>Contact</a>
          <a href='#'>FAQ</a>
        </div>
      </div>

      <div className={styles.extra}>
        <p>© {new Date().getFullYear()} Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}
