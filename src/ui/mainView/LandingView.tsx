import { Header } from "@/common/components/header";
import { Stack } from "@mui/material";

import { css } from "@emotion/react";

import {
  BannerSection,
  ChangeSection,
  Footer,
  Main,
  NewsSection,
  PartnersSection,
  SwiperSection,
} from "../sections";

export const LandingView = () => {
  return (
    <Stack css={sx.root}>
      <Header />
      <Main />
      <SwiperSection />
      <PartnersSection />
      <ChangeSection />
      <NewsSection />
      <BannerSection />
      <Footer />
    </Stack>
  );
};

const sx = {
  root: css`
    /* position: relative; */
    overflow-x: hidden;
  `,
};
