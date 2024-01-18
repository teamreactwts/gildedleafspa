import assest from "@/json/assest";
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
        svg {
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
  .newsletter {
    max-width: 901px;
    background-image: url(${assest.modalbackground});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    @media (max-width: 899px) {
      max-width: 500px;
      margin: 0 auto;
      height: calc(100vh - 30px);
    }
    @media (max-width: 599px) {
      max-width: 100%;
      width: calc(100vw - 30px);
     
    }
    .closeIcon{
      top: 20px;
      right:20px;
    }
    .modalBodySection {
      padding: 20px 52px 65px;
      .modalabout {
        height: 100%;
       figure{
        line-height: 0;
        font-size: 0;
        width: 297px;
        margin: 0 auto;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
       }
        p {
          color: ${primaryColors.textPrimaryColor};
          text-align: center;
          font-family: "Noto Sans";
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.2;
          max-width: 277px;
          margin: 0 auto;
          margin-top: -40px;
        }
      }
      .leterBoxWrap {
        h2 {
          color: ${primaryColors.primary1};
          font-family: "Cormorant Garamond";
          font-size: 34.307px;
          font-style: italic;
          font-weight: 300;
          line-height: 1;
          max-width: 227px;
          margin-bottom: 21px;
          @media (max-width: 899px) {
             text-align: center;
             margin: 0 auto 34px;
            }
          span {
            color: inherit;
            font-family: inherit;
            font-size: 52px;
            font-weight: 700;
            font-style: inherit;
            line-height: inherit;
            @media (max-width: 899px) {
              font-size: 40px;
            }
          }
        }
        .MuiGrid-container {
          .MuiGrid-item {
            .MuiFormControl-root {
              .MuiInputBase-root {
                padding: 1.5px 15px;
                min-height: 54px;
                input {
                  padding: 10px 0;
                }
              }
            }
            .modal_btn {
              margin-top: 10px;
              @media (max-width: 899px) {
             display: flex;
             align-items: center;
             justify-content: center;
           
            }
              button {
                min-width: 186px;

                span {
                  color: ${primaryColors.colorF6F4EE};
                  font-family: "Cormorant Garamond";
                  font-size: 14.445px;
                  font-weight: 600;
                  line-height: 1;
                  text-transform: capitalize;
                }
              }
            }
          }
        }
      }
    }
  }
`;
