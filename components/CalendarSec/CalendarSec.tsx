/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable no-plusplus */
import {
  CalendarWrapper,
  CustomDateCalendar,
  CustomRadioGroup
} from "@/styles/StyledComponents/CalendarWrapper";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
import React, { HTMLAttributes } from "react";

interface calendarSecProps {
  stepIncr: (data: number) => void;
}

const CalendarSec: React.FC<
  calendarSecProps & HTMLAttributes<HTMLDivElement>
> = ({ stepIncr, ...props }) => {
  const [value, setValue] = React.useState<Dayjs | null>(dayjs("2024-01-16"));

  const timeSlotList = [];

  const numberOfSlotsToAdd = 10;

  for (let i = 0; i < numberOfSlotsToAdd; i++) {
    timeSlotList.push({
      time: "10:30AM - 10:55AM"
    });
  }
  return (
    <Container fixed>
      <CalendarWrapper {...props}>
        <Grid container spacing={{ md: 3, xs: 5 }}>
          <Grid item md={6} xs={12}>
            <Box className="each_calendar_item">
              <Typography variant="h4"> Select your date</Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CustomDateCalendar
                  value={value}
                  onChange={setValue}
                  sx={{ width: "100%" }}
                  showDaysOutsideCurrentMonth
                />
              </LocalizationProvider>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="each_calendar_item">
              <Typography variant="h4"> Select your Time slot</Typography>
              <Box className="time_slot">
                <Box className="wrapper_otr">
                  <Box className="wrapper">
                    <CustomRadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="1"
                      name="radio-buttons-group"
                    >
                      {timeSlotList?.map((data, index) => (
                        <Box className="each_radio">
                          <FormControlLabel
                            value={index + 1}
                            control={<Radio />}
                            label={data?.time}
                          />
                        </Box>
                      ))}
                    </CustomRadioGroup>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          marginTop="50px"
        >
          <CustomButtonPrimary
            variant="contained"
            color="primary"
            onClick={() => stepIncr(1)}
          >
            <Typography variant="caption">Book Appointment</Typography>
          </CustomButtonPrimary>
        </Stack>
      </CalendarWrapper>
    </Container>
  );
};

export default CalendarSec;
