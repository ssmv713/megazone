import { Link, Stack, Typography } from "@mui/material";
import logo_whiite from "@/assets/logos/logo_white.png";
import Image from "next/image";
import { Color } from "@/common/theme/colors";
import { MenuModels } from "./model/menuModel";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import logoBlack from "@/assets/logos/logo_black.png";

export const PcHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  return (
    <Stack
      direction="row"
      css={sx.root}
      className={scrollPosition > 100 ? "scrolled" : ""}
    >
      <Image
        src={scrollPosition > 1 ? logoBlack : logo_whiite}
        alt="logo"
        width="157"
        height="40"
      />
      <ul css={sx.nav}>
        {MenuModels.map((it, index) => (
          <li key={index}>
            <Link href="#">
              <Typography
                fontWeight="600"
                color={Color.WhiteText}
                variant="body1"
              >
                {it.name}
              </Typography>
            </Link>
          </li>
        ))}
      </ul>
    </Stack>
  );
};

const sx = {
  root: css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 55;
    padding: 20px 60px;
    height: 120px;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    &.scrolled {
      background-color: #fff;
      position: fixed;
      height: 80px;
      animation-name: grow;
      animation-duration: 0.6s;
      animation-timing-function: ease-out;
      animation-fill-mode: forwards;
      & p {
        color: #000;
      }
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
  nav: css`
    display: flex;
    justify-content: space-between;
    gap: 48px;
  `,
};
