import { css, Stack } from "@mui/material";
import logo_white from "@/assets/logos/logo_white.png";
import Image from "next/image";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export const MobileHeader = () => {
  return (
    <Stack direction="row" css={sx.root}>
      <Image src={logo_white} alt="logo" width="126" height="32" />
      <MenuRoundedIcon style={{ color: "white", fontSize: 32 }} />
    </Stack>
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
  `,
};
