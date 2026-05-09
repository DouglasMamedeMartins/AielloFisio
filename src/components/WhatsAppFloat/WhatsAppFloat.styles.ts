import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.5); }
  50%       { box-shadow: 0 4px 35px rgba(37, 211, 102, 0.8); }
`;

export const FloatLink = styled.a`
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 999;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #25d366;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.3s;
  animation: ${pulse} 2s infinite;

  &:hover {
    transform: scale(1.1);
  }
`;
