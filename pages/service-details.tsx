/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import TickIcon from "@/ui/Icons/TickIcon";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";

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
    .botex_section {
      padding: 19px 29px 19px 19px;
      border-radius: 20px;
      background: linear-gradient(
        120deg,
        rgba(253, 252, 248, 0.74) 3.57%,
        rgba(253, 252, 248, 0.29) 96.74%
      );
      backdrop-filter: blur(2px);
      figure{
        line-height: 0;
        font-size: 0;
        width: 140px;
        flex-basis: 140px;
        height: 148px;
        overflow: hidden;
        border-radius: 10px;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
      }
      .text_section{
        width: calc(100% - 140px);
        flex-basis:calc(100% - 140px) ;
        padding-left: 33px;
        h5{
            color: #161D29;
leading-trim: both;
text-edge: cap;
font-family: Cormorant Garamond;
font-size: 30px;
font-style: normal;
font-weight: 700;
line-height: normal;
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

function ServiceDetails() {
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
            <Stack
              direction="row"
              alignItems="center"
              className="botex_section"
            >
              <figure>
                <Image
                  src={assest.slider1}
                  alt="treatment_img"
                  width={140}
                  height={148}
                />
              </figure>
              <Box className="text_section">
                <Typography variant="h5">Lorem ipsum dolor sit amet</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet consectetur. Tempor dui risus
                  tincidunt congue ac. Dolor cursus tincidunt non.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </ServiceDetailsWrapper>
    </Wrapper>
  );
}

export default ServiceDetails;
