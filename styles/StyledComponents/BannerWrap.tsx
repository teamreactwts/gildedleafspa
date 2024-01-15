import assest from "@/json/assest";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const BannerWrap = styled(Box)`
  padding: 65px 0 85px;
  position: relative;

  &::after {
    content: "";
    width: 50vw;
    height: 50vw;
    background: url(${assest?.banner_vector}) no-repeat center center;
    background-size: cover;
    position: absolute;
    left: -7vw;
    top: -7vw;
    z-index: -1;
  }
  .banner_wrap {
    h1 {
      max-width: 590px;
      margin-bottom: 40px;
      span {
        font-weight: 700;
        font-style: inherit;
        font-size: inherit;
        color: inherit;
        font-family: inherit;
        line-height: inherit;
      }
    }
    > p {
      max-width: 600px;
      margin-bottom: 35px;
      font-size: 20px;
    }
  }

  .banner_fig {
    position: relative;
    &::after {
      content: "";
      background: url(${assest?.banner_back_logo}) no-repeat center center;
      background-size: 100% 100%;
      width: 50vw;
      height: 50vw;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -2;
    }
    .gradient-box {
      background-clip: padding-box;
      border: 5px solid transparent;
      background: #f6f4ee;
      border-radius: 0 0 500px 500px;
      position: absolute;
      left: -15px;
      top: -12px;
      height: 100%;
      width: 100%;
      &:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        margin: -7px;
        border-radius: inherit;
        background: linear-gradient(to bottom, #8c6034, #dfceb1);
      }
    }
    figure {
      height: 565px;
      border-radius: 0 0 500px 500px;
      overflow: hidden;
      box-shadow: 0px 25px 71px 0px #dfceb1;
      position: relative;
      &::after {
        content: "";
        width: 100%;
        height: 100%;
        background: linear-gradient(
          152deg,
          rgba(2, 21, 38, 0.41) 7.1%,
          rgba(2, 21, 38, 0) 89.61%
        );
        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
