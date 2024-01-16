/* eslint-disable react/no-array-index-key */
import { primaryColors } from "@/themes/_muiPalette";
import FeatureIcon1 from "@/ui/Icons/FeatureIcon1";
import FeatureIcon2 from "@/ui/Icons/FeatureIcon2";
import FeatureIcon3 from "@/ui/Icons/FeatureIcon3";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { CommonHeader } from "../DifferentSec/DifferentSec";

export const MemeberFeatureSecWrapper = styled(Box)`
  margin-bottom: 90px;
`;

export const FeatureCardWrapper = styled(Box)`
  padding: 30px 30px;
  border-radius: 20px;
  background: linear-gradient(
    120deg,
    rgba(253, 252, 248, 0.74) 3.57%,
    rgba(253, 252, 248, 0.29) 96.74%
  );
  backdrop-filter: blur(2px);
  min-height: 100%;
  i {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    margin-bottom: 15px;
  }
  h3 {
    font-family: "Noto Sans";
    font-size: 18px;
    font-weight: 700;
    line-height: 1.2;
    a {
      color: inherit;
      &:hover {
        color: ${primaryColors?.primary1};
      }
    }
  }
`;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FatureCard: React.FC<
  FeatureCardProps & HTMLAttributes<HTMLDivElement>
> = ({ icon, title, description, ...props }) => {
  return (
    <FeatureCardWrapper {...props}>
      <Typography component="i">{icon}</Typography>
      <Typography variant="h3">
        <Link href="#url">{title}</Link>
      </Typography>
      <Typography>{description}</Typography>
    </FeatureCardWrapper>
  );
};

export const featureCardList = [
  {
    icon: <FeatureIcon1 />,
    title: "Beauty Bank",
    description:
      "Your monthly fee acts as a beauty bank. Pay monthly and bank these funds with us. Use them for services at your discretion."
  },
  {
    icon: <FeatureIcon2 />,
    title: "Flexibility",
    description:
      "No fees, no contracts. Memberships can be frozen or canceled anytime."
  },
  {
    icon: <FeatureIcon3 />,
    title: "Discounted Services",
    description: "Enjoy discounted rates on our wide range of services."
  }
];

export default function MemeberFeatureSec() {
  return (
    <MemeberFeatureSecWrapper>
      <CommonHeader title="Membership" breakTitle="Features:" />
      <Container fixed>
        <Grid container spacing={{ md: 2, xs: 2 }}>
          {featureCardList?.map((data, index) => (
            <Grid item md={4} xs={12} key={index}>
              <FatureCard {...data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MemeberFeatureSecWrapper>
  );
}
