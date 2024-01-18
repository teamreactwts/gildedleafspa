import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const ConditionWrap = styled(Box)`
  padding: 55px 0 100px 0;
  @media (max-width: 599px) {
    padding: 40px 0;
  }
  .titel_text {
    margin-bottom: 60px;
    @media (max-width: 599px) {
      margin-bottom: 40px;
    }
    h2 {
      font-style: italic;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 0;
      span {
        color: inherit;
        line-height: inherit;
        font-weight: 700;
        font-family: inherit;
        font-size: inherit;
        @media (max-width: 599px) {
          display: block;
        }
      }
      @media (max-width: 599px) {
        text-align: center;
      }
    }
  }
  .condition_imgWrap {
    .MuiGrid-root {
      .slider_text {
        padding: 27px 10px;
        h3 {
          font-size: 49px;
        }
      }
    }
  }
`;
