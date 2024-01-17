import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import React, { HTMLAttributes } from "react";

const InnnerPageWrapperStyled = styled(Box)`
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    background: url(${assest?.banner_back_logo}) no-repeat center center;
    background-size: 100% 100%;
    width: 40vw;
    height: 40vw;
    position: absolute;
    right: 7vw;
    top: 0;
    z-index: -2;
  }
  &::before {
    content: "";
    width: 40vw;
    height: 40vw;
    background: url(${assest?.inner_wrapper_vector}) no-repeat center center;
    background-size: cover;
    position: absolute;
    right: -6vw;
    top: 13vw;
    z-index: -1;
  }
  .gradient_background {
    border-radius: 464px;
    background: ${primaryColors.colorE8DDD0};
    filter: blur(162px);
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 464px;
    height: 464px;
    border-radius: 100%;
    z-index: -1;
    pointer-events: none;
  }
  .gradient_background_top {
    border-radius: 464px;
    background: ${primaryColors.colorE8DDD0};
    filter: blur(162px);
    position: absolute;
    top: 30%;
    left: 0;
    transform: translateY(-50%);
    width: 464px;
    height: 464px;
    border-radius: 100%;
    z-index: -1;
    pointer-events: none;
  }
  .gradient_background_rgt{
    border-radius: 464px;
    background: ${primaryColors.colorE8DDD0};
    filter: blur(162px);
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 464px;
    height: 464px;
    border-radius: 100%;
    z-index: -1;
    pointer-events: none;
  }
  .gradient_background_rgtTop{
    border-radius: 464px;
    background: ${primaryColors.colorE8DDD0};
    filter: blur(162px);
    position: absolute;
    top: 30%;
    right: 0;
    transform: translateY(-50%);
    width: 464px;
    height: 464px;
    border-radius: 100%;
    z-index: -1;
    pointer-events: none;
  }
`;

interface innerpagewrapperProps {}

const InnnerPageWrapper: React.FC<
  innerpagewrapperProps & HTMLAttributes<HTMLDivElement>
> = ({ ...props }) => {
  return (
    <InnnerPageWrapperStyled {...props}>
      {props?.children}
      <Box className="gradient_background" />
      <Box className="gradient_background_top" />
      <Box className="gradient_background_rgt" />
      <Box className="gradient_background_rgtTop" />
    </InnnerPageWrapperStyled>
  );
};

export default InnnerPageWrapper;
