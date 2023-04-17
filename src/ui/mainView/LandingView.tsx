import { Header } from "@/common/components/header";
import { Stack } from "@mui/material";
import { Main } from "../sections/main/Main";
import { css } from "@emotion/react";
import { SwiperSection } from "../sections/SwiperSection/SwiperSection";
import { PartnersSection } from "../sections/partnersSection/PartnersSection";

export const LandingView = () => {
  return (
    <Stack css={sx.root}>
      <Header />
      <Main />
      <SwiperSection />
      <PartnersSection />
    </Stack>
  );
};

const sx = {
  root: css`
    position: relative;
    overflow-x: hidden;
  `,
};
