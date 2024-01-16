/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { HTMLAttributes } from "react";

export const ContactFormWrapper = styled(Box)`
  padding: 40px 40px;
  border-radius: 20px;
  background: linear-gradient(
    120deg,
    rgba(253, 252, 248, 0.74) 3.57%,
    rgba(253, 252, 248, 0.29) 96.74%
  );
  backdrop-filter: blur(2px);
  h4 {
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 40px;
  }
`;
export const EachField = styled(Box)`
  label {
    color: ${primaryColors?.primary};
    font-family: Noto Sans;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    display: inline-block;
    margin-bottom: 10px;
  }
`;

interface contactProps {
  contactTitle: string;
  stepIncr: (data: number) => void;
}

const ContactForm: React.FC<contactProps & HTMLAttributes<HTMLDivElement>> = ({
  contactTitle,
  stepIncr,
  ...props
}) => {
  return (
    <Container fixed>
      <ContactFormWrapper {...props}>
        <Typography variant="h4">{contactTitle}</Typography>
        <Grid container spacing={{ md: 3, xs: 2 }}>
          <Grid item md={6} xs={12}>
            <EachField>
              <Typography component="label">Full Name*</Typography>
              <InputFieldCommon placeholder="Enter Full Name" />
            </EachField>
          </Grid>
          <Grid item md={6} xs={12}>
            <EachField>
              <Typography component="label">Age*</Typography>
              <InputFieldCommon placeholder="Enter Age" />
            </EachField>
          </Grid>
          <Grid item md={6} xs={12}>
            <EachField>
              <Typography component="label">Phone Number*</Typography>
              <InputFieldCommon placeholder="Enter Phone Number" />
            </EachField>
          </Grid>
          <Grid item md={6} xs={12}>
            <EachField>
              <Typography component="label">Email*</Typography>
              <InputFieldCommon placeholder="Enter Email" />
            </EachField>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          marginTop="50px"
        >
          <CustomButtonPrimary
            variant="contained"
            color="primary"
            onClick={() => stepIncr(3)}
          >
            <Typography variant="caption">Continue</Typography>
          </CustomButtonPrimary>
        </Stack>
      </ContactFormWrapper>
    </Container>
  );
};

export default ContactForm;
