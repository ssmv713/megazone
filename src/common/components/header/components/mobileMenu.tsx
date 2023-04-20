import { Color } from "@/common/theme/colors";
import { Dialog, List, ListItem, Stack, Typography } from "@mui/material";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { css } from "@emotion/react";

const MobileMenuModels = [
  "홈으로",
  "기술과 서비스",
  "인사이트",
  "메가존.디지털",
];

type MobileMenuType = {
  open: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ open, onClose }: MobileMenuType) => {
  return (
    <Dialog css={sx.dialog} open={open} onClose={onClose} fullScreen>
      <Stack direction="row" css={sx.IconWrap}>
        <MobileMenuIcon onClick={onClose} scrolled={false} open={open} />
      </Stack>
      <List>
        {MobileMenuModels.map((menu, index) => (
          <ListItem key={index} sx={{ marginTop: "20px" }}>
            <Typography color={Color.WhiteText} variant="h3">
              {menu}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
};

const sx = {
  dialog: css`
    .MuiPaper-root {
      background: #222;
      padding: 0 18px;
    }
  `,
  IconWrap: css`
    height: 104px;
    align-items: center;
    justify-content: flex-end;
  `,
};
