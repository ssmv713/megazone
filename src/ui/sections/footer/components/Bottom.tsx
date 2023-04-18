import { Color } from "@/common/theme/colors";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { InfoModels, InfoModels2 } from "../models/InfoModels";
import { SelectBox } from "./SelectBox";

export const Bottom = () => {
  return (
    <Stack direction="row" mt="100px" justifyContent="space-between">
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
          {InfoModels.map((info, index) => (
            <Typography
              key={index}
              color={Color.blackBgGrayText3}
              fontSize="15px !important"
            >
              {info}
            </Typography>
          ))}
        </Stack>
        <Stack direction="row" mt="4px">
          {InfoModels2.map((info, index) => (
            <Typography
              key={index}
              color={Color.blackBgGrayText3}
              fontSize="15px !important"
            >
              {info}
            </Typography>
          ))}
        </Stack>
      </div>
      <Stack alignItems="flex-end">
        <SelectBox />
        <Typography
          mt="20px"
          fontSize="13px !important"
          color={Color.blackBgGrayText3}
        >
          {"ⓒ 1998-2022 MEGAZONE.DIGITAL All Rights Reserved"}
        </Typography>
      </Stack>
    </Stack>
  );
};
