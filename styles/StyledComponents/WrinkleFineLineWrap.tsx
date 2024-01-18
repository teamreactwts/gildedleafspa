import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const WrinkleFinelinesWrapper = styled(Box)`
  padding: 100px 0;
  @media (max-width: 1199px) {
    padding: 50px 0;
    }
    @media (max-width: 899px) {
    padding: 40px 0;
    }
  .desciption_section {
    @media (max-width: 1199px) {
        flex-wrap: wrap;
    }
    figure {
      width: 297px;
      flex-basis: 297px;
      height: 321px;
      line-height: 0;
      font-size: 0;
      overflow: hidden;
      border-radius: 20px;
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
    .product_details_wrap {
      width: calc(100% - 297px);
      flex-basis: calc(100% - 297px);
      margin-left: 50px;
      @media (max-width: 1199px) {
        width: 100%;
      flex-basis: 100%;
      margin-left: 0px;
      margin-top: 30px;
    }
      h3 {
        color: ${primaryColors.primary};
        font-family: Cormorant Garamond;
        font-size: 45px;
        font-weight: 700;
        line-height: 1;
        @media (max-width: 1199px) {
            font-size: 40px;
    }
    @media (max-width: 899px) {
            font-size: 32px;
    }
      }
      p {
        color: ${primaryColors.textPrimaryColor};
        font-family: Noto Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        max-width: 529px;
        margin-bottom: 26px;
        @media (max-width: 1199px) {
            max-width: 100%;
    }
        &:last-child{
            margin-bottom: 0;
        }
      }
    }
  }
  .section_card{
    margin-top: 50px;
    @media (max-width: 1199px) {
        margin-top: 40px;
    }

  }
`;