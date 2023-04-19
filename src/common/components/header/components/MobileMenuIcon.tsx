import { css } from "@emotion/react";
import { useState } from "react";

type MobileMenuIconType = {
  scrolled: boolean;
  onClick: () => void;
};

export const MobileMenuIcon = ({ scrolled, onClick }: MobileMenuIconType) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <ul
      css={sx.button(scrolled)}
      onClick={() => {
        handleClick();
        onClick();
      }}
      className={isClicked ? "clicked" : ""}
    >
      <li></li>
      <li></li>
      <li></li>
    </ul>
  );
};

const sx = {
  button: (scrolled: boolean) => css`
    width: 25px;
    height: 25px;

    & li {
      width: 25px;
      height: 2px;
      background: ${scrolled ? "#000" : "#fff"};
      border-radius: 3px;
      margin: 5px 0;
      transition: all 0.6s;
    }
    & li:nth-child(2) {
      width: 15px;
      margin-left: 10px;
    }
    &.clicked {
      & li:nth-child(2) {
        opacity: 0;
      }
      & li:first-child {
        transform: rotate(-45deg) translate(-6px, 5px);
      }
      & li:last-child {
        transform: rotate(45deg) translate(-5px, -4px);
      }
    }
  `,
};
