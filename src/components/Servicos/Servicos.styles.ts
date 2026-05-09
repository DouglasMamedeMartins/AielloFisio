import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 5%;
  background: #0b1f33;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 36px 28px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #2f6fa5);
  }

  &:hover {
    background: rgba(255, 255, 255, 0.09);
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  }
`;

export const CardIcon = styled.div`
  font-size: 2.4rem;
  margin-bottom: 18px;
`;

export const CardTitle = styled.h3`
  font-family: 'Playfair Display', serif;
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 12px;
`;

export const CardDesc = styled.p`
  color: #dbe7f3;
  font-size: 0.9rem;
  line-height: 1.7;
  opacity: 0.85;
`;
