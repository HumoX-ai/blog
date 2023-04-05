import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FaBars } from "react-icons/fa";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { navItems } from "@/config/constants";
import styled from "@emotion/styled";
import { BsTelegram, BsInstagram, BsTwitter } from "react-icons/bs";
import { Fab, Fade, useScrollTrigger } from "@mui/material";
import { red } from "@mui/material/colors";
import { IoIosArrowUp } from "react-icons/io";
import { useRouter } from "next/router";

const drawerWidth = 251;

const BlurredAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: "blur(6px)",
  backgroundColor: "rgba(10, 25, 41, 0.5)",
}));

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };
  console.log(handleClick);

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function Navbar(props) {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        height: "100vh",
        backgroundColor: "#0a1929",
        textAlign: "center",
      }}
    >
      <Typography
        onClick={() => router.push(`/`)}
        variant="h6"
        sx={{
          my: 2,
          color: "#e3f2fd",
          fontSize: "22px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Knowledge{" "}
        <span
          style={{
            fontFamily: "fantasy",
            color: red[600],
            fontWeight: "bolder",
            fontSize: "30px",
            textDecoration: "underline",
          }}
        >
          Hub
        </span>
      </Typography>

      <Divider sx={{ backgroundColor: "#e0f2f1", width: "70%", m: "auto" }} />
      <List sx={{ margin: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              sx={{
                px: 2,
                color: "#007fff",
                backgroundColor: "#fff",
                mt: 2,
                borderRadius: "0px 15px 0px 15px",
              }}
            >
              {item.icon}
              <ListItemText
                primary={
                  <Typography sx={{ fontSize: "20px", px: 1 }}>
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <IconButton>
          <a style={{ color: "#2fa0d6" }} href="https://t.me/HumoX">
            <BsTelegram />
          </a>
        </IconButton>
        <IconButton>
          <a
            style={{ color: "#d03478" }}
            href="https://instagram.com/humoyun/1912"
          >
            <BsInstagram />
          </a>
        </IconButton>
        <IconButton>
          <a style={{ color: "#2fa0d6" }} href="https://twitter.com/mr_humoyun">
            <BsTwitter />
          </a>
        </IconButton>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <BlurredAppBar component="nav">
        <Toolbar>
          <Box sx={{ flexGrow: 1, justifyContent: "flex-start" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { md: "none" },
                color: "#007fff",
              }}
            >
              <FaBars />
            </IconButton>
          </Box>
          <IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ display: { sm: "block" } }}
            >
              <Typography
                onClick={() => router.push(`/`)}
                variant="h6"
                sx={{
                  color: "#e3f2fd",
                  fontSize: { md: "22px", sm: "22px", xs: "16px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Knowledge{" "}
                <span
                  style={{
                    fontFamily: "fantasy",
                    color: red[600],
                    fontWeight: "bolder",
                    textDecoration: "underline",
                  }}
                >
                  Hub
                </span>
              </Typography>
            </Typography>
          </IconButton>
          <Box
            sx={{ flexGrow: 60, display: { xs: "none", md: "block" } }}
          ></Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button
                onClick={() => router.push(item.route)}
                startIcon={item.icon}
                key={item.id}
                sx={{
                  color: "#007fff",
                  textTransform: "none",
                  mx: 1,
                  fontSize: "17px",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </BlurredAppBar>
      <Toolbar id="back-to-top-anchor" />
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            backdropFilter: "blur(3px)",
            backgroundColor: "rgba(10, 25, 41, 0.5)",
            display: { xs: "block", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
      <ScrollTop {...props}>
        <Fab
          size="small"
          aria-label="scroll back to top"
                 >
          <IoIosArrowUp />
        </Fab>
      </ScrollTop>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
