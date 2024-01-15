import BannerSec from "@/components/BannerSec/BannerSec";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import Typography from "@mui/material/Typography";

export default function Home() {
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
    </Wrapper>
  );
}
