import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const SurviceWrap = styled(Box)`
  padding: 55px 0 100px 0;
  position: relative;
  @media (max-width: 899px) {
    padding: 40px 0 50px 0;
  }
  @media (max-width: 599px) {
    padding: 40px 0;
  }

  .titel_text {
    margin-bottom: 60px;
    @media (max-width: 899px) {
      margin-bottom: 40px;
    }
    h2 {
      color: ${primaryColors.primary};
      font-size: 45px;
      font-style: italic;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 0;
      @media (max-width: 899px) {
        font-size: 40px;
      }
      @media (max-width: 599px) {
        font-size: 32px;
      }
      span {
        color: inherit;
        line-height: inherit;
        font-weight: 700;
        font-family: inherit;
        font-size: inherit;
        margin-left: 8px;
      }
    }
  }
  .service_card {
    .view_btn{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      @media (max-width:899px) {
        margin-top: 20px;
        min-width: auto;
      }
      
    }
  }
`;