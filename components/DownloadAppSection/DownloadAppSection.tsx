/* eslint-disable react/no-unescaped-entities */
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";

import { mediaUrl } from "@/api/endpoints";
import { IhomeDetails } from "@/interface/apiresp.interfaces";
import { DownloadAppSectionWrap } from "@/styles/StyledComponents/DownloadAppSectionWrap";
import AppStoreIcon from "@/ui/Icons/AppStoreIcon";
import PlaysoreIcon from "@/ui/Icons/PlaysoreIcon";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";
interface Iprops {
  homeData?: IhomeDetails;
}
function DownloadAppSection({ homeData }: Iprops) {
  return (
    <DownloadAppSectionWrap className="cmn_gap">
      <Container fixed>
        <Box className="downloadapp_wrap">
          <Grid container spacing={{ md: 10, xs: 5 }} alignItems="center">
            <Grid item lg={6} xs={12}>
              <Box className="download_leftpart">
                <figure className="phoneImage">
                  <Image
                    src={mediaUrl(`home/${homeData?.app_image}`)}
                    alt="phoneImage"
                    width={240}
                    height={487}
                  />
                </figure>
                <Box
                  className="backgroun_overlay"
                  sx={{
                    background:
                      "linear-gradient(180deg, #976D3E 0%, rgba(251, 108, 53, 0.00) 100%);"
                  }}
                />
              </Box>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Box className="download_rgtPart">
                <CommonHeader
                  title={homeData?.app_title}
                  breakTitle={homeData?.app_bold_title}
                  subTitle={homeData?.app_description}
                />
                <List disablePadding>
                  <ListItem disablePadding>
                    <CustomButtonPrimary
                      startIcon={
                        <PlaysoreIcon IconWidth="21" IconHeight="24" />
                      }
                      variant="outlined"
                      color="primary"
                      className="downloadapp_btn"
                    >
                      <Typography variant="caption">Download App</Typography>
                    </CustomButtonPrimary>
                  </ListItem>
                  <ListItem disablePadding>
                    <CustomButtonPrimary
                      startIcon={
                        <AppStoreIcon
                          IconWidth="20"
                          IconHeight="24"
                          IconColor={primaryColors.white}
                        />
                      }
                      type="button"
                      variant="contained"
                      color="primary"
                      className="download_btn"
                    >
                      <Typography variant="caption">Download App</Typography>
                    </CustomButtonPrimary>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </DownloadAppSectionWrap>
  );
}

export default DownloadAppSection;
