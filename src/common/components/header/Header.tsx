import { useCustomMediaQuery } from "@/common/theme/screen";
import { MobileHeader } from "./MobileHeader";
import { PcHeader } from "./Pcheader";

export const Header = () => {
  const { isLarge } = useCustomMediaQuery();
  return isLarge ? <MobileHeader /> : <PcHeader />;
};
