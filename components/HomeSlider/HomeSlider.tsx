/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable no-plusplus */

import { bannerclinial } from "@/json/mock/homeslider.mock";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { IhomeDetails } from "@/interface/apiresp.interfaces";
import { CommonSlider } from "@/styles/StyledComponents/DifferentWrapper";
import { HomeSliderWrapper } from "@/styles/StyledComponents/HomeSliderWrapper";
import ImageCard from "../ImageCard/ImageCard";

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
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: "30px",
        dots: false,
        arrows: true
      }
    },
    {
      breakpoint: 599,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "30px",
        dots: false,
        arrows: true
      }
    }
  ]
};
interface Iprops {
  homeData?: IhomeDetails;
}
function HomeSlider({ homeData }: Iprops) {
  return (
    <HomeSliderWrapper className="cmn_gap">
      <Container fixed>
        <Box className="sliderHeading_part">
          <Typography variant="h2">
            {homeData?.concerns_title}{" "}
            <Typography variant="caption">
              {" "}
              {homeData?.concerns_bold_title}
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: homeData?.concerns_description as string
            }}
          />
          <CustomButtonPrimary
            variant="contained"
            color="primary"
            className="explore_btn"
          >
            <Typography variant="caption">Explore</Typography>
          </CustomButtonPrimary>
        </Box>
      </Container>
      <Box className="sliderSectionWrap">
        <CommonSlider>
          <Slider {...settings}>
            {bannerclinial?.map((data, index) => (
              <Box className="slider_card" key={index}>
                <ImageCard
                  card_img={data.image}
                  title={data.title}
                  description={data.description}
                />
              </Box>
            ))}
          </Slider>
        </CommonSlider>
      </Box>
    </HomeSliderWrapper>
  );
}

export default HomeSlider;
