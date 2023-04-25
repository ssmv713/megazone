import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import { swiperModels } from "../models/swiperModels";
import { Color } from "@/common/theme/colors";
import { Mq, useCustomMediaQuery } from "@/common/theme/screen";

export const MobileText = () => {
  const { isLarge, isSmall } = useCustomMediaQuery();
  return (
    <Stack>
      <Stack direction="column">
        <Typography
          fontSize={isLarge ? "28px !important" : "68px !important"}
          color={Color.WhiteText}
        >
          {"메가존..디지털 "}
        </Typography>

        <Stack direction="row" mt="15px">
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
                    fontSize={isLarge ? "28px !important" : "68px !important"}
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
      </Stack>
      <Typography
        fontSize={isLarge ? "28px !important" : "68px !important"}
        color={Color.WhiteText}
      >
        {"놀라운 여정을 함께 할\n동료를 기다립니다."}
      </Typography>
    </Stack>
  );
};

const sx = {
  underline: css`
    width: 180px;
    height: 60px;
    border-bottom: solid 2px #fff;
    text-align: center;
    transform: translateY(-23px);
    overflow: hidden;
  `,
};
