import { TypographyOptions } from "@mui/material/styles/createTypography";

export const baseTypographyOptions: TypographyOptions = {
  fontFamily: "Pretendard-Regular",

  allVariants: {
    whiteSpace: "pre-wrap",
  },
  h1: {
    fontSize: "56px", //160
    fontWeight: 700,
    "@media (max-width:1024px)": {
      fontSize: "28px !important",
    },
  },
  h2: {
    fontSize: "46px", //100
    fontWeight: "400",
  },
  h3: {
    fontSize: "36px",
  },
  h4: {
    fontSize: "28px", //60
    fontWeight: "400",
  },
  h5: {
    fontSize: "24px",
  },
  h6: {
    fontSize: "28px",
  },
  subtitle1: { fontSize: "24px" },
  body1: {
    fontSize: "20px", //60
    fontWeight: "400",
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