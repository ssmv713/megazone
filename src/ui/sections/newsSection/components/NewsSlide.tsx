import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { newsModels } from "../model/newsModels";

export const NewsSlide = () => {
  return (
    <div>
      <Swiper>
        {newsModels.map((it, index) => (
          <SwiperSlide key={index}>
            <Stack gap="20px">
              <div css={sx.image}>
                <Image src={it.img} alt="img" fill />
              </div>
              <Typography>{it.title}</Typography>
              <Typography fontSize="15px !important">{it.text}</Typography>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const sx = {
  root: css``,
  image: css`
    width: 100%;
    position: relative;
    aspect-ratio: 1/ 0.636;
  `,
};
