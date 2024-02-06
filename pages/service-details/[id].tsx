/* eslint-disable no-console */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import { mediaUrl } from "@/api/endpoints";
import { GetServiceDetails } from "@/api/functions/cms.api";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { ServiceDetailsWrapper } from "@/styles/StyledComponents/ServiceDetailsWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import ArrowIcon from "@/ui/Icons/ArrowIcon";
import MinusIcon from "@/ui/Icons/MinusIcon";
import PlusIcon from "@/ui/Icons/PlusIcon";
import TickIcon from "@/ui/Icons/TickIcon";
import Loader from "@/ui/Loader/Loder";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export const benifitsList = [
  {
    name: "Lorem ipsum dolor sit amet consectetur. Imperdiet nec."
  },
  {
    name: "Pellentesque nec enim sagittis nullam purus at."
  },
  {
    name: "Lorem ipsum dolor sit amet consectetur."
  },
  {
    name: "Imperdiet lacus dis pellentesque nunc tincidunt"
  }
];
export const servicedetailsList = [
  {
    serviceImage: assest.slider1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempor dui risus tincidunt congue ac. Dolor cursus tincidunt non."
  },
  {
    serviceImage: assest.slider1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempor dui risus tincidunt congue ac. Dolor cursus tincidunt non."
  },
  {
    serviceImage: assest.slider1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempor dui risus tincidunt congue ac. Dolor cursus tincidunt non."
  },
  {
    serviceImage: assest.slider1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempor dui risus tincidunt congue ac. Dolor cursus tincidunt non."
  }
];
function createData(
  type: string,
  Gold: number,
  Diamond: number,
  Platinum: number
) {
  return { type, Gold, Diamond, Platinum };
}
const rows = [
  createData("Wrinkles and fine lines", 15, 20, 25),
  createData("Lorem ipsum dolor sit amet", 15, 20, 25),
  createData("Lorem ipsum dolor sit amet", 15, 20, 25)
];
export const fequent_questionListSection = [
  {
    title: "Lorem ipsum dolor sit amet ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan efficitur arcu quis volutpat. Nam lobortis metus nulla, ornare venenatis nisi consectetur ac."
  },
  {
    title: "Nam imperdiet faucibus molestie ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan efficitur arcu quis volutpat. Nam lobortis metus nulla, ornare venenatis nisi consectetur ac."
  },
  {
    title: "Lorem ipsum dolor sit amet ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan efficitur arcu quis volutpat. Nam lobortis metus nulla, ornare venenatis nisi consectetur ac."
  },
  {
    title: "Nam imperdiet faucibus molestie ?",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan efficitur arcu quis volutpat. Nam lobortis metus nulla, ornare venenatis nisi consectetur ac."
  }
];

function ServiceDetails() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const router = useRouter();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const { isLoading, data, isError } = useQuery(
    ["serviceDetails", router.query.id],

    {
      queryFn: () => GetServiceDetails({ _id: router.query.id as string }),
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
      <ServiceDetailsWrapper>
        <InnnerPageWrapper>
          <Container fixed>
            <Stack
              direction="row"
              alignItems="flex-start"
              className="service_details_top"
            >
              <Box className="service_imgSection">
                <figure>
                  <Image
                    src={mediaUrl(`service/${data?.data?.data?.icon}`)}
                    alt="serviceImg"
                    width={89}
                    height={106}
                  />
                </figure>
              </Box>
              <Box className="service_titleDescription">
                <Typography variant="h3">{data?.data?.data?.title}</Typography>
                <Typography
                  variant="body1"
                  dangerouslySetInnerHTML={{
                    __html: data?.data?.data?.description as string
                  }}
                />
                <List disablePadding>
                  <ListItem disablePadding>
                    <CustomButtonPrimary color="primary" variant="contained">
                      <Typography variant="caption">
                        Buy Membership Plan
                      </Typography>
                    </CustomButtonPrimary>
                  </ListItem>
                  <ListItem disablePadding>
                    <CustomButtonPrimary
                      color="primary"
                      variant="outlined"
                      onClick={() => router.push("/booking")}
                    >
                      <Typography variant="caption">Book Now</Typography>
                    </CustomButtonPrimary>
                  </ListItem>
                </List>
              </Box>
            </Stack>
            <Box className="benifits_use">
              <Grid container spacing={{ md: 3.8, xs: 3.1 }}>
                <Grid item lg={6} xs={12}>
                  <Box className="list_wrap">
                    <Typography variant="h4">
                      {data?.data?.data?.benefit_heading}
                    </Typography>
                    <List disablePadding>
                      {!!data?.data?.data?.benefits_options &&
                        data?.data?.data?.benefits_options.length > 0 &&
                        data?.data?.data?.benefits_options.map(
                          (item, index) => (
                            <ListItem disablePadding key={index}>
                              <Stack direction="row" alignItems="center">
                                <i>
                                  <TickIcon />
                                </i>
                                <Typography>{item}</Typography>
                              </Stack>
                            </ListItem>
                          )
                        )}
                    </List>
                  </Box>
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Box className="list_wrap">
                    <Typography variant="h4">
                      {data?.data?.data?.how_to_use_heading}
                    </Typography>
                    <List disablePadding>
                      {!!data?.data?.data?.how_to_use_options &&
                        data?.data?.data?.how_to_use_options.length > 0 &&
                        data?.data?.data?.how_to_use_options.map(
                          (item, index) => (
                            <ListItem disablePadding key={index}>
                              <Stack direction="row" alignItems="center">
                                <i>
                                  <TickIcon />
                                </i>
                                <Typography>{item}</Typography>
                              </Stack>
                            </ListItem>
                          )
                        )}
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {!!data?.data?.data?.result_image && (
              <Box className="result_section">
                <Typography variant="h4">
                  {data?.data?.data?.image_title}
                </Typography>
                <figure>
                  <Image
                    src={mediaUrl(`service/${data?.data?.data?.before_image}`)}
                    alt="result_Image"
                    width={1135}
                    height={470}
                  />
                </figure>
              </Box>
            )}
            {!!data?.data?.data?.result_image && (
              <Box className="result_section">
                <Typography variant="h4"></Typography>
                <figure>
                  <Image
                    src={mediaUrl(`service/${data?.data?.data?.result_image}`)}
                    alt="result_Image"
                    width={1135}
                    height={470}
                  />
                </figure>
              </Box>
            )}
            {!!data?.data?.data?.conditionId &&
              data?.data?.data?.conditionId.length > 0 && (
                <Box className="botox_section_wrap">
                  <Typography variant="h4">
                    {data?.data?.data?.treat_title}{" "}
                    <Typography variant="caption">can treat</Typography>
                  </Typography>
                  <Grid container spacing={3.8}>
                    {!!data?.data?.data?.conditionId &&
                      data?.data?.data?.conditionId.length > 0 &&
                      data?.data?.data?.conditionId.map((item, index) => (
                        <Grid item md={6} xs={12} key={index}>
                          <Stack
                            direction="row"
                            alignItems="center"
                            className="botex_section"
                          >
                            <figure>
                              <Image
                                src={mediaUrl(`condition/${item?.image}`)}
                                alt="treatment_img"
                                width={140}
                                height={148}
                              />
                            </figure>
                            <Box className="text_section">
                              <Typography variant="h5">
                                {item?.short_title}
                              </Typography>
                              <Typography
                                variant="body1"
                                dangerouslySetInnerHTML={{
                                  __html: item?.description as string
                                }}
                              />
                              <Link
                                href={`/condition-details/${item?._id}`}
                                // onClick={() => router.push(`/blog-details/${item?._id}`)}
                                className="redmore_section"
                              >
                                <Typography variant="body1">
                                  Read More
                                </Typography>
                                <i>
                                  <ArrowIcon />
                                </i>
                              </Link>
                            </Box>
                          </Stack>
                        </Grid>
                      ))}
                  </Grid>
                </Box>
              )}
            <Box className="pricingTable">
              {!!data?.data?.data?.pricings &&
                data?.data?.data?.pricings.length > 0 && (
                  <>
                    {" "}
                    <Box className="pricing_text">
                      <Typography variant="h3">Pricing</Typography>
                    </Box>
                    <TableContainer>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="left"> Treatment Type</TableCell>
                            <TableCell align="center">Regular</TableCell>
                            <TableCell align="center">Membership</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {!!data?.data?.data?.pricings &&
                            data?.data?.data?.pricings.length > 0 &&
                            data?.data?.data?.pricings?.map((item, index) => (
                              <TableRow
                                key={index}
                                sx={{
                                  "&:last-child td, &:last-child th": {
                                    border: 0
                                  }
                                }}
                              >
                                <TableCell component="td" scope="row">
                                  <Stack direction="row" alignItems="center">
                                    <Typography variant="caption" />
                                    {item?.type}
                                  </Stack>
                                </TableCell>
                                <TableCell align="center">
                                  ${item?.regualr_price}
                                </TableCell>
                                <TableCell align="center">
                                  ${item?.membership_price}
                                </TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </>
                )}
            </Box>
            {!!data?.data?.data?.faqId &&
              data?.data?.data?.faqId.length > 0 && (
                <Box className="frequent_askQuestion">
                  <Box className="titleSection">
                    <Typography variant="h3">
                      Frequently{" "}
                      <Typography variant="caption">
                        {" "}
                        asked questions
                      </Typography>
                    </Typography>
                  </Box>
                  <Box className="frequentWrap">
                    <Grid container columnSpacing={{ lg: 11.8, md: 5 }}>
                      {!!data?.data?.data?.faqId &&
                        data?.data?.data?.faqId.length > 0 &&
                        data?.data?.data?.faqId?.map((item, index) => (
                          <Grid item md={6} xs={12}>
                            <Box className="frequent_listsection" key={index}>
                              <Accordion
                                expanded={expanded === `panel${index}`}
                                onChange={handleChange(`panel${index}`)}
                              >
                                <AccordionSummary
                                  expandIcon={
                                    expanded == `panel${index}` ? (
                                      <MinusIcon />
                                    ) : (
                                      <PlusIcon />
                                    )
                                  }
                                  aria-controls={`panel${index}bh-content`}
                                  id={`panel${index}bh-header`}
                                >
                                  <Typography className="title_accrodian">
                                    {item.question}
                                  </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                  <Typography
                                    dangerouslySetInnerHTML={{
                                      __html: item.answer as string
                                    }}
                                    className="title_description faq-ans"
                                  >
                                    {/* {item.answer} */}
                                  </Typography>
                                </AccordionDetails>
                              </Accordion>
                            </Box>
                          </Grid>
                        ))}
                    </Grid>
                  </Box>
                </Box>
              )}
          </Container>
        </InnnerPageWrapper>
      </ServiceDetailsWrapper>
    </Wrapper>
  );
}

export default ServiceDetails;
