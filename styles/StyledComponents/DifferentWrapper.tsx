import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const DifferentWrapper = styled(Box)`
  border-top: 1px solid ${primaryColors?.coloreee3d3};
  position: relative;
  z-index: 1;
  overflow: hidden;
  .crcl_vector {
    position: absolute;
    left: -100px;
    top: 100px;
    pointer-events: none;
    z-index: -1;
  }
`;

export const CommonHeaderWrapper = styled(Box)`
  text-align: center;
  margin-bottom: 50px;
  h2 {
    margin-bottom: 15px;
    span {
      font-weight: 700;
      font-style: normal;
      font-size: inherit;
      color: inherit;
      font-family: inherit;
      line-height: inherit;
    }
  }
`;

export const IconCardStack = styled(Stack)`
  margin: -10px -15px;
  padding-bottom: 100px;
  .each_icon_card {
    width: 20%;
    padding: 10px 15px;
    text-align: center;
    i {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 66px;
    }
    h4 {
      color: ${primaryColors?.color021526};
      font-family: "Noto Sans";
      font-size: 15px;
      font-weight: 500;
      line-height: 20px;
      max-width: 155px;
      margin: 0 auto;
      a {
        color: inherit;
        &:hover {
          color: ${primaryColors?.primary1};
        }
      }
    }
  }
`;

export const ServiceWrapper = styled(Box)`
  padding: 25px 30px 57px;
  border-radius: 20px;
  background: linear-gradient(
    120deg,
    rgba(253, 252, 248, 0.74) 3.57%,
    rgba(253, 252, 248, 0.29) 96.74%
  );
  backdrop-filter: blur(2px);
  .title_left {
    h2 {
      span {
        font-weight: 700;
        font-style: normal;
        font-size: inherit;
        color: inherit;
        font-family: inherit;
        line-height: inherit;
      }
    }
  }
`;

export const CommonSlider = styled(Box)`
  .slick-slide {
    padding: 0 14px;
  }
  .slick-list {
    margin: 0 -14px;
  }
  .slick-slider {
    padding-bottom: 50px;
  }
  .slick-dots {
    display: inline-flex !important;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 14px 25px;
    border-radius: 20px;
    background: #161d29;
    border-radius: 50px;
    width: auto;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    li {
      width: 7px;
      height: 7px;
      transition: all 0.5s ease;

      button {
        padding: 0;
        width: 7px;
        height: 7px;
        background: ${primaryColors?.white};
        opacity: 0.3;
        border-radius: 50px;
        &::before {
          display: none;
        }
      }
      &.slick-active {
        width: 21px;
        button {
          width: 21px;
          opacity: 1;
        }
      }
    }
  }
`;

export const ServiceCardDifferentWrap = styled(Box)`
  text-align: center;
  .service_card_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #e4ddd3;
    background: linear-gradient(
      139deg,
      #f3f1e6 6.74%,
      rgba(243, 241, 230, 0.48) 96.06%
    );
    backdrop-filter: blur(32px);
    min-height: 190px;
    padding: 10px 10px;
  }
  > h4 {
    color: ${primaryColors?.color021526};
    font-family: "Noto Sans";
    font-size: 15px;
    font-weight: 500;
    margin-top: 25px;
    a {
      color: inherit;
      &:hover {
        ${primaryColors?.primary1}
      }
    }
  }
`;
