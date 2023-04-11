import { Color } from "@/common/theme/colors";
import { useCustomMediaQuery } from "@/common/theme/screen";
import { Stack, Typography } from "@mui/material";

export const SwiperSection = () => {
  const { isLarge } = useCustomMediaQuery();
  const title = {
    mainPC: "언제나 사람이 중심이 되는\n차세대 디지털 서비스를 고민합니다.",
    mainTabelt: "언제나 사람이 중심이 되는 차세대 디지털 서비스를 고민합니다.",
  };
  return (
    <Stack>
      <Typography color={Color.BlackText} variant="h1">
        {isLarge ? title.mainTabelt : title.mainPC}
      </Typography>
      <Typography color={Color.SubBlack} ></Typography>
    </Stack>
  );
};
