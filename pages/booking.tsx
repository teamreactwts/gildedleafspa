import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import CalendarSec from "@/components/CalendarSec/CalendarSec";
import ContactForm from "@/components/ContactForm/ContactForm";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import MembershipPlan from "@/components/MembershipPlan/MembershipPlan";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

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
          title="Booking"
          navItems={breadCumbList}
          pageName="Booking"
        />
        <BookingWrapper className="cmn_gap">
          <MembershipPlan
            title="Select "
            breakTitle="Membership Plans"
            subTitle="Embrace a world of beauty and elegance with our memberships. Join us in your journey to look as young as you feel."
          />
          <Container fixed>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              marginTop={{ md: "50px", xs: "25px" }}
            >
              <CustomButtonPrimary
                variant="outlined"
                color="primary"
                sx={{ marginRight: "15px" }}
              >
                <Typography variant="caption">Skip</Typography>
              </CustomButtonPrimary>
              <CustomButtonPrimary variant="contained" color="primary">
                <Typography variant="caption">Continue</Typography>
              </CustomButtonPrimary>
            </Stack>
          </Container>
          <ContactForm contactTitle="Personal Information" />
          <CalendarSec />
        </BookingWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
};

export default Index;
