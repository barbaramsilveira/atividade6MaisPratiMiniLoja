// src/04-styled-components/components/Skeleton.jsx
import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonBlock = styled.div`
  width: 100%;
  height: 100%;
  background: #e5e7eb;
  background-image: linear-gradient(90deg, #e5e7eb 0px, #f3f4f6 40px, #e5e7eb 80px);
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;

export default function Skeleton() {
  return <SkeletonBlock aria-busy="true" />;
}
