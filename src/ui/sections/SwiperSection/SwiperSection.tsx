import { Color } from "@/common/theme/colors";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { Button, Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
import muffin from "@/assets/images/muffin.png";
import muffin_logo from "@/assets/logos/muffin_logo.png";
import Image from "next/image";
import { SwiperModel } from "./model/swiperModel";

export const SwiperSection = () => {
  const { isLarge } = useCustomMediaQuery();
  const title = {
    mainPC: "언제나 사람이 중심이 되는\n차세대 디지털 서비스를 고민합니다.",
    mainTablet: "언제나 사람이 중심이 되는 차세대 디지털 서비스를 고민합니다.",
    subPC:
      "우리 모두의 삶을 변화 시키는 주변의 모든 디지털 서비스에 대해\n메가존.디지털은 기업의 비즈니스 혁신과 성장을 위해 오늘도 진심으로 고민합니다.",
    subTablet:
      "우리 모두의 삶을 변화 시키는 주변의 모든 디지털 서비스에 대해 메가존.디지털은 기업의 비즈니스 혁신과 성장을 위해 오늘도 진심으로 고민합니다.",
  };

  return (
    <Stack css={sx.root}>
      <Typography color={Color.BlackText} variant="h1" mb="28px">
        {isLarge ? title.mainTablet : title.mainPC}
      </Typography>
      <Typography></Typography>
      <Typography mb="80px" color={Color.SubBlack} variant="subtitle1">
        {isLarge ? title.subTablet : title.subPC}
      </Typography>
      <div>
        <Swiper
          loop={true}
          slidesPerView={1.5}
          spaceBetween={50}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {SwiperModel.map((it, index) => (
            <SwiperSlide key={index}>
              <Stack>
                <div css={sx.image}>
                  <Image
                    css={sx.insideImage}
                    src={it.image}
                    alt="muffin"
                    fill
                    sizes="100"
                  />
                  {it.logo && (
                    <div css={sx.logo}>
                      <Image
                        src={it.logo}
                        alt="logo"
                        width={it.logoWidth}
                        height={it.logoHeight}
                      />
                    </div>
                  )}
                </div>
                <Stack direction="row" mt="28px" alignItems="center" gap="20px">
                  <Button css={sx.btn}>레퍼런스</Button>
                  <Typography
                    css={sx.swiperText}
                    variant="subtitle1"
                    color={Color.Black}
                    fontWeight="600"
                    lineHeight={1.4}
                  >
                    {it.title}
                  </Typography>
                </Stack>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Stack>
  );
};

const arrow = {
  base: css`
    background-image: url(/assets/icons/arrow_right.png);
    width: 110px;
    height: 65px;
    background-repeat: no-repeat;
    &:hover {
      background-image: url(/assets/icons/arrow_right_blue.png);
    }
    &::after {
      display: none;
    }
  `,
};

const sx = {
  root: css`
    margin-top: 200px;
    margin-bottom: 200px;
    margin-left: 12.76%;
    .swiper-button-next {
      right: 25%;
      ${arrow.base}
    }
    .swiper-button-prev {
      ${arrow.base}
      transform: scaleX(-1) translateX(1vw);
    }
    .swiper-pagination {
      left: 13% !important;
      bottom: 0 !important;
    }
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
    }
    .swiper-pagination-bullet-active {
      width: 30px;
      border-radius: 19px;
    }
  `,
  image: css`
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 0.562;
    filter: drop-shadow(20px 30px 20px rgba(0, 0, 0, 0.1));
    overflow: hidden;
  `,
  insideImage: css`
    transition: 0.6s;
    & :hover {
      transform: scale(1.15);
    }
  `,
  logo: css`
    position: absolute;
    top: 80px;
    left: 80px;
  `,
  btn: css`
    min-width: 112px;
    padding: 12px 16px;
    height: 44px;
    background-color: #000;
    font-size: 20px;
    color: #fff;
    border-radius: 0;
    font-weight: 600;
  `,
  swiperText: css`
    letter-spacing: -0.03em;
  `,
};
