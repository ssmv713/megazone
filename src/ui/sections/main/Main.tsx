import { Color } from "@/common/theme/colors";
import { Mq, useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";

export const Main = () => {
  const { isLarge } = useCustomMediaQuery();
  const title = {
    pc: "메가존.디지털은 글로벌 기준의 다양한 방법론으로\n기업의 디지털 전환을 선도하는 전문가 그룹입니다.",
    tablet:
      "메가존.디지털은 글로벌 기준의 다양한 방법론으로 기업의 디지털 전환을 선도하는 전문가 그룹입니다.",
  };

  return (
    <div css={sx.root}>
      <iframe
        css={sx.video}
        src="https://player.vimeo.com/video/746739996?autoplay=1&loop=1&title=0&background=1"
        allow="autoplay; fullscreen"
        allowFullScreen
      ></iframe>
      <Typography color={Color.WhiteText} variant="h1" css={sx.title}>
        {isLarge ? title.tablet : title.pc}
      </Typography>
    </div>
  );
};

const sx = {
  root: css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow: hidden; */
    @media ${Mq.lg} {
      padding: 0 30px;
    }
  `,

  video: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 56.25vw;
    min-width: 177.77vh;
    min-height: 100vh;
  `,

  title: css`
    position: relative;
    z-index: 5;
    text-align: center;
  `,
};
