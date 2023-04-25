import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { mobile_partnersModels } from "../models/mobile_partnersModels";
import { useCustomMediaQuery } from "@/common/theme/screen";

export const MobileSlide = () => {
  const { isMedium, isSmall } = useCustomMediaQuery();
  return (
    <div css={sx.root}>
      <Swiper
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={2000}
        slidesPerView={isSmall ? 3 : isMedium ? 5 : 7}
        loop={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
      >
        {mobile_partnersModels.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img} alt={"img"} width={81} height={81} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const sx = {
  root: css`
    .swiper-wrapper {
      align-items: center;
      transition-timing-function: linear;
      /* transition: all 1s; */
    }
    .swiper-slide {
      width: fit-content;
    }
  `,
};
