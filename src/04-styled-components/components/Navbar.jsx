// src/04-styled-components/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.cardBg};
  box-shadow: ${({ theme }) => theme.shadow};
  position: sticky;
  top: 0;
  z-index: 50;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StyledLink = styled(Link)`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default function Navbar({ onToggleTheme }) {
  return (
    <Bar>
      <LinksContainer>
        <StyledLink to="/global">CSS Global</StyledLink>
        <StyledLink to="/modules">CSS Modules</StyledLink>
        <StyledLink to="/tailwind">Tailwind</StyledLink>
        <StyledLink to="/styled-components">Styled Components</StyledLink>
        <ButtonGroup>
          <Button onClick={onToggleTheme}>🌓</Button>
          <Button>🛒 0</Button>
        </ButtonGroup>
      </LinksContainer>
    </Bar>
  );
}
