/* eslint-disable react/no-array-index-key */
import { mediaUrl } from "@/api/endpoints";
import { GetConditionDetails } from "@/api/functions/cms.api";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import ServiceSectionCard from "@/components/ServiceCard/ServiceCard";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { WrinkleFinelinesWrapper } from "@/styles/StyledComponents/WrinkleFineLineWrap";
import Loader from "@/ui/Loader/Loder";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";

export const sectioncardList = [
  {
    serviceImage: assest.diffIcon6,
    title: "Botox",
    description:
      "Botox effectively softens wrinkles and combats signs of aging..."
  },
  {
    serviceImage: assest.diffIcon10,
    title: "Fillers",
    description:
      "Dermal fillers rejuvenate and enhance facial contours by smoothing..."
  },
  {
    serviceImage: assest.diffIcon8,
    title: "Laser resurfacing",
    description:
      "The Era Elite laser by Aerolase offers advanced skin rejuvenation..."
  },
  {
    serviceImage: assest.diffIcon11,
    title: "Laser rejuvenation",
    description:
      "A versatile laser solution, the Neo Elite by Aerolase excels in skin..."
  }
];
function ConditionDetails() {
  const router = useRouter();
  const { isLoading, data, isError } = useQuery(
    ["conditionDetails", router.query.id],

    {
      queryFn: () => GetConditionDetails({ _id: router.query.id as string }),
      refetchOnWindowFocus: false
    }
  );
  useEffect(() => {
    if (isError) {
      router.push("/404");
    }
  }, [isError]);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <Wrapper>
      <InnnerPageWrapper>
        <WrinkleFinelinesWrapper>
          <Container fixed>
            <Stack
              direction="row"
              alignItems="flex-start"
              className="desciption_section"
            >
              <figure>
                <Image
                  src={mediaUrl(`condition/${data?.data?.data?.image}`)}
                  alt="Image"
                  width={279}
                  height={321}
                />
              </figure>
              <Box className="product_details_wrap">
                <Typography variant="h3">{data?.data?.data?.title}</Typography>
                <Typography
                  className="product_text_description"
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: data?.data?.data?.description as string
                  }}
                />
              </Box>
            </Stack>
            <Box className="section_card">
              <Grid container spacing={3.8}>
                {!!data?.data?.data?.serivce &&
                  data?.data?.data?.serivce.length > 0 &&
                  data?.data?.data?.serivce.map((item, index) => (
                    <Grid item xs={12} lg={6} key={index}>
                      <ServiceSectionCard
                        serviceImage={mediaUrl(`service/${item?.icon}`)}
                        title={item.short_title}
                        description={item.description}
                      />
                    </Grid>
                  ))}
              </Grid>
            </Box>
          </Container>
        </WrinkleFinelinesWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default ConditionDetails;
