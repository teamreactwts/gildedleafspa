import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const FooterWrap = styled(Box)`
position: relative;

.footer_topBar{
  background-color: ${primaryColors.colorFDFDFB};
  padding: 20px 0;

    position: absolute;
    top: 0;
    bottom: initial;
    left: 0px;
    right: 0px;
    margin: 0px auto;
    width: 100%;
    z-index: 9;
    transition: all 0.4s ease-out 0s;
    &.footertop-scrolled{
      position: fixed;
      top: initial;
      bottom: 0px;
      width: 100%;
      height: auto;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

  .fotter_topContainer{
    h5{
      margin-bottom:0;
      font-size: 1.2rem;
      padding-right:15px;
      @media (max-width:899px) {
        font-size:1rem
      }
      @media (max-width:599px) {
        width: 100%;
        padding-bottom: 10px;
      }

    }
  }
}
  .footer_sectionWrap{
    background-color: ${primaryColors.primary};
  padding: 185px 0 37px 0;
  @media (max-width: 1199px) {
    padding: 60px 0 57px 0;
  }
  @media (max-width: 599px) {
    padding: 40px 0 57px 0;
  }
  position: relative;
  }
  .ftr-wrapper {
    position: relative;
    z-index: 3;
    .footerTitle_text {
      color: ${primaryColors.color807072};
      font-family: Nunito Sans;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.5;
      margin: 0;
    }
    .nave_itemWrap {
      ul {
        padding-top: 25px;
        li {
          margin-bottom: 31px;
          &:last-child {
            margin-bottom: 0;
          }
          a {
            display: inline-block;
            color: ${primaryColors.white};
            font-family: Nunito Sans;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            transition: all 0.3s ease-in-out;
            &:hover {
              color: ${primaryColors.colorA67033};
            }
            &.active {
              color: ${primaryColors.colorA67033};
            }
          }
        }
      }
    }
    .footer_socialMedian {
      .footer_brnadLogo {
        width: 137px;
        display: inline-block;
        line-height: 0;
        font-size: 0;
        margin-left: 25px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .social_icons {
        display: flex;
        align-items: center;
        margin-top: 15px;
        li {
          width: auto;
          margin-right: 27px;
          &:last-child {
            margin-right: 0;
          }
          a {
            display: inline-block;
            line-height: 0px;
            font-size: 0px;
            transition: all 0.4s ease-in-out;
            &:hover {
              svg {
                path {
                  fill: ${primaryColors.colorA67033};
                }
              }
            }
          }
        }
      }
      .newsletterSignUp {
        padding: 30px 0;
        p {
          color: ${primaryColors.color807072};
          font-family: Noto Sans;
          font-size: 15px;
          font-weight: 400;
          line-height: 1;
          margin-bottom: 22px;
        }
        .MuiFormControl-root {
          .MuiInputBase-root {
            border-radius: 4px;
            border: 1px solid rgba(166, 112, 51, 0.1);
            background: ${primaryColors.color292F3A};
            padding: 4px 11px;
            min-height: 40px;
            input {
              color: ${primaryColors.white};
              font-family: Noto Sans;
              font-size: 14px;
              font-weight: 400;
              line-height: 1;
              border-right: 1px solid rgba(166, 112, 51, 0.1);
              @media (max-width: 899px) {
                font-size: 16px;
              }
              &::placeholder {
                color: ${primaryColors.white};
              }

              &::-ms-input-placeholder {
                /* Edge 12 -18 */
                color: ${primaryColors.white};
              }
            }
            .MuiInputAdornment-root {
              button {
                padding: 5px;
              }
            }
          }
        }
      }
    }
    .footer_contactDetails {
      .footer_contactform {
        margin-top: 25px;
        li {
          margin-bottom: 26px;
          &:last-child {
            margin-bottom: 0;
          }
          a,
          .address_box {
            display: flex;

            i {
              margin-right: 13px;
            }
            p {
              color: ${primaryColors.white};
              font-family: Nunito Sans;
              font-size: 14px;
              font-weight: 400;
              line-height: 1.5;
              &.locationtext {
                margin-top: -5px;
              }
            }
          }
          a {
            &:hover {
              opacity: 0.7;
            }
          }
        }
      }
    }
  }
  .footer_bottom {
    margin-top: 65px;
    padding-top: 35px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 3;
    @media (max-width: 1199px) {
      margin-top: 50px;
    }
    @media (max-width: 899px) {
      padding-top: 25px;
    }
    .footercopyWriteWrap {
      @media (max-width: 899px) {
        flex-wrap: wrap;
      }
      .copyrighttext {
        color: ${primaryColors.white};
        font-family: Nunito Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        a {
          display: inline-block;
          color: inherit;
          font-size: inherit;
          line-height: inherit;
          font-family: inherit;
          &:hover {
            color: ${primaryColors.colorA67033};
          }
        }
        @media (max-width: 899px) {
          width: 100%;
          margin-bottom: 10px;
        }
      }
      .desingText {
        color: ${primaryColors.white};
        font-family: Nunito Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        & a {
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          font-weight: inherit;
          color: inherit;
          display: inline-block;
          &:hover {
            color: ${primaryColors.colorA67033};
          }
        }
      }
    }
  }
  .footer_desing {
    position: absolute;
    line-height: 0;
    font-size: 0;

    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    @media (max-width: 899px) {
      height: 50%;
      width: 100%;
      top: 9%;
      left: 90%;
      transform: translateX(-50%);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media (max-width: 899px) {
        object-fit: contain;
      }
    }
  }
`;
