import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const HeaderWrap = styled(Box)`
  .header_top {
    background-color: ${primaryColors.primary};

    .header_lableWrap {
      padding: 9px 0;
      .lableContact_lft {
        a {
          display: inline-block;
          display: flex;
          align-items: center;
          &:hover {
            opacity: 0.8;
          }
          i {
            display: inline-block;
            line-height: 0;
            font-size: 0;
            width: 27px;
            height: 27px;
            border-radius: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${primaryColors.color2B3343};
          }
          p {
            margin-left: 10px;
            color: ${primaryColors.white};
            font-family: Noto Sans;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.6;
            letter-spacing: 0.32px;
          }
        }
      }
      .lableContact_rgt {
        .title_descriptoion {
          color: ${primaryColors.white};
          font-size: 12px;
          line-height: 1.6;
          letter-spacing: 0.24px;
          margin-right: 19px;
        }
        ul {
          display: flex;
          align-items: center;
          margin: 0 -13px;
          li {
            width: auto;
            padding: 0 13px;
            border-right: 1px solid ${primaryColors.color272F3D};
            &:last-child {
              border-right: 0;
            }
            a {
              display: inline-flex;
              display: flex;
              align-items: center;
              &:hover {
                opacity: 0.7;
              }
              i {
                display: inline-block;
                line-height: 0;
                font-size: 0;
              }
              p {
                color: ${primaryColors.white};
                font-family: Noto Sans;
                font-size: 10px;
                line-height: 1.6;
                letter-spacing: 0.2px;
                margin-left: 5px;
              }
            }
          }
        }
      }
    }
  }
  .header_btm {
    background-color: ${primaryColors?.colorFDFDFB};
  }
  .MuiToolbar-root {
    min-height: auto;
    padding: 0;
    padding: 23px 0;
  }
  .hdr_rgt {
    margin-left: 32px;
    display: flex;
    align-items: center;
    button {
    }
    .MuiBadge-badge {
      right: 4px;
      top: 5px;
      min-width: 10px;
      height: 10px;
    }
    .cart_icon {
      margin-right: 18px;
    }
  }

  .headerContainer {
    background-color: transparent !important;

    transition: all 0.4s;
  }

  .headerLogo {
    width: 219px;
    display: inline-block;
    line-height: 0;
    font-size: 0;
    transition: all 0.4s;
  }
  .navbar {
    margin-left: auto;
    a {
      margin-right: 28px;
      display: inline-block;
      color: ${primaryColors.primary};
      font-size: 16px;
      font-family: "Cormorant Garamond";
      font-weight: 600;
      line-height: 1;
      &:hover {
        color: ${primaryColors.themTextcolor};
      }
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      &.active {
        color: ${primaryColors.themTextcolor};
      }
    }
  }
`;
