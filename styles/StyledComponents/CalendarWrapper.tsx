import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import RadioGroup from "@mui/material/RadioGroup";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

export const CalendarWrapper = styled(Box)`
  border-radius: 20px;
  background: linear-gradient(
    120deg,
    rgba(253, 252, 248, 0.74) 3.57%,
    rgba(253, 252, 248, 0.29) 96.74%
  );
  backdrop-filter: blur(2px);
  padding: 50px 40px;
  @media (max-width: 599px) {
    padding: 30px 15px;
  }
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
      background-color: ${primaryColors?.white};
      border-radius: 10px;
      position: relative;
      height: 100%;
      padding: 40px 40px 120px 40px;
      @media (max-width: 599px) {
        padding: 30px 50px;
      }
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
    .MuiDateCalendar-root {
      border-radius: 10px;

      max-height: initial;
      height: auto;

      background: linear-gradient(
        139deg,
        #f3f1e6 6.74%,
        rgba(243, 241, 230, 0.48) 96.06%
      );

      backdrop-filter: blur(32px);
      .MuiPickersCalendarHeader-root {
        margin: 0 0 35px 0;
        min-height: 71px;

        position: relative;
        padding: 26px 0;

        border-bottom: 1px solid #e4ddd3;
        background: linear-gradient(
          139deg,
          #f3f1e6 6.74%,
          rgba(243, 241, 230, 0.48) 96.06%
        );
        backdrop-filter: blur(32px);

        .MuiPickersCalendarHeader-labelContainer {
          margin: 0 auto;
          .MuiPickersCalendarHeader-label {
            color: ${primaryColors.primary};
            font-family: Noto Sans;
            font-size: 18px;
            font-weight: 500;
            line-height: 1;
            margin: 0;
          }
          .MuiIconButton-root {
            display: none;
          }
        }
        .MuiPickersArrowSwitcher-root {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          transform: translateY(-50%);
          padding: 0 40px;
          justify-content: space-between;
          .MuiButtonBase-root {
            background-color: rgba(166, 112, 51, 1);
            width: 23px;
            height: 23px;
            padding: 5px;
            font-size: 15px;
            .MuiSvgIcon-root {
              path {
                fill: ${primaryColors.white};
                width: 7px;
                height: 4px;
              }
            }
          }
        }
      }
      .MuiPickersFadeTransitionGroup-root {
        .MuiDayCalendar-root {
          margin: 0 44px;
          @media (max-width: 599px) {
            margin: 0;
          }
          .MuiDayCalendar-header {
            justify-content: space-between;
            width: 100%;

            .MuiTypography-caption {
              color: ${primaryColors.primary};
              font-family: Noto Sans;
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 1.3;
              margin: 0;
            }
          }
          .MuiPickersSlideTransition-root {
            height: 280px;
            .MuiDayCalendar-monthContainer {
              .MuiDayCalendar-weekContainer {
                width: 100%;
                justify-content: space-between;
                margin: 8px 0;

                .MuiPickersDay-root {
                  margin: 0;
                  color: ${primaryColors.color4e5157};
                  font-family: Noto Sans;
                  font-size: 14px;
                  font-weight: 500;
                  line-height: 1;

                  &.Mui-selected {
                    background-color: rgba(166, 112, 51, 1);
                    color: ${primaryColors?.white};
                  }
                  &.MuiPickersDay-today {
                    background-color: rgba(166, 112, 51, 1);
                    color: ${primaryColors?.white};
                    border: 0;
                  }
                }
              }
            }
          }
        }
      }
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
    @media (max-width: 899px) {
      width: 100%;
    }
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
