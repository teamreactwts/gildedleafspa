import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const ContentWrap = styled(Box)`
  padding: 50px;
  .content_wrap {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
    h4 {
      font-size: 22px;
      margin-bottom: 25px;
    }
  }
`;