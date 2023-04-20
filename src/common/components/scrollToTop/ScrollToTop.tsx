import { Color } from "@/common/theme/colors";
import { css } from "@emotion/react";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 60) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {visible && (
        <div css={sx.root} onClick={handleClick}>
          <ArrowUpwardRoundedIcon style={{ color: "#222", fontSize: "30px" }} />
        </div>
      )}
    </>
  );
};

const sx = {
  root: css`
    position: fixed;
    bottom: 25px;
    right: 25px;
    z-index: 55;
    background: #f7f8f9;
    padding: 8px;
    cursor: pointer;
    box-shadow: 0 3px 6px rgb(0 0 0 / 16%), 0 1px 2px rgb(0 0 0 / 23%);
  `,
};
