/* eslint-disable react/no-array-index-key */
import { mediaUrl } from "@/api/endpoints";
import { GetConditionCmsData, GetConditionList } from "@/api/functions/cms.api";
import { ConditionDoc } from "@/interface/apiresp.interfaces";
import Wrapper from "@/layout/wrapper/Wrapper";
import { ConditionWrap } from "@/styles/StyledComponents/ConditionWrap";
import { CommonSlider } from "@/styles/StyledComponents/DifferentWrapper";
import Loader from "@/ui/Loader/Loder";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const BreadcumbTitle = dynamic(
  () => import("@/components/BreadcumbTitle/BreadcumbTitle"),
  { ssr: true }
);
const InnnerPageWrapper = dynamic(
  () => import("@/components/InnnerPageWrapper/InnnerPageWrapper"),
  { ssr: true }
);
const ImageCard = dynamic(() => import("@/components/ImageCard/ImageCard"), {
  ssr: false
});

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

  const [page, setPage] = React.useState(0);
  const [per_page, setPageLimit] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const [conditionList, setConditionList] = useState<ConditionDoc[]>();

  const { isLoading } = useQuery(
    ["conditionList", page],

    {
      queryFn: () => GetConditionList({ page, per_page }),
      refetchOnWindowFocus: false,
      onSuccess(data) {
        if (data.status === 200) {
          setTotalPage(data?.data?.data?.total);
          if (!!windowWidth && windowWidth <= 899) {
            setConditionList(data?.data?.data);
          } else {
            !!conditionList && conditionList?.length > 0
              ? page == 1
                ? setConditionList(data?.data?.data)
                : setConditionList([...conditionList, ...data?.data?.data])
              : setConditionList(data?.data?.data);
          }
        }
      }
    }
  );
  const handleViewMore = () => {
    setPage(page + 1);
  };

  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth as any);
    };

    if (typeof window !== "undefined") {
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (!!windowWidth && windowWidth <= 899) {
      setPage(0);
      setTotalPage(0);
    } else {
      setPage(1);
    }
  }, [windowWidth]);

  const { data } = useQuery(
    ["conditionCms"],

    {
      queryFn: () => GetConditionCmsData(),
      refetchOnWindowFocus: false
    }
  );

  if (isLoading && page == 0) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle
          title={data?.data?.data?.short_title}
          pageName={data?.data?.data?.short_title}
        />
        <ConditionWrap>
          <Container fixed>
            {/* <Box className="titel_text">
              <Typography variant="h2">Title</Typography>
            </Box>
            <Box className="titel_text">
              <Typography>Description</Typography>
            </Box> */}
            <Box className="common_titleWrapper">
              <Typography variant="h2">{data?.data?.data?.title}</Typography>
              <Box className="description_body">
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: data?.data?.data?.content as string
                  }}
                />
              </Box>
            </Box>
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
            {/* {!!conditionList && conditionList.length < totalPage && (
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
            )} */}
          </Container>
        </ConditionWrap>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default Condition;
