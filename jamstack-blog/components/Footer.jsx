import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© {new Date().getFullYear()} JAMstack Blog — Next.js + Vercel</p>
      </div>
    </footer>
  );
}
