import CommonHeader from "@/components/CommonHeader/CommonHeader";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import BrandLogo from "@/ui/Icons/BrandLogo";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

export const ComminSoonWrap = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  .brand_logo {
    line-height: 0;
    font-size: 0;
    display: inline-block;
    margin-bottom: 40px;
    @media (max-width: 899px) {
      margin-bottom: 30px;
    }
    @media (max-width: 599px) {
      margin-bottom: 25px;
      width: 180px;
    }
    svg {
      @media (max-width: 599px) {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .heading_title {
    h2 {
      font-size: 90px;
      margin: 0;
      @media (max-width: 899px) {
        font-size: 65px;
      }
      @media (max-width: 599px) {
        font-size: 50px;
      }
    }
    margin-bottom: 30px;
  }
  p {
    font-size: 20px;
    font-weight: 500;
    max-width: 350px;
    text-align: center;
    @media (max-width: 599px) {
      font-size: 16px;
      max-width: 200px;
    }
  }
`;

function ComminSoon() {
  return (
    <InnnerPageWrapper>
      <Container fixed>
        <ComminSoonWrap className="main_sectionWrap">
          <i className="brand_logo">
            <BrandLogo />
          </i>
          <CommonHeader title="Coming" breakTitle="Soon" />

          <Typography>
            Be the first to Know when our new Estore is live.
          </Typography>
        </ComminSoonWrap>
      </Container>
    </InnnerPageWrapper>
  );
}

export default ComminSoon;
