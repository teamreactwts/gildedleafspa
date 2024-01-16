import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import MembershipPlan from "@/components/MembershipPlan/MembershipPlan";
import Wrapper from "@/layout/wrapper/Wrapper";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

export const BookingWrapper = styled(Box)``;

const breadCumbList = [
  {
    name: "Services",
    linkName: "/service"
  }
];

const Index = () => {
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle
          title="Membership"
          navItems={breadCumbList}
          pageName="Booking"
        />
        <BookingWrapper className="cmn_gap">
          <MembershipPlan />
        </BookingWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
};

export default Index;
