import { borderRadius } from "@/themes/themeConstant";

import { MuiDilogModalWrap } from "@/styles/StyledComponents/MuiDilogModalWrap";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/system";
import CloseIcon from "../Icons/CloseIcon";

interface MuiModalWrapperProps {
  open: boolean;
  onClose?: () => void;
  scroll?: "paper" | "body";
  children: JSX.Element | JSX.Element[];
  title?: string;
  className?: string;
}

export default function MuiModalWrapper({
  open,
  onClose,
  scroll,
  children,
  title,
  className
}: MuiModalWrapperProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <MuiDilogModalWrap
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      scroll={scroll}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          borderRadius
        },
        className: `${className}`
      }}
    >
      <Box className="modalTitleWrap">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography>{title}</Typography>
          <IconButton onClick={onClose} autoFocus>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Box>

      <DialogContent className="modalBodySection">{children}</DialogContent>
    </MuiDilogModalWrap>
  );
}
