/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
import { GetSettingsDetails } from "@/api/functions/cms.api";
import Seo from "@/components/Seo/Seo";
import useOnlineStatus from "@/hooks/useDetectOnline";
import { WrapperStyle } from "@/styles/StyledComponents/WrapperStyle";
import { primaryColors } from "@/themes/_muiPalette";
import BooknowIcon from "@/ui/Icons/BooknowIcon";
import CallIcon from "@/ui/Icons/CallIcon";
import Membership from "@/ui/Icons/Membership";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface wrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = (props: wrapperProps) => {
  const { children } = props;

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // useEffect(() => {
  //   if (document) {
  //     const hdrElm = document.querySelector<HTMLElement>(".main_head");
  //     const hdrHeight = hdrElm?.clientHeight;
  //     const paaddngELM = document.querySelector<HTMLElement>(".body_content");
  //     if (!!paaddngELM) {
  //       paaddngELM.style.paddingTop = hdrHeight + "px";
  //     }
  //   }
  // });
  const router = useRouter();

  const routerText = router.pathname.split("");

  routerText.shift();
  const favText = routerText.join("").toString().toUpperCase();
  const projectName = "Gilded Leaf";

  useOnlineStatus();
  const { data } = useQuery("settingsDetails", GetSettingsDetails, {
    refetchOnWindowFocus: false
  });

  return (
    <WrapperStyle>
      <Seo
        title={
          router.pathname === "/"
            ? `${projectName}`
            : `${projectName} || ${favText}`
        }
        canonical=""
        description=""
        url=""
        image=""
      />

      <Header />

      <Box className="body_content">{children}</Box>

      <List disablePadding className="batch_iconWrapper">
        <ListItem disableGutters>
          <Link
            href="javascript:void(0)"
            onClick={() => router.push("/membership")}
          >
            <Membership />
          </Link>
        </ListItem>
        <ListItem disableGutters>
          <Link
            href="javascript:void(0)"
            onClick={() => router.push("/booking")}
          >
            <BooknowIcon />
          </Link>
        </ListItem>
        <ListItem disableGutters>
          <Link href={`tel:${data?.data?.data?.contactNumber}`}>
            <CallIcon />
          </Link>
        </ListItem>
      </List>

      <Footer />

      <Backdrop
        sx={{
          color: `${primaryColors?.white}`,
          zIndex: (theme) => theme.zIndex.drawer + 1
        }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </WrapperStyle>
  );
};

export default Wrapper;
