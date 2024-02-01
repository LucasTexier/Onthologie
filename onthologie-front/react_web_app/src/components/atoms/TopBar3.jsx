import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const path = "/a";
  const handleNavigate = (path) => {
    setAnchorEl(null);
    navigate(path);
  };
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar>
        <Toolbar sx={{ color: "white", backgroundColor: "darkblue" }}>
          <IconButton size="xl" color="inherit" sx={{ mr: "35%" }}>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </Button>
            <Menu open={open}>
              <MenuItem onClick={() => handleNavigate("/")}>Home</MenuItem>
              <MenuItem onClick={() => handleNavigate("/info")}>
                InfoPage
              </MenuItem>
              <MenuItem onClick={() => handleNavigate("/blabla")}>
                ErrorPage
              </MenuItem>
            </Menu>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Onthologie
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
