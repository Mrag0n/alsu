import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { db } from '@lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { GetStaticProps } from 'next';

interface Post {
  id: string;
  title: string;
}

interface PostsPageProps {
  posts: Post[];
}

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const StyledLink = styled(Link)`
  color: #0070f3;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => (
  <PageContainer>
    <Title>Posts</Title>
    <PostList>
      {posts.map((post) => (
        <PostItem key={post.id}>
          <StyledLink href={`/posts/${post.id}`}>{post.title}</StyledLink>
        </PostItem>
      ))}
    </PostList>
  </PageContainer>
);

export const getStaticProps: GetStaticProps = async () => {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  const posts: Post[] = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    title: doc.data().title as string,
  }));

  return {
    props: {
      posts,
    },
    revalidate: 10, // In seconds
  };
};

export default PostsPage;
