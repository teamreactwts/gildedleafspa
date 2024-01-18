/* eslint-disable react/no-unescaped-entities */
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import Wrapper from "@/layout/wrapper/Wrapper";
import { ContactUsWrapper } from "@/styles/StyledComponents/ContactUsWrapper";
import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import LocationIcon from "@/ui/Icons/LocationIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import PhoneIcon from "@/ui/Icons/PhoneIcon";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";

const Index = () => {
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle title="Contact Us" pageName="Contact Us" />
        <ContactUsWrapper className="cmn_gap">
          <Container fixed>
            <Grid
              container
              spacing={{ lg: 17, md: 10, xs: 3 }}
              alignItems="center"
            >
              <Grid item md={5.5} xs={12}>
                <Box className="contact_form_content">
                  <Typography variant="h3">Contact details</Typography>
                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's{" "}
                  </Typography>
                  <List disablePadding>
                    <ListItem disablePadding>
                      <Typography component="i">
                        <MailIcon
                          IconColor={primaryColors?.colorA67033}
                          IconWidth="20"
                          IconHeight="20"
                        />
                      </Typography>
                      <Box className="contact_details">
                        <Typography variant="h6">Mail</Typography>
                        <Link href="mailto:demomail@gmail.com">
                          demomail@gmail.com
                        </Link>
                      </Box>
                    </ListItem>
                    <ListItem disablePadding>
                      <Typography component="i">
                        <PhoneIcon
                          IconColor={primaryColors?.colorA67033}
                          IconWidth="20"
                          IconHeight="20"
                        />
                      </Typography>
                      <Box className="contact_details">
                        <Typography variant="h6">Call</Typography>
                        <Link href="tel:1234567890">1234567890</Link>
                      </Box>
                    </ListItem>
                    <ListItem disablePadding>
                      <Typography component="i">
                        <LocationIcon
                          IconColor={primaryColors?.colorA67033}
                          IconWidth="20"
                          IconHeight="20"
                        />
                      </Typography>
                      <Box className="contact_details">
                        <Typography variant="h6">Location</Typography>
                        <Typography component="address">
                          demo street, location, city country, zip
                        </Typography>
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item md={6.5} xs={12}>
                <Box className="contact_form">
                  <Typography variant="h3">Get in touch</Typography>
                  <Box className="each_input_field">
                    <InputFieldCommon
                      placeholder="Name"
                      className="transparent_input"
                    />
                  </Box>
                  <Box className="each_input_field">
                    <InputFieldCommon
                      placeholder="Email"
                      className="transparent_input"
                    />
                  </Box>
                  <Box className="each_input_field">
                    <InputFieldCommon
                      placeholder="Phone No"
                      className="transparent_input"
                    />
                  </Box>
                  <Box className="each_input_field">
                    <InputFieldCommon
                      placeholder="Message"
                      multiline
                      rows={4}
                      maxRows={4}
                      className="transparent_input"
                    />
                  </Box>
                  <Box className="each_input_field">
                    <CustomButtonPrimary
                      variant="contained"
                      color="primary"
                      sx={{ width: "100%" }}
                    >
                      <Typography variant="caption">Submit</Typography>
                    </CustomButtonPrimary>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </ContactUsWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
};

export default Index;
