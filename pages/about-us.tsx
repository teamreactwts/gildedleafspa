import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import CommonGridSec from "@/components/CommonGridSec/CommonGridSec";
import DifferentSec from "@/components/DifferentSec/DifferentSec";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import assest from "@/json/assest";
import Wrapper from "@/layout/wrapper/Wrapper";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const AboutUsWrapper = styled(Box)``;

export default function Index() {
  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle pageName="About Us" title="About Us" />
        <AboutUsWrapper className="cmn_gap">
          <CommonGridSec image={assest?.about_image1}>
            <Typography variant="h2">Our story</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur. Aliquet est interdum at
              commodo enim amet nibh sem enim. Netus orci massa lacinia tellus
              eget est fermentum. Aliquam viverra quam aliquet blandit. Vel nam
              congue interdum lectus.
            </Typography>
            <Typography>
              Aliquet est interdum at commodo enim amet nibh sem enim. Netus
              orci massa lacinia tellus eget est fermentum. Aliquam viverra quam
              aliquet blandit. Vel nam congue interdum lectus. Lorem ipsum dolor
              sit amet consectetur.
            </Typography>
            <Typography>
              Netus orci massa lacinia tellus eget est fermentum. Aliquam
              viverra quam aliquet blandit.
            </Typography>
          </CommonGridSec>
          <DifferentSec showInterestSec={false} />
          <CommonGridSec image={assest?.about_image2} isReverse>
            <Typography variant="h2">Our impact</Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur. Aliquet est interdum at
              commodo enim amet nibh sem enim. Netus orci massa lacinia tellus
              eget est ferm entum. Aliquam viverra quam aliquet blandit. Vel nam
              congue interdum lectus.
            </Typography>
            <Typography>
              Aliquet est interdum at commodo enim amet nibh sem enim. Netus
              orci massa lacinia tellus eget est fermentum. Aliquam viverra quam
              aliquet blandit. Vel nam congue interdum lectus. Lorem ipsum dolor
              sit amet consectetur.
            </Typography>
          </CommonGridSec>
        </AboutUsWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
}
