import { Color } from "@/common/theme/colors";
import { Stack, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { css } from "@emotion/react";
import Link from "next/link";
import { newsModels } from "./model/newsModels";
import { Mq, useCustomMediaQuery } from "@/common/theme/screen";
import { NewsSlide } from "./components/NewsSlide";
import { useEffect } from "react";

export const NewsSection = () => {
  const { isLaptop, isSmall } = useCustomMediaQuery();
  useEffect(() => {
    AOS.init();
  });
  return (
    <div css={sx.root}>
      <Stack css={sx.inner}>
        <Typography color={Color.blueText}>{"뉴스"}</Typography>

        <Stack
          direction={isSmall ? "column" : "row"}
          my="35px"
          alignItems={isSmall ? "flex-start" : "flex-end"}
        >
          <Typography variant="h2" color={Color.BlackText}>
            {"메가존.디지털의 새로운 소식 입니다."}
          </Typography>
          <Link href="#!">
            <Stack direction="row">
              <Typography css={sx.viewMore} variant="body1">
                {"자세히보기"}
              </Typography>
            </Stack>
          </Link>
        </Stack>
        {isSmall ? (
          <NewsSlide />
        ) : (
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ width: "100%" }}
          >
            {newsModels.map((it, index) => (
              <Link
                href="#!"
                key={index}
                css={sx.newsLink}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-easing="ease-in-sine"
              >
                <Stack css={sx.newsCard}>
                  {isLaptop ? (
                    <div css={sx.newsImage}>
                      <Image src={it.img} alt="news" fill sizes="100" />
                    </div>
                  ) : (
                    <Image src={it.img} alt="news" width={440} height={280} />
                  )}
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    color={Color.BlackText}
                    mt="15px"
                    mb="20px"
                    lineHeight="150%"
                  >
                    {it.title}
                  </Typography>
                  <Typography
                    color={Color.grayText}
                    variant="body2"
                    fontWeight="400"
                    lineHeight="150%"
                  >
                    {it.text}
                  </Typography>
                </Stack>
              </Link>
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
    margin: 200px 0 180px 0;
    @media ${Mq.sm} {
      margin: 60px 0;
    }
  `,
  inner: css`
    max-width: 1430px;
    margin: 0 auto;
    @media ${Mq.xxl} {
      width: 100%;
      padding: 30px;
    }
  `,
  viewMore: css`
    color: ${Color.grayText2};
    margin-left: 60px;
    position: relative;
    transition: all 0.6s;
    @media ${Mq.sm} {
      margin-left: 0;
      margin-top: 10px;
    }
    &::after {
      content: "";
      position: absolute;
      top: 2px;
      right: -31px;
      width: 24px;
      height: 22px;
      transition: all 0.6s;
      background-image: url(/assets/icons/arrow_right_gray.png);
    }
    &:hover {
      color: ${Color.blueText};
    }
    &:hover::after {
      background-image: url(/assets/icons/small_arrow_blue.png);
      right: -38px;
    }
  `,
  newsLink: css`
    @media ${Mq.xxl} {
      width: 30%;
    }
  `,
  newsCard: css`
    width: 440px;
    @media ${Mq.xxl} {
      width: 100%;
    }
  `,
  newsImage: css`
    width: 100%;
    position: relative;
    aspect-ratio: 1/ 0.636;
  `,
};
