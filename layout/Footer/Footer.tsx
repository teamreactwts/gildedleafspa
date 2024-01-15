/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import FacebookIcon from "@/ui/Icons/FacebookIcon";
import InstaGramIcon from "@/ui/Icons/InstaGramIcon";
import LocationIcon from "@/ui/Icons/LocationIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import PhoneIcon from "@/ui/Icons/PhoneIcon";
import TictockIcon from "@/ui/Icons/TictockIcon";
import YoutubeIcon from "@/ui/Icons/YoutubeIcon";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

const FooterWrap = styled(Box)`
  background-color: ${primaryColors.mainFontColor};
  padding: 92px 0 37px 0;
  .ftr-wrapper {
    .footerTitle_text {
      color: ${primaryColors.color807072};
      font-family: Nunito Sans;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.5;
    }
    .nave_itemWrap {
      ul {
        padding-top: 25px;
        li {
          margin-bottom: 31px;
          &:last-child {
            margin-bottom: 0;
          }
          a {
            display: inline-block;
            color: ${primaryColors.white};
            font-family: Nunito Sans;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.5;
            transition: all .3s ease-in-out ;
            &:hover{
              color: ${primaryColors.colorA67033};
            }
          }
        }
      }
    }
  }
`;

const Footer = () => {
  const navItems = [
    {
      name: "home",
      route: "/"
    },
    {
      name: "About",
      route: "/about"
    },
    {
      name: "Products",
      route: "/products"
    },
    {
      name: "Package",
      route: "/package"
    },
    {
      name: "Contact",
      route: "/contact"
    }
  ];
  const socialmediaSection = [
    {
      icon: <FacebookIcon />,
      route: "javascript:void(0)"
    },
    {
      icon: <TictockIcon />,
      route: "javascript:void(0)"
    },
    {
      icon: <InstaGramIcon />,
      route: "javascript:void(0)"
    },
    {
      icon: <YoutubeIcon />,
      route: "javascript:void(0)"
    }
  ];
  // const router = useRouter();
  return (
    <FooterWrap>
      <Container fixed>
        <Box className="ftr-wrapper">
          <Grid container spacing={10}>
            <Grid item lg={2}>
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
            <Grid item lg={7}>
              <Box className="footer_socialMedian">
                <Link href="/">
                  <Image
                    src={assest.footerBrandIcon}
                    alt="footericon"
                    width={137}
                    height={87}
                  />
                </Link>
                <List disablePadding className="social_icons">
                  {socialmediaSection.map((item, index) => (
                    <ListItem disablePadding key={index}>
                      <Link href={item.route}>{item.icon}</Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Box className="footer_contactDetails">
                <Typography variant="h5" className="footerTitle_text">
                  Quick Links
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
                        <PhoneIcon />
                      </i>
                      <Typography>1234567890</Typography>
                    </Link>
                  </ListItem>
                  <ListItem disablePadding>
                    <Box>
                      <i className="phone_icon">
                        <LocationIcon />
                      </i>
                      <Typography>
                        demo street, location, city country, zip
                      </Typography>
                    </Box>
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="footer_btn"
        >
          <Typography className="copyrighttext" variant="body1">
            Copyright © 2024 <Link href="/">Gilded Leaf</Link>. All Rights
            Reserved
          </Typography>
          <Typography className="desingText">
            Website Design by Webskitters
          </Typography>
        </Stack>
      </Container>
    </FooterWrap>
  );
};

export default Footer;
