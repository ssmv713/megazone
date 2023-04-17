import { Color } from "@/common/theme/colors";
import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { css } from "@emotion/react";

type blueButtonType = {
  text: string;
};

export const BlutButton = ({ text }: blueButtonType) => {
  return (
    <Link href="#!">
      <Button css={sx.button}>
        <Typography color={Color.WhiteText} variant="body1">
          {text}
        </Typography>
      </Button>
    </Link>
  );
};

const sx = {
  button: css`
    width: 202px;
    height: 57px;
    background: ${Color.blueText};
    border-radius: 0;

    &:hover {
      background: ${Color.blueText};
    }
  `,
};
