/* eslint-disable react/no-array-index-key */
import { mediaUrl } from "@/api/endpoints";
import {
  IMembershipDetails,
  IMembershipFeatures
} from "@/interface/apiresp.interfaces";
import { primaryColors } from "@/themes/_muiPalette";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import React, { HTMLAttributes, useCallback, useState } from "react";
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
  .read_more_btn_otr {
    button {
      padding: 5px 15px;
      font-size: 12px;
      height: auto;
    }
  }
`;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<
  FeatureCardProps & HTMLAttributes<HTMLDivElement>
> = ({ icon, title, description, ...props }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

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
          __html: description.slice(0, 120) as string
        }}
      />
      {description.length > 120 && (
        <Box className="read_more_btn_otr" sx={{ marginTop: "15px" }}>
          <Button variant="contained" color="primary" onClick={handleOpen}>
            Read More
          </Button>
        </Box>
      )}

      <MuiModalWrapper
        open={open}
        onClose={handleClose}
        className="main_modalWrap membership_modal"
      >
        <Box className="membership_content">
          {/* <Typography variant="h2">Details</Typography> */}
          <Typography
            dangerouslySetInnerHTML={{
              __html: description.slice(121, description.length) as string
            }}
          />
        </Box>
      </MuiModalWrapper>
    </FeatureCardWrapper>
  );
};

interface Iprops {
  membershipDetails: IMembershipDetails;
  membershipFeatures: IMembershipFeatures[];
}
export default function MemeberFeatureSec({
  membershipDetails,
  membershipFeatures
}: Iprops) {
  return (
    <MemeberFeatureSecWrapper>
      <CommonHeader
        title={membershipDetails?.title}
        breakTitle={membershipDetails?.bold_title}
      />
      <Container fixed>
        <Grid container spacing={{ md: 4, xs: 2 }}>
          {!!membershipFeatures &&
            membershipFeatures.length > 0 &&
            membershipFeatures.map((data, index) => (
              <Grid item md={4} xs={12} key={index}>
                <FeatureCard {...data} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </MemeberFeatureSecWrapper>
  );
}
