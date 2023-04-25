import { css } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import ArrowUp from "@/assets/icons/arrow_up.png";
import Image from "next/image";
import { useState } from "react";
import { familysiteModels } from "../models/familysiteModels";
import Link from "next/link";
import { Color } from "@/common/theme/colors";

export const MobileSelectBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div css={sx.selectBox(isOpen)}>
      <Stack
        direction="row"
        onClick={handleToggle}
        justifyContent="space-between"
        css={sx.familysite}
      >
        <Typography
          color={isOpen ? Color.WhiteText : "#999"}
          fontSize="16px !important"
        >
          {"FAMILY SITE"}
        </Typography>
        <Image
          src={ArrowUp}
          css={sx.arrow(isOpen)}
          alt="arrow"
          width={20}
          height={20}
        />
      </Stack>
      {isOpen && (
        <ul css={sx.nav}>
          {familysiteModels.map((menu, index) => (
            <li key={index} onClick={handleToggle}>
              <Link href="#!">
                <Typography
                  fontWeight="200"
                  fontSize="15px !important"
                  color={Color.WhiteText}
                >
                  {menu}
                </Typography>{" "}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const sx = {
  selectBox: (isOpen: boolean) => css`
    width: 100%;

    position: relative;
    /* border: solid 1px #333; */
    background: ${isOpen ? "#333" : ""};
  `,
  familysite: css`
    border: solid 1px #333;
    width: 100%;
    padding: 16px 20px;
  `,
  arrow: (isOpen: boolean) => css`
    transform: ${isOpen ? "" : " scaleY(-1)"};
    transition: all 0.6s;
  `,
  nav: css`
    position: absolute;
    bottom: -304px;
    left: 0;
    background: #333;
    width: 100%;
    & a {
      padding: 14px 0;
      display: block;
    }

    & li {
      padding: 0 20px;
      font-size: 0;
      &:first-child a {
        border-top: solid 1px #666;
      }
    }
  `,
};
