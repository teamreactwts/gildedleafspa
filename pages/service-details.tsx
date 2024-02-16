/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { ServiceDetailsWrapper } from "@/styles/StyledComponents/ServiceDetailsWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import MinusIcon from "@/ui/Icons/MinusIcon";
import PlusIcon from "@/ui/Icons/PlusIcon";
import TickIcon from "@/ui/Icons/TickIcon";
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
import { useRouter } from "next/router";
import { useState } from "react";

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

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const router = useRouter();
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
                    src={assest.diffIcon6}
                    alt="serviceImg"
                    width={89}
                    height={106}
                  />
                </figure>
              </Box>
              <Box className="service_titleDescription">
                <Typography variant="h3">Botox</Typography>
                <Typography variant="body1">
                  Botox effectively softens wrinkles and combats signs of aging,
                  providing a more youthful and refreshed appearance with
                  minimal downtime.
                </Typography>
                <List disablePadding>
                  <ListItem disablePadding>
                    <CustomButtonPrimary
                      color="primary"
                      variant="contained"
                      onClick={() => window.open("https://www.zenoti.com/")}
                    >
                      <Typography variant="caption">
                        Buy Membership Plan
                      </Typography>
                    </CustomButtonPrimary>
                  </ListItem>
                  <ListItem disablePadding>
                    <CustomButtonPrimary
                      color="primary"
                      variant="outlined"
                      onClick={() => window.open("https://www.zenoti.com/")}
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
                    <Typography variant="h4">Benefits:</Typography>
                    <List disablePadding>
                      {benifitsList.map((item, index) => (
                        <ListItem disablePadding key={index}>
                          <Stack direction="row" alignItems="center">
                            <i>
                              <TickIcon />
                            </i>
                            <Typography>{item.name}</Typography>
                          </Stack>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Grid>
                <Grid item lg={6} xs={12}>
                  <Box className="list_wrap">
                    <Typography variant="h4">How to use:</Typography>
                    <List disablePadding>
                      {benifitsList.map((item, index) => (
                        <ListItem disablePadding key={index}>
                          <Stack direction="row" alignItems="center">
                            <i>
                              <TickIcon />
                            </i>
                            <Typography>{item.name}</Typography>
                          </Stack>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            <Box className="result_section">
              <Typography variant="h4">Result</Typography>
              <figure>
                <Image
                  src={assest.result_img}
                  alt="result_Image"
                  width={1135}
                  height={470}
                />
              </figure>
            </Box>
            <Box className="botox_section_wrap">
              <Typography variant="h4">
                Botox <Typography variant="caption">can treat</Typography>
              </Typography>
              <Grid container spacing={3.8}>
                {servicedetailsList.map((itme) => (
                  <Grid item md={6} xs={12}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      className="botex_section"
                    >
                      <figure>
                        <Image
                          src={itme.serviceImage}
                          alt="treatment_img"
                          width={140}
                          height={148}
                        />
                      </figure>
                      <Box className="text_section">
                        <Typography variant="h5">{itme.title}</Typography>
                        <Typography variant="body1">
                          {itme.description}
                        </Typography>
                      </Box>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box className="pricingTable">
              <Box className="pricing_text">
                <Typography variant="h3">Pricing</Typography>
              </Box>
              <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left"> Treatment Type</TableCell>
                      <TableCell align="center">Gold</TableCell>
                      <TableCell align="center">Diamond</TableCell>
                      <TableCell align="center">Platinum</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.type}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 }
                        }}
                      >
                        <TableCell component="td" scope="row">
                          <Stack direction="row" alignItems="center">
                            <Typography variant="caption" />
                            {row.type}
                          </Stack>
                        </TableCell>
                        <TableCell align="center">${row.Gold}</TableCell>
                        <TableCell align="center">${row.Platinum}</TableCell>
                        <TableCell align="center">${row.Diamond}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>

            <Box className="frequent_askQuestion">
              <Box className="titleSection">
                <Typography variant="h3">
                  Frequently{" "}
                  <Typography variant="caption"> asked questions</Typography>
                </Typography>
              </Box>
              <Box className="frequentWrap">
                <Grid container spacing={{ lg: 11.8, xs: 0 }}>
                  <Grid item lg={6} xs={12}>
                    <Box className="frequent_listsection">
                      {fequent_questionListSection.map((item, index) => (
                        <>
                          {index <
                          Math.floor(fequent_questionListSection.length / 2) ? (
                            <Accordion
                              expanded={expanded === `panel${index + 1}`}
                              onChange={handleChange(`panel${index + 1}`)}
                            >
                              <AccordionSummary
                                expandIcon={
                                  expanded ? <MinusIcon /> : <PlusIcon />
                                }
                                aria-controls={`panel${index + 1}bh-content`}
                                id={`panel${index + 1}bh-header`}
                              >
                                <Typography className="title_accrodian">
                                  {item.title}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography className="title_description">
                                  {item.description}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          ) : null}
                        </>
                      ))}
                    </Box>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <Box className="frequent_listsection">
                      {fequent_questionListSection.map((item, index) => (
                        <>
                          {index >=
                          Math.floor(fequent_questionListSection.length / 2) ? (
                            <Accordion
                              expanded={expanded === `panel${index + 1}`}
                              onChange={handleChange(`panel${index + 1}`)}
                            >
                              <AccordionSummary
                                expandIcon={<PlusIcon />}
                                aria-controls={`panel${index + 1}bh-content`}
                                id={`panel${index + 1}bh-header`}
                              >
                                <Typography className="title_accrodian">
                                  {item.title}
                                </Typography>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography className="title_description">
                                  {item.description}
                                </Typography>
                              </AccordionDetails>
                            </Accordion>
                          ) : null}
                        </>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Container>
        </InnnerPageWrapper>
      </ServiceDetailsWrapper>
    </Wrapper>
  );
}

export default ServiceDetails;
