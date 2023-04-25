import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Image from "next/image";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { Mq, useCustomMediaQuery } from "@/common/theme/screen";
import { partnersModels } from "../models/partnersModels";

export const PcSlide = () => {
  const { isLaptop } = useCustomMediaQuery();
  return (
    <div css={sx.root}>
      <Swiper
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={2000}
        slidesPerView={isLaptop ? 5 : 7}
        loop={true}
        spaceBetween={90}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
      >
        {partnersModels.map((it, index) => (
          <SwiperSlide key={index}>
            <Image
              src={it.img}
              alt={"it.img"}
              width={it.width}
              height={it.height}
            />
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
      /* width: fit-content; */
    }
  `,
};
