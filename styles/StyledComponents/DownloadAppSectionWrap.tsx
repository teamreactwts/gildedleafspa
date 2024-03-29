import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const DownloadAppSectionWrap = styled(Box)`
  position: relative;
  @media (max-width: 599px) {
    &.cmn_gap {
      padding-top: 0 !important;
    }
  }

  .downloadapp_wrap {
    padding: 37px 100px 37px 71px;
    border-radius: 20px;
    background: linear-gradient(
      120deg,
      rgba(253, 252, 248, 0.74) 3.57%,
      rgba(253, 252, 248, 0.29) 96.74%
    );
    backdrop-filter: blur(2px);
    z-index: 4;
    position: relative;
    @media (max-width: 1199px) {
      padding: 30px 50px;
    }
    @media (max-width: 599px) {
      padding: 30px 20px;
    }
    .download_leftpart {
      position: relative;
      .phoneImage {
        line-height: 0;
        font-size: 0;
        width: 234px;
        margin: 0 auto;
        position: relative;
        z-index: 3;
      }
      .backgroun_overlay {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        height: 306px;
        border-radius: 21px;
        opacity: 0.2;
        z-index: 2;
      }
    }
    .download_rgtPart {
      @media (max-width: 899px) {
        text-align: center;
      }

      .heading_title {
        text-align: left;
        margin-bottom: 35px;
        @media (max-width: 1199px) {
          text-align: center;
        }
        p {
          color: ${primaryColors.textPrimaryColor};
          font-family: Noto Sans;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.5;
          margin-top: 35px;
          max-width: 399px;
          @media (max-width: 1199px) {
            margin: 0 auto;
          }
        }
      }

      ul {
        display: flex;
        align-items: center;
        @media (max-width: 1199px) {
          justify-content: center;
        }
        @media (max-width: 1199px) {
          flex-wrap: wrap;
        }
        li {
          width: auto;
          margin-right: 17px;
          @media (max-width: 599px) {
            margin: 0 0 20px 0;
            width: 100%;
            justify-content: center;
          }
          &:last-child {
            margin-right: 0;
            @media (max-width: 1199px) {
              margin-bottom: 0;
            }
          }
          button {
            min-width: 187px;
            padding: 12px;
            color: ${primaryColors.primary};
            &.downloadapp_btn {
              span {
                /* color: ${primaryColors.primary}; */
                font-family: Cormorant Garamond;
                font-size: 15px;
                font-weight: 500;
                line-height: 1;
              }
              .MuiButton-startIcon {
                color: ${primaryColors.primary};
              }
              &:hover {
                .MuiButton-startIcon {
                  color: ${primaryColors.white};
                }
              }
            }
            &.download_btn {
              padding: 13px;
            }
          }
        }
      }
    }
  }
`;
