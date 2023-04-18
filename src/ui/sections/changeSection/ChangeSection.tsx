import { Color } from "@/common/theme/colors";
import { css, keyframes } from "@emotion/react";
import { Stack, Typography } from "@mui/material";

import Image from "next/image";
import { techModels } from "./models/techModels";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

export const ChangeSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div css={sx.root}>
      <video autoPlay muted loop css={sx.bg}>
        <source src="/assets/video/blue_bg.mp4" type="video/mp4" />
      </video>
      {/* <iframe
        css={sx.bg}
        src="https://player.vimeo.com/video/782821565?h=370b6b74e6&badge=0&autopause=0&player_id=0&app_id=58479%22&autoplay=1&loop=1&title=0&background=1"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe> */}
      <Stack css={sx.inner}>
        <Typography color={Color.blueText}>전환주도</Typography>
        <Typography
          color={Color.WhiteText}
          variant="h2"
          mt="12px"
          lineHeight="140%"
          mb="40px"
          //   data-aos="fade-up"
        >
          {
            "메가존.디지털은\n클라우드,데이터,디지털 분랴의 네이티브로서\n비즈니스 디지털 전환을 주도합니다."
          }
        </Typography>
        <Stack direction="row" justifyContent="space-between">
          {techModels.map((it, index) => (
            <Stack key={index}>
              <div css={sx.imgWrap(it.width, it.height, it.delay)}>
                <Image
                  src={it.img}
                  alt="tech"
                  width={it.width}
                  height={it.height}
                  className={scrollPosition > 2100 ? "fade-up" : "fade"}
                />
              </div>

              <Typography mt="20px" color="#ddd" variant="body2">
                {it.text}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    position: relative;
  `,
  inner: css`
    max-width: 1430px;
    margin: 0 auto;
    padding: 180px 0 170px 0;
  `,
  bg: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 123vw;
    min-width: 177.77vh;
    min-height: 128vh;
    z-index: -1;
  `,
  imgWrap: (width: number, height: number, delay: string) => css`
    width: ${width}px;
    height: ${height}px;
    overflow: hidden;
    & .fade {
      transform: translateY(150px);
      opacity: 0;
transition: 1s all ease;
    }
    & .fade-up {
    
      transition: all 0.6s ease;
      animation-name: fadeUp;
      animation-duration: 1s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
      animation-delay: ${delay};
      opacity: 1;
    }
    @keyframes fadeUp{     
      from{
        transform: translateY(150px);
        /* opacity: 0; */
      }
      to{
          transform:translateY(0);
          /* opacity: 1; */
         
      }
    },
  `,
};
