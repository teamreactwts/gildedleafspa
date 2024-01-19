/* eslint-disable react/no-array-index-key */
import { mediaUrl } from "@/api/endpoints";
import { GetConditionList } from "@/api/functions/cms.api";
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import ImageCard from "@/components/ImageCard/ImageCard";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import { ConditionDoc } from "@/interface/apiresp.interfaces";
import Wrapper from "@/layout/wrapper/Wrapper";
import { ConditionWrap } from "@/styles/StyledComponents/ConditionWrap";
import { CommonSlider } from "@/styles/StyledComponents/DifferentWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Loader from "@/ui/Loader/Loder";
import { Stack } from "@mui/material";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useQuery } from "react-query";
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

  const [page, setPage] = React.useState(1);
  const [per_page, setPageLimit] = React.useState(8);
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const [conditionList, setConditionList] = useState<ConditionDoc[]>();

  const { isLoading } = useQuery(
    ["serviceList", page],

    {
      queryFn: () => GetConditionList({ page, per_page }),
      refetchOnWindowFocus: false,
      onSuccess(data) {
        if (data.status === 200) {
          setTotalPage(data?.data?.data?.total);
          !!conditionList && conditionList?.length > 0
            ? setConditionList([...conditionList, ...data?.data?.data?.docs])
            : setConditionList(data?.data?.data?.docs);
        }
      }
    }
  );
  const handleViewMore = () => {
    setPage(page + 1);
  };
  if (isLoading && page == 1) {
    return <Loader isLoading={isLoading} />;
  }
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
                {!!conditionList &&
                  conditionList.length > 0 &&
                  conditionList.map((data, index) => (
                    <Grid item md={3} sm={6} xs={12} key={index}>
                      <ImageCard
                        card_img={mediaUrl(`condition/${data?.image}`)}
                        title={"Concern"}
                        description={data.title}
                        item={data}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Box>

            <CommonSlider sx={{ display: { md: "none" } }}>
              <Slider {...settings}>
                {!!conditionList &&
                  conditionList.length > 0 &&
                  conditionList.map((data, index) => (
                    <ImageCard
                      card_img={mediaUrl(`condition/${data?.image}`)}
                      title={"Concern"}
                      description={data.title}
                      key={index}
                      item={data}
                    />
                  ))}
              </Slider>
            </CommonSlider>
            {!!conditionList && conditionList.length < totalPage && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="center"
                marginTop={{ md: "50px", xs: "25px" }}
              >
                <Box className="view_btn">
                  <CustomButtonPrimary
                    variant="contained"
                    color="primary"
                    className="member_btn"
                    onClick={() => handleViewMore()}
                  >
                    <Typography variant="caption">View More</Typography>
                  </CustomButtonPrimary>
                </Box>
              </Stack>
            )}
          </Container>
        </ConditionWrap>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default Condition;
