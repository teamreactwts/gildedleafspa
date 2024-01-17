/* eslint-disable react/no-array-index-key */
import BlogCard from "@/components/BlogCard/BlogCard";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import assest from "@/json/assest";
import { cardList1 } from "@/json/mock/homeslider.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Calender from "@/ui/Icons/CalenderIcon";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const BlogDetailsWrapper = styled(Box)`
  padding: 100px 0;
  position: relative;
  .blog_detailsTopPart {
    h3 {
      font-size: 45px;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 30px;
    }
    .blog_detailsPublisherWrapper {
      margin-bottom: 35px;
      .userSection {
        margin-right: 36px;
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

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .blog_detailsText {
      margin: 55px 0 80px 0;
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
      h3 {
        font-size: 45px;
        font-weight: 700;
        line-height: 1;
        margin: 0;
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

function BlogDetails() {
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BlogDetailsWrapper>
          <Container fixed>
            <Box className="blog_detailsTopPart">
              <Typography variant="h3">
                Lorem ipsum dolor sit amet consectetur. Pharetra tincidunt
                pulvinar faucibus lacus donec ipsum eget...
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                className="blog_detailsPublisherWrapper"
              >
                <Stack
                  alignItems="center"
                  direction="row"
                  className="userSection"
                >
                  <figure>
                    <Image
                      src={assest.profileIcon}
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
                    <Typography variant="h4">Abram George,</Typography>
                    <Typography variant="body1">Manager</Typography>
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
                    Published on January 15, 2024
                  </Typography>
                </Stack>
              </Stack>
              <figure className="blog_detailsImgWrap">
                <Image
                  src={assest.blogDetailsImg}
                  alt="blog_detailsImg"
                  width={1135}
                  height={539}
                />
              </figure>
              <Box className="blog_detailsText">
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Arcu id arcu varius
                  lacus eleifend cursus facilisis. A porttitor proin sed euismod
                  mauris nec felis varius adipiscing. Consectetur enim interdum
                  faucibus malesuada nunc a. Nisl sed ac aliquam dictum enim sed
                  amet vulputate eu. Egestas cursus hendrerit odio duis. Sed
                  ornare viverra eget pellentesque pellentesque pellentesque.
                  Egestas varius massa amet dolor eros. Eget pulvinar nibh purus
                  tellus ultricies ultrices enim turpis. Tempor adipiscing
                  aliquet duis leo ut morbi odio eleifend accumsan. Laoreet
                  faucibus sem nam ut diam urna. Eu purus vitae vitae cursus.
                </Typography>
                <Typography variant="body1">
                  Viverra mauris auctor at a. Tincidunt ut lectus vitae vitae
                  amet eros aliquam. Ut accumsan viverra pharetra eu tristique
                  vitae neque. Molestie molestie euismod laoreet egestas.
                  Ultrices in convallis pellentesque diam.
                </Typography>
                <Typography variant="body1">
                  Enim lectus urna maecenas morbi feugiat laoreet quis
                  suspendisse. Arcu nisi nulla enim magna. Lectus dui ipsum
                  netus sem lectus commodo. Velit et proin pellentesque augue.
                  Velit tristique ipsum pellentesque enim eu. Ut diam adipiscing
                  quam diam nisl morbi faucibus consectetur lacus. Lorem
                  consequat varius leo ut scelerisque nisi proin nibh pharetra.
                  Tortor sagittis non malesuada ut duis laoreet gravida amet
                  nisl. Ut eros lobortis nunc eget vestibulum senectus risus.
                  Sem ullamcorper sodales et risus.
                </Typography>
                <Typography variant="body1">
                  Tempor faucibus sit ante convallis. Adipiscing gravida sed
                  arcu sagittis enim. Sit nunc urna blandit sed eu sit mauris.
                  Feugiat id purus risus elementum sit phasellus duis nibh
                  morbi. Lobortis lectus nec quam orci pellentesque. Non eget
                  tellus vulputate odio. Sed lectus id eget non ligula a
                  bibendum.
                </Typography>
                <Typography variant="body1">
                  Et eget non at mattis id tristique in. Sem nisl sagittis
                  commodo vulputate risus magna pretium. Ut et euismod dui
                  posuere enim est id tellus. Et pharetra imperdiet amet magna
                  proin sed vulputate. Augue egestas ipsum urna commodo. Neque
                  ornare phasellus sapien sollicitudin lectus porta faucibus
                  bibendum sed. Bibendum hac adipiscing lectus consectetur nisi
                  suscipit. Eget molestie vestibulum nunc arcu mus pellentesque
                  fermentum euismod. Senectus etiam volutpat gravida nisl
                  blandit ac interdum purus varius. Blandit urna semper diam
                  feugiat. Turpis placerat ipsum nulla rutrum consectetur sed
                  ullamcorper. Erat malesuada sit mauris nullam scelerisque. Sit
                  donec nullam commodo nibh sed donec suspendisse. A cras vitae
                  elementum sed nulla sodales sed quisque turpis. Id dui commodo
                  volutpat eget hendrerit.
                </Typography>
              </Box>
            </Box>
            <Box className="blog_detailsBottomPart">
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                className="relatedBlog_topPart"
              >
                <Typography variant="h3">Related Blogs</Typography>
                <CustomButtonPrimary variant="contained" color="primary">
                  <Typography variant="caption">View All</Typography>
                </CustomButtonPrimary>
              </Stack>
              <Box className="blog_section_slider">
                <Slider {...settings}>
                  {cardList1?.map((data, index) => (
                    <Box className="blog_siderCard" key={index}>
                      <BlogCard
                        blogimg={data.blogimg}
                        datevalue={data.date}
                        cardtitevalue={data.cardtitle}
                        blogDescription={data.description}
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
