import { GlobalStyle } from "../components/GlobalStyle";
import { Header } from "../components/Header";

interface Props {}

export const Layout: React.SFC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <GlobalStyle />
    </div>
  );
};
