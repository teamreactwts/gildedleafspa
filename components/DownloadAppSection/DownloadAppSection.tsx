import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";

import AppStoreIcon from "@/ui/Icons/AppStoreIcon";
import PlaysoreIcon from "@/ui/Icons/PlaysoreIcon";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import Image from "next/image";

export const DownloadAppSectionWrap = styled(Box)`
  position: relative;
  overflow: hidden;
  .gradient_rgtSide {
    position: absolute;
    top: 0;
    left: -200px;
    border-radius: 464px;
    background: ${primaryColors.colorE8DDD0};
    filter: blur(162px);
    width: 464px;
    height: 464px;
  }
  .gradient_lftSide {
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 464px;
    background: ${primaryColors.colorE8DDD0};
    filter: blur(162px);
    width: 464px;
    height: 464px;
  }
`;

function DownloadAppSection() {
  return (
    <DownloadAppSectionWrap className="cmn_gap">
      <Container fixed>
        <Box className="downloadapp_wrap">
          <Grid container spacing={10}>
            <Grid item lg={6} xs={12}>
              <Box className="download_leftpart">
                <figure>
                  <Image
                    src={assest.downloadPhoneImg}
                    alt="phoneImage"
                    width={240}
                    height={487}
                  />
                  <Box className="downloadSeciton">
                    <Image
                      src={assest.footerBrandIcon}
                      alt="brandLogo"
                      width={137}
                      height={87}
                      className="brandLogo"
                    />
                    <Image
                      src={assest.Qr_img}
                      alt="QR_image"
                      width={112}
                      height={112}
                      className="Qr_img"
                    />
                  </Box>
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
              <Box classsName="download_rgtPart">
                <Typography variant="h2">
                  Download
                  <Typography variant="caption">our new app</Typography>
                </Typography>
                <Typography variant="body1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s
                </Typography>
                <List disablePadding>
                  <ListItem disablePadding>
                    <CustomButtonPrimary
                      type="button"
                      variant="outlined"
                      color="primary"
                    >
                      <Typography variant="caption">
                        <PlaysoreIcon
                          IconWidth="21"
                          IconHeight="24"
                          IconColor={primaryColors.primary}
                        />
                      </Typography>
                      Download App
                    </CustomButtonPrimary>
                  </ListItem>
                  <ListItem disablePadding>
                    <CustomButtonPrimary
                      type="button"
                      variant="contained"
                      color="primary"
                    >
                      <Typography variant="caption">
                        <AppStoreIcon />
                      </Typography>
                      Download App
                    </CustomButtonPrimary>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Box className="gradient_rgtSide" />
      <Box className="gradient_lftSide" />
    </DownloadAppSectionWrap>
  );
}

export default DownloadAppSection;
