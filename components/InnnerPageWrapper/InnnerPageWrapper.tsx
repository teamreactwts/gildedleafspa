import assest from "@/json/assest";
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
`;

interface innerpagewrapperProps {}

const InnnerPageWrapper: React.FC<
  innerpagewrapperProps & HTMLAttributes<HTMLDivElement>
> = ({ ...props }) => {
  return (
    <InnnerPageWrapperStyled {...props}>
      {props?.children}
    </InnnerPageWrapperStyled>
  );
};

export default InnnerPageWrapper;
