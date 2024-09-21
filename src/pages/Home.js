// src/pages/Home.js
import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar'; // Import the Navbar component
import Card from '../components/Card';

const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    min-height: 100vh;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
`;

const HomeTitle = styled.h1`
    font-size: 2.5rem;
    color: ${({ theme }) => theme.colors.secondary};
    margin-bottom: 40px;
    text-align: center;
    animation: fadeInDown 1s ease-in-out;
`;

const cardsData = [
    {
        image: 'https://via.placeholder.com/300',
        title: 'Digital Identity',
        description: 'Establish a secure digital identity for your business.',
    },
    {
        image: 'https://via.placeholder.com/300',
        title: 'Financial Literacy',
        description: 'Learn to manage your finances effectively with our tools.',
    },
    {
        image: 'https://via.placeholder.com/300',
        title: 'Tax Compliance',
        description: 'Stay compliant with simplified tax processes.',
    },
];

const Home = () => {
    return (
        <>
            <HomeContainer>
                <HomeTitle>Welcome to Mboka Yangu</HomeTitle>
                <CardsContainer>
                    {cardsData.map((card, index) => (
                        <Card key={index} image={card.image} title={card.title} description={card.description} />
                    ))}
                </CardsContainer>
            </HomeContainer>
        </>
    );
};

export default Home;
