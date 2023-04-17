import { Stack, Typography } from "@mui/material";
import { css } from "@emotion/react";
import { Color } from "@/common/theme/colors";

type ArrowTextType = {
  text: string;
};

export const ArrowText = ({ text }: ArrowTextType) => {
  return (
    <Stack direction="row">
      <Typography fontSize="28px !important" css={sx.viewMore} variant="body1">
        {text}
      </Typography>
    </Stack>
  );
};

const sx = {
  viewMore: css`
    color: #ccc;
    position: relative;
    transition: all 0.6s;
    &::after {
      content: "";
      position: absolute;
      top: 7px;
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
};
