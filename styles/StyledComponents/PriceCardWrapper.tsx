import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const PriceCardWrapper = styled(Box)`
  border-radius: 10px;
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

  &.active {
    padding: 0;
    .wrapper_otr {
      &::before {
        display: none;
      }
    }
  }
  .wrapper_otr {
    background-color: ${primaryColors?.white};
    border-radius: 10px;
    position: relative;
    height: 100%;
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
    height: 100%;
  }

  .title_block {
    padding: 30px 30px;
    h5 {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.2;
    }
    h4 {
      color: ${primaryColors?.colorA67033};
      font-family: Nunito Sans;
      font-size: 40px;
      font-weight: 800;
      span {
        color: ${primaryColors?.colorA67033};
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
      }
    }
  }
  .description_block {
    padding: 20px 70px 20px 30px;
    background-color: ${primaryColors?.colorFBF9F0};
    p {
      color: ${primaryColors?.themTextcolor};
      font-family: Nunito Sans;
      font-size: 14px;
      font-weight: 400;
    }
  }
  .benefit_block {
    padding: 25px 30px;
    h4 {
      font-family: Nunito Sans;
      font-size: 18px;
      font-weight: 600;
      line-height: 1;
    }
    ul {
      li {
        color: ${primaryColors?.primary};
        font-family: Nunito Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        align-items: center;
        span {
          width: auto;
          height: auto;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-right: 15px;
        }
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
  }
  .perfect_block {
    padding: 10px 30px 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 230px;
    h4 {
      font-family: Nunito Sans;
      font-size: 18px;
      font-weight: 600;
      line-height: 1;
    }
    p {
      color: ${primaryColors?.primary};
      font-family: Nunito Sans;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.5;
    }
    button {
      margin-top: 50px;
      padding: 11px 25px;
    }
  }
`;
