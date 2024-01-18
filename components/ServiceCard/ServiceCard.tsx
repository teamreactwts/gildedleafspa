import { ServiceCardWrap } from "@/styles/StyledComponents/ServiceCardWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";

export interface serviceProps {
  serviceImage: string;
  title: string;
  description: string;
}
function ServiceSectionCard({
  serviceImage,
  title,
  description
}: serviceProps) {
  const router = useRouter();
  return (
    <ServiceCardWrap direction="row" alignContent="center">
      <Box className="servie_imgWrap">
        <figure>
          <Image src={serviceImage} alt="serviceIcon" width={62} height={62} />
        </figure>
      </Box>
      <Box className="service_details">
        <Typography variant="h4">{title}</Typography>
        <Typography variant="body1">{description}</Typography>
        <List disablePadding className="button_wrap">
          <ListItem disablePadding>
            <CustomButtonPrimary
              variant="contained"
              color="primary"
              className="member_btn"
            >
              <Typography variant="caption">Buy Membership Plan</Typography>
            </CustomButtonPrimary>
          </ListItem>
          <ListItem disablePadding>
            <CustomButtonPrimary
              variant="outlined"
              color="primary"
              className="book_nowbtn"
              onClick={() => router.push("/booking")}
            >
              <Typography variant="caption">Book Now</Typography>
            </CustomButtonPrimary>
          </ListItem>
        </List>
      </Box>
    </ServiceCardWrap>
  );
}

export default ServiceSectionCard;
