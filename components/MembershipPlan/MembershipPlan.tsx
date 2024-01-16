import { planCardList } from "@/json/mock/planCardList.mock";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { CommonHeader } from "../DifferentSec/DifferentSec";
import PriceCard from "../PriceCard/PriceCard";

export const MembershipPlanWrapper = styled(Box)`
  .heading_title {
    p {
      max-width: 580px;
      margin: 0 auto;
    }
  }
`;

export default function MembershipPlan() {
  return (
    <MembershipPlanWrapper>
      <Container fixed>
        <CommonHeader
          title="Gilded Leaf Med Spa "
          breakTitle="Membership Plans"
          subTitle="Embrace a world of beauty and elegance with our memberships. Join us in your journey to look as young as you feel."
        />
        <Grid container spacing={{ lg: 4, md: 3, xs: 2 }}>
          {planCardList?.map((data, index) => (
            <Grid item md={4} xs={12} key={data?.type}>
              <PriceCard {...data} className={index == 1 ? "active" : ""} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </MembershipPlanWrapper>
  );
}
