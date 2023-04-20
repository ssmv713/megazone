import { Color } from "@/common/theme/colors";
import { css, keyframes } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { techModels } from "./models/techModels";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Mq, useCustomMediaQuery } from "@/common/theme/screen";
import bg from "@/assets/images/digital_bg.jpg";
import { MobileSlide } from "./components/mobileSlide";

export const ChangeTest = () => {
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
  const { isSmall, isLaptop } = useCustomMediaQuery();
  const title = {
    pc: "메가존.디지털은\n클라우드,데이터,디지털 분량의 네이티브로서\n비즈니스 디지털 전환을 주도합니다.",
    mobile:
      "메가존.디지털은 클라우드,데이터,디지털\n분량의 네이티브로서 비즈니스 디지털\n전환을 주도합니다.",
  };
  const scrolled = scrollPosition > 1767;
  return (
    <div css={sx.root}>
      <div css={sx.bg}>
        <video autoPlay muted loop css={[sx.bg, sx.video]}>
          <source src="/assets/video/blue_bg.mp4" type="video/mp4" />
        </video>
      </div>
      <Stack css={sx.content} justifyContent="center">
        <Typography ml="30px" color={Color.blueText}>
          전환주도
        </Typography>
        <Typography
          ml="30px"
          color={Color.WhiteText}
          variant="h2"
          mt="12px"
          lineHeight="140%"
          mb="40px"
          //   data-aos="fade-up"
        >
          {isSmall ? title.mobile : title.pc}
        </Typography>
        {isSmall ? (
          <MobileSlide />
        ) : (
          <Stack
            direction="row"
            sx={{ width: "100%" }}
            justifyContent="
          space-between"
          >
            {techModels.map((it, index) => (
              <Stack key={index} css={{ width: "20%" }}>
                <div
                  css={sx.imgWrap(it.aspectRatio, it.delay)}
                  className={scrolled ? "fade-up" : "fade"}
                >
                  <Image src={it.img} alt="img" fill sizes="100" />
                </div>
                <Typography mt="20px" color="#ddd" variant="body2">
                  {it.text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        )}
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    position: relative;
    height: 100vh;
    @media ${Mq.lg} {
      height: 80vh;
    }
    @media ${Mq.sm} {
      height: 100%;
      padding: 50px 0;
    }
  `,
  bg: css`
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    @media ${Mq.lg} {
      height: 80vh;
    }
    @media ${Mq.sm} {
      height: 100%;
    }
  `,
  video: css`
    @media ${Mq.sm} {
      height: 100%;
    }
  `,
  content: css`
    height: 100%;
    @media ${Mq.sm} {
      justify-content: center;
    }
  `,

  inner: css`
    max-width: 1430px;
    margin: 0 auto;
    padding: 140px 0 170px 0;
    @media ${Mq.xxl} {
      width: 100%;
      padding: 100px 0;
      margin: 0 30px;
    }
  `,

  imageOuter: css`
    width: fit-content;
    height: fit-content;
    overflow: hidden;
    @media ${Mq.xxl} {
      width: 100%;
      height: auto;
    }
  `,
  imgWrap: (aspectRatio: string, delay: string) => css`
  width: 100%;
  aspect-ratio: ${aspectRatio};
  position: relative;
  &.fade {
   
   opacity: 0;
   transition: 1s all ease;
 }
 &.fade-up {    
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
   }
   to{
       transform:translateY(0);         
   }
 },
  
  
`,
};
