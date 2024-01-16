/* eslint-disable react/no-array-index-key */
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

export const MemeberFeatureSecWrapper = styled(Box)``;
export const FeatureCardWrapper = styled(Box)``;

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
    title: "Beauty Bank",
    description:
      "Your monthly fee acts as a beauty bank. Pay monthly and bank these funds with us. Use them for services at your discretion."
  },
  {
    icon: <FeatureIcon3 />,
    title: "Beauty Bank",
    description:
      "Your monthly fee acts as a beauty bank. Pay monthly and bank these funds with us. Use them for services at your discretion."
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
