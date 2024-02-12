/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { GetBlogList } from "@/api/functions/cms.api";
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import { blogDoc } from "@/interface/apiresp.interfaces";
import Wrapper from "@/layout/wrapper/Wrapper";
import { ContentWrap } from "@/styles/StyledComponents/ContentWrapper";
import Loader from "@/ui/Loader/Loder";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useQuery } from "react-query";

function TermsServices() {
  const [page, setPage] = React.useState(1);
  const [per_page, setPageLimit] = React.useState(3);
  const [totalPage, setTotalPage] = React.useState<number>(0);
  const [blogList, setBlogList] = useState<blogDoc[]>();

  const { isLoading } = useQuery(
    ["blogList", page],

    {
      queryFn: () => GetBlogList({ page, per_page }),
      refetchOnWindowFocus: false,
      onSuccess(data) {
        if (data.status === 200) {
          setTotalPage(data?.data?.data?.pages);
          // !!blogList && blogList?.length > 0
          //   ? setBlogList([...blogList, ...data?.data?.data?.docs])
          setBlogList(data?.data?.data?.docs);
        }
      }
    }
  );

  if (isLoading) {
    return <Loader isLoading={false} />;
  }

  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle
          title="Terms of services"
          pageName="Terms of services"
        />
        <ContentWrap>
          <Container fixed>
            <Box className="content_wrap">
              <Typography variant="h2">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Typography>
              <Typography variant="body1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Box>
          </Container>
        </ContentWrap>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default TermsServices;
