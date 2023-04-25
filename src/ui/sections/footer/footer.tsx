import { Color } from "@/common/theme/colors";
import { Mq, useCustomMediaQuery } from "@/common/theme/screen";
import { css } from "@emotion/react";
import { Bottom, Top } from "./components";
import { MobileBottom } from "./components/MobileBottom";
import { MobileTop } from "./components/MobileTop";

export const Footer = () => {
  const { isLarge } = useCustomMediaQuery();
  return (
    <div css={sx.root}>
      <div css={sx.inner}>
        {isLarge ? <MobileTop /> : <Top />}
        {isLarge ? <MobileBottom /> : <Bottom />}
      </div>
    </div>
  );
};

const sx = {
  root: css`
    background: ${Color.BlackText};
    padding: 40px 0 100px 0;
  `,
  inner: css`
    width: 1430px;
    margin: 0 auto;
    @media ${Mq.xxl} {
      width: 100%;
      padding: 0 30px;
    }
  `,
};
