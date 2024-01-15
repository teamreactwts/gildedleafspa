/* eslint-disable react/no-unescaped-entities */
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
import { CommonHeader } from "../DifferentSec/DifferentSec";

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
  .downloadapp_wrap {
    padding: 37px 100px 37px 71px;
    border-radius: 20px;
    background: linear-gradient(
      120deg,
      rgba(253, 252, 248, 0.74) 3.57%,
      rgba(253, 252, 248, 0.29) 96.74%
    );
    backdrop-filter: blur(2px);
    z-index: 4;
    position: relative;
    .download_leftpart {
      position: relative;
      .phoneImage {
        line-height: 0;
        font-size: 0;
        width: 234px;
        margin: 0 auto;
        position: relative;
        z-index: 3;
        .downloadSeciton {
          position: absolute;
          top: 0;
          left: 50%;
          z-index: 3;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 92px 50px;
          width: 100%;
          height: 100%;
          flex-direction: column;
        }
      }
      .backgroun_overlay {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 425px;
        height: 306px;
        border-radius: 21px;
        opacity: 0.2;
        z-index: 2;
      }
    }
    .download_rgtPart {
      .heading_title {
        text-align: left;
        margin-bottom: 35px;
        p {
          color: ${primaryColors.textPrimaryColor};
          font-family: Noto Sans;
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 1.5;
          margin-top: 35px;
          max-width: 399px;
        }
      }

      ul {
        display: flex;
        align-items: center;
        li {
          width: auto;
          margin-right: 17px;
          &:last-child {
            margin-right: 0;
          }
          button {
            min-width: 187px;
            padding: 12px;
            &.downloadapp_btn {
              span {
                color: ${primaryColors.primary};
                font-family: Cormorant Garamond;
                font-size: 15px;
                font-weight: 500;
                line-height: 1;
              }
              &:hover {
                border: 1px solid ${primaryColors.colorA67033};
              }
            }
          }
        }
      }
    }
  }
`;

function DownloadAppSection() {
  return (
    <DownloadAppSectionWrap className="cmn_gap">
      <Container fixed>
        <Box className="downloadapp_wrap">
          <Grid container spacing={10} alignItems="center">
            <Grid item lg={6} xs={12}>
              <Box className="download_leftpart">
                <figure className="phoneImage">
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
              <Box className="download_rgtPart">
                <CommonHeader
                  title="Download"
                  breakTitle="our new app"
                  subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
                <List disablePadding>
                  <ListItem disablePadding>
                    <CustomButtonPrimary
                      startIcon={
                        <PlaysoreIcon
                          IconWidth="21"
                          IconHeight="24"
                          IconColor={primaryColors.primary}
                        />
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
      <Box className="gradient_rgtSide" />
      <Box className="gradient_lftSide" />
    </DownloadAppSectionWrap>
  );
}

export default DownloadAppSection;
