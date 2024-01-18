import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";

export const MuiDilogModalWrap = styled(Dialog)`
  .main_modalWrap {
    @media (max-width: 899px) {
      max-width: 500px;
      margin: 0 auto;
      height: auto;
    }
    @media (max-width: 599px) {
      max-width: 305px;
      margin: 0 auto;
      height: auto;
    }
    .modal_mainWrap {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding: 25px 80px 50px;
      @media (max-width: 599px) {
        padding: 10px;
      }
      i {
        display: inline-block;
        line-height: 0;
        font-size: 0;
        margin-bottom: 24px;
        @media (max-width: 599px) {
          width: 88px;
          height: 88px;
          margin-bottom: 20px;
        }
        svg{
            @media (max-width: 599px) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        }
      }
      h5 {
        color: ${primaryColors.color1F2B37};
        text-align: center;

        font-family: "Cormorant Garamond";
        font-size: 30px;
        font-style: normal;
        font-weight: 700;
        line-height: 1;

        margin-bottom: 20px;
      }
      p {
        color: ${primaryColors.textPrimaryColor};
        text-align: center;
        font-family: "Noto Sans";
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.4;
      }
    }
  }
`;
