import { Layout } from "../components/Layout";
import { Screen } from "../components/Screen";

interface Props {}

const App: React.SFC<Props> = () => (
  <Layout>
    <Screen>
      <p>Hello, world!</p>
    </Screen>
  </Layout>
);

export default App;
