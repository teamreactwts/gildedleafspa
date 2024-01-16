/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable no-plusplus */

import { bannerclinial } from "@/json/mock/homeslider.mock";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Slider from "react-slick";
import { CommonSlider } from "../DifferentSec/DifferentSec";
import ImageCard from "../ImageCard/ImageCard";

export const HomeSliderWrapper = styled(Box)`
  .sliderHeading_part {
    display: flex;
    align-items: center;

    h2 {
      color: ${primaryColors.primary};
      font-size: 45px;
      font-style: italic;
      font-weight: 400;
      line-height: 1.5;
      margin: 0 45px 0 0;
      span {
        color: inherit;
        font-size: inherit;
        font-weight: 700;
        line-height: inherit;
        font-style: inherit;
        font-family: inherit;
      }
    }
    p {
      color: ${primaryColors.textPrimaryColor};
      font-family: Noto Sans;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      max-width: 404px;
      margin-right: 16px;
    }
    .explore_btn {
      padding: 18px 20px;
      min-width: 145px;
    }
  }

  .sliderSectionWrap {
    margin-top: 50px;
    padding: 0 10px;
    .slick-slider {
      .slick-list {
        .slider_card {
        }
      }
    }
  }
`;
const settings = {
  dots: true,
  arrows: false,
  navigator: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 5
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
