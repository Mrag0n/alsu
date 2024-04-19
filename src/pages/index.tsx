import React from 'react';
import styled from 'styled-components';

// Styled components
const HeroSection = styled.section`
  background: url('/images/bg.jpg') no-repeat center center;
  background-size: cover;
  color: #fff;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin: 0;
  color: '#203040';
`;

const Content = styled.p`
  font-size: 1.2rem;
  color: #333;
  padding: 20px;
`;

const HomePage: React.FC = () => (
  <>
    <HeroSection>
      <Heading>Welcome to Our Design Agency</Heading>
    </HeroSection>
    <Content>
      This is the homepage content. Explore our projects and learn more about
      our services.
    </Content>
  </>
);

export default HomePage;
