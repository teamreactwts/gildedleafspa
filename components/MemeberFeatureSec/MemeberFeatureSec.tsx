/* eslint-disable react/no-array-index-key */
import { mediaUrl } from "@/api/endpoints";
import { GetMembershipFeatures } from "@/api/functions/cms.api";
import { IMembershipDetails } from "@/interface/apiresp.interfaces";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { HTMLAttributes } from "react";
import { useQuery } from "react-query";
import CommonHeader from "../CommonHeader/CommonHeader";

export const MemeberFeatureSecWrapper = styled(Box)`
  margin-bottom: 90px;
  @media (max-width: 899px) {
    margin-bottom: 40px;
  }
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
      <Typography component="i">
        {/* {mediaUrl(`membership-feature/${icon}`)} */}
        <img src={mediaUrl(`membership-feature/${icon}`)} alt="icon" />
      </Typography>
      <Typography variant="h3">
        <Link href="#">{title}</Link>
      </Typography>
      <Typography
        dangerouslySetInnerHTML={{
          __html: description as string
        }}
      />
    </FeatureCardWrapper>
  );
};

interface Iprops {
  membershipDetails: IMembershipDetails;
}
export default function MemeberFeatureSec({ membershipDetails }: Iprops) {
  const { data: membershipFeatures } = useQuery(
    "membershipfeature",
    GetMembershipFeatures,
    {
      refetchOnWindowFocus: false
    }
  );
  return (
    <MemeberFeatureSecWrapper>
      <CommonHeader
        title={membershipDetails?.title}
        breakTitle={membershipDetails?.bold_title}
      />
      <Container fixed>
        <Grid container spacing={{ md: 4, xs: 2 }}>
          {!!membershipFeatures &&
            membershipFeatures.data.data.length > 0 &&
            membershipFeatures.data.data?.map((data, index) => (
              <Grid item md={4} xs={12} key={index}>
                <FatureCard {...data} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </MemeberFeatureSecWrapper>
  );
}
