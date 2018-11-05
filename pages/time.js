import { useEffect, useState } from "react";
import { format } from "date-fns";
import styled from "styled-components";
import { GlobalStyle } from "../components/GlobalStyle";
import {
  fontSizeLarge,
  bgColorDefault,
  fgColorDefault
} from "../lib/constants/StyleConstants";

const Screen = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0;
  width: 100vw;
`;

const Box = styled.div`
  align-items: center;
  background: ${bgColorDefault};
  color: ${fgColorDefault};
  display: flex;
  font-size: ${fontSizeLarge};
  font-weight: bold;
  height: 40%;
  justify-content: center;
  width: 80%;
`;

const INTERVAL = 1000;

const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, INTERVAL);

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  });

  return date;
};

const Time = () => {
  const date = useCurrentDate();

  return (
    <Screen>
      <Box>{format(date, "YYYY/MM/DD hh:mm:ss")}</Box>
      <GlobalStyle />
    </Screen>
  );
};

export default Time;
