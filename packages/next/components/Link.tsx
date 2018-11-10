import { withRouter, WithRouterProps } from "next/router";
import { useCallback } from "react";
import styled from "styled-components";
import {
  navigationActiveBgColor,
  navigationActiveFgColor,
  navigationBgColor,
  navigationFgColor
} from "../lib/constants/StyleConstants";

const ListItem = styled.li<{ active: boolean }>`
  background: ${({ active }) =>
    active ? navigationActiveBgColor : navigationBgColor};

  a {
    color: ${({ active }) =>
      active ? navigationActiveFgColor : navigationFgColor};
    text-decoration: none;
  }
`;

interface Props extends WithRouterProps {
  className?: string;
  href: string;
}

export const LinkWithourRouter: React.SFC<Props> = ({
  className,
  router,
  href,
  children
}) => {
  const onClick = useCallback(
    (event: React.SyntheticEvent<HTMLElement>) => {
      event.preventDefault();
      router.push(href);
    },
    [href]
  );

  return (
    <ListItem
      className={className}
      active={router.pathname === href}
      onClick={onClick}
    >
      <a href={href}>{children}</a>
    </ListItem>
  );
};

export const Link = withRouter(LinkWithourRouter);
