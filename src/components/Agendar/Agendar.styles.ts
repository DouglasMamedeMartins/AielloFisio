import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 5%;
  background: linear-gradient(135deg, #0b1f33, #102944);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(201, 168, 76, 0.1) 0%, transparent 70%);
    pointer-events: none;
  }
`;

export const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  color: #fff;
  font-size: clamp(2rem, 4vw, 3rem);
  margin-bottom: 18px;
  position: relative;
`;

export const Desc = styled.p`
  color: #dbe7f3;
  font-size: 1.05rem;
  margin-bottom: 40px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
  position: relative;
`;

export const WppBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: #25d366;
  color: #fff;
  padding: 18px 40px;
  border-radius: 40px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s;
  box-shadow: 0 8px 30px rgba(37, 211, 102, 0.3);
  position: relative;

  &:hover {
    background: #1ebe5d;
    transform: translateY(-3px);
    box-shadow: 0 14px 40px rgba(37, 211, 102, 0.4);
  }
`;
