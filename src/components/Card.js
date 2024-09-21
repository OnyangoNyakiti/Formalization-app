// src/components/Card.js
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 16px;
  max-width: 300px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin: 0 0 8px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const CardButton = styled(motion.button)`
  padding: 10px 20px;
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
  }
`;

const Card = ({ image, title, description }) => {
    return (
        <CardContainer whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <CardImage src={image} alt={title} />
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    Learn More
                </CardButton>
            </CardContent>
        </CardContainer>
    );
};

export default Card;
