import { mediaUrl } from "@/api/endpoints";
import { GetAffortabilityData } from "@/api/functions/cms.api";
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import CommonGridSec from "@/components/CommonGridSec/CommonGridSec";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useQuery } from "react-query";

export const AboutUsWrapper = styled(Box)``;

export default function Index() {
  const { isLoading, data } = useQuery(
    "affortabilityDetails",
    GetAffortabilityData,
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
        <BreadcumbTitle pageName="Affordability" title="Affordability" />
        <AboutUsWrapper className="cmn_gap">
          <CommonGridSec
            image={mediaUrl(`affordability/${data?.data?.data?.image}`)}
            style={{ marginBottom: "50px" }}
          >
            <Typography variant="h2">{data?.data?.data?.title}</Typography>
            <Typography
              dangerouslySetInnerHTML={{
                __html: data?.data?.data?.description as string
              }}
            />
          </CommonGridSec>

          <CommonGridSec
            image={mediaUrl(`affordability/${data?.data?.data?.image_1}`)}
            isReverse
          >
            <Typography variant="h2">{data?.data?.data?.title_1}</Typography>
            <Typography
              dangerouslySetInnerHTML={{
                __html: data?.data?.data?.description_1 as string
              }}
            />
          </CommonGridSec>
        </AboutUsWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
}
