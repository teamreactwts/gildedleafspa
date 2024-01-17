/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import MinusIcon from "@/ui/Icons/MinusIcon";
import PlusIcon from "@/ui/Icons/PlusIcon";
import TickIcon from "@/ui/Icons/TickIcon";
import styled from "@emotion/styled";
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
import { useState } from "react";

export const ServiceDetailsWrapper = styled(Box)`
  padding: 58px 0 100px 0;
  .service_details_top {
    margin-bottom: 50px;
    .service_imgSection {
      width: 234px;
      flex-basis: 234px;
      height: 234px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      border: 1px solid ${primaryColors.white};
      background: linear-gradient(
        140deg,
        ${primaryColors.white} -65.15%,
        rgba(255, 255, 255, 0) 144.4%
      );

      figure {
        width: 89px;
        height: 106px;
        line-height: 0;
        font-size: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .service_titleDescription {
      width: calc(100% - 234px);
      flex-basis: calc(100% - 234px);
      margin-left: 50px;
      h3 {
        color: ${primaryColors.primary};
        font-family: Cormorant Garamond;
        font-size: 45px;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 20px;
      }
      p {
        color: ${primaryColors.textPrimaryColor};
        font-family: Noto Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        max-width: 713px;
      }
      ul {
        display: flex;
        align-items: center;
        margin-top: 19px;
        li {
          width: auto;
          margin-right: 15px;
          &:last-child {
            margin-right: 0;
          }
          button {
            padding: 17px;
          }
        }
      }
    }
  }
  .benifits_use {
    margin-bottom: 70px;
    .list_wrap {
      padding: 32px 58px 32px 34px;
      border-radius: 20px;
      background: linear-gradient(
        120deg,
        rgba(253, 252, 248, 0.74) 3.57%,
        rgba(253, 252, 248, 0.29) 96.74%
      );
      backdrop-filter: blur(2px);
      h4 {
        color: ${primaryColors.color021526};
        font-family: Cormorant Garamond;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: 1;
      }
      ul {
        margin-top: 15px;
        li {
          width: auto;
          margin-bottom: 23px;
          &:last-child {
            margin-bottom: 0;
          }
          i {
            width: 15px;
            margin-right: 11px;
            line-height: 0;
            font-size: 0;
          }
          p {
            color: ${primaryColors.textPrimaryColor};
            font-family: Noto Sans;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.4;
          }
        }
      }
    }
  }
  .result_section {
    h4 {
      font-size: 45px;
      font-weight: 700;
      line-height: 1;
      margin-bottom: 50px;
    }
    figure {
      line-height: 0;
      font-size: 0;
      overflow: hidden;
      border-radius: 20px;
    }
  }
  .botox_section_wrap {
    margin-top: 70px;
    h4 {
      font-size: 45px;
      font-style: italic;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 54px;
      span {
        line-height: inherit;
        font-size: inherit;
        font-style: inherit;
        font-family: inherit;
        font-weight: 700;
        color: inherit;
      }
    }
    .botex_section {
      padding: 19px 29px 19px 19px;
      border-radius: 20px;
      background: linear-gradient(
        120deg,
        rgba(253, 252, 248, 0.74) 3.57%,
        rgba(253, 252, 248, 0.29) 96.74%
      );
      backdrop-filter: blur(2px);
      figure {
        line-height: 0;
        font-size: 0;
        width: 140px;
        flex-basis: 140px;
        height: 148px;
        overflow: hidden;
        border-radius: 10px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .text_section {
        width: calc(100% - 140px);
        flex-basis: calc(100% - 140px);
        padding-left: 33px;
        h5 {
          color: ${primaryColors.primary};
          font-size: 30px;
          font-weight: 700;
          line-height: 1;
          margin-bottom: 15px;
        }
        p {
          max-width: 330px;
          color: ${primaryColors.textPrimaryColor};
          font-family: Noto Sans;
          font-size: 16px;
          font-weight: 400;
          line-height: 1;
        }
      }
    }
  }
  .pricingTable {
    padding: 80px 0;
    .pricing_text {
      margin-bottom: 50px;
      h3 {
        font-size: 45px;
        line-height: 1;
        margin: 0;
      }
    }
    .MuiTableContainer-root {
      border-radius: 20px;
      border: 1px solid #e8e5e0;
      background: linear-gradient(
        120deg,
        rgba(253, 252, 248, 0.74) 3.57%,
        rgba(253, 252, 248, 0.29) 96.74%
      );
      backdrop-filter: blur(2px);
      .MuiTable-root {
        .MuiTableHead-root {
          tr {
            th {
              color: ${primaryColors.primary};
              font-family: Cormorant Garamond;
              font-size: 30px;
              font-weight: 700;
              line-height: 1;
              padding: 30px 20px;
              border-bottom: 1px solid rgba(75, 74, 74, 0.1);
            }
          }
        }
        .MuiTableBody-root {
          tr {
            &:last-child {
              td {
                border-bottom: 0;
              }
            }
            td {
              padding: 30px 20px;
              color: ${primaryColors.primary};
              font-family: Noto Sans;
              font-size: 16px;
              font-weight: 400;
              line-height: 1;
              text-transform: capitalize;
              list-style-type: decimal;
              border-bottom: 1px solid rgba(75, 74, 74, 0.1);

              span {
                width: 7px;
                height: 7px;
                border-radius: 100%;
                background-color: ${primaryColors.primary};
                margin-right: 11px;
              }
            }
          }
        }
      }
    }
  }
  .frequent_askQuestion {
    .titleSection {
      h3 {
        font-size: 45px;
        font-style: italic;
        font-weight: 400;
        line-height: 1;
        margin-bottom: 0;
        span {
          font-weight: 700;
          line-height: inherit;
          font-size: inherit;
          font-family: inherit;
          color: inherit;
        }
        margin-bottom: 20px;
      }
    }
    .frequentWrap {
      .MuiGrid-container {
        .MuiGrid-item {
          .frequent_listsection {
            .MuiPaper-root {
              background-color: transparent;
              box-shadow: none;
              &::before {
                display: none;
              }
              &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: rgba(75, 74, 74, 0.1);
              }
              .MuiButtonBase-root {
                padding: 0;
                .MuiAccordionSummary-content {
                  margin: 42px 0;
                  p {
                    color: ${primaryColors.primary};
                    font-family: Noto Sans;
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 1;
                  }
                }
              }
              .MuiCollapse-root {
                .MuiCollapse-wrapper {
                  .MuiAccordionDetails-root {
                    padding: 0 0 36px 0;
                    p {
                      color: ${primaryColors.textPrimaryColor};
                      font-family: Noto Sans;
                      font-size: 16px;
                      font-weight: 400;
                      line-height: 1.5;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
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
  return (
    <Wrapper>
      <ServiceDetailsWrapper>
        <Container fixed>
          <Stack
            direction="row"
            alignItems="center"
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
                providing a more youthful and refreshed appearance with minimal
                downtime.
              </Typography>
              <List disablePadding>
                <ListItem disablePadding>
                  <CustomButtonPrimary color="primary" variant="contained">
                    <Typography variant="caption">
                      Buy Membership Plan
                    </Typography>
                  </CustomButtonPrimary>
                </ListItem>
                <ListItem disablePadding>
                  <CustomButtonPrimary color="primary" variant="outlined">
                    <Typography variant="caption">Book Now</Typography>
                  </CustomButtonPrimary>
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Box className="benifits_use">
            <Grid container spacing={3.8}>
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
                <Grid item lg={6} xs={12}>
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
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
              <Grid container spacing={11.8}>
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
      </ServiceDetailsWrapper>
    </Wrapper>
  );
}

export default ServiceDetails;
