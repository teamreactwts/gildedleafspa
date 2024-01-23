import { CommonHeaderWrapper } from "@/styles/StyledComponents/DifferentWrapper";
import Typography from "@mui/material/Typography";

export interface commonHeadderProps {
  title?: string;
  breakTitle?: string;
  subTitle?: string;
}

const CommonHeader = ({ title, breakTitle, subTitle }: commonHeadderProps) => {
  return (
    <CommonHeaderWrapper className="heading_title">
      <Typography variant="h2">
        {title} <Typography variant="caption">{breakTitle}</Typography>
      </Typography>
      <Typography
        dangerouslySetInnerHTML={{
          __html: subTitle as string
        }}
      />
    </CommonHeaderWrapper>
  );
};

export default CommonHeader;
