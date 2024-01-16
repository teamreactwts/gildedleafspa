/* eslint-disable react/no-array-index-key */
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import ImageCard from "@/components/ImageCard/ImageCard";
import { conditionList } from "@/json/mock/homeslider.mock";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

export const ConditionWrap = styled(Box)`
padding: 55px 0 100px 0;
  .titel_text {
    margin-bottom: 60px;
    h2 {
      color: ${primaryColors.primary};
      font-size: 45px;
      font-style: italic;
      font-weight: 400;
      line-height: 1;
      margin-bottom: 0;
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
  .condition_imgWrap{
    .MuiGrid-root{
        .slider_text{
            padding: 27px 10px;
            h3{
                font-size: 49px;
            }
        }
    }
  }
`;

function Condition() {
  return (
    <Wrapper>
      <BreadcumbTitle title="Conditions" pageName="Condition" />
      <ConditionWrap>
        <Container fixed>
          <Box className="titel_text">
            <Typography variant="h2">
              What are your
              <Typography variant="caption"> clinical concerns?</Typography>
            </Typography>
          </Box>
          <Box className="condition_imgWrap">
            <Grid container spacing={3.3}>
              {conditionList.map((itme, index) => (
                <Grid item md={3} sm={6} xs={12} key={index}>
                  <ImageCard
                    card_img={itme.image}
                    title={itme.title}
                    description={itme.description}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </ConditionWrap>
    </Wrapper>
  );
}

export default Condition;
