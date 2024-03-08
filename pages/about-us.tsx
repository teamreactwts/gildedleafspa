import { mediaUrl } from "@/api/endpoints";
import { GetAboutData } from "@/api/functions/cms.api";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
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
const CommonGridSec = dynamic(
  () => import("@/components/CommonGridSec/CommonGridSec"),
  {
    ssr: false
  }
);
const DifferentSec = dynamic(
  () => import("@/components/DifferentSec/DifferentSec"),
  {
    ssr: false
  }
);

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
