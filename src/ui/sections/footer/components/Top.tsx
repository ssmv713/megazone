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

export const Top = () => {
  return (
    <Stack
      direction="row"
      sx={{
        width: "100%",
        borderBottom: "solid 1px #333",
        paddingBottom: "100px",
      }}
      justifyContent="space-between"
    >
      {/* 첫째줄 */}
      <Stack justifyContent="space-between">
        <Menu models={serviceModels} title="기술과 서비스" />
        <Link href="#!">
          <ArrowText text="인사이트" />
        </Link>
      </Stack>
      {/* 둘째줄 */}
      <Stack justifyContent="space-between">
        <Menu models={digitalModels} title="메가존.디지털" />
        <Menu models={personModels} title="인재영입" />
        <Link href="#!">
          <ArrowText text="오시는 길" />
        </Link>
      </Stack>

      <div css={sx.grayBox}>
        <Typography fontWeight="700" variant="h3" color={Color.WhiteText}>
          {"지금,메가존.디지털에 문의하세요."}
        </Typography>
        <Typography
          color={Color.blackBgGrayText1}
          variant="body2"
          mt="20px"
          mb="80px"
        >
          {
            "프로젝트, 파트너십, 입사지원, 기타 문의가 있으시면, 지금 바로\n메가존.디지털에 연락하세요."
          }
        </Typography>
        <div css={sx.button}>
          <BlutButton text="문의하기" />
        </div>
      </div>
    </Stack>
  );
};

const sx = {
  lists: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;
  `,

  grayBox: css`
    background-color: #222;
    width: 50%;
    padding: 60px;
  `,
  button: css`
    display: flex;
    justify-content: flex-end;
  `,
};

type MenuType = {
  models: string[];
  title: string;
};

const Menu = ({ models, title }: MenuType) => {
  return (
    <Stack>
      <Link href="#!">
        <ArrowText text={title} />
      </Link>
      <ul css={sx.lists}>
        {models.map((list, index) => (
          <li key={index}>
            <Typography
              fontWeight="100"
              color={Color.blackBgGrayText2}
              fontSize="18px !important"
            >
              {list}
            </Typography>
          </li>
        ))}
      </ul>
    </Stack>
  );
};
