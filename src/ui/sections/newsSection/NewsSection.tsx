import { Color } from "@/common/theme/colors";
import { Stack, Typography } from "@mui/material";
import arrow_right from "@/assets/icons/arrow_right_gray.png";
import Image from "next/image";
import { css } from "@emotion/react";
import Link from "next/link";
import { newsModels } from "./model/newsModels";
import { it } from "node:test";

export const NewsSection = () => {
  return (
    <div css={sx.root}>
      <Stack css={sx.inner}>
        <Typography color={Color.blueText}>{"뉴스"}</Typography>

        <Stack direction="row" my="35px" alignItems="flex-end">
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
        <Stack direction="row" justifyContent="space-between">
          {newsModels.map((it, index) => (
            <Link href="#!" key={index}>
              <Stack css={sx.newsCard}>
                <Image src={it.img} alt="news" width={440} height={280} />
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
      </Stack>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    margin: 200px 0 180px 0;
  `,
  inner: css`
    max-width: 1430px;
    margin: 0 auto;
  `,
  viewMore: css`
    color: ${Color.grayText2};
    margin-left: 60px;
    position: relative;
    transition: all 0.6s;
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
  newsCard: css`
    width: 440px;
  `,
};
