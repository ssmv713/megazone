import { css, Stack } from "@mui/material";
import logo_white from "@/assets/logos/logo_white.png";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useEffect, useState } from "react";
import logoBlack from "@/assets/logos/logo_black.png";
import { MobileMenuIcon } from "./components/MobileMenuIcon";
import { MobileMenu } from "./components/mobileMenu";

export const MobileHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickClose = () => {
    setOpen(false);
  };
  const scrolled = scrollPosition > 100;
  return (
    <>
      <MobileMenu open={open} onClose={handleClickClose} />
      <Stack
        direction="row"
        css={sx.root}
        className={scrollPosition > 100 ? "scrolled" : ""}
      >
        <Image
          src={scrolled ? logoBlack : logo_white}
          alt="logo"
          width="126"
          height="32"
        />
        <MobileMenuIcon scrolled={scrolled} onClick={handleClickOpen} />
      </Stack>
    </>
  );
};

const sx = {
  root: css`
    z-index: 55;
    height: 104px;
    align-items: center;
    padding: 0 18px;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    &.scrolled {
      background-color: #fff;
      position: fixed;
      height: 80px;
      animation-name: grow;
      animation-duration: 0.6s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      height: 60px;
    }
    @keyframes grow {
      from {
        top: -64px;
      }
      to {
        top: 0;
      }
    }
  `,
};
