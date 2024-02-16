import {
  GetHomeDetails,
  createNewsLetterMutation
} from "@/api/functions/cms.api";
import BannerSec from "@/components/BannerSec/BannerSec";
import DifferentSec from "@/components/DifferentSec/DifferentSec";
import DownloadAppSection from "@/components/DownloadAppSection/DownloadAppSection";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import useNotiStack from "@/hooks/useNotistack";
import assest from "@/json/assest";
import validationText from "@/json/messages/validationText";

import Wrapper from "@/layout/wrapper/Wrapper";
import { INewsData } from "@/types/common.type";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import Loader from "@/ui/Loader/Loder";
import MuiModalWrapper from "@/ui/Modal/MuiModalWrapper";
import { yupResolver } from "@hookform/resolvers/yup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import * as yup from "yup";

const schema = yup.object().shape({
  full_name: yup.string().trim().required("Please Enter Name"),
  email: yup
    .string()
    .trim()
    .email(validationText.error.email_format)
    .required(validationText.error.enter_email),
  phone: yup
    .string()
    .required("Please Enter Phone No")
    .min(10, "Phone must be at least 10 characters")
    .max(15, "Phone must be at most 15 characters")
});

// export default ComminSoon;

export default function Home() {
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: { full_name: "", email: "", phone: "" }
  });
  const [open, setOpen] = useState(false);
  // useEffect(() => {
  //   const hasClosedPopup = localStorage.getItem("hasClosedPopup");

  //   if (hasClosedPopup) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    document.body.classList.remove("modalOpenHome");
  }, []);

  const { isLoading, data } = useQuery("homeDetails", GetHomeDetails, {
    refetchOnWindowFocus: false
  });

  const { isLoading: isLoadingSubmit, mutate } = useMutation(
    createNewsLetterMutation
  );
  const { toastSuccess, toastError } = useNotiStack();
  const onSubmit = (data: INewsData) => {
    mutate(data, {
      onSuccess: (data) => {
        if (data?.data?.status === 200) {
          toastSuccess(data?.data?.message);
          reset();
          handleClose();
        } else {
          toastError(data?.data.message);
        }
      },
      onError: (error: any) => {
        toastError(error.response.data.message);
      }
    });
  };
  const dontshow = () => {
    localStorage.setItem("hasClosedPopup", "true");
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
      document.body.classList.add("modalOpenHome");
    }, 5000);

    return () => clearTimeout(timer);
  }, []); //

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <Wrapper>
      <BannerSec
        bannerImage={data?.data?.data?.image as string[]}
        // bannerImage={assest?.banner_image}
        buttonText={data?.data?.data?.button_text as string}
      >
        <Typography variant="h1">
          {data?.data?.data?.title}{" "}
          <Typography variant="caption">
            {data?.data?.data?.bold_title}
          </Typography>
        </Typography>
        <Typography
          dangerouslySetInnerHTML={{
            __html: data?.data?.data?.description as string
          }}
        />
      </BannerSec>
      <DifferentSec className="cmn_gap" homeData={data?.data?.data} />
      <HomeSlider homeData={data?.data?.data} />
      <DownloadAppSection homeData={data?.data?.data} />

      <MuiModalWrapper open={open} onClose={handleClose} className="newsletter">
        <Box className="modal_sectionWrap">
          <Grid container spacing={{ md: 3, xs: 2 }} alignItems="center">
            <Grid item md={6} xs={12}>
              <Box className="modalabout">
                <figure>
                  <Image
                    src={assest.modal_femal}
                    alt="Image"
                    width={297}
                    height={357}
                  />
                </figure>
                <Typography variant="body1">
                  Embark on a journey of beauty and wellness with our exclusive
                  membership.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box className="leterBoxWrap">
                <Typography variant="h2">
                  {data?.data?.data?.title}{" "}
                  <Typography variant="caption">
                    {" "}
                    {data?.data?.data?.bold_title}
                  </Typography>
                </Typography>
                {/* <form onSubmit={handleSubmit(onSubmit)}>
                  <Grid container spacing={{ xs: 1.8 }} alignItems="center">
                    <Grid item xs={12}>
                      <Controller
                        control={control}
                        name="full_name"
                        render={({
                          field: { onChange, onBlur, value, name, ref }
                        }) => (
                          <InputFieldCommon
                            placeholder="Name"
                            onChange={onChange}
                            value={value}
                            error={Boolean(errors?.full_name)}
                            helperText={errors?.full_name?.message}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Controller
                        control={control}
                        name="email"
                        render={({
                          field: { onChange, onBlur, value, name, ref }
                        }) => (
                          <InputFieldCommon
                            placeholder="Email"
                            onChange={onChange}
                            value={value}
                            error={Boolean(errors?.email)}
                            helperText={errors?.email?.message}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Controller
                        control={control}
                        name="phone"
                        render={({
                          field: { onChange, onBlur, value, name, ref }
                        }) => (
                          <InputFieldCommon
                            placeholder="Phone No"
                            onChange={onChange}
                            value={value}
                            error={Boolean(errors?.phone)}
                            helperText={errors?.phone?.message}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box className="modal_btn">
                        <CustomButtonPrimary
                          variant="contained"
                          color="primary"
                          loading={isLoadingSubmit}
                          disabled={isLoadingSubmit}
                          type="submit"
                        >
                          <Typography variant="caption">Submit</Typography>
                        </CustomButtonPrimary>
                      </Box>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <Box className="modal_btn">
                        <Typography onClick={() => dontshow()}>
                          Don't show again
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </form> */}
                <Box className="newsletter_section">
                  {/* <Typography variant="h2">
                    {data?.data?.data?.title}{" "}
                    <Typography variant="caption">
                      {data?.data?.data?.bold_title}
                    </Typography>
                  </Typography> */}
                  <List disablePadding className="newsletter_button_wrap">
                    <ListItem disablePadding>
                      <CustomButtonPrimary
                        variant="contained"
                        color="primary"
                        className="member_btn"
                        onClick={() => window.open("https://www.zenoti.com/")}
                      >
                        <Typography variant="caption">
                          Buy Membership Plan
                        </Typography>
                      </CustomButtonPrimary>
                    </ListItem>
                    <ListItem disablePadding>
                      <CustomButtonPrimary
                        variant="outlined"
                        color="primary"
                        className="book_nowbtn"
                        onClick={() => window.open("https://www.zenoti.com/")}
                      >
                        <Typography variant="caption">Book Now</Typography>
                      </CustomButtonPrimary>
                    </ListItem>
                  </List>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </MuiModalWrapper>
    </Wrapper>
  );
}
