// src/04-styled-components/components/Title.jsx
import React from "react";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  margin-bottom: 2.5rem;

  h1 {
    font-weight: bold;
    font-size: 2.25rem; /* base */

    @media (min-width: 768px) {
      font-size: 3rem; /* md */
    }

    @media (min-width: 1024px) {
      font-size: 3.75rem; /* lg */
    }
  }
`;

export default function Title() {
  return (
    <Header>
      <h1>Amelie & Charlotte&apos;s Shop</h1>
    </Header>
  );
}
