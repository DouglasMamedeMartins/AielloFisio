import styled from 'styled-components';

export const Section = styled.section`
  padding: 100px 5%;
  background: #f5f7fa;
`;

export const Inner = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  flex: 1;

  p {
    font-size: 1rem;
    line-height: 1.9;
    color: #444;
    margin-bottom: 16px;
  }
`;

export const Creds = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 30px;
`;

export const Cred = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  background: #fff;
  padding: 14px 20px;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  border-left: 4px solid #d4af37;
`;

export const CredIcon = styled.span`
  font-size: 1.4rem;
`;

export const CredText = styled.span`
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
`;

export const ImgWrap = styled.div`
  flex: 0 0 320px;

  img {
    width: 100%;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    margin: 0 auto;
  }
`;
