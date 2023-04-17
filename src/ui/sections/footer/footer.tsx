import { Color } from "@/common/theme/colors";
import { css } from "@emotion/react";
import { Bottom, Top } from "./components";

export const Footer = () => {
  return (
    <div css={sx.root}>
      <div css={sx.inner}>
        <Top />
        <Bottom />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    background: ${Color.BlackText};
    padding: 120px;
  `,
  inner: css`
    width: 1430px;
    margin: 0 auto;
  `,
};
