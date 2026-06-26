import Head from 'next/head';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/api';
import styles from '../styles/Home.module.css';

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>JAMstack Blog</title>
        <meta name="description" content="A tech blog built with Next.js and Vercel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.heading}>Latest Posts</h1>
      <div className={styles.grid}>
        {posts.map(post => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts } };
}
