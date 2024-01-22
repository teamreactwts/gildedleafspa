import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

const CustomButtonWrapper = styled(Button)`
  display: flex;
  padding: 17px 32px;
  border-radius: 50px;
  min-width: 145px;
  justify-content: center;
  align-items: center;
  &.Mui-disabled {
    background-color: ${primaryColors?.disabledBg};
    border: 1px solid ${primaryColors?.disabledBg};

    p {
      color: ${primaryColors.colorF6F4EE};
    }
    img {
      filter: contrast(0);
    }
  }
  &.smallButton {
    padding: 4px 16px;
    width: auto;
  }

  &.MuiButton-outlinedInfo {
    span {
      color: ${primaryColors?.black};
    }
  }
  span {
    color: ${primaryColors?.colorF6F4EE};
    font-family: "Cormorant Garamond";
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
  }
`;

interface CustomButtonprops extends ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  className?: string;
  buttonType?: "small" | "large";
  loading?: boolean;
}

const CustomButtonPrimary = ({
  children,
  className,
  buttonType,
  loading,
  ...others
}: CustomButtonprops) => {
  return (
    <CustomButtonWrapper
      className={`${buttonType === "small" && "smallButton"} ${
        className || ""
      }`}
      {...others}
    >
      {loading && <CircularProgress size={15} color="inherit" />}
      {children}
    </CustomButtonWrapper>
  );
};

export default CustomButtonPrimary;
