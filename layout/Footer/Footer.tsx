/* eslint-disable react/no-array-index-key */
import { GetSettingsDetails } from "@/api/functions/cms.api";
import assest from "@/json/assest";
import { FooterWrap } from "@/styles/StyledComponents/FooterWrap";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import FacebookIcon from "@/ui/Icons/FacebookIcon";
import InstaGramIcon from "@/ui/Icons/InstaGramIcon";
import LocationIcon from "@/ui/Icons/LocationIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import PhoneIcon from "@/ui/Icons/PhoneIcon";
import TictockIcon from "@/ui/Icons/TictockIcon";
import YoutubeIcon from "@/ui/Icons/YoutubeIcon";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useRef } from "react";
import { useQuery } from "react-query";

const Footer = () => {
  const router = useRouter();
  const navItems = [
    {
      name: "About Us",
      route: "/about-us"
    },
    {
      name: "Services",
      route: "/services"
    },
    {
      name: "Conditions",
      route: "/condition"
    },
    {
      name: "Membership",
      route: "/membership"
    },
    {
      name: "Privacy Policy",
      route: "/privacy-policy"
    },
    {
      name: "Terms Of Services",
      route: "/terms-service"
    }
  ];
  const moreItems = [
    {
      name: "Shop",
      route: "#url"
    },
    {
      name: "Affordability",
      route: "/affordability"
    },
    {
      name: "Blogs",
      route: "/blogs"
    },
    {
      name: "Contact Us",
      route: "/contact-us"
    },
    {
      name: "Terms Of Views",
      route: "/terms-views"
    }
  ];

  const { data } = useQuery("settingsDetails", GetSettingsDetails, {
    refetchOnWindowFocus: false
  });
  const footerRef = useRef(null);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const header = document.getElementById("footertop");
  //     if (window.scrollY > 2000) {
  //       header?.classList.add("footertop-scrolled");
  //     } else {
  //       header?.classList.remove("footertop-scrolled");
  //     }
  //   });
  // }, []);

  const handleLinkClick = (event: any, url?: string) => {
    event.preventDefault();
    window.open(url);
  };

  if (typeof IntersectionObserver !== "undefined") {
    const footerObserver = new IntersectionObserver(
      ([entry]) => {
        const header = document.getElementById("footertop");
        if (entry.isIntersecting) {
          header?.classList.add("footertop-scrolled");
        } else {
          header?.classList.remove("footertop-scrolled");
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      }
    );

    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }
  } else {
  }

  return (
    <FooterWrap>
      <Box id="footertop" className="footer_topBar">
        <Container fixed>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="fotter_topContainer"
          >
            <Typography variant="h5">Schedule Consultation</Typography>
            <CustomButtonPrimary variant="contained" color="primary">
              <Typography
                variant="caption"
                onClick={() => window.open("https://www.zenoti.com/")}
              >
                Book Now
              </Typography>
            </CustomButtonPrimary>
          </Stack>
        </Container>
      </Box>
      <Box className="footer_sectionWrap" ref={footerRef}>
        <Container fixed>
          <Box className="ftr-wrapper">
            <Grid container spacing={{ md: 10, xs: 6.9 }}>
              <Grid item lg={4} md={6} xs={12}>
                <Box className="footer_socialMedian">
                  <Link href="/" className="footer_brnadLogo">
                    <Image
                      src={assest.footerBrandIcon}
                      alt="footericon"
                      width={137}
                      height={87}
                    />
                  </Link>
                  {/* <Box className="newsletterSignUp">
                <Typography variant="body1">Newsletter Sign up</Typography>
                <InputFieldCommon
                  adorMentIcon={<UppArrowIcon />}
                  placeholder="Enter email"
                />
              </Box> */}
                  <List disablePadding className="social_icons">
                    <ListItem disablePadding>
                      <Link
                        href={data?.data?.data?.socialLinks?.fb || "#"}
                        onClick={(e) =>
                          handleLinkClick(e, data?.data?.data?.socialLinks?.fb)
                        }
                      >
                        <FacebookIcon />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        href={data?.data?.data?.socialLinks?.tiktok || "#"}
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            data?.data?.data?.socialLinks?.tiktok
                          )
                        }
                      >
                        <TictockIcon />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        href={data?.data?.data?.socialLinks?.insta || "#"}
                        onClick={(e) =>
                          handleLinkClick(
                            e,
                            data?.data?.data?.socialLinks?.insta
                          )
                        }
                      >
                        <InstaGramIcon />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        href={data?.data?.data?.socialLinks?.yt || "#"}
                        onClick={(e) =>
                          handleLinkClick(e, data?.data?.data?.socialLinks?.yt)
                        }
                      >
                        <YoutubeIcon />
                      </Link>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid item lg={2.5} md={6} xs={6}>
                <Box className="nave_itemWrap">
                  <Typography variant="h5" className="footerTitle_text">
                    Quick Links
                  </Typography>
                  <List disablePadding>
                    {navItems.map((item, index) => (
                      <ListItem disablePadding key={index}>
                        <Link
                          href={item.route}
                          className={
                            router.pathname === item.route ? "active" : ""
                          }
                        >
                          {item.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid item lg={2.5} md={6} xs={6}>
                <Box className="nave_itemWrap">
                  <Typography variant="h5" className="footerTitle_text">
                    More
                  </Typography>
                  <List disablePadding>
                    {moreItems.map((item, index) => (
                      <ListItem disablePadding key={index}>
                        <Link
                          href={item.route}
                          className={
                            router.pathname === item.route ? "active" : ""
                          }
                        >
                          {item.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Grid>
              <Grid item lg={3} md={6} xs={12}>
                <Box className="footer_contactDetails">
                  <Typography variant="h5" className="footerTitle_text">
                    Contact
                  </Typography>
                  <List disablePadding className="footer_contactform">
                    <ListItem disablePadding>
                      <Link href="#">
                        <i className="phone_icon">
                          <MailIcon />
                        </i>
                        <Typography>{data?.data?.data?.email}</Typography>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link href="#">
                        <i className="phone_icon">
                          <PhoneIcon IconHeight="15" IconWidth="15" />
                        </i>
                        <Typography>
                          {data?.data?.data?.contactNumber}
                        </Typography>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Box className="address_box">
                        <i className="phone_icon">
                          <LocationIcon />
                        </i>
                        <Typography className="locationtext">
                          {data?.data?.data?.address}
                        </Typography>
                      </Box>
                    </ListItem>
                  </List>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Box className="footer_bottom">
          <Container fixed>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              className="footercopyWriteWrap"
            >
              <Typography className="copyrighttext" variant="body1">
                Copyright © 2024 <Link href="/">Gilded Leaf</Link>. All Rights
                Reserved
              </Typography>
              {/* <Typography className="desingText">
                Website Design by{" "}
                <Link href="https://www.webskitters.com/">Webskitters</Link>
              </Typography> */}
            </Stack>
          </Container>
        </Box>
      </Box>
      {/* <figure className="footer_desing">
      <Image src={assest.footerDesing} alt="image" width={603} height={449} />
    </figure> */}
    </FooterWrap>
  );
};

export default Footer;
