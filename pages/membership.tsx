import {
  GetMembershipDetails,
  GetMembershipFeatures,
  GetMembershipPlans
} from "@/api/functions/cms.api";

import {
  IMembershipDetails,
  IMembershipFeatures,
  IMembershipPlans
} from "@/interface/apiresp.interfaces";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import dynamic from "next/dynamic";
import { useQuery } from "react-query";

const BreadcumbTitle = dynamic(
  () => import("@/components/BreadcumbTitle/BreadcumbTitle"),
  { ssr: true }
);
const InnnerPageWrapper = dynamic(
  () => import("@/components/InnnerPageWrapper/InnnerPageWrapper"),
  { ssr: true }
);
const MembershipPlan = dynamic(
  () => import("@/components/MembershipPlan/MembershipPlan"),
  { ssr: true }
);
const MemeberFeatureSec = dynamic(
  () => import("@/components/MemeberFeatureSec/MemeberFeatureSec"),
  { ssr: true }
);
export const MemebershipWrapper = styled(Box)`
  .subTitle_para {
    max-width: 936px;
    text-align: center;
    margin: 0 auto 75px !important;
    @media (max-width: 899px) {
      margin: 0 auto 40px !important;
    }
  }
`;

export default function Index() {
  const { isLoading, data: membershipDetails } = useQuery(
    "membershipdetails",
    GetMembershipDetails,
    {
      refetchOnWindowFocus: false
    }
  );
  const { data: membershipFeatures } = useQuery(
    "membershipfeature",
    GetMembershipFeatures,
    {
      refetchOnWindowFocus: false
    }
  );
  const { data: membershipPlan } = useQuery(
    "membershipplan",
    GetMembershipPlans,
    {
      refetchOnWindowFocus: false
    }
  );
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle title="Membership" pageName="Membership" />
        <MemebershipWrapper className="cmn_gap">
          <Container fixed>
            <Typography
              className="subTitle_para"
              dangerouslySetInnerHTML={{
                __html: membershipDetails?.data?.data
                  ?.head_description as string
              }}
            />
          </Container>
          {!!membershipFeatures?.data?.data &&
            membershipFeatures?.data?.data.length > 0 && (
              <MemeberFeatureSec
                membershipDetails={
                  membershipDetails?.data?.data as IMembershipDetails
                }
                membershipFeatures={
                  membershipFeatures?.data?.data as IMembershipFeatures[]
                }
              />
            )}

          <MembershipPlan
            membershipDetails={
              membershipDetails?.data?.data as IMembershipDetails
            }
            membershipPlan={membershipPlan?.data?.data as IMembershipPlans[]}
          />
        </MemebershipWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
}
