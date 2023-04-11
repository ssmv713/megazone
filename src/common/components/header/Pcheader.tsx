import { Link, Stack, Typography } from "@mui/material";
import logo_black from "@/assets/logos/logo_black.png";
import logo_whiite from "@/assets/logos/logo_white.png";
import Image from "next/image";
import { Color } from "@/common/theme/colors";
import { MenuModels } from "./model/menuModel";
import { css } from "@emotion/react";

export const PcHeader = () => {
  return (
    <Stack direction="row" css={sx.root}>
      <Image src={logo_whiite} alt="logo" width="157" height="40" />
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
    padding: 40px 60px;
    justify-content: space-between;
    width: 100%;
  `,
  nav: css`
    display: flex;
    justify-content: space-between;
    gap: 48px;
  `,
};
