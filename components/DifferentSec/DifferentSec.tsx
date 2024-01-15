/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";
import React, { HTMLAttributes } from "react";

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
      </Container>
    </DifferentWrapper>
  );
});

export default DifferentSec;
