/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-console */
import MenuIcon from "@mui/icons-material/Menu";
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

import { HeaderWrap } from "@/styles/StyledComponents/HeaderWrapper";
import AppStoreIcon from "@/ui/Icons/AppStoreIcon";
import BrandLogo from "@/ui/Icons/BrandLogo";
import PhoneIcon from "@/ui/Icons/PhoneIcon";
import PlaysoreIcon from "@/ui/Icons/PlaysoreIcon";
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
      name: "Services",
      route: "javascript:void(0)"
    },
    {
      name: "Conditions",
      route: "javascript:void(0)"
    },
    {
      name: "Membership",
      route: "javascript:void(0)"
    },
    {
      name: "Shop",
      route: "javascript:void(0)"
    },
    {
      name: "About Us",
      route: "javascript:void(0)"
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
        <Container fixed>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Link href="/" className="headerLogo">
              <BrandLogo />
            </Link>
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
                sx={{ display: { xs: "none", sm: "block" } }}
                className="navbar"
              >
                {navItems.map((item) => (
                  <Link
                    href={item?.route}
                    key={item?.route}
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
              >
                <Typography variant="caption">Book Now</Typography>
              </CustomButtonPrimary>
            </Box>
          </Toolbar>
        </Container>
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
            display: { xs: "block", lg: "none" },
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
