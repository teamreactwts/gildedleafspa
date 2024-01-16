/* eslint-disable react/no-array-index-key */
import ServiceSectionCard from "@/components/ServiceCard/ServiceCard";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";

export const WrinkleFinelinesWrapper = styled(Box)`
  padding: 100px 0;
  .desciption_section {
    figure {
      width: 297px;
      flex-basis: 297px;
      height: 321px;
      line-height: 0;
      font-size: 0;
      overflow: hidden;
      border-radius: 20px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .product_details_wrap {
      width: calc(100% - 297px);
      flex-basis: calc(100% - 297px);
      margin-left: 50px;
      h3 {
        color: ${primaryColors.primary};
        font-family: Cormorant Garamond;
        font-size: 45px;
        font-weight: 700;
        line-height: 1;
      }
      p {
        color: ${primaryColors.textPrimaryColor};
        font-family: Noto Sans;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        max-width: 529px;
        margin-bottom: 26px;
        &:last-child{
            margin-bottom: 0;
        }
      }
    }
  }
  .section_card{
    margin-top: 50px;
  }
`;
export const sectioncardList = [
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
  }
];
function WrinkleFinelines() {
  return (
    <Wrapper>
      <WrinkleFinelinesWrapper>
        <Container fixed>
          <Stack
            direction="row"
            alignItems="center"
            className="desciption_section"
          >
            <figure>
              <Image
                src={assest.slider1}
                alt="Image"
                width={279}
                height={321}
              />
            </figure>
            <Box className="product_details_wrap">
              <Typography variant="h3">Wrinkles and fine lines</Typography>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet consectetur. Aliquet est interdum at
                commodo enim amet nibh sem enim. Netus orci massa lacinia tellus
                eget est fermentum. Aliquam viverra quam aliquet blandit. Vel
                nam congue interdum lectus.
              </Typography>
              <Typography variant="body1">
                Aliquet est interdum at commodo enim amet nibh sem enim. Lorem
                ipsum dolor sit amet consectetur. Netus orci massa lacinia
                tellus eget est fermentum. Aliquam viverra quam aliquet blandit.
                Vel nam congue interdum lectus.
              </Typography>
            </Box>
          </Stack>
          <Box className="section_card">
            <Grid container spacing={3.8}>
              {sectioncardList.map((item, index) => (
                <Grid item xs={12} lg={6} key={index}>
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
      </WrinkleFinelinesWrapper>
    </Wrapper>
  );
}

export default WrinkleFinelines;