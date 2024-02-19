import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export const DifferentWrapper = styled(Box)`
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
  .each_icon_card {
    width: 20%;
    padding: 10px 15px;
    text-align: center;
    @media (max-width: 899px) {
      width: 50%;
    }

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
  @media (max-width: 1199px) {
    padding: 25px 15px;
  }

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
    @media (max-width: 1199px) {
      width: 100%;
      margin-bottom: 15px;
    }
  }
`;

export const CommonSlider = styled(Box)`
  .slick-slide {
    padding: 0 14px;
  }
  .slick-list {
    margin: 0 -14px;
    @media (max-width: 899px) {
      padding-left: 0 !important;
    }
  }
  .slick-slider {
    margin-bottom: 50px;
    @media (max-width: 599px) {
      padding-bottom: 50px;
      margin-bottom: 0;
    }
  }
  .slick-arrow {
    width: 30px;
    height: 30px;
    background: ${primaryColors.colorA67033} !important;
    border-radius: 100%;

    &:hover {
      opacity: 0.5;
    }
    &::before {
      display: none;
    }
    &.slick-prev {
      left: -45px;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url(${assest.leftArrow}) no-repeat center left;
        width: 6px;
        height: 10px;
        background-size: 100% 100%;
      }
      @media (max-width: 599px) {
        left: 40%;
        transform: translateX(-40%);
        bottom: 0;
        right: auto;
        top: auto;
      }
    }
    &.slick-next {
      right: -45px;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url(${assest.rightArrow}) no-repeat center left;
        width: 6px;
        height: 10px;
        background-size: 100% 100%;
      }
      @media (max-width: 599px) {
        left: 60%;
        transform: translateX(-60%);
        bottom: 0;
        right: auto;
        top: auto;
      }
    }
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
  .serviceSectionWrapper {
    .serviceSectionmain {
      padding: 10px;
      @media (max-width: 599px) {
        padding: 5px;
      }
      .service_card_icon {
        @media (max-width: 599px) {
          height: 140px;
          margin-bottom: 15px;
        }
      }
      h4 {
        @media (max-width: 899px) {
          margin-top: 10px;
        }
        @media (max-width: 479px) {
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: initial;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
`;

export const ServiceCardDifferentWrap = styled(Box)`
  text-align: center;
  .service_card_icon {
    border-radius: 10px;
    cursor: pointer;
    height: 100%;
    position: relative;
    border-radius: 10px;
    height: 100%;
    position: relative;
    background: linear-gradient(
      280deg,
      #e4ddd3 6.74%,
      rgba(243, 241, 230, 0.48) 96.06%
    );
    padding: 1px;
    height: 190px;
    margin-bottom: 25px;
    @media (max-width: 1199px) {
      min-height: 150px;
    }
    .wrapper_otr {
      border-radius: 10px;
      position: relative;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 10px;
        background: linear-gradient(
          280deg,
          #f3f1e6 6.74%,
          rgba(243, 241, 230, 0.48) 96.06%
        );
        z-index: 1;
      }
    }
    .wrapper {
      position: relative;
      z-index: 2;
    }
  }
  > h4 {
    color: ${primaryColors?.color021526};
    font-family: "Noto Sans";
    font-size: 15px;
    font-weight: 500;
    margin-top: 25px;
    cursor: pointer;
    a {
      color: inherit;
      &:hover {
        ${primaryColors?.primary1}
      }
    }
  }
`;

export const DifferentInnerWrapper = styled(Box, {
  shouldForwardProp: (data) => data !== "forNoInterestSection"
})<{ forNoInterestSection: boolean }>`
  margin-bottom: 100px;
  @media (max-width: 899px) {
    margin-bottom: 40px;
  }

  ${({ forNoInterestSection }) =>
    !forNoInterestSection &&
    `padding:70px 40px; 
    margin:80px 0;
    border-radius: 20px;
    background: linear-gradient(120deg, rgba(253, 252, 248, 0.74) 3.57%, rgba(253, 252, 248, 0.29) 96.74%);

    backdrop-filter: blur(2px);
    
    @media(max-width:599px){
      padding:25px 20px;
    }
    `}

  .each_icon_card_slider {
    .slick-slider {
      margin-bottom: 0;
      padding-bottom: 40px;
      .slick-next {
        left: 55%;
        transform: translateX(-55%);
        bottom: 0;
        right: auto;
        top: auto;

        @media (max-width: 599px) {
          left: 60%;
          transform: translateX(-60%);
        }
      }
      .slick-prev {
        left: 45%;
        transform: translateX(-45%);
        bottom: 0;
        right: auto;
        top: auto;
        @media (max-width: 899px) {
          left: 45%;
          transform: translateX(-45%);
        }
        @media (max-width: 599px) {
          left: 40%;
          transform: translateX(-40%);
        }
      }
    }
  }
`;
