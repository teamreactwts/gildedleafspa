/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { iconList, sliderList } from "@/json/mock/iconList.mock";
import {
  CommonSlider,
  DifferentInnerWrapper,
  DifferentWrapper,
  IconCardStack,
  ServiceCardDifferentWrap,
  ServiceWrapper
} from "@/styles/StyledComponents/DifferentWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CommonHeader from "../CommonHeader/CommonHeader";

export const ServiceCardDifferent = ({
  icon,
  title
}: {
  icon: string;
  title: string;
}) => {
  return (
    <ServiceCardDifferentWrap>
      <Box className="service_card_icon">
        <Box className="wrapper_otr">
          <Box className="wrapper">
            <Image src={icon} alt="icon" width={66} height={66} />
          </Box>
        </Box>
      </Box>
      <Typography variant="h4">
        <Link href="#url">{title}</Link>
      </Typography>
    </ServiceCardDifferentWrap>
  );
};

interface props {
  showInterestSec?: boolean;
}

const DifferentSec: React.FC<props & HTMLAttributes<HTMLDivElement>> = ({
  showInterestSec = true,
  ...props
}) => {
  const forNoInterestSection = showInterestSec;

  const settings = {
    dots: true,
    arrows: false,
    navigator: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: false
        }
      }
    ]
  };
  return (
    <DifferentWrapper {...props}>
      <Image
        src={assest?.diff_blur}
        alt="vector image"
        width={450}
        height={450}
        className="crcl_vector"
      />
      <Container fixed>
        <DifferentInnerWrapper forNoInterestSection={forNoInterestSection}>
          <CommonHeader
            title="What makes"
            breakTitle="us different?"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum nulla sed nisi gravida maximus."
          />
          <IconCardStack direction="row" flexWrap="wrap">
            {iconList?.map((item, index) => (
              <Box className="each_icon_card" key={index}>
                <Typography component="i">
                  <Image src={item?.icon} alt="icon" width={66} height={66} />
                </Typography>
                <Typography variant="h4">
                  <Link href="#url">{item?.title}</Link>
                </Typography>
              </Box>
            ))}
          </IconCardStack>
        </DifferentInnerWrapper>

        {showInterestSec && (
          <ServiceWrapper>
            <Stack
              direction="row"
              justifyContent="space-between"
              flexWrap="wrap"
              alignItems="center"
              sx={{ marginBottom: { md: "50px", xs: "25px" } }}
            >
              <Box className="title_left">
                <Typography variant="h2">
                  Which service are{" "}
                  <Typography variant="caption">you interested in?</Typography>
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  rutrum nulla sed nisi gravida maximus.
                </Typography>
              </Box>
              <CustomButtonPrimary variant="contained" color="primary">
                <Typography variant="caption">Explore</Typography>
              </CustomButtonPrimary>
            </Stack>
            <CommonSlider>
              <Slider {...settings}>
                {sliderList?.map((data, index) => (
                  <ServiceCardDifferent {...data} key={index} />
                ))}
              </Slider>
            </CommonSlider>
          </ServiceWrapper>
        )}
      </Container>
    </DifferentWrapper>
  );
};

export default DifferentSec;
