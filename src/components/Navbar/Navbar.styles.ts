import styled from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 18px 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(8, 21, 35, 0.92);
  backdrop-filter: blur(10px);
`;

export const Logo = styled.div`
 font-family: 'Cormorant Garamond', serif;
  font-size: 2.3rem;
  font-weight: 500;
  letter-spacing: 0.5px;

  color: #dbe7f3;

  span {
    color: #d4af37;
  }
`;

export const NavList = styled.ul`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: #dbe7f3;
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #d4af37;
  }
`;

export const NavCta = styled(NavLink)`
  background: #d4af37;
  color: #0b1f33 !important;
  padding: 8px 20px;
  border-radius: 25px;
  font-weight: 600;

  &:hover {
    background: #e0b85a;
    color: #0b1f33 !important;
  }
`;
