import { TypographyOptions } from "@mui/material/styles/createTypography";

export const baseTypographyOptions: TypographyOptions = {
  fontFamily: "pretendard, sans-serif",
  allVariants: {
    whiteSpace: "pre-wrap",
  },
  h1: {
    fontSize: "56px", //160
    fontWeight: 800,
    lineHeight: 1.4,
    "@media (max-width:1024px)": {
      fontSize: "28px !important",
    },
  },
  h2: {
    fontSize: "46px", //100
    fontWeight: "700",
  },
  h3: {
    fontSize: "36px",
  },
  h4: {
    fontSize: "32px", //60
    fontWeight: "400",
  },
  // h5: {
  //   fontSize: "24px",
  // },
  // h6: {
  //   fontSize: "28px",
  // },
  subtitle1: {
    fontSize: "24px",
    "@media (max-width:1024px)": {
      fontSize: "15px !important",
    },
  },
  body1: {
    fontSize: "20px", //60
    fontWeight: "700",
    fontFamily: "Pretendard-Regular",
    "@media (max-width:576px)": {
      fontSize: "18",
    },
  },
  body2: {
    fontSize: "18px", //40
    fontWeight: "400",
  },
};

export const darkTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
  allVariants: {
    whiteSpace: "pre-wrap",
    color: "#fff",
  },
};

export const lightTypographyOptions: TypographyOptions = {
  ...baseTypographyOptions,
  allVariants: {
    whiteSpace: "pre-wrap",
    color: "#222",
  },
};
