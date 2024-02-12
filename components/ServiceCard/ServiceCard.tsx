import { Doc } from "@/interface/apiresp.interfaces";
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
  title?: string;
  description?: string;
  item?: Doc;
}
function ServiceSectionCard({
  serviceImage,
  title,
  description,
  item
}: serviceProps) {
  const router = useRouter();

  return (
    <ServiceCardWrap direction="row" alignContent="center">
      <Box
        className="servie_imgWrap"
        onClick={() => !!item && router.push(`/service-details/${item._id}`)}
      >
        <figure>
          <Image src={serviceImage} alt="serviceIcon" width={62} height={62} />
        </figure>
      </Box>
      <Box className="service_details">
        <Box
          onClick={() => !!item && router.push(`/service-details/${item._id}`)}
        >
          <Typography variant="h4">{title}</Typography>
          <Typography
            variant="body1"
            dangerouslySetInnerHTML={{
              __html: description as string
            }}
          />
        </Box>
        <List disablePadding className="button_wrap">
          <ListItem disablePadding>
            <CustomButtonPrimary
              variant="contained"
              color="primary"
              className="member_btn"
              onClick={() => window.open("https://www.zenoti.com/")}
            >
              <Typography variant="caption">Buy Membership Plan</Typography>
            </CustomButtonPrimary>
          </ListItem>
          <ListItem disablePadding>
            <CustomButtonPrimary
              variant="outlined"
              color="primary"
              className="book_nowbtn"
              onClick={() => window.open("https://www.zenoti.com/")}
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
