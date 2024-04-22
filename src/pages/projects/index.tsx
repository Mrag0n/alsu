import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { db } from '@lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { GetStaticProps } from 'next';

interface Project {
  id: string;
  title: string;
  imageUrl: string;
}

interface ProjectsPageProps {
  projects: Project[];
}

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const PageContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap; // Allow cards to wrap
  justify-content: center; // Center cards horizontally
`;

const Card = styled.div`
  width: 300px; // Fixed width for each card
  margin: 10px; // Space between cards
  background: #fff;
  border-radius: 8px; // Rounded corners
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // Simple shadow
  overflow: hidden; // Ensures content doesn't flow outside the border
`;

const CardImage = styled.img`
  width: 100%; // Full width of the card
  height: 200px; // Fixed height for images
  object-fit: cover; // Ensures image covers the area, cropping if necessary
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h2`
  margin: 0 0 10px; // No margin on top, bottom margin for spacing
  font-size: 1.2rem;
  color: #333;
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  color: #0070f3;
  text-decoration: none;
`;

const ProjectPage: React.FC<ProjectsPageProps> = ({ projects }) => (
  <PageContainer>
    <Title>Projects</Title>
    {projects.map((project: Project) => (
      <Card key={project.id}>
        {project.imageUrl ? (
          <CardImage src={project.imageUrl} alt={project.title} />
        ) : (
          // If no image URL, display a placeholder
          <PlaceholderImage>No Image Available</PlaceholderImage>
        )}
        <CardContent>
          <CardTitle>
            <StyledLink href={`/projects/${project.id}`}>
              {project.title}
            </StyledLink>
          </CardTitle>
        </CardContent>
      </Card>
    ))}
  </PageContainer>
);

export const getStaticProps: GetStaticProps = async () => {
  const storage = getStorage(); // Initialize Firebase Storage
  const querySnapshot = await getDocs(collection(db, 'projects'));
  const projects = await Promise.all(
    querySnapshot.docs.map(async (doc) => {
      const data = doc.data();
      const imageUrlPath = data.imageUrl as string; // Make sure this is a full path to the file
      if (!imageUrlPath) {
        return {
          id: doc.id,
          title: data.title as string,
          imageUrl: '', // Default or placeholder URL if path is not valid
        };
      }
      const imageRef = ref(storage, imageUrlPath);
      try {
        const imageUrl = await getDownloadURL(imageRef); // Fetch the actual download URL
        return {
          id: doc.id,
          title: data.title as string,
          imageUrl,
        };
      } catch (error) {
        console.error('Failed to get download URL:', error);
        return {
          id: doc.id,
          title: data.title as string,
          imageUrl: '', // Default or placeholder URL in case of error
        };
      }
    }),
  );

  return {
    props: {
      projects,
    },
    revalidate: 10, // Optional: Use for Incremental Static Regeneration (ISR)
  };
};

export default ProjectPage;
