/* eslint-disable jsx-a11y/anchor-is-valid */
import { IrelateBlog, blogDoc } from "@/interface/apiresp.interfaces";
import { primaryColors } from "@/themes/_muiPalette";
import ArrowIcon from "@/ui/Icons/ArrowIcon";
import Calender from "@/ui/Icons/CalenderIcon";
import styled from "@emotion/styled";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export const BlogCardWrapper = styled(Box)`
  padding: 20px 20px 27px;
  background: linear-gradient(
    120deg,
    rgba(253, 252, 248, 0.74) 3.57%,
    rgba(253, 252, 248, 0.29) 96.74%
  );
  backdrop-filter: blur(2px);
  border-radius: 15px;
  .imgSectionWrap {
    width: 100%;
    .blogfigure {
      width: 100%;
      height: 201px;
      line-height: 0;
      font-size: 0;
      border-radius: 10px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .blog_details {
    margin-top: 14px;
    .MuiChip-root {
      padding: 5px 11px;
      min-height: auto;
      height: auto;
      .MuiChip-label {
        font-size: 12px;
        font-weight: 600;
        line-height: 1;
      }
    }
    .title_text {
      color: ${primaryColors.primary};
      font-family: Cormorant Garamond;
      font-size: 22px;
      font-weight: 700;
      line-height: 1;
      margin: 15px 0;
      display: block;
      min-height: 44px;
      &:hover {
        color: ${primaryColors.colorA67033};
      }
    }
    > p {
      display: -webkit-box;
      max-width: 100%;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    .redmore_section {
      display: flex;
      align-items: center;
      transition: all 0.3s ease-in-out;
      margin-top: 17px;
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
`;
export interface blogcardprops {
  blogimg: string;
  datevalue: string;
  cardtitevalue: string;
  blogDescription: string;
  item?: blogDoc | IrelateBlog;
}

function BlogCard({
  blogimg,
  datevalue,
  cardtitevalue,
  blogDescription,
  item
}: blogcardprops) {
  const router = useRouter();
  return (
    <BlogCardWrapper>
      <Link href={`/blog-details/${item?._id}`} className="imgSectionWrap">
        <figure className="blogfigure">
          <Image src={blogimg} alt="blogimage" width={321} height={201} />
        </figure>
      </Link>
      <Box className="blog_details">
        <Chip
          icon={<Calender />}
          label={datevalue}
          variant="filled"
          color="default"
        />
        <Link href={`/blog-details/${item?._id}`} className="title_text">
          {cardtitevalue}
        </Link>

        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{
            __html: blogDescription as string
          }}
        />
        <Link
          href={`/blog-details/${item?._id}`}
          // onClick={() => router.push(`/blog-details/${item?._id}`)}
          className="redmore_section"
        >
          <Typography variant="body1">Read More</Typography>
          <i>
            <ArrowIcon />
          </i>
        </Link>
      </Box>
    </BlogCardWrapper>
  );
}

export default BlogCard;
