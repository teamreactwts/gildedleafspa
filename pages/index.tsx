import BannerSec from "@/components/BannerSec/BannerSec";
import DifferentSec from "@/components/DifferentSec/DifferentSec";
import DownloadAppSection from "@/components/DownloadAppSection/DownloadAppSection";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import assest from "@/json/assest";

import Wrapper from "@/layout/wrapper/Wrapper";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(true);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("isFirstTime", "true");
  //   const isFirstTime = localStorage.getItem("isFirstTime");
  //   if (isFirstTime) {
  //     setOpen(true);
  //     localStorage.setItem("isFirstTime", "false");
  //   }
  // }, []);

  return (
    <Wrapper>
      <BannerSec bannerImage={assest?.banner_image}>
        <Typography variant="h1">
          Join our Membership today to receive{" "}
          <Typography variant="caption">exclusive benefits.</Typography>
        </Typography>
        <Typography>
          Receive up to 30% savings on all services. Botox/Xeomin starting at $9
          per unit*.No long term contract. Cancel or pause membership at
          anytime.
        </Typography>
      </BannerSec>
      <DifferentSec className="cmn_gap" />
      <HomeSlider />
      <DownloadAppSection />
      <MuiModalWrapper open={open} onClose={handleClose} className="newsletter">
        <Box className="modal_sectionWrap">
          <Grid container spacing={{ md: 3, xs: 2 }}>
            <Grid item md={6} xs={12}>
              <Box className="modalabout">
               <figure>
               <Image
                  src={assest.modal_femal}
                  alt="Image"
                  width={297}
                  height={357}
                />
               </figure>
                <Typography variant="body1">
                  Embark on a journey of beauty and wellness with our exclusive
                  membership.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box className="leterBoxWrap">
                <Typography variant="h2">
                  Subscribe our
                  <Typography variant="caption"> Newsletter</Typography>
                </Typography>
                <Grid container spacing={{ xs: 1.8 }}>
                  <Grid item xs={12}>
                    <InputFieldCommon placeholder="Name" />
                  </Grid>
                  <Grid item xs={12}>
                    <InputFieldCommon placeholder="Email" />
                  </Grid>
                  <Grid item xs={12}>
                    <InputFieldCommon placeholder="Phone No" />
                  </Grid>
                  <Grid item xs={12}>
                    <Box className="modal_btn">
                      <CustomButtonPrimary variant="contained" color="primary">
                        <Typography variant="caption">Submit</Typography>
                      </CustomButtonPrimary>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </MuiModalWrapper>
    </Wrapper>
  );
}
