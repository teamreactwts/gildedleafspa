/* eslint-disable react/no-array-index-key */
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import FacebookIcon from "@/ui/Icons/FacebookIcon";
import InstaGramIcon from "@/ui/Icons/InstaGramIcon";
import LocationIcon from "@/ui/Icons/LocationIcon";
import MailIcon from "@/ui/Icons/MailIcon";
import PhoneIcon from "@/ui/Icons/PhoneIcon";
import TictockIcon from "@/ui/Icons/TictockIcon";
import UppArrowIcon from "@/ui/Icons/UppArrowIcon";
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
  background-color: ${primaryColors.primary};
  padding: 92px 0 37px 0;
  @media (max-width:1199px) {
    padding: 60px 0 57px 0;
  }
  @media (max-width:599px) {
    padding: 40px 0 57px 0;
  }
  position: relative;
  .ftr-wrapper {
    position: relative;
    z-index: 3;
    .footerTitle_text {
      color: ${primaryColors.color807072};
      font-family: Nunito Sans;
      font-size: 15px;
      font-weight: 400;
      line-height: 1.5;
      margin: 0;
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
            transition: all 0.3s ease-in-out;
            &:hover {
              color: ${primaryColors.colorA67033};
            }
          }
        }
      }
    }
    .footer_socialMedian {
      
      .footer_brnadLogo {
        width: 137px;
        display: inline-block;
        line-height: 0;
        font-size: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .social_icons {
        display: flex;
        align-items: center;

        li {
          width: auto;
          margin-right: 27px;
          &:last-child {
            margin-right: 0;
          }
          a {
            display: inline-block;
            line-height: 0px;
            font-size: 0px;
            transition: all 0.4s ease-in-out;
            &:hover {
              svg {
                path {
                  fill: ${primaryColors.colorA67033};
                }
              }
            }
          }
        }
      }
      .newsletterSignUp {
        padding: 30px 0;
        p {
          color: ${primaryColors.color807072};
          font-family: Noto Sans;
          font-size: 15px;
          font-weight: 400;
          line-height: 1;
          margin-bottom: 22px;
        }
        .MuiFormControl-root {
          .MuiInputBase-root {
            border-radius: 4px;
            border: 1px solid rgba(166, 112, 51, 0.1);
            background: ${primaryColors.color292F3A};
            padding: 4px 11px;
            min-height: 40px;
            input {
              color: ${primaryColors.white};
              font-family: Noto Sans;
              font-size: 14px;
              font-weight: 400;
              line-height: 1;
              border-right: 1px solid rgba(166, 112, 51, .1);
              &::placeholder {
                color: ${primaryColors.white} ;
              }

              &::-ms-input-placeholder {
                /* Edge 12 -18 */
                color: ${primaryColors.white} ;
              }
            }
            .MuiInputAdornment-root {
              button{
                padding: 5px;
              }
            }
          }
        }
      }
    }
    .footer_contactDetails {
      .footer_contactform {
        margin-top: 25px;
        li {
          margin-bottom: 26px;
          &:last-child {
            margin-bottom: 0;
          }
          a,
          .address_box {
            display: flex;
            &:hover {
              opacity: 0.7;
            }

            i {
              margin-right: 13px;
            }
            p {
              color: ${primaryColors.white};
              font-family: Nunito Sans;
              font-size: 14px;
              font-weight: 400;
              line-height: 1.5;
              &.locationtext {
                margin-top: -5px;
              }
            }
          }
        }
      }
    }
  }
  .footer_bottom {
    margin-top: 65px;
    padding-top: 35px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    z-index: 3;
    @media (max-width:1199px) {
      margin-top: 50px;
      
    }
    @media (max-width:899px) {
      padding-top: 25px;
      
    }
    .footercopyWriteWrap {
      @media (max-width: 899px) {
        flex-wrap: wrap;
      }
      .copyrighttext {
        color: ${primaryColors.white};
        font-family: Nunito Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        a {
          display: inline-block;
          color: inherit;
          font-size: inherit;
          line-height: inherit;
          font-family: inherit;
          &:hover {
            color: ${primaryColors.colorA67033};
          }
        }
        @media (max-width: 899px) {
        width: 100%;
        margin-bottom: 10px;
      }
      }
      .desingText {
        color: ${primaryColors.white};
        font-family: Nunito Sans;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.5;
        & a{
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          font-weight: inherit;
          color: inherit;
          display: inline-block;
          &:hover{
            color: ${primaryColors.colorA67033};
          }
        }
      }
    }
  }
  .footer_desing {
    position: absolute;
    line-height: 0;
    font-size: 0;

    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Footer = () => {
  const navItems = [
    {
      name: "About Us",
      route: "/"
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
          <Grid container spacing={{md:10 , xs:6.9}}>
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
                  <InputFieldCommon adorMentIcon={<UppArrowIcon />} placeholder="Enter email"/>
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
              Website Design by <Link href="https://www.webskitters.com/">Webskitters</Link>
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
