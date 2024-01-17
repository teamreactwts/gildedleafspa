import { BannerWrap } from "@/styles/StyledComponents/BannerWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";

export default function BannerSec({
  bannerImage,
  children
}: {
  children: React.ReactNode;
  bannerImage: string;
}) {
  return (
    <BannerWrap>
      <Container fixed>
        <Grid container alignItems="center" spacing={{ lg: 5, md: 3, xs: 2 }}>
          <Grid item md={7} xs={12}>
            <Box className="banner_wrap">
              {children}
              <CustomButtonPrimary variant="contained" color="primary">
                <Typography variant="caption">
                  Click here to learn more
                </Typography>
              </CustomButtonPrimary>
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box className="banner_fig">
              
              <figure>
                <Image
                  src={bannerImage}
                  alt="banner image"
                  width={480}
                  height={550}
                />
              </figure>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BannerWrap>
  );
}
