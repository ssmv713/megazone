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
import { ScrollToTop } from "@/common/components/scrollToTop/ScrollToTop";
import { ChangeTest } from "../sections/changeSection/ChangeTest";
import { useCustomMediaQuery } from "@/common/theme/screen";

export const LandingView = () => {
  const { isLaptop } = useCustomMediaQuery();
  return (
    <Stack css={sx.root}>
      <Header />
      <Main />
      <SwiperSection />
      <PartnersSection />
      {isLaptop ? <ChangeTest /> : <ChangeSection />}

      <NewsSection />
      <BannerSection />
      <Footer />
      <ScrollToTop />
    </Stack>
  );
};

const sx = {
  root: css`
    /* position: relative; */
    overflow-x: hidden;
  `,
};
