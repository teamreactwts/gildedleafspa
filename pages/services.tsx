import { mediaUrl } from "@/api/endpoints";
import { GetServiceList } from "@/api/functions/cms.api";
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import ServiceSectionCard from "@/components/ServiceCard/ServiceCard";
import { Doc } from "@/interface/apiresp.interfaces";
import Wrapper from "@/layout/wrapper/Wrapper";
import { SurviceWrap } from "@/styles/StyledComponents/ServiceWrap";
import Loader from "@/ui/Loader/Loder";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useQuery } from "react-query";

function Services() {
  const [page, setPage] = React.useState(0);
  const [per_page, setPageLimit] = React.useState(0);
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const [serviceList, setServiceList] = useState<Doc[]>();

  const { isLoading } = useQuery(
    ["serviceList", page],

    {
      queryFn: () => GetServiceList({ page, per_page }),
      refetchOnWindowFocus: false,
      onSuccess(data) {
        if (data.status === 200) {
          setTotalPage(data?.data?.data?.total);
          !!serviceList && serviceList?.length > 0
            ? setServiceList([...serviceList, ...data?.data?.data])
            : setServiceList(data?.data?.data);
        }
      }
    }
  );
  const handleViewMore = () => {
    setPage(page + 1);
  };
  if (isLoading && page == 0) {
    return <Loader isLoading={isLoading} />;
  }
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle title="Services" pageName="Services" />

        <SurviceWrap>
          <Container fixed>
            <Box className="titel_text">
              <Typography variant="h2">
                Which service are
                <Typography variant="caption">you interested in?</Typography>
              </Typography>
            </Box>
            <Box className="service_card">
              <Grid container spacing={3.8}>
                {!!serviceList &&
                  serviceList.length > 0 &&
                  serviceList.map((data, index) => (
                    <Grid item xs={12} lg={6}>
                      <ServiceSectionCard
                        serviceImage={mediaUrl(`service/${data?.icon}`)}
                        title={data?.short_title}
                        description={data?.description}
                        item={data}
                      />
                    </Grid>
                  ))}
              </Grid>
              {/* {!!serviceList && serviceList.length < totalPage && (
                <Box className="view_btn">
                  <CustomButtonPrimary
                    variant="contained"
                    color="primary"
                    className="member_btn"
                    onClick={() => handleViewMore()}
                  >
                    <Typography variant="caption">View More</Typography>
                  </CustomButtonPrimary>
                </Box>
              )} */}
            </Box>
          </Container>
        </SurviceWrap>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default Services;
