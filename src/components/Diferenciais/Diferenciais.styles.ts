import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 5%;
  background: #fff;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Item = styled.div`
  text-align: center;
  padding: 30px 20px;
`;

export const Circle = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0b1f33, #2f6fa5);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 18px;
  font-size: 1.6rem;
  box-shadow: 0 8px 25px rgba(13, 51, 32, 0.2);
`;

export const ItemTitle = styled.h4`
  font-weight: 600;
  color: #0b1f33;
  margin-bottom: 8px;
  font-size: 1rem;
`;

export const ItemDesc = styled.p`
  font-size: 0.85rem;
  color: #666;
  line-height: 1.6;
`;
