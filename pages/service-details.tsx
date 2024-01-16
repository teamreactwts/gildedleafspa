/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
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
  .service_details_top {
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
      ul{
        display: flex;
        align-items: center;
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
                    <Typography variant="caption">
                      Buy Membership Plan
                    </Typography>
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
                        {item.name}
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
                        {item.name}
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </ServiceDetailsWrapper>
    </Wrapper>
  );
}

export default ServiceDetails;
