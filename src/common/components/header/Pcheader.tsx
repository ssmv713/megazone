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
      className={scrollPosition > 5 ? "scrolled" : ""}
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
    position: fixed;
    top: 0;
    left: 0;
    z-index: 55;
    padding: 20px 60px;
    justify-content: space-between;
    width: 100%;
    &.scrolled {
      background-color: #fff;
      & p {
        color: #000;
      }
    }
  `,
  nav: css`
    display: flex;
    justify-content: space-between;
    gap: 48px;
  `,
};
