import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          JAMstack Blog
        </Link>
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
        </nav>
      </div>
    </header>
  );
}
