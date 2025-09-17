import React, { useState, useEffect } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { lightTheme, darkTheme } from "./theme";
import { itens } from "../products";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Title from "./components/Title";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    font-family: sans-serif;
    transition: background 0.2s ease, color 0.2s ease;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1025px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) setTheme(saved);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Navbar onToggleTheme={toggleTheme} />
      <Title /> {/* título adicionado aqui */}
      <Grid>
        {itens.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Grid>
    </ThemeProvider>
  );
}


