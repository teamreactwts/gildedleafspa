/* eslint-disable react/no-array-index-key */
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import ImageCard from "@/components/ImageCard/ImageCard";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import { conditionList } from "@/json/mock/homeslider.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import { ConditionWrap } from "@/styles/StyledComponents/ConditionWrap";
import { CommonSlider } from "@/styles/StyledComponents/DifferentWrapper";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function Condition() {
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
          centerPadding: "30px"
          // dots: false,
          // arrows: true
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
  return (
    <Wrapper>
        <InnnerPageWrapper>
      <BreadcumbTitle title="Conditions" pageName="Condition" />
      <ConditionWrap>
        <Container fixed>
          <Box className="titel_text">
            <Typography variant="h2">
              What are your
              <Typography variant="caption"> clinical concerns?</Typography>
            </Typography>
          </Box>
          <Box
            className="condition_imgWrap"
            sx={{ display: { md: "block", xs: "none" } }}
          >
            <Grid container spacing={3.3}>
              {conditionList.map((itme, index) => (
                <Grid item md={3} sm={6} xs={12} key={index}>
                  <ImageCard
                    card_img={itme.image}
                    title={itme.title}
                    description={itme.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <CommonSlider sx={{ display: { md: "none" } }}>
            <Slider {...settings}>
              {conditionList.map((itme, index) => (
                <ImageCard
                  card_img={itme.image}
                  title={itme.title}
                  description={itme.description}
                  key={index}
                />
              ))}
            </Slider>
          </CommonSlider>
        </Container>
      </ConditionWrap>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default Condition;
