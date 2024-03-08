import { mediaUrl } from "@/api/endpoints";
import { GetAffortabilityData } from "@/api/functions/cms.api";

import Wrapper from "@/layout/wrapper/Wrapper";
import Loader from "@/ui/Loader/Loder";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
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
        <BreadcumbTitle
          pageName={data?.data?.data?.short_title}
          title={data?.data?.data?.short_title}
        />
        <AboutUsWrapper className="cmn_gap">
          <Container fixed>
            <Box className="common_titleWrapper">
              <Typography variant="h2">
                {data?.data?.data?.intro_title}
                <Typography variant="caption">
                  {/* Affordable Financing Options Available */}
                </Typography>
              </Typography>
              <Box className="description_body">
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: data?.data?.data?.intro_description as string
                  }}
                />
              </Box>
            </Box>
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
          </Container>
        </AboutUsWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
}
