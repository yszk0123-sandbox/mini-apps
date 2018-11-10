import styled from "styled-components";
import { Layout } from "../components/Layout";
import { Screen } from "../components/Screen";
import { fontSizeLarge } from "../lib/constants/StyleConstants";

const Text = styled.p`
  font-size: ${fontSizeLarge};
`;

interface Props {}

const App: React.SFC<Props> = () => (
  <Layout>
    <Screen>
      <Text>Hello, world!</Text>
    </Screen>
  </Layout>
);

export default App;
