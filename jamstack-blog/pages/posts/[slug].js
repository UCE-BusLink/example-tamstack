import Head from 'next/head';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import styles from '../../styles/Post.module.css';

export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} — JAMstack Blog</title>
      </Head>

      <article className={styles.article}>
        <Link href="/" className={styles.back}>← Back to home</Link>
        <p className={styles.date}>{post.date}</p>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.content}>{post.content}</div>
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return { props: { post } };
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  return {
    paths: posts.map(p => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}
