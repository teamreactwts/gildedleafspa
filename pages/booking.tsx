/* eslint-disable no-nested-ternary */
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
import { useCallback, useState } from "react";

export const BookingWrapper = styled(Box)``;

const breadCumbList = [
  {
    name: "Services",
    linkName: "/service"
  }
];

const Index = () => {
  const [step, setStep] = useState(1);

  const stepIncr = useCallback((data: number) => {
    setStep(data);
  }, []);

  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle
          title="Booking"
          navItems={breadCumbList}
          pageName="Booking"
        />
        <BookingWrapper className="cmn_gap">
          {step === 1 ? (
            <>
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
                    onClick={() => setStep((data) => data + 1)}
                  >
                    <Typography variant="caption">Skip</Typography>
                  </CustomButtonPrimary>
                  <CustomButtonPrimary
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      alert("Please Click skip to go next step!!!")
                    }
                  >
                    <Typography variant="caption">Continue</Typography>
                  </CustomButtonPrimary>
                </Stack>
              </Container>
            </>
          ) : step === 2 ? (
            <ContactForm
              contactTitle="Personal Information"
              stepIncr={stepIncr}
            />
          ) : step === 3 ? (
            <CalendarSec stepIncr={stepIncr} />
          ) : null}
        </BookingWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
};

export default Index;
