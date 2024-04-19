import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const Paragraph = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: justify;
`;

const AboutPage: React.FC = () => (
  <AboutContainer>
    <Title>About Us</Title>
    <Paragraph>
      Welcome to [Your Design Agency Name], a place where creativity meets
      technology to deliver stunning design solutions. Founded in [Year], we
      specialize in a range of services from web design to branding and digital
      marketing. Our team of dedicated professionals is committed to providing
      top-notch services tailored to meet our clients unique needs.
    </Paragraph>
    <Paragraph>
      Our mission is to help businesses achieve their branding and marketing
      goals through innovative design strategies and relentless dedication to
      customer satisfaction. We believe in building long-lasting relationships
      with our clients by exceeding their expectations and fostering an
      environment of transparency and trust.
    </Paragraph>
    <Paragraph>
      Thank you for considering us for your design needs. We look forward to
      partnering with you and helping your business grow.
    </Paragraph>
  </AboutContainer>
);

export default AboutPage;
