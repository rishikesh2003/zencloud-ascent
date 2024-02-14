import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems } from "../../Components/AdminDash/ListItems";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import { UserContext } from "../../Components/Context/UserContext";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function CreateAcademy() {
  const [open, setOpen] = React.useState(true);
  const [academy, setAcademy] = React.useState({
    name: "",
    city: "",
    country: "",
    state: "",
    description: "",
    ratings: 0,
    imgURL: "",
  });
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const { user } = React.useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log({
      Authorization: `Bearer ${user.token}`,
    });
    const res = await axios.post(
      "http://localhost:8080/api/academies/",
      academy,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    await console.log(res);
    await alert("Academy added");
  }
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Admin Dashboard
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <br />
          <br />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography component="h1" variant="h5">
                  Create Academy
                </Typography>
                <br />
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <label>Academy Name*</label>
                  <TextField
                    margin="normal"
                    required
                    value={academy.name}
                    onChange={(e) => {
                      setAcademy((acad) => ({
                        ...acad,
                        name: e.target.value,
                      }));
                    }}
                    fullWidth
                    id="name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                  />
                  <label>Academy Description*</label>
                  <textarea
                    className="textfield-contact"
                    required
                    value={academy.description}
                    onChange={(e) => {
                      setAcademy((acad) => ({
                        ...acad,
                        description: e.target.value,
                      }));
                    }}
                    name="description"
                    autoFocus
                  />
                  <label>Image URL*</label>
                  <TextField
                    margin="normal"
                    value={academy.imgURL}
                    onChange={(e) => {
                      setAcademy((acad) => ({
                        ...acad,
                        imgURL: e.target.value,
                      }));
                    }}
                    required
                    fullWidth
                    name="image"
                    autoFocus
                  />
                  <label>Ratings*</label>
                  <TextField
                    margin="normal"
                    value={academy.ratings}
                    onChange={(e) => {
                      setAcademy((acad) => ({
                        ...acad,
                        ratings: Number(e.target.value),
                      }));
                    }}
                    required
                    fullWidth
                    name="ratings"
                    type="number"
                    autoFocus
                  />
                  <label>City*</label>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="city"
                    value={academy.city}
                    onChange={(e) => {
                      setAcademy((acad) => ({
                        ...acad,
                        city: e.target.value,
                      }));
                    }}
                    autoFocus
                  />
                  <label>State*</label>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="state"
                    value={academy.state}
                    onChange={(e) => {
                      setAcademy((acad) => ({
                        ...acad,
                        state: e.target.value,
                      }));
                    }}
                    autoFocus
                  />
                  <label>Country*</label>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="country"
                    value={academy.country}
                    onChange={(e) => {
                      setAcademy((acad) => ({
                        ...acad,
                        country: e.target.value,
                      }));
                    }}
                    autoFocus
                  />

                  <div>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Create Academy
                    </Button>
                  </div>
                </Box>
              </Box>
            </Container>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
