import BannerSec from "@/components/BannerSec/BannerSec";
import DifferentSec from "@/components/DifferentSec/DifferentSec";
import DownloadAppSection from "@/components/DownloadAppSection/DownloadAppSection";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import assest from "@/json/assest";

import Wrapper from "@/layout/wrapper/Wrapper";
import CartIcon from "@/ui/Icons/cartIcon";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
      <MuiModalWrapper
        open={open}
        onClose={handleClose}
        title="Ask an anonymous question"
      >
        <Box className="modal_mainWrap">
          <i>
            <CartIcon />
          </i>
          <Typography variant="h5">Thank you</Typography>
          <Typography variant="body1">
            Your slot has been booked on 10 Jan Wednesday from 10:30 AM to 10:55
            AM
          </Typography>
        </Box>
      </MuiModalWrapper>
    </Wrapper>
  );
}
