import styled from "styled-components";
import {
  navigationBgColor,
  navigationFontSize,
  navigationHeight,
  navigationSpace,
  space
} from "../lib/constants/StyleConstants";
import { Link } from "./Link";

const Nav = styled.nav`
  align-items: center;
  background: ${navigationBgColor};
  display: flex;
  font-size: ${navigationFontSize};
  height: ${navigationHeight};
  justify-content: space-between;
  padding: 0 ${navigationSpace};
  width: 100vw;
`;

const Logo = styled.div`
  display: flex;
  margin: 8px;
  width: 48px;
  height: calc(${navigationHeight} - 4px);
  background: blue;
  opacity: 0.8;
`;

const List = styled.ul`
  align-items: center;
  display: flex;
  font-size: ${navigationFontSize};
  justify-content: space-between;
  list-style: none;
  padding: 0 ${navigationSpace};
`;

const ListItem = styled(Link)`
  align-items: center;
  display: flex;
  height: ${navigationHeight};
  padding: ${space};
`;

interface Props {}

export const Header: React.SFC<Props> = () => (
  <header>
    <Nav>
      <Logo />
      <List>
        <ListItem href="/">Home</ListItem>
        <ListItem href="/time">Time</ListItem>
      </List>
    </Nav>
  </header>
);
