/* eslint-disable react/no-unescaped-entities */
import {
  GetContactDetails,
  GetSettingsDetails,
  createContactMutation
} from "@/api/functions/cms.api";
import BreadcumbTitle from "@/components/BreadcumbTitle/BreadcumbTitle";
import InnnerPageWrapper from "@/components/InnnerPageWrapper/InnnerPageWrapper";
import useNotiStack from "@/hooks/useNotistack";
import validationText from "@/json/messages/validationText";
import Wrapper from "@/layout/wrapper/Wrapper";
import { ContactUsWrapper } from "@/styles/StyledComponents/ContactUsWrapper";
import { primaryColors } from "@/themes/_muiPalette";
import { IContactData } from "@/types/common.type";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import HourIcon from "@/ui/Icons/HourIcon";
import LocationIcon from "@/ui/Icons/LocationIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import PhoneIcon from "@/ui/Icons/PhoneIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import * as yup from "yup";

const schema = yup.object().shape({
  full_name: yup.string().trim().required("Please Enter Name"),
  email: yup
    .string()
    .trim()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email),
  phone: yup.string().required("Please Enter Phone No").min(10).max(15),
  message: yup.string().trim().required(validationText.error.message)
});

const Index = () => {
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: { full_name: "", email: "", message: "", phone: "" }
  });
  const { data: settingsDetails } = useQuery(
    "settingsDetails",
    GetSettingsDetails,
    {
      refetchOnWindowFocus: false
    }
  );
  const { data: contactUsDetails } = useQuery(
    "contactDetails",
    GetContactDetails,
    {
      refetchOnWindowFocus: false
    }
  );

  const { toastSuccess, toastError } = useNotiStack();
  const { isLoading, mutate } = useMutation(createContactMutation);

  const onSubmit = (data: IContactData) => {
    mutate(data, {
      onSuccess: (data) => {
        if (data?.data?.status === 200) {
          toastSuccess(data?.data?.message);
          reset();
        } else {
          toastError(data?.data.message);
        }
      },
      onError: (error: any) => {
        toastError(error.response.data.message);
      }
    });
  };

  const trimTime = (val: string) => {
    var timeString = val;

    var timeParts = timeString.split(":");
    var merdParts = timeString.split(" ");

    var hour = parseInt(timeParts[0], 10);

    var minute = parseInt(timeParts[1], 10);

    if (minute === 0) {
      return hour + " " + merdParts[1].toUpperCase();
    } else {
      return `${hour}: ${minute}${" "}${merdParts[1].toUpperCase()}`;
    }
  };

  return (
    <Wrapper>
      <InnnerPageWrapper>
        <BreadcumbTitle title="Contact Us" pageName="Contact Us" />
        <ContactUsWrapper className="cmn_gap">
          <Container fixed>
            <Box className="contact_form_otr">
              <Grid
                container
                columnSpacing={{ lg: 17, md: 10, xs: 3 }}
                rowSpacing={{ xs: 3 }}
                alignItems="center"
              >
                <Grid item md={5.5} xs={12}>
                  <Box className="contact_form_content">
                    <Typography variant="h3">
                      {contactUsDetails?.data?.data?.head_title}
                    </Typography>
                    <Typography
                      dangerouslySetInnerHTML={{
                        __html: contactUsDetails?.data?.data?.content as string
                      }}
                    />
                    <List disablePadding>
                      <ListItem disablePadding>
                        <Typography component="i">
                          <MailIcon
                            IconColor={primaryColors?.colorA67033}
                            IconWidth="20"
                            IconHeight="20"
                          />
                        </Typography>
                        <Box className="contact_details">
                          <Typography variant="h6">Mail</Typography>
                          <Link
                            href={`mailto:${settingsDetails?.data?.data?.email}`}
                          >
                            {settingsDetails?.data?.data?.email}
                          </Link>
                        </Box>
                      </ListItem>
                      <ListItem disablePadding>
                        <Typography component="i">
                          <PhoneIcon
                            IconColor={primaryColors?.colorA67033}
                            IconWidth="20"
                            IconHeight="20"
                          />
                        </Typography>
                        <Box className="contact_details">
                          <Typography variant="h6">Call</Typography>
                          <Link
                            href={`tel:${settingsDetails?.data?.data?.contactNumber}`}
                          >
                            {settingsDetails?.data?.data?.contactNumber}
                          </Link>
                        </Box>
                      </ListItem>

                      <ListItem disablePadding>
                        <Typography component="i">
                          <LocationIcon
                            IconColor={primaryColors?.colorA67033}
                            IconWidth="20"
                            IconHeight="20"
                          />
                        </Typography>
                        <Box className="contact_details">
                          <Typography variant="h6">Location</Typography>
                          <Typography component="address">
                            {settingsDetails?.data?.data?.address}
                          </Typography>
                        </Box>
                      </ListItem>
                      <ListItem disablePadding>
                        <Typography component="i">
                          <HourIcon
                            IconColor={primaryColors?.colorA67033}
                            IconWidth="20"
                            IconHeight="20"
                          />
                        </Typography>
                        <Box className="contact_details">
                          <Typography variant="h6">Business Hours</Typography>
                          <List disablePadding className="contact_details_list">
                            {!!settingsDetails?.data?.data &&
                              settingsDetails?.data?.data?.hour.length > 0 &&
                              settingsDetails?.data?.data?.hour.map(
                                (item: any, i: number) =>
                                  item.is_active_status == "Active" && (
                                    <ListItem disablePadding key={i}>
                                      {item?.day_of_week}{" "}
                                      {trimTime(item?.start_time_12hoursformat)}{" "}
                                      -{trimTime(item?.end_time_12hoursformat)}
                                    </ListItem>
                                  )
                              )}
                          </List>
                        </Box>
                      </ListItem>
                    </List>
                  </Box>
                </Grid>
                <Grid item md={6.5} xs={12}>
                  <Box className="contact_form">
                    <Typography variant="h3">
                      {" "}
                      {contactUsDetails?.data?.data?.title}
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Box className="each_input_field">
                        <Controller
                          control={control}
                          name="full_name"
                          render={({
                            field: { onChange, onBlur, value, name, ref }
                          }) => (
                            <InputFieldCommon
                              placeholder="Name"
                              className="transparent_input"
                              onChange={onChange}
                              value={value}
                              error={Boolean(errors?.full_name)}
                              helperText={errors?.full_name?.message}
                            />
                          )}
                        />
                      </Box>
                      <Box className="each_input_field">
                        <Controller
                          control={control}
                          name="email"
                          render={({
                            field: { onChange, onBlur, value, name, ref }
                          }) => (
                            <InputFieldCommon
                              placeholder="Email"
                              className="transparent_input"
                              onChange={onChange}
                              value={value}
                              error={Boolean(errors?.email)}
                              helperText={errors?.email?.message}
                            />
                          )}
                        />
                      </Box>
                      <Box className="each_input_field">
                        <Controller
                          control={control}
                          name="phone"
                          render={({
                            field: { onChange, onBlur, value, name, ref }
                          }) => (
                            <InputFieldCommon
                              placeholder="Phone No"
                              className="transparent_input"
                              onChange={onChange}
                              value={value}
                              error={Boolean(errors?.phone)}
                              helperText={errors?.phone?.message}
                            />
                          )}
                        />
                      </Box>
                      <Box className="each_input_field">
                        <Controller
                          control={control}
                          name="message"
                          render={({
                            field: { onChange, onBlur, value, name, ref }
                            // fieldState:{invalid,error}
                          }) => (
                            <InputFieldCommon
                              placeholder="Message"
                              multiline
                              rows={4}
                              maxRows={4}
                              className="transparent_input"
                              onChange={onChange}
                              value={value}
                              error={Boolean(errors?.message)}
                              helperText={errors?.message?.message}
                            />
                          )}
                        />
                      </Box>
                      <Box className="each_input_field">
                        <CustomButtonPrimary
                          variant="contained"
                          color="primary"
                          sx={{ width: "100%" }}
                          type="submit"
                          loading={isLoading}
                          disabled={isLoading}
                        >
                          <Typography variant="caption">Submit</Typography>
                        </CustomButtonPrimary>
                      </Box>
                    </form>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </ContactUsWrapper>
      </InnnerPageWrapper>
    </Wrapper>
  );
};

export default Index;
