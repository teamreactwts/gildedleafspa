/* eslint-disable react/no-array-index-key */
import { mediaUrl } from "@/api/endpoints";
import { GetAboutData, GetServiceList } from "@/api/functions/cms.api";
import {
  Doc,
  IAboutDetails,
  IhomeDetails
} from "@/interface/apiresp.interfaces";
import assest from "@/json/assest";
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
import { useRouter } from "next/router";
import React, { HTMLAttributes } from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CommonHeader from "../CommonHeader/CommonHeader";

export const ServiceCardDifferent = ({
  icon,
  title,
  short_title,
  _id
}: {
  icon?: string;
  title?: string;
  _id?: string;
  short_title?: string;
}) => {
  const router = useRouter();
  return (
    <ServiceCardDifferentWrap className="serviceSectionmain">
      <Box className="service_card_icon">
        <Box className="wrapper_otr">
          <Box
            className="wrapper"
            onClick={() => router.push(`/service-details/${_id}`)}
          >
            {/* <Image src={icon} alt="icon" width={66} height={66} /> */}
            <Image
              src={mediaUrl(`service/${icon}`)}
              alt="icon"
              width={66}
              height={66}
            />
          </Box>
        </Box>
      </Box>
      <Typography
        variant="h4"
        onClick={() => router.push(`/service-details/${_id}`)}
      >
        {short_title}
      </Typography>
    </ServiceCardDifferentWrap>
  );
};

interface props {
  showInterestSec?: boolean;
  aboutData?: IAboutDetails;
  homeData?: IhomeDetails;
}

const DifferentSec: React.FC<props & HTMLAttributes<HTMLDivElement>> = ({
  showInterestSec = true,
  ...props
}) => {
  const forNoInterestSection = showInterestSec;

  const settings = {
    dots: false,
    arrows: true,
    navigator: false,
    infinite: true,
    speed: 500,

    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2
          // initialSlide: 1
        }
      }
      // {
      //   breakpoint: 899,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      // {
      //   breakpoint: 599,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,

      //     dots: false
      //   }
      // }
    ]
  };
  const settings1 = {
    dots: false,
    arrows: true,
    navigator: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2
        }
      }
      // {
      //   breakpoint: 899,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      // {
      //   breakpoint: 599,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // }
    ]
  };

  const { data: aboutData } = useQuery("aboutDetails", GetAboutData, {
    refetchOnWindowFocus: false
  });

  const [page, setPage] = React.useState(0);
  const [per_page, setPageLimit] = React.useState(0);

  const { data: serviceList } = useQuery(
    ["serviceList", page],

    {
      queryFn: () => GetServiceList({ page, per_page }),
      refetchOnWindowFocus: false
    }
  );

  console.log(serviceList, "serviceList");
  const router = useRouter();

  console.log(serviceList?.data?.data, "service_data");
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
            title={aboutData?.data?.data?.make_us_different_title}
            breakTitle={aboutData?.data?.data?.make_us_different_bold_title}
            subTitle={
              aboutData?.data?.data?.make_us_different_short_description
            }
          />
          <Box sx={{ display: { lg: "block", xs: "none" } }}>
            <IconCardStack direction="row" flexWrap="wrap">
              <Box className="each_icon_card">
                <Typography component="i">
                  <Image
                    src={mediaUrl(
                      `about/${aboutData?.data?.data?.make_us_different_image_1}`
                    )}
                    alt="icon"
                    width={66}
                    height={66}
                  />
                </Typography>
                <Typography variant="h4">
                  <Link href="#url">
                    {aboutData?.data?.data?.make_us_different_title_1}
                  </Link>
                </Typography>
              </Box>
              <Box className="each_icon_card">
                <Typography component="i">
                  <Image
                    src={mediaUrl(
                      `about/${aboutData?.data?.data?.make_us_different_image_2}`
                    )}
                    alt="icon"
                    width={66}
                    height={66}
                  />
                </Typography>
                <Typography variant="h4">
                  <Link href="#url">
                    {aboutData?.data?.data?.make_us_different_title_2}
                  </Link>
                </Typography>
              </Box>
              <Box className="each_icon_card">
                <Typography component="i">
                  <Image
                    src={mediaUrl(
                      `about/${aboutData?.data?.data?.make_us_different_image_3}`
                    )}
                    alt="icon"
                    width={66}
                    height={66}
                  />
                </Typography>
                <Typography variant="h4">
                  <Link href="#url">
                    {aboutData?.data?.data?.make_us_different_title_3}
                  </Link>
                </Typography>
              </Box>
              <Box className="each_icon_card">
                <Typography component="i">
                  <Image
                    src={mediaUrl(
                      `about/${aboutData?.data?.data?.make_us_different_image_4}`
                    )}
                    alt="icon"
                    width={66}
                    height={66}
                  />
                </Typography>
                <Typography variant="h4">
                  <Link href="#url">
                    {aboutData?.data?.data?.make_us_different_title_4}
                  </Link>
                </Typography>
              </Box>
              <Box className="each_icon_card">
                <Typography component="i">
                  <Image
                    src={mediaUrl(
                      `about/${aboutData?.data?.data?.make_us_different_image_5}`
                    )}
                    alt="icon"
                    width={66}
                    height={66}
                  />
                </Typography>
                <Typography variant="h4">
                  <Link href="#url">
                    {aboutData?.data?.data?.make_us_different_title_5}
                  </Link>
                </Typography>
              </Box>
            </IconCardStack>
          </Box>
          <Box
            className="each_icon_card_slider"
            sx={{ display: { lg: "none", xs: "block" } }}
          >
            <CommonSlider>
              <IconCardStack direction="row" flexWrap="wrap">
                <Slider {...settings1}>
                  <Box className="each_icon_card">
                    <Typography component="i">
                      <Image
                        src={mediaUrl(
                          `about/${aboutData?.data?.data?.make_us_different_image_1}`
                        )}
                        alt="icon"
                        width={66}
                        height={66}
                      />
                    </Typography>
                    <Typography variant="h4">
                      <Link href="#url">
                        {aboutData?.data?.data?.make_us_different_title_1}
                      </Link>
                    </Typography>
                  </Box>
                  <Box className="each_icon_card">
                    <Typography component="i">
                      <Image
                        src={mediaUrl(
                          `about/${aboutData?.data?.data?.make_us_different_image_2}`
                        )}
                        alt="icon"
                        width={66}
                        height={66}
                      />
                    </Typography>
                    <Typography variant="h4">
                      <Link href="#url">
                        {aboutData?.data?.data?.make_us_different_title_2}
                      </Link>
                    </Typography>
                  </Box>
                  <Box className="each_icon_card">
                    <Typography component="i">
                      <Image
                        src={mediaUrl(
                          `about/${aboutData?.data?.data?.make_us_different_image_3}`
                        )}
                        alt="icon"
                        width={66}
                        height={66}
                      />
                    </Typography>
                    <Typography variant="h4">
                      <Link href="#url">
                        {aboutData?.data?.data?.make_us_different_title_3}
                      </Link>
                    </Typography>
                  </Box>
                  <Box className="each_icon_card">
                    <Typography component="i">
                      <Image
                        src={mediaUrl(
                          `about/${aboutData?.data?.data?.make_us_different_image_4}`
                        )}
                        alt="icon"
                        width={66}
                        height={66}
                      />
                    </Typography>
                    <Typography variant="h4">
                      <Link href="#url">
                        {aboutData?.data?.data?.make_us_different_title_4}
                      </Link>
                    </Typography>
                  </Box>
                  <Box className="each_icon_card">
                    <Typography component="i">
                      <Image
                        src={mediaUrl(
                          `about/${aboutData?.data?.data?.make_us_different_image_5}`
                        )}
                        alt="icon"
                        width={66}
                        height={66}
                      />
                    </Typography>
                    <Typography variant="h4">
                      <Link href="#url">
                        {aboutData?.data?.data?.make_us_different_title_5}
                      </Link>
                    </Typography>
                  </Box>
                </Slider>
              </IconCardStack>
            </CommonSlider>
          </Box>
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
                  {props.homeData?.interested_in_title}{" "}
                  <Typography variant="caption">
                    {props.homeData?.interested_in_bold_title}
                  </Typography>
                </Typography>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: props.homeData?.interested_in_description as string
                  }}
                />
              </Box>
              <CustomButtonPrimary
                variant="contained"
                color="primary"
                onClick={() => router.push("/services")}
              >
                <Typography variant="caption">Explore</Typography>
              </CustomButtonPrimary>
            </Stack>
            <CommonSlider>
              {!!serviceList &&
                !!serviceList?.data?.data &&
                serviceList?.data?.data.length > 0 && (
                  <Slider {...settings}>
                    {serviceList?.data?.data.map((data: Doc, index: number) => (
                      <Box className="serviceSectionWrapper">
                        <ServiceCardDifferent {...data} key={index} />
                      </Box>
                    ))}
                  </Slider>
                )}
            </CommonSlider>
          </ServiceWrapper>
        )}
      </Container>
    </DifferentWrapper>
  );
};

export default DifferentSec;
