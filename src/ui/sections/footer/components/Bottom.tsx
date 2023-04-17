import { Color } from "@/common/theme/colors";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const Bottom = () => {
  return (
    <Stack direction="row">
      <div>
        <Typography
          color={Color.blackBgGrayText1}
          fontSize="15px !important"
          mb="
        17px"
        >
          {"회사소개서 다운로드"}
        </Typography>
        <Stack direction="row">
          <Typography>{" 메가존(주)     대표이사 : 장지황  "}</Typography>
        </Stack>
      </div>
    </Stack>
  );
};
