import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import ServiceSectionCard from "@/components/ServiceCard/ServiceCard";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export const SurviceWrap = styled(Box)`
  padding: 55px 0 100px 0;
  position: relative;
  @media (max-width:899px) {
    padding: 40px 0 50px 0;
      }
      @media (max-width:599px) {
        padding: 40px 0 ;
      }
 
  .titel_text {
    margin-bottom: 60px;
    @media (max-width:899px) {
      margin-bottom: 40px;
      }
    h2 {
      color: ${primaryColors.primary};
      font-size: 45px;
      font-style: italic;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 0;
      @media (max-width:899px) {
        font-size: 40px;
      }
      @media (max-width:599px) {
        font-size: 32px;
      }
      span {
        color: inherit;
        line-height: inherit;
        font-weight: 700;
        font-family: inherit;
        font-size: inherit;
        margin-left: 8px;
      }
    }
  }
  .service_card {
    
   
  }

`;

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
            
          </Box>
          </Container>
          
        </SurviceWrap>
      
    </Wrapper>
  );
}

export default Survice;
