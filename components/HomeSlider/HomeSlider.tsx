/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable no-plusplus */

import { bannerclinial } from "@/json/mock/homeslider.mock";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import Slider from "react-slick";
import { CommonSlider } from "../DifferentSec/DifferentSec";

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
          figure {
            width: 100%;
            height: 367px;
            font-size: 0;
            line-height: 0;
            border-radius: 20px;
            overflow: hidden;
            position: relative;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .slider_text {
              position: absolute;
              width: 100%;
              bottom: 0;
              left: 0;
              text-align: center;
              padding: 38px 20px;
              h3 {
                color: ${primaryColors.white};
                font-family: Noto Sans;
                font-size: 54px;
                font-weight: 900;
                line-height: 1.5;
                opacity: 0.1;
              }
              p {
                color: ${primaryColors.white};
                font-family: Noto Sans;
                font-size: 18px;
                font-weight: 900;
                line-height: 1;
                margin-top: -50px;
                text-align: left;
                padding: 0 15px;
              }
            }
          }
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
              <Box className="slider_card">
                <figure>
                  <Image
                    src={data.image}
                    alt="image"
                    width={292}
                    height={369}
                  />
                  <Box className="slider_text">
                    <Typography variant="h3">{data.title}</Typography>
                    <Typography variant="body1">{data.description}</Typography>
                  </Box>
                </figure>
              </Box>
            ))}
          </Slider>
        </CommonSlider>
      </Box>
    </HomeSliderWrapper>
  );
}

export default HomeSlider;
