import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useCallback, useState } from "react";

import {
  IMembershipDetails,
  IMembershipPlans
} from "@/interface/apiresp.interfaces";
import CommonHeader, { commonHeadderProps } from "../CommonHeader/CommonHeader";
import PriceCard from "../PriceCard/PriceCard";

export const MembershipPlanWrapper = styled(Box)`
  .heading_title {
    p {
      max-width: 580px;
      margin: 0 auto;
    }
  }
`;

interface membershipInterface extends commonHeadderProps {
  membershipDetails: IMembershipDetails;
  membershipPlan?: IMembershipPlans[];
}

export default function MembershipPlan({ ...props }: membershipInterface) {
  const [selectPanel, setSelectPanel] = useState<number>(0);

  const selectValuecallback = useCallback((data: number) => {
    setSelectPanel(data + 1);
  }, []);

  return (
    <MembershipPlanWrapper>
      <Container fixed>
        <CommonHeader
          title={props.membershipDetails?.title_1}
          breakTitle={props.membershipDetails?.bold_title_1}
          subTitle={props.membershipDetails?.description_1}
        />
        <Grid
          justifyContent="center"
          container
          spacing={{ lg: 4, md: 3, xs: 2 }}
        >
          {!!props.membershipPlan &&
            props.membershipPlan.length > 0 &&
            props.membershipPlan?.map((data, index) => (
              <Grid item md={4} xs={12} key={data?._id}>
                <PriceCard
                  {...data}
                  className={index + 1 === selectPanel ? "active" : ""}
                  selectValuecallback={selectValuecallback}
                  indexNumber={index}
                />
              </Grid>
            ))}
        </Grid>
      </Container>
    </MembershipPlanWrapper>
  );
}
