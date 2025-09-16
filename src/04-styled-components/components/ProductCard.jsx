// src/04-styled-components/components/ProductCard.jsx
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Skeleton from "./Skeleton";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.cardBg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  padding-top: 100%; /* 1:1 ratio */
  position: relative;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 0.5rem 1rem 1rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
  max-height: 2.4em; /* 2 linhas */
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.p`
  font-weight: bold;
  margin: 0.5rem 0;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
`;

const Rating = styled.div`
  color: #facc15; /* amarelo para estrelas */
`;

export default function ProductCard({ product }) {
  const [loading, setLoading] = useState(true);

  return (
    <Card>
      <ImageWrapper>
        {loading && <Skeleton />}
        <Image
          src={product.imagem}
          alt={product.nome}
          loading="lazy"
          onLoad={() => setLoading(false)}
          style={{ display: loading ? "none" : "block" }}
        />
      </ImageWrapper>
      <Content>
        <Title>{product.nome}</Title>
        <Price>R$ {product.preco.toFixed(2)}</Price>
        <Rating>{"★".repeat(Math.floor(product.rating))}</Rating>
        <Tag>{product.tag}</Tag>
        <Button variant="solid" fullWidth>Adicionar</Button>
      </Content>
    </Card>
  );
}
