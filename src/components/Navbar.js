// src/components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'; // Import an icon for the search button

const NavbarContainer = styled.nav`
    width: 100%%;
    background: linear-gradient(90deg, #4a90e2, #50e3c2); // Gradient background
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 10px;
    }
`;


const Logo = styled(Link)`
  font-size: 1.5rem;
  color: #fff;
  text-decoration: none;
  font-weight: bold;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 20px;
  padding: 5px 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 8px;
  border-radius: 20px;
  width: 200px;
  font-size: 1rem;
`;

const SearchButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

const NavbarLinks = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

const NavLink = styled(Link)`
    font-size: 1rem;
    color: #fff;
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.colors.secondary}; // Use secondary theme color on hover
    }
`;
const LogoImage = styled.img`
  height: 100px;
    width: 150px;
  margin-right: 10px; // Adjust margin to add space between image and title
`;



const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo>
                <LogoImage to="/" src={require("../assets/logo-copy.jpg")} alt="Logo" /> {/* Replace with the path to your logo image */}
            </Logo>
            <SearchBarContainer>
                <SearchInput placeholder="Search..." />
                <SearchButton>
                    <FiSearch /> {/* Search icon from react-icons */}
                </SearchButton>
            </SearchBarContainer>
            <NavbarLinks>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </NavbarLinks>
        </NavbarContainer>
    );
};

export default Navbar;
