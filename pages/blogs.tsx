/* eslint-disable jsx-a11y/anchor-is-valid */
import { mediaUrl } from "@/api/endpoints";
import { GetBlogList } from "@/api/functions/cms.api";
import BlogCard from "@/components/BlogCard/BlogCard";
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import CommonPagination from "@/components/CommonPagination/CommonPagination";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import { blogDoc } from "@/interface/apiresp.interfaces";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import ArrowIcon from "@/ui/Icons/ArrowIcon";
import Calender from "@/ui/Icons/CalenderIcon";
import Loader from "@/ui/Loader/Loder";
import styled from "@emotion/styled";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/system";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "react-query";

export const BlogsWrapper = styled(Box)`
  padding: 50px 0 100px 0;
  @media (max-width: 1199px) {
    padding: 50px 0;
  }
  @media (max-width: 599px) {
    padding: 40px 0;
  }
  .blogSectionTopWrapper {
    padding-bottom: 80px;
    @media (max-width: 1199px) {
      padding-bottom: 50px;
    }
    @media (max-width: 599px) {
      padding-bottom: 40px;
    }
    .blogSecitoWrap {
      @media (max-width: 1199px) {
        flex-wrap: wrap;
      }
      .blogMain_img {
        line-height: 0;
        font-size: 0;
        width: 585px;
        flex-basis: 585px;
        height: 410px;
        border-radius: 20px;
        overflow: hidden;
        @media (max-width: 1199px) {
          width: 100%;
          flex-basis: 100%;
        }
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
        @media (max-width: 1199px) {
          width: 100%;
          flex-basis: 100%;
          padding: 40px 0 0 0;
        }
        @media (max-width: 599px) {
          padding: 25px 0 0 0;
        }
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
    @media (max-width: 899px) {
      padding-bottom: 40px;
    }
  }
  .description_block {
    p {
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;

function Blogs() {
  const [page, setPage] = React.useState(1);
  const [per_page, setPageLimit] = React.useState(3);
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const [blogList, setBlogList] = useState<blogDoc[]>();

  const { isLoading } = useQuery(
    ["blogList", page],

    {
      queryFn: () => GetBlogList({ page, per_page }),
      refetchOnWindowFocus: false,
      onSuccess(data) {
        if (data.status === 200) {
          setTotalPage(data?.data?.data?.pages);
          // !!blogList && blogList?.length > 0
          //   ? setBlogList([...blogList, ...data?.data?.data?.docs])
          setBlogList(data?.data?.data?.docs);
        }
      }
    }
  );

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }
  const router = useRouter();
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle title="Blogs" pageName="Blogs" />
        <Container fixed>
          <BlogsWrapper>
            {page == 1 && (
              <Box className="blogSectionTopWrapper">
                <Stack
                  direction="row"
                  // alignItems="center"
                  className="blogSecitoWrap"
                >
                  <figure className="blogMain_img">
                    <Image
                      src={mediaUrl(
                        `blog/${
                          !!blogList && blogList.length > 0 && blogList[0].image
                        }`
                      )}
                      alt="blog_details"
                      width={585}
                      height={410}
                    />
                  </figure>
                  <Box className="blog_desctiptions">
                    <Chip
                      icon={<Calender />}
                      label={
                        !!blogList && blogList.length > 0
                          ? moment(blogList[0].published_date).format(
                              "DD.MM.YYYY"
                            )
                          : ""
                      }
                      variant="filled"
                      color="default"
                    />
                    <Typography variant="h3">
                      {!!blogList && blogList.length > 0 && blogList[0].title}
                    </Typography>
                    <Box className="description_block">
                      <Typography
                        variant="body1"
                        dangerouslySetInnerHTML={{
                          __html:
                            !!blogList && blogList.length > 0
                              ? (blogList[0].description as string)
                              : ""
                        }}
                      />
                    </Box>
                    <Stack
                      direction="row"
                      alignItems="center"
                      className="profilesection"
                    >
                      <figure className="profileIcon">
                        <Image
                          src={mediaUrl(
                            `blog/${
                              !!blogList &&
                              blogList.length > 0 &&
                              blogList[0].author_image
                            }`
                          )}
                          alt="profile_icon"
                          width={44}
                          height={44}
                        />
                      </figure>
                      <Box className="profile_details">
                        <Typography variant="h5">
                          {!!blogList &&
                            blogList.length > 0 &&
                            blogList[0].author_name}
                        </Typography>
                        <Typography variant="body1">
                          {" "}
                          {!!blogList &&
                            blogList.length > 0 &&
                            blogList[0].author_type}
                        </Typography>
                      </Box>
                    </Stack>
                    <Link
                      href={`/blog-details/${
                        !!blogList && blogList.length > 0 && blogList[0]._id
                      }`}
                      className="redmore_section"
                    >
                      <Typography variant="body1">Read More</Typography>
                      <i>
                        <ArrowIcon />
                      </i>
                    </Link>
                  </Box>
                </Stack>
              </Box>
            )}

            <Box className="blogSecitonBottomPart">
              <Grid container spacing={{ lg: 3.5, xs: 3.2 }}>
                {!!blogList && blogList.length > 0 && page == 1
                  ? blogList.slice(1).map((data, index) => (
                      <Grid item lg={4} md={6} xs={12}>
                        <BlogCard
                          item={data}
                          blogimg={mediaUrl(`blog/${data?.image}`)}
                          datevalue={moment(data.published_date).format(
                            "DD.MM.YYYY"
                          )}
                          cardtitevalue={data?.title}
                          blogDescription={data?.description}
                        />
                      </Grid>
                    ))
                  : !!blogList &&
                    blogList.length > 0 &&
                    blogList.map((data, index) => (
                      <Grid item lg={4} md={6} xs={12}>
                        <BlogCard
                          item={data}
                          blogimg={mediaUrl(`blog/${data?.image}`)}
                          datevalue={moment(data.published_date).format(
                            "DD.MM.YYYY"
                          )}
                          cardtitevalue={data?.title}
                          blogDescription={data?.description}
                        />
                      </Grid>
                    ))}
              </Grid>
            </Box>
            <CommonPagination
              count={totalPage}
              page={page}
              handleChange={handleChange}
            />
          </BlogsWrapper>
        </Container>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default Blogs;
