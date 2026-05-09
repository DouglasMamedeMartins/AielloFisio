import styled from 'styled-components';

export const SectionTag = styled.div<{ $light?: boolean }>`
  text-align: center;
  color: ${({ $light }) => ($light ? '#d4af37' : '#2f6fa5')};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 12px;
`;

export const SectionTitle = styled.h2<{ $light?: boolean }>`
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  color: ${({ $light }) => ($light ? '#fff' : '#0b1f33')};
  margin-bottom: 16px;
`;

export const SectionLine = styled.div`
  width: 60px;
  height: 3px;
  background: #d4af37;
  margin: 0 auto 50px;
`;
