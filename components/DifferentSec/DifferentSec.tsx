/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
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

export const DifferentWrapper = styled(Box)`
  border-top: 1px solid ${primaryColors?.coloreee3d3};
  position: relative;
  z-index: 1;
  overflow: hidden;
  .crcl_vector {
    position: absolute;
    left: -100px;
    top: 100px;
    pointer-events: none;
    z-index: -1;
  }
`;

export const CommonHeaderWrapper = styled(Box)`
  text-align: center;
  margin-bottom: 50px;
  h2 {
    margin-bottom: 15px;
    span {
      font-weight: 700;
      font-style: normal;
      font-size: inherit;
      color: inherit;
      font-family: inherit;
      line-height: inherit;
    }
  }
`;

export const IconCardStack = styled(Stack)`
  margin: -10px -15px;
  padding-bottom: 100px;
  .each_icon_card {
    width: 20%;
    padding: 10px 15px;
    text-align: center;
    i {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 66px;
    }
    h4 {
      color: ${primaryColors?.color021526};
      font-family: "Noto Sans";
      font-size: 15px;
      font-weight: 500;
      line-height: 20px;
      max-width: 155px;
      margin: 0 auto;
      a {
        color: inherit;
        &:hover {
          color: ${primaryColors?.primary1};
        }
      }
    }
  }
`;

export const ServiceWrapper = styled(Box)`
  padding: 25px 30px 57px;
  border-radius: 20px;
  background: linear-gradient(
    120deg,
    rgba(253, 252, 248, 0.74) 3.57%,
    rgba(253, 252, 248, 0.29) 96.74%
  );
  backdrop-filter: blur(2px);
  .title_left {
    h2 {
      span {
        font-weight: 700;
        font-style: normal;
        font-size: inherit;
        color: inherit;
        font-family: inherit;
        line-height: inherit;
      }
    }
  }
`;

export const CommonSlider = styled(Box)`
  .slick-slide {
    padding: 0 14px;
  }
  .slick-list {
    margin: 0 -14px;
  }
  .slick-slider {
    padding-bottom: 50px;
  }
  .slick-dots {
    display: inline-flex !important;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 14px 25px;
    border-radius: 20px;
    background: #161d29;
    border-radius: 50px;
    width: auto;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    li {
      width: 7px;
      height: 7px;
      transition: all 0.5s ease;

      button {
        padding: 0;
        width: 7px;
        height: 7px;
        background: ${primaryColors?.white};
        opacity: 0.3;
        border-radius: 50px;
        &::before {
          display: none;
        }
      }
      &.slick-active {
        width: 21px;
        button {
          width: 21px;
          opacity: 1;
        }
      }
    }
  }
`;

export const ServiceCardWrap = styled(Box)`
  text-align: center;
  .service_card_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #e4ddd3;
    background: linear-gradient(
      139deg,
      #f3f1e6 6.74%,
      rgba(243, 241, 230, 0.48) 96.06%
    );
    backdrop-filter: blur(32px);
    min-height: 190px;
    padding: 10px 10px;
  }
  > h4 {
    color: ${primaryColors?.color021526};
    font-family: "Noto Sans";
    font-size: 15px;
    font-weight: 500;
    margin-top: 25px;
    a {
      color: inherit;
      &:hover {
        ${primaryColors?.primary1}
      }
    }
  }
`;

export const ServiceCard = ({
  icon,
  title
}: {
  icon: string;
  title: string;
}) => {
  return (
    <ServiceCardWrap>
      <Box className="service_card_icon">
        <Image src={icon} alt="icon" width={66} height={66} />
      </Box>
      <Typography variant="h4">
        <Link href="#url">{title}</Link>
      </Typography>
    </ServiceCardWrap>
  );
};

export const CommonHeader = ({
  title,
  breakTitle,
  subTitle
}: {
  title: string;
  breakTitle?: string;
  subTitle?: string;
}) => {
  return (
    <CommonHeaderWrapper className="heading_title">
      <Typography variant="h2">
        {title} <Typography variant="caption">{breakTitle}</Typography>
      </Typography>
      <Typography>{subTitle}</Typography>
    </CommonHeaderWrapper>
  );
};

interface props extends HTMLAttributes<HTMLDivElement> {}

const DifferentSec = React.forwardRef<HTMLDivElement, props>(({ ...props }) => {
  type iconListType = {
    icon: string;
    title: string;
  };

  const iconList: iconListType[] = [
    {
      icon: assest?.diffIcon1,
      title: "Scientifically proven treatment only"
    },
    {
      icon: assest?.diffIcon2,
      title: "We treat all skin types!"
    },
    {
      icon: assest?.diffIcon3,
      title: "Easy Booking and purchasing"
    },
    {
      icon: assest?.diffIcon4,
      title: "Remarkable membership savings"
    },
    {
      icon: assest?.diffIcon5,
      title: "Transparent pricing"
    }
  ];

  const sliderList: iconListType[] = [
    {
      icon: assest?.diffIcon6,
      title: "Botox"
    },
    {
      icon: assest?.diffIcon7,
      title: "Hydra facial"
    },
    {
      icon: assest?.diffIcon8,
      title: "Laser hair removal"
    },
    {
      icon: assest?.diffIcon9,
      title: "Micro needling"
    },
    {
      icon: assest?.diffIcon10,
      title: "Dermal fillers"
    },
    {
      icon: assest?.diffIcon6,
      title: "Botox"
    },
    {
      icon: assest?.diffIcon7,
      title: "Hydra facial"
    },
    {
      icon: assest?.diffIcon8,
      title: "Laser hair removal"
    },
    {
      icon: assest?.diffIcon9,
      title: "Micro needling"
    },
    {
      icon: assest?.diffIcon10,
      title: "Dermal fillers"
    }
  ];

  const settings = {
    dots: true,
    arrows: false,
    navigator: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
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
                <ServiceCard {...data} key={index} />
              ))}
            </Slider>
          </CommonSlider>
        </ServiceWrapper>
      </Container>
    </DifferentWrapper>
  );
});

export default DifferentSec;
