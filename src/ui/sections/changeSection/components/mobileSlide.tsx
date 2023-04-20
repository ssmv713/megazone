import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { css } from "@emotion/react";
import { techModels } from "../models/techModels";
import Image from "next/image";

export const MobileSlide = () => {
  return (
    <div css={sx.root}>
      <Swiper slidesPerView={1.2} spaceBetween={10} centeredSlides={true}>
        {techModels.map((it, index) => (
          <SwiperSlide key={index}>
            <div css={sx.image(it.aspectRatio)}>
              <Image src={it.img} alt="img" fill sizes="100" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const sx = {
  root: css`
    .swiper-wrapper {
    }
    .swiper-slide {
    }
  `,
  image: (aspectRatio: string) => css`
    width: 100%;
    aspect-ratio: ${aspectRatio};
    padding: 0 20px;
  `,
};
