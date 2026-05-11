import { Nav, Logo, NavList, NavLink, NavCta } from "./Navbar.styles";

export function Navbar() {
  return (
    <Nav>
      <Logo>
        <img src="./logo.png" alt="" />
      </Logo>
      <NavList>
        <li>
          <NavLink href="#sobre">Sobre</NavLink>
        </li>
        <li>
          <NavLink href="#servicos">Serviços</NavLink>
        </li>
        <li>
          <NavLink href="#diferenciais">Diferenciais</NavLink>
        </li>
        <li>
          <NavCta href="#agendar">Agendar</NavCta>
        </li>
      </NavList>
    </Nav>
  );
}
