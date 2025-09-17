import React from "react";
import styled, { css, keyframes } from "styled-components";

const loadingAnim = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
  border: none;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  /* Variantes */
  ${({ variant, theme }) =>
    variant === "solid" &&
    css`
      background: ${theme.colors.primary};
      color: ${theme.colors.textOnPrimary};
      border: 1px solid ${theme.colors.primary};

      &:hover { background: ${theme.colors.primaryHover}; }
      &:focus { outline: 2px solid ${theme.colors.focus}; outline-offset: 2px; }
    `}

  ${({ variant, theme }) =>
    variant === "outline" &&
    css`
      background: transparent;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary};

      &:hover { background: ${theme.colors.primary}; color: ${theme.colors.textOnPrimary}; }
      &:focus { outline: 2px solid ${theme.colors.focus}; outline-offset: 2px; }
    `}

  ${({ variant, theme }) =>
    variant === "ghost" &&
    css`
      background: transparent;
      color: ${theme.colors.primary};
      border: none;

      &:hover { background: ${theme.colors.primary}10; } /* 10% opacity */
      &:focus { outline: 2px solid ${theme.colors.focus}; outline-offset: 2px; }
    `}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LoadingBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  animation: ${loadingAnim} 1s linear infinite;
`;

export default function Button({ children, variant = "solid", fullWidth = false, disabled = false, loading = false, ...props }) {
  return (
    <StyledButton variant={variant} fullWidth={fullWidth} disabled={disabled || loading} {...props}>
      {loading && <LoadingBar />}
      {children}
    </StyledButton>
  );
}
