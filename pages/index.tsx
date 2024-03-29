import {
  GetHomeDetails,
  GetSettingsDetails,
  createNewsLetterMutation
} from "@/api/functions/cms.api";
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
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import * as yup from "yup";

const DownloadAppSection = dynamic(
  () => import("@/components/DownloadAppSection/DownloadAppSection"),
  { ssr: true }
);
const DifferentSec = dynamic(
  () => import("@/components/DifferentSec/DifferentSec"),
  {
    ssr: false
  }
);
const BannerSec = dynamic(() => import("@/components/BannerSec/BannerSec"), {
  ssr: false
});
const HomeSlider = dynamic(() => import("@/components/HomeSlider/HomeSlider"), {
  ssr: false
});

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
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: { full_name: "", email: "", phone: "" }
  });
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleClose = useCallback(() => {
    setOpen(false);
    document.body.classList.remove("modalOpenHome");
  }, []);

  const { isLoading, data } = useQuery("homeDetails", GetHomeDetails, {
    refetchOnWindowFocus: false
  });
  const { data: settingsData } = useQuery(
    "settingsDetails",
    GetSettingsDetails,
    {
      refetchOnWindowFocus: false
    }
  );

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
        // bannerImage={assest?.banner_image}+
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

                <Box className="newsletter_section">
                  <List disablePadding className="newsletter_button_wrap">
                    <ListItem disablePadding>
                      <CustomButtonPrimary
                        variant="contained"
                        color="primary"
                        className="member_btn"
                        onClick={() => router.push(`/membership`)}
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
                        onClick={() =>
                          window.open(
                            settingsData?.data?.data?.deep_zenoti_link
                          )
                        }
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
