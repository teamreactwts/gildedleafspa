import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HomeSliderWrapper = styled(Box)`
  @media (max-width: 1199px) {
    &.cmn_gap {
      padding-top: 0 !important;
    }
  }
  .sliderHeading_part {
    display: flex;
    align-items: center;
    @media (max-width: 1199px) {
      flex-wrap: wrap;
    }
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
      @media (max-width: 1199px) {
        width: 100%;
        margin: 0;
      }
      @media (max-width: 899px) {
        font-size: 32px;
        line-height: 1.2;
        margin-bottom: 15px;
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
      @media (max-width: 1199px) {
        max-width: 100%;
        margin-bottom: 15px;
      }
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
      .slick-arrow {
        &.slick-prev {
          @media (max-width: 899px) {
            left: 42%;
            transform: translateX(-42%);
          }
        }
        &.slick-next {
          @media (max-width: 899px) {
            left: 58%;
            transform: translateX(-58%);
          }
        }
      }
    }
  }
`;
