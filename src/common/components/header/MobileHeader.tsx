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
        css={[sx.root, scrollPosition > 100 && sx.scrolled]}
      >
        <Image
          src={scrolled ? logoBlack : logo_white}
          alt="logo"
          width="126"
          height="32"
        />
        <MobileMenuIcon
          scrolled={scrolled}
          onClick={handleClickOpen}
          open={open}
        />
      </Stack>
    </>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 104px;

    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 55;

    padding: 0 18px;

    @keyframes grow {
      from {
        top: -64px;
      }
      to {
        top: 0;
      }
    }
  `,

  // 스크롤이 됐을 때, 툴바 스타일
  scrolled: css`
    background-color: #fff;

    position: fixed;

    height: 60px;

    animation-name: grow;
    animation-duration: 0.6s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
  `,
};
