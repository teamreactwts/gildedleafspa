import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ServiceDetailsWrapper = styled(Box)`
  padding: 58px 0 100px 0;
  @media (max-width: 899px) {
    padding: 50px 0;
  }
  @media (max-width: 599px) {
    padding: 40px 0;
  }
  .service_details_top {
    margin-bottom: 50px;
    @media (max-width: 899px) {
      flex-wrap: wrap;
    }
    .service_imgSection {
      width: 234px;
      flex-basis: 234px;
      height: 234px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: 1px solid ${primaryColors.white};
      background: linear-gradient(
        140deg,
        ${primaryColors.white} -65.15%,
        rgba(255, 255, 255, 0) 144.4%
      );
      @media (max-width: 899px) {
        width: 100%;
        flex-basis: 100%;
      }

      figure {
        width: 89px;
        height: 106px;
        line-height: 0;
        font-size: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
    .service_titleDescription {
      width: calc(100% - 234px);
      flex-basis: calc(100% - 234px);
      margin-left: 50px;
      @media (max-width: 899px) {
        width: 100%;
        flex-basis: 100%;
        margin-left: 0;
        margin-top: 30px;
      }
      h3 {
        color: ${primaryColors.primary};
        font-family: Cormorant Garamond;
        font-size: 45px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 20px;
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
        max-width: 713px;
      }
      ul {
        display: flex;
        align-items: center;
        margin-top: 19px;
        li {
          width: auto;
          margin-right: 15px;
          &:last-child {
            margin-right: 0;
          }
          button {
            padding: 17px;
          }
        }
      }
    }
  }
  .benifits_use {
    margin-bottom: 70px;
    @media (max-width: 899px) {
      margin-bottom: 40px;
    }
    .list_wrap {
      padding: 32px 58px 32px 34px;
      border-radius: 20px;
      background: linear-gradient(
        120deg,
        rgba(253, 252, 248, 0.74) 3.57%,
        rgba(253, 252, 248, 0.29) 96.74%
      );
      @media (max-width: 899px) {
        padding: 32px 20px;
      }
      backdrop-filter: blur(2px);
      h4 {
        color: ${primaryColors.color021526};
        font-family: Cormorant Garamond;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 1;
      }
      ul {
        margin-top: 15px;
        max-height: 181px;
        overflow-y: auto;
        li {
          width: auto;
          margin-bottom: 23px;
          &:last-child {
            margin-bottom: 0;
          }
          i {
            width: 15px;
            margin-right: 11px;
            line-height: 0;
            font-size: 0;
          }
          p {
            color: ${primaryColors.textPrimaryColor};
            font-family: Noto Sans;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
          }
        }
      }
    }
  }
  .result_section {
    h4 {
      font-size: 45px;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 50px;
      @media (max-width: 899px) {
        font-size: 32px;
        margin-bottom: 20px;
      }
    }
    figure {
      line-height: 0;
      font-size: 0;
      overflow: hidden;
      border-radius: 20px;
      width: 1135px;
      height: 470px;
      @media (max-width: 1199px) {
        width: auto;
        height: auto;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .botox_section_wrap {
    margin-top: 70px;
    @media (max-width: 899px) {
      margin-top: 40px;
    }
    h4 {
      font-size: 45px;
      font-style: italic;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 54px;
      @media (max-width: 899px) {
        margin-bottom: 25px;
        font-size: 32px;
      }
      span {
        line-height: inherit;
        font-size: inherit;
        font-style: inherit;
        font-family: inherit;
        font-weight: 700;
        color: inherit;
      }
    }
    .botex_section {
      padding: 19px 29px 19px 19px;
      border-radius: 20px;
      background: linear-gradient(
        120deg,
        rgba(253, 252, 248, 0.74) 3.57%,
        rgba(253, 252, 248, 0.29) 96.74%
      );
      cursor: pointer;
      backdrop-filter: blur(2px);
      transition: all 0.3s ease-in-out;
      &:hover {
        background: var(
          --Linear,
          linear-gradient(
            135deg,
            rgba(140, 96, 52, 0.2) 7.03%,
            rgba(169, 130, 79, 0.2) 30.96%,
            rgba(242, 217, 147, 0.2) 85.67%,
            rgba(255, 231, 159, 0.2) 94.22%,
            rgba(226, 192, 124, 0.2) 121.57%,
            rgba(166, 112, 51, 0.2) 177.99%
          )
        );
      }
      figure {
        line-height: 0;
        font-size: 0;
        width: 140px;
        flex-basis: 140px;
        height: 148px;
        overflow: hidden;
        border-radius: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .text_section {
        width: calc(100% - 140px);
        flex-basis: calc(100% - 140px);
        padding-left: 33px;
        @media (max-width: 899px) {
          padding-left: 20px;
        }
        @media (max-width: 599px) {
          padding-right: 5px;
        }
        h5 {
          color: ${primaryColors.primary};
          font-size: 30px;
          word-wrap: break-word;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 15px;
          @media (max-width: 899px) {
            font-size: 26px;
          }
        }
        > p {
          max-width: 330px;
          color: ${primaryColors.textPrimaryColor};
          font-family: Noto Sans;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          height: 72px;

          @media (max-width: 599px) {
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 4;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            height: 90px;
          }
        }
      }
    }
  }
  .pricingTable {
    padding: 80px 0;
    @media (max-width: 899px) {
      padding: 40px 0;
    }
    .pricing_text {
      margin-bottom: 50px;
      @media (max-width: 899px) {
        margin-bottom: 25px;
      }
      h3 {
        font-size: 45px;
        line-height: 1;
        margin: 0;
        @media (max-width: 899px) {
          font-size: 32px;
        }
      }
    }
    .MuiTableContainer-root {
      border-radius: 20px;
      border: 1px solid #e8e5e0;
      background: linear-gradient(
        120deg,
        rgba(253, 252, 248, 0.74) 3.57%,
        rgba(253, 252, 248, 0.29) 96.74%
      );
      backdrop-filter: blur(2px);
      .MuiTable-root {
        min-width: 440px;
        .MuiTableHead-root {
          tr {
            th {
              color: ${primaryColors.primary};
              font-family: Cormorant Garamond;
              font-size: 30px;
              font-weight: 700;
              line-height: 1;
              padding: 30px 20px;
              border-bottom: 1px solid rgba(75, 74, 74, 0.1);
              @media (max-width: 899px) {
                font-size: 24px;
                padding: 21px 20px;
              }
              @media (max-width: 599px) {
                font-size: 18px;
                padding: 21px 15px;
              }
            }
          }
        }
        .MuiTableBody-root {
          tr {
            &:last-child {
              td {
                border-bottom: 0;
              }
            }
            td {
              &.deep_link_url {
                :hover {
                  color: ${primaryColors.colorA67033};
                  cursor: pointer;
                }
              }
              padding: 30px 20px;
              color: ${primaryColors.primary};
              font-family: Noto Sans;
              font-size: 16px;
              font-weight: 400;
              line-height: 1;
              text-transform: capitalize;
              list-style-type: decimal;
              border-bottom: 1px solid rgba(75, 74, 74, 0.1);
              @media (max-width: 899px) {
                padding: 21px 20px;
              }
              @media (max-width: 599px) {
                padding: 21px 15px;
              }

              span {
                width: 7px;
                height: 7px;
                border-radius: 100%;
                background-color: ${primaryColors.primary};
                margin-right: 11px;
              }
            }
          }
        }
      }
    }
  }
  .scroll_textWrap {
    margin-top: -30px;
    text-align: right;
    margin-bottom: 15px;
  }
  .frequent_askQuestion {
    .titleSection {
      margin-bottom: 20px;
      h3 {
        font-size: 45px;
        font-style: italic;
        font-weight: 400;
        line-height: 1;
        margin-bottom: 0;
        @media (max-width: 899px) {
          font-size: 32px;
        }
        span {
          font-weight: 700;
          line-height: inherit;
          font-size: inherit;
          font-family: inherit;
          font-style: normal;
          color: inherit;
        }
      }
    }
    .frequentWrap {
      .MuiGrid-container {
        .MuiGrid-item {
          .frequent_listsection {
            .MuiPaper-root {
              background-color: transparent;
              box-shadow: none;
              &.Mui-expanded {
                margin-top: 0;
              }
              &::before {
                display: none;
              }
              &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: rgba(75, 74, 74, 0.1);
              }
              .MuiButtonBase-root {
                padding: 0;
                .MuiAccordionSummary-content {
                  margin: 42px 0;
                  @media (max-width: 899px) {
                    margin: 25px 0;
                  }
                  &.Mui-expanded {
                    margin: 25px 0;
                  }

                  p {
                    color: ${primaryColors.primary};
                    font-family: Noto Sans;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 1;
                  }
                }
              }
              .MuiCollapse-root {
                .MuiCollapse-wrapper {
                  .MuiAccordionDetails-root {
                    padding: 0 0 36px 0;
                    @media (max-width: 899px) {
                      padding: 0 0 23px 0;
                    }
                    p {
                      color: ${primaryColors.textPrimaryColor};
                      font-family: Noto Sans;
                      font-size: 16px;
                      font-weight: 400;
                      line-height: 1.5;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .redmore_section {
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    margin-top: 17px;
    p {
      color: ${primaryColors.colorA67033};
      font-family: Cormorant Garamond;
      font-size: 15px;
      font-weight: 600;
      line-height: 1;
      text-transform: uppercase;
    }
    i {
      line-height: 0;
      font-size: 0;
      display: inline-block;
      margin-left: 6px;
    }
    &:hover {
      p {
        color: ${primaryColors.primary};
      }
      i {
        svg {
          path {
            fill: ${primaryColors.primary};
          }
        }
      }
    }
  }
`;
