import { ConditionDoc } from "@/interface/apiresp.interfaces";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";

export const ImageCardWrap = styled(Box)`
  cursor: pointer;
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
      object-fit: contain;
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
        margin-bottom: 0;
      }
      p {
        color: ${primaryColors.white};
        font-family: Noto Sans;
        font-size: 18px;
        font-weight: 900;
        line-height: 1;
        margin-top: -35px;
        text-align: left;
        padding: 0 15px;
      }
    }
  }
`;
export interface imageprops {
  card_img: string;
  title: string;
  description: string;
  item?: ConditionDoc;
}

function ImageCard({ card_img, title, description, item }: imageprops) {
  const router = useRouter();
  return (
    <ImageCardWrap>
      <figure
        onClick={() => !!item && router.push(`/condition-details/${item._id}`)}
      >
        <Image src={card_img} alt="image" width={292} height={369} />
        <Box className="slider_text">
          <Typography variant="h3">{title}</Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
      </figure>
    </ImageCardWrap>
  );
}

export default ImageCard;
