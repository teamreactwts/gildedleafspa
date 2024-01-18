import { mediaUrl } from "@/api/endpoints";
import { GetAboutData } from "@/api/functions/cms.api";
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import CommonGridSec from "@/components/CommonGridSec/CommonGridSec";
import DifferentSec from "@/components/DifferentSec/DifferentSec";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";

export const AboutUsWrapper = styled(Box)``;

export default function Index() {
  const { isLoading, data: aboutData } = useQuery(
    "aboutDetails",
    GetAboutData,
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
        <BreadcumbTitle pageName="About Us" title="About Us" />
        <AboutUsWrapper className="cmn_gap">
          <CommonGridSec
            image={mediaUrl(`about/${aboutData?.data?.data?.image}`)}
          >
            <Typography variant="h2">{aboutData?.data?.data?.title}</Typography>
            <Typography
              dangerouslySetInnerHTML={{
                __html: aboutData?.data?.data?.description as string
              }}
            />
          </CommonGridSec>
          <DifferentSec showInterestSec={false} />
          <CommonGridSec
            image={mediaUrl(`about/${aboutData?.data?.data?.impact_image}`)}
            isReverse
          >
            <Typography variant="h2">
              {aboutData?.data?.data?.impact_title}
            </Typography>
            <Typography
              dangerouslySetInnerHTML={{
                __html: aboutData?.data?.data?.impact_description as string
              }}
            />
          </CommonGridSec>
        </AboutUsWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
}
