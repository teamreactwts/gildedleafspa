import { planCardList } from "@/json/mock/planCardList.mock";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import { CommonHeader, commonHeadderProps } from "../DifferentSec/DifferentSec";
import PriceCard from "../PriceCard/PriceCard";

export const MembershipPlanWrapper = styled(Box)`
  .heading_title {
    p {
      max-width: 580px;
      margin: 0 auto;
    }
  }
`;

interface membershipInterface extends commonHeadderProps {}

export default function MembershipPlan({ ...props }: membershipInterface) {
  const [selectPanel, setSelectPanel] = useState<number>(0);

  return (
    <MembershipPlanWrapper>
      <Container fixed>
        <CommonHeader
          title={props?.title || "Gilded Leaf Med Spa "}
          breakTitle={props?.breakTitle || "Membership Plans"}
          subTitle={
            props?.subTitle ||
            "Embrace a world of beauty and elegance with our memberships. Join us in your journey to look as young as you feel."
          }
        />
        <Grid container spacing={{ lg: 4, md: 3, xs: 2 }}>
          {planCardList?.map((data, index) => (
            <Grid item md={4} xs={12} key={data?.type}>
              <PriceCard
                {...data}
                className={index + 1 === selectPanel ? "active" : ""}
                onClick={() => setSelectPanel(index + 1)}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MembershipPlanWrapper>
  );
}
