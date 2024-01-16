/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */

/* eslint-disable no-plusplus */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Image from "next/image";

export const HomeSliderWrapper = styled(Box)`
  .sliderSectionWrap {
    .slider_card {
      figure {
        width: 292px;
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
            margin-top: -35px;
          }
        }
      }
    }
  }
`;

function HomeSlider() {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
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
          <CustomButtonPrimary variant="contained" color="primary">
            <Typography variant="caption">Explore</Typography>
          </CustomButtonPrimary>
        </Box>
      </Container>
      <Box className="sliderSectionWrap">
        {/* <Slider {...settings}>
         
        </Slider> */}
        <Box className="slider_card">
          <figure>
            <Image src={assest.slider1} alt="image" width={292} height={369} />
            <Box className="slider_text">
              <Typography variant="h3">Concerns</Typography>
              <Typography variant="body1">Wrinkles and fine lines</Typography>
            </Box>
          </figure>
        </Box>
      </Box>
    </HomeSliderWrapper>
  );
}

export default HomeSlider;
