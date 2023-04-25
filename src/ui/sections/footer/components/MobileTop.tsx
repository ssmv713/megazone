import { ArrowText } from "@/common/components/arrowText/ArrowText";
import { Color } from "@/common/theme/colors";
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import {
  digitalModels,
  personModels,
  serviceModels,
} from "../models/footerModels";
import { css } from "@emotion/react";
import { BlutButton } from "@/common/components/blueButton/BlueButton";
import { SelectBox } from "./SelectBox";
import { MobileSelectBox } from "./MobileSelectBox";

export const MobileTop = () => {
  return (
    <Stack
      sx={{
        gap: "60px",
        width: "100%",
        borderBottom: "solid 1px #333",
        paddingBottom: "40px",
      }}
      justifyContent="space-between"
    >
      <div css={sx.grayBox}>
        <Typography fontWeight="700" variant="h3" color={Color.WhiteText}>
          {"지금,메가존.디지털에 문의하세요."}
        </Typography>
        <Typography
          color={Color.blackBgGrayText1}
          variant="body2"
          mt="20px"
          mb="20px"
        >
          {
            "프로젝트, 파트너십, 입사지원, 기타 문의가 있으시면, 지금 바로\n메가존.디지털에 연락하세요."
          }
        </Typography>
        <div css={sx.button}>
          <BlutButton text="문의하기" />
        </div>
      </div>
      <MobileSelectBox />
    </Stack>
  );
};

const sx = {
  grayBox: css`
    background-color: #222;
    width: 100%;
    padding: 40px;
  `,
  button: css``,
};
