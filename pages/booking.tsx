/* eslint-disable no-nested-ternary */
import { GetMembershipDetails } from "@/api/functions/cms.api";
import { IMembershipDetails } from "@/interface/apiresp.interfaces";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { useQuery } from "react-query";

const BreadcumbTitle = dynamic(
  () => import("@/components/BreadcumbTitle/BreadcumbTitle"),
  { ssr: true }
);
const InnnerPageWrapper = dynamic(
  () => import("@/components/InnnerPageWrapper/InnnerPageWrapper"),
  { ssr: true }
);
const ContactForm = dynamic(
  () => import("@/components/ContactForm/ContactForm"),
  {
    ssr: false
  }
);
const CalendarSec = dynamic(
  () => import("@/components/CalendarSec/CalendarSec"),
  {
    ssr: false
  }
);
const MembershipPlan = dynamic(
  () => import("@/components/MembershipPlan/MembershipPlan"),
  {
    ssr: false
  }
);

export const BookingWrapper = styled(Box)`
  .cmn_btn_booking {
    min-width: auto;
  }
`;

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
  const { isLoading, data: membershipDetails } = useQuery(
    "membershipdetails",
    GetMembershipDetails,
    {
      refetchOnWindowFocus: false
    }
  );
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
                membershipDetails={
                  membershipDetails?.data?.data as IMembershipDetails
                }
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
                    className="cmn_btn_booking"
                    sx={{ marginRight: "15px" }}
                    onClick={() => setStep((data) => data + 1)}
                  >
                    <Typography variant="caption">Skip</Typography>
                  </CustomButtonPrimary>
                  <CustomButtonPrimary
                    variant="contained"
                    color="primary"
                    className="cmn_btn_booking"
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
