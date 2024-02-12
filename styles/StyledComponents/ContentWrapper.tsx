import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ContentWrap = styled(Box)`
  padding: 50px;
  .content_wrap {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
    h2 {
      font-size: 43px;
      margin-bottom: 39px;
    }
  }
`;
