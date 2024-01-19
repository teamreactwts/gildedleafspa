/* eslint-disable react/no-array-index-key */
import { mediaUrl } from "@/api/endpoints";
import { GetBlogDetails } from "@/api/functions/cms.api";
import BlogCard from "@/components/BlogCard/BlogCard";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Calender from "@/ui/Icons/CalenderIcon";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const BlogDetailsWrapper = styled(Box)`
  padding: 100px 0;
  @media (max-width: 899px) {
    padding: 40px 0;
  }
  position: relative;
  .blog_detailsTopPart {
    h3 {
      font-size: 45px;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 30px;
      @media (max-width: 899px) {
        font-size: 32px;
      }
    }
    .blog_detailsPublisherWrapper {
      margin-bottom: 35px;
      @media (max-width: 899px) {
        margin-bottom: 22px;
      }
      .userSection {
        margin-right: 36px;
        @media (max-width: 599px) {
          margin: 0 0 15px 0;
          width: 100%;
        }
        figure {
          width: 44px;
          height: 44px;
          border-radius: 100%;
          overflow: hidden;
          line-height: 0;
          font-size: 0;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .profile_details {
          margin-left: 13px;
          h4 {
            color: ${primaryColors.color021526};
            font-family: Noto Sans;
            font-size: 15px;
            font-weight: 500;
            line-height: 1;
            margin: 0 8px 0 0;
          }
          p {
            color: ${primaryColors.color958e86};
            font-family: Noto Sans;
            font-size: 15px;
            font-weight: 400;
            line-height: 1.3;
          }
        }
      }
      .dateSection {
        i {
          display: inline-block;
          line-height: 0;
          font-size: 0;
          margin-right: 8px;
        }
        p {
          color: ${primaryColors.colorA67033};
          font-size: 16px;
          font-weight: 500;
          line-height: 1;
        }
      }
    }
    .blog_detailsImgWrap {
      line-height: 0;
      font-size: 0;
      width: 100%;
      height: 539px;
      border-radius: 20px;
      overflow: hidden;
      @media (max-width: 899px) {
        height: 340px;
      }
      @media (max-width: 599px) {
        height: 240px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .blog_detailsText {
      margin: 55px 0 80px 0;
      @media (max-width: 899px) {
        margin: 40px 0 50px 0;
      }
      @media (max-width: 599px) {
        margin: 35px 0 40px 0;
      }
      p {
        color: ${primaryColors.textPrimaryColor};
        font-family: Noto Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  .blog_detailsBottomPart {
    .relatedBlog_topPart {
      margin-bottom: 37px;
      @media (max-width: 899px) {
        margin-bottom: 25px;
      }
      h3 {
        font-size: 45px;
        font-weight: 700;
        line-height: 1;
        margin: 0;
        @media (max-width: 899px) {
          font-size: 32px;
        }
      }
      button {
        min-width: 147px;
      }
    }
    .blog_section_slider {
      .slick-slider {
        .slick-slide {
          padding: 0 13px;
        }
        .slick-list {
          margin: 0 -13px;
          @media (max-width: 899px) {
            padding-left: 0 !important;
          }
        }
        .slick-arrow {
          width: 30px;
          height: 30px;
          background-color: ${primaryColors.colorA67033};
          border-radius: 100%;
          &:hover {
            opacity: 0.5;
          }
          &::before {
            display: none;
          }
          &.slick-prev {
            left: -45px;
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: url(${assest.leftArrow}) no-repeat center left;
              width: 6px;
              height: 10px;
              background-size: 100% 100%;
            }
            @media (max-width: 1199px) {
              left: 40%;
              transform: translateX(-40%);
              bottom: -40px;
              right: auto;
              top: auto;
            }
          }
          &.slick-next {
            right: -45px;
            &::after {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              background: url(${assest.rightArrow}) no-repeat center left;
              width: 6px;
              height: 10px;
              background-size: 100% 100%;
            }
            @media (max-width: 1199px) {
              left: 60%;
              transform: translateX(-60%);
              bottom: -40px;
              right: auto;
              top: auto;
            }
          }
        }
      }
    }
  }
`;
const settings = {
  dots: false,
  arrows: true,
  navigator: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
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
        arrows: false,
        autoPlay: true,

        autoplaySpeed: 1500
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
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500
      }
    }
  ]
};

function BlogDetails() {
  const router = useRouter();

  const { isLoading, data } = useQuery(
    ["blogDetails", router.query.id],

    {
      queryFn: () => GetBlogDetails({ _id: router.query.id as string }),
      refetchOnWindowFocus: false
    }
  );
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BlogDetailsWrapper>
          <Container fixed>
            <Box className="blog_detailsTopPart">
              <Typography variant="h3">{data?.data?.data?.title}</Typography>
              <Stack
                direction="row"
                alignItems="center"
                className="blog_detailsPublisherWrapper"
                flexWrap="wrap"
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  className="userSection"
                >
                  <figure>
                    <Image
                      src={mediaUrl(
                        `blog/${data?.data?.data?.author_image}
                    }`
                      )}
                      alt="profileImage"
                      width={44}
                      height={44}
                    />
                  </figure>
                  <Stack
                    direction="row"
                    alignItems="center"
                    className="profile_details"
                  >
                    <Typography variant="h4">
                      {data?.data?.data?.author_name},
                    </Typography>
                    <Typography variant="body1">
                      {data?.data?.data?.author_type}
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  className="dateSection"
                  direction="row"
                  alignItems="center"
                >
                  <i>
                    <Calender />
                  </i>
                  <Typography variant="body1">
                    Published on{" "}
                    {moment(data?.data?.data?.published_date).format(
                      "MMM DD, YYYY"
                    )}
                  </Typography>
                </Stack>
              </Stack>
              <figure className="blog_detailsImgWrap">
                <Image
                  src={mediaUrl(
                    `blog/${data?.data?.data?.image}
                }`
                  )}
                  alt="blog_detailsImg"
                  width={1135}
                  height={539}
                />
              </figure>
              <Box className="blog_detailsText">
                <Typography variant="body1">
                  {data?.data?.data?.description}
                </Typography>
              </Box>
            </Box>
            <Box className="blog_detailsBottomPart">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                className="relatedBlog_topPart"
                flexWrap="wrap"
              >
                <Typography variant="h3">Related Blogs</Typography>
                <CustomButtonPrimary
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/blogs")}
                >
                  <Typography variant="caption">View All</Typography>
                </CustomButtonPrimary>
              </Stack>
              <Box className="blog_section_slider">
                <Slider {...settings}>
                  {/* {cardList1?.map((data, index) => (
                    <Box className="blog_siderCard" key={index}>
                      <BlogCard
                        blogimg={data.blogimg}
                        datevalue={data.date}
                        cardtitevalue={data.cardtitle}
                        blogDescription={data.description}
                      />
                    </Box>
                  ))} */}

                  {!!data?.data?.data &&
                    !!data?.data?.data.related_blogs &&
                    data?.data?.data.related_blogs.length > 0 &&
                    data?.data?.data.related_blogs.map((data, index) => (
                      <Box className="blog_siderCard" key={index}>
                        <BlogCard
                          blogimg={mediaUrl(`blog/${data?.image}`)}
                          datevalue={moment(data.published_date).format(
                            "DD.MM.YYYY"
                          )}
                          cardtitevalue={data?.title}
                          blogDescription={data?.description}
                          item={data}
                        />
                      </Box>
                    ))}
                </Slider>
              </Box>
            </Box>
          </Container>
        </BlogDetailsWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default BlogDetails;
