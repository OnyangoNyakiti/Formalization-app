
import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Heading = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Dashboard = () => {
    return (
        <DashboardContainer>
            <Heading>Welcome to Your Dashboard</Heading>
            {/* Add user statistics, links to services, etc. */}
        </DashboardContainer>
    );
};

export default Dashboard;
