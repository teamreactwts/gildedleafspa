import { mediaUrl } from "@/api/endpoints";
import { BannerWrap } from "@/styles/StyledComponents/BannerWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function BannerSec({
  bannerImage,
  children,
  buttonText
}: {
  children: React.ReactNode;
  bannerImage: string;
  buttonText: string;
}) {
  const router = useRouter();
  const settings1 = {
    dots: false,
    arrows: false,
    navigator: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <BannerWrap>
      <Container fixed>
        <Grid container alignItems="center" spacing={{ lg: 5, md: 3, xs: 2 }}>
          <Grid item md={7} xs={12}>
            <Box className="banner_wrap">
              {children}
              <CustomButtonPrimary
                variant="contained"
                color="primary"
                onClick={() => router.push("/membership")}
              >
                <Typography variant="caption">{buttonText}</Typography>
              </CustomButtonPrimary>
            </Box>
          </Grid>
          <Grid item md={5} xs={12}>
            <Box className="banner_slider">
              <Slider {...settings1}>
                <Box className="banner_fig">
                  <Box className="gradient-box" />

                  <figure>
                    <Image
                      src={mediaUrl(`home/${bannerImage}`)}
                      alt="banner image"
                      width={480}
                      height={550}
                    />
                  </figure>
                </Box>
                <Box className="banner_fig">
                  <Box className="gradient-box" />

                  <figure>
                    <Image
                      src={mediaUrl(`home/${bannerImage}`)}
                      alt="banner image"
                      width={480}
                      height={550}
                    />
                  </figure>
                </Box>
                <Box className="banner_fig">
                  <Box className="gradient-box" />

                  <figure>
                    <Image
                      src={mediaUrl(`home/${bannerImage}`)}
                      alt="banner image"
                      width={480}
                      height={550}
                    />
                  </figure>
                </Box>
              </Slider>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BannerWrap>
  );
}
