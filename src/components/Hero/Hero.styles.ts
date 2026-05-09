import styled, { keyframes } from 'styled-components';

export const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Section = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #081523 0%, #0b1f33 50%, #102944 100%);
  display: flex;
  align-items: center;
  padding: 100px 5% 60px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -10%;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(45, 134, 83, 0.15) 0%, transparent 70%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #d4af37, transparent);
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const HeroText = styled.div`
  flex: 1;
  animation: ${fadeUp} 0.8s ease both;
`;

export const Badge = styled.div`
  display: inline-block;
  background: rgba(201, 168, 76, 0.15);
  border: 1px solid #d4af37;
  color: #d4af37;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 6px 16px;
  border-radius: 20px;
  margin-bottom: 24px;
`;

export const H1 = styled.h1`
  font-family: 'Playfair Display', serif;
  color: #fff;
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  line-height: 1.15;
  margin-bottom: 20px;

  span {
    color: #d4af37;
  }
`;

export const Desc = styled.p`
  color: #dbe7f3;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 36px;
  max-width: 480px;
  opacity: 0.9;

  @media (max-width: 768px) {
    margin: 0 auto 36px;
  }
`;

export const Btns = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const BtnPrimary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #d4af37;
  color: #0b1f33;
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 20px rgba(201, 168, 76, 0.3);

  &:hover {
    background: #e0b85a;
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(201, 168, 76, 0.4);
  }
`;

export const BtnSecondary = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: transparent;
  color: #fff;
  padding: 14px 28px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s;

  &:hover {
    border-color: #d4af37;
    color: #d4af37;
    transform: translateY(-2px);
  }
`;

export const ImgWrap = styled.div`
  flex: 0 0 400px;
  position: relative;
  animation: ${fadeUp} 0.8s ease 0.2s both;

  &::before {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 20px;
    background: linear-gradient(145deg, #d4af37, transparent, #2f6fa5);
    z-index: 0;
  }

  img {
    width: 100%;
    border-radius: 18px;
    position: relative;
    z-index: 1;
    display: block;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    flex: 0 0 auto;
    width: 100%;
    max-width: 320px;
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const Stat = styled.div`
  text-align: center;
`;

export const StatNum = styled.div`
  font-family: 'Playfair Display', serif;
  font-size: 1.8rem;
  color: #d4af37;
  font-weight: 700;
`;

export const StatLabel = styled.div`
  font-size: 0.75rem;
  color: #dbe7f3;
  opacity: 0.8;
  letter-spacing: 0.5px;
`;
