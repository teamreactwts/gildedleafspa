import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Image from "next/image";
import React, { HTMLAttributes } from "react";

export const CommongridWrapper = styled(Box)`
  .grid_content {
    h2 {
      font-size: 45px;
      font-style: normal;
      font-weight: 700;
      @media (max-width: 599px) {
        font-size: 32px;
      }
    }
    > p {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
  .grid_image {
    figure {
      height: 450px;
      border-radius: 20px;
      overflow: hidden;
      @media (max-width: 599px) {
        height: 283px;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

interface gridProps {
  isReverse?: boolean;
  image: string;
}

const CommonGridSec: React.FC<gridProps & HTMLAttributes<HTMLDivElement>> = ({
  isReverse,
  image,
  ...props
}) => {
  return (
    <Container fixed>
      <CommongridWrapper {...props}>
        <Grid
          container
          spacing={{ lg: 9, md: 5, xs: 2 }}
          flexDirection={isReverse ? "row-reverse" : "row"}
        >
          <Grid item md={6} xs={12}>
            <Box className="grid_image">
              <figure>
                <Image src={image} alt="grid image" width={500} height={500} />
              </figure>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="grid_content">{props?.children}</Box>
          </Grid>
        </Grid>
      </CommongridWrapper>
    </Container>
  );
};

export default CommonGridSec;
