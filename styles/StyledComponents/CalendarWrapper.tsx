import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export const CalendarWrapper = styled(Box)`
  .time_slot {
    border-radius: 10px;
    height: 100%;
    position: relative;
    border-radius: 10px;
    height: 100%;
    position: relative;
    background: linear-gradient(
      280deg,
      #e4ddd3 6.74%,
      rgba(243, 241, 230, 0.48) 96.06%
    );
    padding: 1px;
    .wrapper_otr {
      background-color: #fff;
      border-radius: 10px;
      position: relative;
      height: 100%;
      padding: 40px;
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 10px;
        background: linear-gradient(
          280deg,
          #f3f1e6 6.74%,
          rgba(243, 241, 230, 0.48) 96.06%
        );
        z-index: 1;
      }
      .wrapper {
        position: relative;
        z-index: 2;
      }
    }
  }

  .each_calendar_item {
    h4 {
      font-size: 24px;
      font-weight: 700;
      line-height: 1.2;
      margin-bottom: 30px;
    }
  }
`;

export const CustomRadioGroup = styled(RadioGroup)`
  flex-wrap: wrap;
  flex-direction: row;
  margin: -8px;
  .each_radio {
    width: 50%;
    padding: 8px;
  }
  .MuiFormControlLabel-root {
    margin: 0;
    width: 100%;
    position: relative;
    border-radius: 10px;
    border: 1px solid ${primaryColors?.colore6e0d6};
    background: ${primaryColors?.colorfcfbf8};
    height: 40px;
    justify-content: center;
    align-items: center;
    > .MuiTypography-root {
      color: ${primaryColors?.color4e5157};
      font-family: Noto Sans;
      font-size: 16px;
      font-weight: 600;
      line-height: 1;
    }
    .MuiRadio-root {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 9;
      opacity: 0;
      &.Mui-checked + .MuiTypography-root {
        color: ${primaryColors?.colorA67033};
      }
    }
  }
`;

export const CustomDateCalendar = styled(DateCalendar)``;
