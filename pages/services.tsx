import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import ServiceSectionCard from "@/components/ServiceCard/ServiceCard";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { SurviceWrap } from "@/styles/StyledComponents/ServiceWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export const serviceList = [
  {
    serviceImage: assest.diffIcon6,
    title: "Botox",
    description:
      "Botox effectively softens wrinkles and combats signs of aging..."
  },
  {
    serviceImage: assest.diffIcon10,
    title: "Fillers",
    description:
      "Dermal fillers rejuvenate and enhance facial contours by smoothing..."
  },
  {
    serviceImage: assest.diffIcon8,
    title: "Laser resurfacing",
    description:
      "The Era Elite laser by Aerolase offers advanced skin rejuvenation..."
  },
  {
    serviceImage: assest.diffIcon11,
    title: "Laser rejuvenation",
    description:
      "A versatile laser solution, the Neo Elite by Aerolase excels in skin..."
  },
  {
    serviceImage: assest.diffIcon8,
    title: "Laser hair removal",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa dolor aenean orci euismod at..."
  },
  {
    serviceImage: assest.diffIcon9,
    title: "Micro needling",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa dolor aenean orci euismod at..."
  }
];
function Survice() {
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle title="Services" pageName="Services" />

        <SurviceWrap>
          <Container fixed>
            <Box className="titel_text">
              <Typography variant="h2">
                Which service are
                <Typography variant="caption">you interested in?</Typography>
              </Typography>
            </Box>
            <Box className="service_card">
              <Grid container spacing={3.8}>
                {serviceList.map((item) => (
                  <Grid item xs={12} lg={6}>
                    <ServiceSectionCard
                      serviceImage={item.serviceImage}
                      title={item.title}
                      description={item.description}
                    />
                  </Grid>
                ))}
              </Grid>
              <Box className="view_btn">
                <CustomButtonPrimary
                  variant="contained"
                  color="primary"
                  className="member_btn"
                >
                  <Typography variant="caption">View More</Typography>
                </CustomButtonPrimary>
              </Box>
            </Box>
          </Container>
        </SurviceWrap>
      </InnnerPageWrapper>
    </Wrapper>
  );
}

export default Survice;
