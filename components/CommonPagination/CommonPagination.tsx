import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/system";

export const CommonPaginationWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  .MuiPagination-root {
    .MuiPagination-ul {
      li {
        .MuiPaginationItem-root {
          padding: 0;
          width: 50px;
          height: 50px;

          border-radius: 100%;
          margin: 0;
          margin: 0 9px;
          background-color: ${primaryColors.white};
          filter: drop-shadow(0px 1px 18px rgba(238, 238, 238, 0.78));
          color: ${primaryColors.color8F8F8F};
          font-family: Noto Sans;
          font-size: 16px;
          font-weight: 500;
          line-height: 1;
          &.Mui-selected {
            background-color: #a67033;
            filter: drop-shadow(0px 1px 18px rgba(238, 238, 238, 0.78));
            color: ${primaryColors.white};
          }
          &.MuiPaginationItem-previousNext {
            width: auto;
            height: auto;
            background-color: transparent;
            position: relative;
            svg{
             path{
              fill: ${primaryColors.color595758};
             
             }

            }
            &:hover{
                svg{
                  path{
                    fill: ${primaryColors.colorA67033};
                  }
                }
              }
              &.Mui-disabled {
                opacity: 1;
                svg{
                  path{
                    fill: ${primaryColors.colorA67033};
                  }
                }
              }
          
            
          }
        }
        &:first-child {
          .MuiPaginationItem-root {
            margin: 0;
          }
        }
        &:last-child {
          .MuiPaginationItem-root {
            margin: 0;
          }
        }
      }
    }
  }
`;

function CommonPagination() {
  return (
    <CommonPaginationWrap>
      <Pagination count={5} />
    </CommonPaginationWrap>
  );
}

export default CommonPagination;
