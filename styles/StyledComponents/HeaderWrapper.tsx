import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";

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
            @media (max-width: 599px) {
              font-size: 13px;
            }
          }
        }
      }
      .lableContact_rgt {
        @media (max-width: 599px) {
          flex-direction: column;
          align-items: flex-end;
        }
        .title_descriptoion {
          color: ${primaryColors.white};
          font-size: 12px;
          line-height: 1.6;
          letter-spacing: 0.24px;
          margin-right: 19px;

          @media (max-width: 599px) {
            margin-right: 0;
          }
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
    @media (max-width: 899px) {
      padding: 14px 0;
    }
  }
  .hdr_rgt {
    margin-left: 32px;
    display: flex;
    align-items: center;
    @media (max-width: 1199px) {
      margin-left: 20px;
    }
    @media (max-width: 899px) {
      display: none;
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
    @media (max-width: 1199px) {
      width: 170px;
      svg {
        width: 100%;
      }
    }
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
      @media (max-width: 1199px) {
        margin-right: 10px;
      }
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
  .navDropdown {
    padding: 0;
    margin-right: 28px;
    display: inline-block;
    color: ${primaryColors?.primary};
    font-size: 16px;
    font-family: "Cormorant Garamond";
    font-weight: 600;
    line-height: 1;
    background-color: transparent;
    &:hover {
      background-color: transparent;
      color: ${primaryColors?.themTextcolor};
    }
    @media (max-width: 1199px) {
      margin-right: 10px;
    }
  }
  .menu_btn {
    margin-left: auto;
    margin-right: 0;
    padding: 0;
  }
`;

export const NavMenu = styled(Menu)`
  .MuiPaper-root {
    border-radius: 10px;
    box-shadow: 0px 27px 47px 0px rgba(0, 0, 0, 0.1);
    .MuiList-root {
      padding: 20px 20px;
      .MuiButtonBase-root {
        padding: 6px 0;
        color: ${primaryColors?.primary};
        font-size: 16px;
        font-family: "Cormorant Garamond";
        font-weight: 600;
        line-height: 1;
        background-color: transparent;
        &:hover {
          color: ${primaryColors?.colorA67033};
        }
        &:first-child {
          padding-top: 0;
        }
        &:last-child {
          padding-bottom: 0;
        }
      }
    }
  }
`;
