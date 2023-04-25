import { Button, Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import Link from "next/link";
import { Color } from "@/common/theme/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { swiperModels } from "./models/swiperModels";
import { Mq, useCustomMediaQuery } from "@/common/theme/screen";
import { MobileText } from "./components/MobileText";

export const BannerSection = () => {
  const { isLarge, isSmall } = useCustomMediaQuery();
  return (
    <div css={sx.root}>
      <Stack css={sx.inner}>
        {isSmall ? (
          <MobileText />
        ) : (
          <Stack>
            <Stack direction="row">
              <Typography
                fontSize={isLarge ? "28px !important" : "68px !important"}
                color={Color.WhiteText}
              >
                {"메가존.디지털 "}
              </Typography>
              <div css={sx.underline}>
                <Swiper
                  direction={"vertical"}
                  slidesPerView={1}
                  spaceBetween={30}
                  mousewheel={true}
                  className="mySwiper"
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                  {swiperModels.map((text, index) => (
                    <SwiperSlide key={index}>
                      <Typography
                        fontSize={
                          isLarge ? "28px !important" : "68px !important"
                        }
                        color={Color.blueText}
                      >
                        {text}
                      </Typography>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <Typography
                fontSize={isLarge ? "28px !important" : "68px !important"}
                color={Color.WhiteText}
              >
                {" 는"}
              </Typography>
            </Stack>
            <Typography
              fontSize={isLarge ? "28px !important" : "68px !important"}
              color={Color.WhiteText}
            >
              {"놀라운 여정을 함께 할 동료를 기다립니다."}
            </Typography>
          </Stack>
        )}

        <Link href="#!">
          <Button css={sx.button}>
            <Typography color={Color.WhiteText} variant="body1">
              {"더 알아보기"}
            </Typography>
          </Button>
        </Link>
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    padding: 100px 0;
    background-image: url(/assets/images/background.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    .swiper {
      height: 100px;
      @media ${Mq.lg} {
        transform: translateY(10px);
      }
    }
    .swiper-slide {
      height: 100px !important;
    }
    .swiper-wrapper {
      transition-duration: 0.6s !important;
      transition-timing-function: linear;
    }
  `,
  inner: css`
    max-width: 1430px;
    margin: 0 auto;
    @media ${Mq.lg} {
      width: 100%;
      margin-left: 30px;
    }
  `,
  underline: css`
    width: 400px;
    border-bottom: solid 6px #fff;
    text-align: center;
    transform: translateY(-23px);
    height: 110px;
    overflow: hidden;
    @media ${Mq.lg} {
      width: 180px;
      height: 60px;
      border-bottom: solid 2px #fff;
    }
  `,
  button: css`
    width: 202px;
    height: 57px;
    background: ${Color.blueText};
    border-radius: 0;
    margin-top: 60px;

    &:hover {
      background: ${Color.blueText};
    }
  `,
};
