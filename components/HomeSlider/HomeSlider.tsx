/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable no-plusplus */

import { bannerclinial } from "@/json/mock/homeslider.mock";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Slider from "react-slick";

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
function HomeSlider() {
  return (
    <HomeSliderWrapper className="cmn_gap">
      <Container fixed>
        <Box className="sliderHeading_part">
          <Typography variant="h2">
            What are your
            <Typography variant="caption">clinical concerns?</Typography>
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            rutrum nulla sed nisi gravida maximus.
          </Typography>
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
