import styles from './Header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <span className={styles.logo}>🍽️</span>
        <h1 className={styles.title}>Restaurant</h1>
      </div>

      <nav className={styles.nav}>
        <a href='#' className={styles.navItem}>
          Home
        </a>
        <a href='#' className={styles.navItem}>
          Menu
        </a>
        <a href='#' className={styles.navItem}>
          Reviews
        </a>
        <a href='#' className={styles.navItem}>
          Contacts
        </a>
      </nav>

      <div className={styles.actions}>
        <input type='search' placeholder='Search restaurants...' className={styles.search} aria-label='Search restaurants' />
        <button className={styles.button} type='button'>
          Login
        </button>
      </div>
    </header>
  );
}
