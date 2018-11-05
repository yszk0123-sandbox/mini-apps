import { format } from "date-fns";
import styled from "styled-components";
import { GlobalStyle } from "../components/GlobalStyle";
import { fontSizeLarge } from "../lib/constants/StyleConstants";

const Screen = styled.div`
  padding: 0;
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const Box = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: ${fontSizeLarge};
  font-weight: bold;
  width: 80%;
  height: 40%;
  background: lightgray;
`;

const Time = () => (
  <Screen>
    <Box>Time: {format(new Date(), "YYYY/MM/DD hh:mm:ss")}</Box>
    <GlobalStyle />
  </Screen>
);

export default Time;
