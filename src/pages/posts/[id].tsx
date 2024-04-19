import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@lib/firebase'; // Adjust the import path as necessary

interface PostProps {
  title: string;
  content: string;
}

const PostPage: React.FC<PostProps> = ({ title, content }) => (
  <article>
    <h1>{title}</h1>
    <p>{content}</p>
  </article>
);

export const getStaticPaths: GetStaticPaths = async () => {
  // Optionally, pre-render paths at build time
  return {
    paths: [],
    fallback: 'blocking', // or 'true' for SSR
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const docRef = doc(db, 'posts', id as string);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    return { notFound: true };
  }

  const post = docSnap.data();

  return {
    props: {
      title: post.title,
      content: post.content,
    },
    revalidate: 10, // In seconds
  };
};

export default PostPage;
