import Link from 'next/link';
import styles from './PostCard.module.css';

export default function PostCard({ post }) {
  return (
    <article className={styles.card}>
      <p className={styles.date}>{post.date}</p>
      <h2 className={styles.title}>
        <Link href={`/posts/${post.slug}`}>{post.title}</Link>
      </h2>
      <p className={styles.excerpt}>{post.excerpt}</p>
      <Link href={`/posts/${post.slug}`} className={styles.readMore}>
        Read more →
      </Link>
    </article>
  );
}
