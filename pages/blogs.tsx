/* eslint-disable jsx-a11y/anchor-is-valid */
import BlogCard from "@/components/BlogCard/BlogCard";
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import CommonPagination from "@/components/CommonPagination/CommonPagination";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import assest from "@/json/assest";
import { cardList1 } from "@/json/mock/homeslider.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import ArrowIcon from "@/ui/Icons/ArrowIcon";
import Calender from "@/ui/Icons/CalenderIcon";
import styled from "@emotion/styled";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

export const BlogsWrapper = styled(Box)`
  padding: 50px 0 100px 0;
  .blogSectionTopWrapper {
    padding-bottom: 80px;
    .blogSecitoWrap {
      .blogMain_img {
        line-height: 0;
        font-size: 0;
        width: 585px;
        flex-basis: 585px;
        height: 410px;
        border-radius: 20px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .blog_desctiptions {
        width: calc(100% - 585px);
        flex-basis: calc(100% - 585px);
        padding-left: 45px;
        .MuiChip-root {
          padding: 8px 11px;
          min-height: auto;
          height: auto;
          .MuiChip-label {
            font-size: 12px;
            font-weight: 600;
            line-height: 1;
          }
        }
        h3 {
          font-size: 36px;
          font-weight: 700;
          line-height: 1;
          margin: 22px 0;
        }
        .profilesection {
          margin: 30px 0;
          .profileIcon {
            width: 44px;
            height: 44px;
            line-height: 0;
            font-size: 0;
            border-radius: 100%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
          .profile_details {
            padding-left: 11px;
            h5 {
              color: ${primaryColors.color021526};
              font-family: Noto Sans;
              font-size: 15px;
              font-weight: 500;
              line-height: 1.3;
              margin-bottom: 5px;
            }
            p {
              color: ${primaryColors.color958e86};
              font-family: Noto Sans;
              line-height: 1;
            }
          }
        }
        .redmore_section {
          display: flex;
          align-items: center;
          transition: all 0.3s ease-in-out;
          p {
            color: ${primaryColors.colorA67033};
            font-family: Cormorant Garamond;
            font-size: 15px;
            font-weight: 600;
            line-height: 1;
            text-transform: uppercase;
          }
          i {
            line-height: 0;
            font-size: 0;
            display: inline-block;
            margin-left: 6px;
          }
          &:hover {
            p {
              color: ${primaryColors.primary};
            }
            i {
              svg {
                path {
                  fill: ${primaryColors.primary};
                }
              }
            }
          }
        }
      }
    }
  }
  .blogSecitonBottomPart {
    padding-bottom: 50px;
  }
`;


function Blogs() {
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle title="Blogs" pageName="Blogs" />
        <Container fixed>
          <BlogsWrapper>
            <Box className="blogSectionTopWrapper">
              <Stack
                direction="row"
                alignItems="center"
                className="blogSecitoWrap"
              >
                <figure className="blogMain_img">
                  <Image
                    src={assest.blogImage}
                    alt="blog_details"
                    width={585}
                    height={410}
                  />
                </figure>
                <Box className="blog_desctiptions">
                  <Chip
                    icon={<Calender />}
                    label="15.01.2024"
                    variant="filled"
                    color="default"
                  />
                  <Typography variant="h3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fringilla egestas ullamcorper sollicitudin volutpat
                    pellentesque leo sed. Dolor facilisis habitant euismod
                    amet...
                  </Typography>
                  <Stack
                    direction="row"
                    alignItems="center"
                    className="profilesection"
                  >
                    <figure className="profileIcon">
                      <Image
                        src={assest.profileIcon}
                        alt="profile_icon"
                        width={44}
                        height={44}
                      />
                    </figure>
                    <Box className="profile_details">
                      <Typography variant="h5">Abram George</Typography>
                      <Typography variant="body1">Manager</Typography>
                    </Box>
                  </Stack>
                  <Link href="javascript:void(0)" className="redmore_section">
                    <Typography variant="body1">Read More</Typography>
                    <i>
                      <ArrowIcon />
                    </i>
                  </Link>
                </Box>
              </Stack>
            </Box>
            <Box className="blogSecitonBottomPart">
              <Grid container spacing={3.5}>
                {cardList1.map((item) => (
                  <Grid item lg={4} xs={12}>
                    <BlogCard
                      blogimg={item.blogimg}
                      datevalue={item.date}
                      cardtitevalue={item.cardtitle}
                      blogDescription={item.description}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <CommonPagination  />
          </BlogsWrapper>
        </Container>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default Blogs;
