import { useState } from "react";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { Link } from "react-router-dom";

const Navbar = ({ secondary }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      link: "/",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      link: "/about",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      link: "/contact",
    },
    {
      text: "Sign In",
      icon: <AssignmentIndIcon />,
      link: "/signin",
    },
    {
      text: "Sign Up",
      icon: <HowToRegIcon />,
      link: "/signup",
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <h2>ZenCloud Ascent</h2>
      </div>
      <div className="navbar-links-container">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <Link to={"/signin"}>
          <button
            className={secondary ? "secondary-button-nav" : "primary-button"}
          >
            Sign In
          </button>
        </Link>
        <Link to={"/signup"}>
          <button
            className={secondary ? "secondary-button-nav" : "primary-button"}
          >
            Sign Up
          </button>
        </Link>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <Link className="mobile-links" to={item.link} key={item.text}>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </Link>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
