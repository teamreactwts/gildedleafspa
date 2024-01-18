/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { FooterWrap } from "@/styles/StyledComponents/FooterWrap";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import FacebookIcon from "@/ui/Icons/FacebookIcon";
import InstaGramIcon from "@/ui/Icons/InstaGramIcon";
import LocationIcon from "@/ui/Icons/LocationIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import PhoneIcon from "@/ui/Icons/PhoneIcon";
import TictockIcon from "@/ui/Icons/TictockIcon";
import UppArrowIcon from "@/ui/Icons/UppArrowIcon";
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

const Footer = () => {
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
      route: "/conditions"
    },
    {
      name: "Membership",
      route: "/membership"
    }
  ];
  const moreItems = [
    {
      name: "Shop",
      route: "/shop"
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
    }
  ];
  const socialmediaSection = [
    {
      icon: <FacebookIcon />,
      route: "#url"
    },
    {
      icon: <TictockIcon />,
      route: "#url"
    },
    {
      icon: <InstaGramIcon />,
      route: "#url"
    },
    {
      icon: <YoutubeIcon />,
      route: "#url"
    }
  ];
  // const router = useRouter();
  return (
    <FooterWrap>
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
                <Box className="newsletterSignUp">
                  <Typography variant="body1">Newsletter Sign up</Typography>
                  <InputFieldCommon
                    adorMentIcon={<UppArrowIcon />}
                    placeholder="Enter email"
                  />
                </Box>
                <List disablePadding className="social_icons">
                  {socialmediaSection.map((item, index) => (
                    <ListItem disablePadding key={index}>
                      <Link href={item.route}>{item.icon}</Link>
                    </ListItem>
                  ))}
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
                      <Link href={item.route}>{item.name}</Link>
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
                      <Link href={item.route}>{item.name}</Link>
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
                    <Link href="mailto:demomail@gmail.com">
                      <i className="phone_icon">
                        <MailIcon />
                      </i>
                      <Typography>demomail@gmail.com</Typography>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Link href="tel:1234567890">
                      <i className="phone_icon">
                        <PhoneIcon IconHeight="15" IconWidth="15" />
                      </i>
                      <Typography>1234567890</Typography>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Box className="address_box">
                      <i className="phone_icon">
                        <LocationIcon />
                      </i>
                      <Typography className="locationtext">
                        demo street, location, city country, zip
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
            <Typography className="desingText">
              Website Design by{" "}
              <Link href="https://www.webskitters.com/">Webskitters</Link>
            </Typography>
          </Stack>
        </Container>
      </Box>
      <figure className="footer_desing">
        <Image src={assest.footerDesing} alt="image" width={603} height={449} />
      </figure>
    </FooterWrap>
  );
};

export default Footer;
