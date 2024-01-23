import { GetMembershipDetails } from "@/api/functions/cms.api";
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import MembershipPlan from "@/components/MembershipPlan/MembershipPlan";
import MemeberFeatureSec from "@/components/MemeberFeatureSec/MemeberFeatureSec";
import { IMembershipDetails } from "@/interface/apiresp.interfaces";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";

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
          <MemeberFeatureSec
            membershipDetails={
              membershipDetails?.data?.data as IMembershipDetails
            }
          />
          <MembershipPlan
            membershipDetails={
              membershipDetails?.data?.data as IMembershipDetails
            }
          />
        </MemebershipWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
}
