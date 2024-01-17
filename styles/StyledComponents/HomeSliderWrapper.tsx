import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HomeSliderWrapper = styled(Box)`
  .sliderHeading_part {
    display: flex;
    align-items: center;

    h2 {
      color: ${primaryColors.primary};
      font-size: 45px;
      font-style: italic;
      font-weight: 400;
      line-height: 1.5;
      margin: 0 45px 0 0;
      span {
        color: inherit;
        font-size: inherit;
        font-weight: 700;
        line-height: inherit;
        font-style: inherit;
        font-family: inherit;
      }
    }
    p {
      color: ${primaryColors.textPrimaryColor};
      font-family: Noto Sans;
      font-size: 16px;
      font-weight: 400;
      line-height: 1.2;
      max-width: 404px;
      margin-right: 16px;
    }
    .explore_btn {
      padding: 18px 20px;
      min-width: 145px;
    }
  }

  .sliderSectionWrap {
    margin-top: 50px;
    padding: 0 10px;
    .slick-slider {
      .slick-list {
        .slider_card {
        }
      }
    }
  }
`;