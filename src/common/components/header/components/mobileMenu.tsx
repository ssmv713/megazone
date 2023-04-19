import { Color } from "@/common/theme/colors";
import { Dialog, List, ListItem, Stack, Typography } from "@mui/material";
import { MobileMenuIcon } from "./MobileMenuIcon";
import { css } from "@emotion/react";

type MobileMenuType = {
  open: boolean;
  onClose: () => void;
};

export const MobileMenu = ({ open, onClose }: MobileMenuType) => {
  return (
    <Dialog css={sx.dialog} open={open} onClose={onClose} fullScreen>
      <Stack direction="row" css={sx.IconWrap}>
        <MobileMenuIcon onClick={onClose} scrolled={false} />
      </Stack>
      <List>
        <ListItem>
          <Typography color={Color.WhiteText}>홈으로</Typography>
        </ListItem>
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
