import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import { techModels } from "../models/techModels";
import { css } from "@emotion/react";

type LaptopImagesType = {
  scrolled: boolean;
};

export const LaptopImages = ({ scrolled }: LaptopImagesType) => {
  return (
    <Stack
      direction="row"
      sx={{ width: "100%" }}
      justifyContent="
      space-between"
    >
      {techModels.map((it, index) => (
        <Stack key={index} css={{ width: "20%" }}>
          <div
            css={sx.imgWrap(it.aspectRatio, it.delay)}
            className={scrolled ? "fade-up" : "fade"}
          >
            <Image src={it.img} alt="img" fill sizes="100" />
          </div>
          <Typography mt="20px" color="#ddd" variant="body2">
            {it.text}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

const sx = {
  imgWrap: (aspectRatio: string, delay: string) => css`
    width: 100%;
    aspect-ratio: ${aspectRatio};
    position: relative;
    &.fade {
     
     opacity: 0;
     transition: 1s all ease;
   }
   &.fade-up {    
     transition: all 0.6s ease;
     animation-name: fadeUp;
     animation-duration: 1s;
     animation-timing-function: ease;
     animation-fill-mode: forwards;
     animation-delay: ${delay};
     opacity: 1;
    
   }
   @keyframes fadeUp{     
     from{
       transform: translateY(150px);      
     }
     to{
         transform:translateY(0);         
     }
   },
    
    
  `,
};
