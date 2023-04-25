import { Color } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { partnersModels } from "./models/partnersModels";
import Image from "next/image";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { Mq, useCustomMediaQuery } from "@/common/theme/screen";
import { MobileSlide } from "./components/MobileSlide";
import { PcSlide } from "./components/PcSlide";

export const PartnersSection = () => {
  const { isSmall, isLarge } = useCustomMediaQuery();
  return (
    <Stack css={sx.root}>
      <Stack css={sx.textWrap}>
        <Typography color={Color.blueText} variant="body1">
          {"글로벌 기술 파트너"}
        </Typography>
        <Typography mt="14px" mb="21px" variant="h2" color={Color.BlackText}>
          {"글로벌 기술력이 메가존.디지털과 함께 합니다."}
        </Typography>
        <Typography fontSize="h4" color={Color.grayText}>
          {
            "차세대 플랫폼 설계의 필수적 역량을 가진 글로벌 기술 파트너들을 소개합니다."
          }
        </Typography>
      </Stack>
      <div css={sx.swiperWrap}>{isLarge ? <MobileSlide /> : <PcSlide />}</div>
    </Stack>
  );
};

const sx = {
  root: css`
    background-color: ${Color.grayBgColor};
    padding: 130px 0;
    @media ${Mq.sm} {
      padding: 100px 0;
    }
  `,
  textWrap: css`
    margin-left: 12.76%;
    @media ${Mq.sm} {
      margin: 0 30px;
    }
  `,
  swiperWrap: css`
    margin-top: 80px;
  `,
};
