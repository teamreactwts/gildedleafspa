/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetCmsDetails } from "@/api/functions/cms.api";
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import Wrapper from "@/layout/wrapper/Wrapper";
import { ContentWrap } from "@/styles/StyledComponents/ContentWrapper";
import Loader from "@/ui/Loader/Loder";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useQuery } from "react-query";

function TermsOfUse() {
  const { isLoading, data, isError } = useQuery(
    ["cmsDetails"],

    {
      queryFn: () => GetCmsDetails("terms-views"),
      refetchOnWindowFocus: false
    }
  );

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle title="Terms of Use" pageName="Terms of Use" />
        <ContentWrap>
          <Container fixed>
            <Box className="content_wrap">
              <Typography variant="h2">{data?.data?.data?.title}</Typography>
              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{
                  __html: data?.data?.data?.content as string
                }}
              />
            </Box>
          </Container>
        </ContentWrap>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default TermsOfUse;
