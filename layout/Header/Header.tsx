/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-console */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";

import {
  GetConditionList,
  GetServiceList,
  GetSettingsDetails
} from "@/api/functions/cms.api";
import { ConditionDoc, Doc } from "@/interface/apiresp.interfaces";
import { HeaderWrap, NavMenu } from "@/styles/StyledComponents/HeaderWrapper";
import { primaryColors } from "@/themes/_muiPalette";
import AppStoreIcon from "@/ui/Icons/AppStoreIcon";
import BrandLogo from "@/ui/Icons/BrandLogo";
import DropDownIcon from "@/ui/Icons/DropdownIcon";
import FacebookIcon from "@/ui/Icons/FacebookIcon";
import InstaGramIcon from "@/ui/Icons/InstaGramIcon";
import MenuIcon from "@/ui/Icons/MenuIcon";
import PhoneIcon from "@/ui/Icons/PhoneIcon";
import PlaysoreIcon from "@/ui/Icons/PlaysoreIcon";
import TictockIcon from "@/ui/Icons/TictockIcon";
import YoutubeIcon from "@/ui/Icons/YoutubeIcon";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {
  const navItems = [
    {
      name: "Membership",
      route: "/membership"
    },
    {
      name: "Shop",
      route: "#url"
    },
    {
      name: "About Us",
      route: "/about-us"
    },
    {
      name: "Affordability",
      route: "/affordability"
    },

    {
      name: "Blogs",
      route: "/blogs"
    }
  ];
  const [page, setPage] = React.useState(0);
  const [per_page, setPageLimit] = React.useState(0);

  const { data: serviceList } = useQuery(
    ["serviceList", page],

    {
      queryFn: () => GetServiceList({ page, per_page }),
      refetchOnWindowFocus: false
    }
  );
  const { data: conditionList } = useQuery(
    ["conditionList", page],

    {
      queryFn: () => GetConditionList({ page, per_page }),
      refetchOnWindowFocus: false
    }
  );

  const navItems2 = [
    {
      name: "Services",

      subnaveitem: !!serviceList && serviceList?.data?.data
    },
    {
      name: "Conditions",

      subnaveitem: !!conditionList && conditionList?.data?.data
    },

    {
      name: "Membership",
      route: "/membership"
    },
    {
      name: "Shop",
      route: "#url"
    },
    {
      name: "About Us",
      route: "/about-us"
    },
    {
      name: "Affordability",
      route: "/affordability"
    },

    {
      name: "Blogs",
      route: "/blogs"
    }
  ];

  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { userData, isLoggedIn } = useAppSelector((state) => state.userSlice);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push("/login");
  };

  const drawer = (
    <Box
      // onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
      className="drawer_section"
    >
      <Link href="/" className="brandLogo">
        <BrandLogo />
      </Link>
      <Divider />
      <List disablePadding className="navitems">
        {navItems2.map((item, index) => (
          <ListItem disablePadding>
            {!Array.isArray(item.subnaveitem) && (
              <>
                {" "}
                <Link
                  href={!!item?.route ? (item?.route as string) : "#"}
                  key={item.name}
                  onClick={handleDrawerToggle}
                >
                  {item.name}
                </Link>
              </>
            )}
            {item.subnaveitem &&
              Array.isArray(item.subnaveitem) &&
              item.subnaveitem.length > 0 && (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<DropDownIcon IconHeight="15" IconWidth="20" />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    {item.name}
                  </AccordionSummary>
                  <AccordionDetails>
                    <Link
                      href={"#"}
                      onClick={() => {
                        router.push(
                          item.name == "Services" ? `/services` : `/condition`
                        );
                        handleDrawerToggle();
                      }}
                    >
                      {item.name == "Services"
                        ? "All Services"
                        : "All Concerns"}
                    </Link>
                  </AccordionDetails>
                  {item.subnaveitem.map((subItem, subIndex) => (
                    <AccordionDetails key={subIndex}>
                      <Link
                        href={"#"}
                        // onClick={handleDrawerToggle}
                        onClick={() => {
                          router.push(
                            item.name == "Services"
                              ? `/service-details/${subItem._id}`
                              : `/condition-details/${subItem._id}`
                          );
                          handleDrawerToggle();
                        }}
                      >
                        {subItem.title}
                      </Link>
                    </AccordionDetails>
                  ))}
                </Accordion>
              )}
          </ListItem>
        ))}
      </List>
      <CustomButtonPrimary
        variant="contained"
        color="primary"
        className="booknow_btn"
        onClick={() => router.push("/booking")}
      >
        <Typography variant="caption">Book Now</Typography>
      </CustomButtonPrimary>
    </Box>
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const { data } = useQuery("settingsDetails", GetSettingsDetails, {
    refetchOnWindowFocus: false
  });

  const handleLinkClick = (event: any, url?: string) => {
    event.preventDefault();
    window.open(url);
  };

  return (
    <HeaderWrap sx={{ display: "flex" }} className="main_head">
      <AppBar
        component="nav"
        position="static"
        elevation={0}
        className="headerContainer"
      >
        <Box className="header_top">
          <Container fixed>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              className="header_lableWrap"
            >
              <Box className="lableContact_lft">
                <Link href={`tel:${data?.data?.data?.contactNumber}`}>
                  <i className="phone_icon">
                    <PhoneIcon />
                  </i>
                  <Typography>{data?.data?.data?.contactNumber}</Typography>
                </Link>
              </Box>

              <Stack
                direction="row"
                alignItems="center"
                className="lableContact_rgt"
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  className="download_sectionWrap"
                >
                  <Typography className="title_descriptoion" variant="body1">
                    Download the app:
                  </Typography>
                  <List disablePadding>
                    <ListItem disablePadding>
                      <Link href="#url">
                        <i className="phone_icon">
                          <PlaysoreIcon />
                        </i>
                        <Typography>Play store</Typography>
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link href="#url">
                        <i className="phone_icon">
                          <AppStoreIcon />
                        </i>
                        <Typography>App store</Typography>
                      </Link>
                    </ListItem>
                  </List>
                </Stack>
                <Box className="socilIcon_list">
                  <List disablePadding className="social_icons">
                    <ListItem disablePadding>
                      <Link
                        href={data?.data?.data?.socialLinks?.fb || "#"}
                        onClick={(e) =>
                          handleLinkClick(e, data?.data?.data?.socialLinks?.fb)
                        }
                      >
                        <FacebookIcon IconHeight="15" IconWidth="15" />
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
                        <TictockIcon IconHeight="15" IconWidth="15" />
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
                        <InstaGramIcon IconHeight="15" IconWidth="15" />
                      </Link>
                    </ListItem>
                    <ListItem disablePadding>
                      <Link
                        href={data?.data?.data?.socialLinks?.yt || "#"}
                        onClick={(e) =>
                          handleLinkClick(e, data?.data?.data?.socialLinks?.yt)
                        }
                      >
                        <YoutubeIcon IconHeight="15" IconWidth="15" />
                      </Link>
                    </ListItem>
                  </List>
                </Box>
              </Stack>
            </Stack>
          </Container>
        </Box>
        <Box className="header_btm">
          <Container fixed>
            <Toolbar>
              <Link href="/" className="headerLogo">
                <BrandLogo />
              </Link>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: "none" } }}
                className="menu_btn"
              >
                <MenuIcon />
              </IconButton>

              {isLoggedIn ? (
                <Box
                  sx={{ display: { xs: "none", sm: "block" } }}
                  className="navbar"
                >
                  <CustomButtonPrimary
                    onClick={handleLogout}
                    type="button"
                    variant="contained"
                    color="primary"
                  >
                    <Typography variant="caption">Logout</Typography>
                  </CustomButtonPrimary>

                  <CustomButtonPrimary
                    type="button"
                    variant="contained"
                    color="primary"
                  >
                    {userData?.email!}
                  </CustomButtonPrimary>
                </Box>
              ) : (
                <Box
                  sx={{ display: { xs: "none", md: "block" } }}
                  className="navbar"
                >
                  <Button
                    id="basic-button"
                    aria-controls={open2 ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open2 ? "true" : undefined}
                    onClick={handleClick2}
                    className="navDropdown"
                    sx={{
                      color: `${
                        router.pathname.includes("/services")
                          ? `${primaryColors?.colorA67033} !important`
                          : ""
                      }`
                    }}
                  >
                    Services
                  </Button>
                  <NavMenu
                    className="menue_list_dropdown"
                    id="basic-menu"
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    MenuListProps={{
                      "aria-labelledby": "basic-button"
                    }}
                    TransitionComponent={Fade}
                    transformOrigin={{
                      horizontal: 70,
                      vertical: "top"
                    }}
                  >
                    <MenuItem onClick={() => router.push("/services")}>
                      All Services
                    </MenuItem>
                    {!!serviceList &&
                      !!serviceList?.data?.data &&
                      serviceList?.data?.data.length > 0 &&
                      serviceList?.data?.data.map(
                        (data: Doc, index: number) => (
                          <MenuItem
                            key={index}
                            onClick={() =>
                              router.push(`/service-details/${data._id}`)
                            }
                          >
                            {data?.short_title}
                          </MenuItem>
                        )
                      )}
                  </NavMenu>

                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="navDropdown"
                  >
                    Conditions
                  </Button>
                  <NavMenu
                    className="menue_list_dropdown"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button"
                    }}
                    TransitionComponent={Fade}
                    transformOrigin={{
                      horizontal: 70,
                      vertical: "top"
                    }}
                  >
                    <MenuItem onClick={() => router.push("/condition")}>
                      All Concerns
                    </MenuItem>
                    {!!conditionList &&
                      !!conditionList?.data?.data &&
                      conditionList?.data?.data.length > 0 &&
                      conditionList?.data?.data.map(
                        (data: ConditionDoc, index: number) => (
                          <MenuItem
                            key={index}
                            onClick={() =>
                              router.push(`/condition-details/${data._id}`)
                            }
                          >
                            {data?.short_title}
                          </MenuItem>
                        )
                      )}
                  </NavMenu>

                  {navItems.map((item) => (
                    <Link
                      href={item?.route}
                      key={item?.name}
                      className={router.pathname === item.route ? "active" : ""}
                    >
                      {item?.name}
                    </Link>
                  ))}
                </Box>
              )}
              <Box className="hdr_rgt">
                <CustomButtonPrimary
                  type="button"
                  variant="contained"
                  color="primary"
                  onClick={() => router.push("/booking")}
                >
                  <Typography variant="caption">Book Now</Typography>
                </CustomButtonPrimary>
              </Box>
            </Toolbar>
          </Container>
        </Box>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
    </HeaderWrap>
  );
}
