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
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { logout } from "@/reduxtoolkit/slices/userSlice";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";

import { HeaderWrap, NavMenu } from "@/styles/StyledComponents/HeaderWrapper";
import AppStoreIcon from "@/ui/Icons/AppStoreIcon";
import BrandLogo from "@/ui/Icons/BrandLogo";
import MenuIcon from "@/ui/Icons/MenuIcon";
import PhoneIcon from "@/ui/Icons/PhoneIcon";
import PlaysoreIcon from "@/ui/Icons/PlaysoreIcon";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/system";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function Header(props: Props) {
  console.log(props);
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
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Link href={item?.route} key={item.name}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  // const container =
  //   window !== undefined ? () => window().document.body : undefined;

  //for adding class to header while scroll
  // const [scroll, setScroll] = React.useState(false);

  // const detectScroll = React.useCallback(() => {
  //   setScroll(window.scrollY > 100);
  // }, []);

  // React.useEffect(() => {
  //   window.addEventListener("scroll", detectScroll);
  //   return () => {
  //     window.removeEventListener("scroll", detectScroll);
  //   };
  // }, []);

  const conditionMenuItems = [
    {
      name: "All Concern",
      route: "/all-concern"
    },
    {
      name: "Wrinkles and Fine-lines",
      route: "/wrinkles-and-fine-lines"
    },
    {
      name: "Facial Volume Loss (including Lips)",
      route: "/facial-volume-loss"
    },
    {
      name: "Hair Removal",
      route: "/hair-removal"
    },
    {
      name: "Acne",
      route: "/acne"
    },
    {
      name: "Acne Scars",
      route: "/acne-scars"
    },
    {
      name: "Roseacea",
      route: "/roseacea"
    },
    {
      name: "Age Spots",
      route: "/age-spots"
    },
    {
      name: "Sun Damage",
      route: "/sun-damage"
    },
    {
      name: "Spider Veins",
      route: "/pider-veins"
    },
    {
      name: "Melasma",
      route: "/melasma"
    },
    {
      name: "Surgical Scars",
      route: "/surgical-scars"
    },
    {
      name: "Skin Tightening",
      route: "/skin-tightening"
    },
    {
      name: "Skin Texture",
      route: "/skin-texture"
    },
    {
      name: "Hyperpigmentation",
      route: "/hyperpigmentation"
    },
    {
      name: "Aging",
      route: "/aging"
    }
  ];

  const serviceMenuItems = [
    {
      name: "All Services",
      route: "/service"
    },
    {
      name: "Botox",
      route: "/botox"
    },
    {
      name: "Dermal Fillers",
      route: "/dermal-fillers"
    },
    {
      name: "Microneedling",
      route: "/microneedling"
    },
    {
      name: "Microdermabrasion",
      route: "/microdermabrasion"
    },
    {
      name: "Laser Hair Removal",
      route: "/laser-hair-removal"
    },
    {
      name: "Hydrafacial",
      route: "/hydrafacial"
    },
    {
      name: "Laser Skin Rejuvenation",
      route: "/laser-skin-rejuvenation"
    },
    {
      name: "Laser Skin Resurfacing",
      route: "/laser-skin-resurfacing"
    }
  ];

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
                <Link href="tel:+808 999 9889">
                  <i className="phone_icon">
                    <PhoneIcon />
                  </i>
                  <Typography>(808) 999-9889</Typography>
                </Link>
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                className="lableContact_rgt"
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
                  >
                    Services
                  </Button>
                  <NavMenu
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
                    {serviceMenuItems?.map((data, index) => (
                      <MenuItem
                        key={index}
                        onClick={() => router.push(data?.route)}
                      >
                        {data?.name}
                      </MenuItem>
                    ))}
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
                    {conditionMenuItems?.map((data, index) => (
                      <MenuItem
                        key={index}
                        onClick={() => router.push(data?.route)}
                      >
                        {data?.name}
                      </MenuItem>
                    ))}
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
