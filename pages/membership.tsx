import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import MembershipPlan from "@/components/MembershipPlan/MembershipPlan";
import MemeberFeatureSec from "@/components/MemeberFeatureSec/MemeberFeatureSec";
import Wrapper from "@/layout/wrapper/Wrapper";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export const MemebershipWrapper = styled(Box)`
  .subTitle_para {
    max-width: 936px;
    text-align: center;
    margin: 0 auto 75px !important;
  }
`;

export default function Index() {
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle title="Membership" pageName="Membership" />
        <MemebershipWrapper className="cmn_gap">
          <Container fixed>
            <Typography className="subTitle_para">
              Embark on a journey of beauty and wellness with our exclusive
              membership plans tailored to your needs. Choose from three tiers -
              Gold, Diamond, and Platinum - each designed to enhance your med
              spa experience while offering incredible value and flexibility.
            </Typography>
          </Container>
          <MemeberFeatureSec />
          <MembershipPlan />
        </MemebershipWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
}
