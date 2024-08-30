import React from "react";
import { imgs } from "../../../shared/images";
import { Button, Fade, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../routers";
export const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className=" w-full h-[72px] py-[16px]">
      <div className="w-full h-[40px] flex justify-between items-center px-[16px]">
        <img src={imgs.headerLogo} width={120} height={38} alt="logo" />

        <div>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <Link to={ROUTER.HOME}>
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link to={ROUTER.ABOUT_US}>
              <MenuItem onClick={handleClose}>About us</MenuItem>
            </Link>
            <Link to={ROUTER.CONTACT}>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Link>
            <Link to={ROUTER.NEWEST_GAMES}>
              <MenuItem onClick={handleClose}>Newest games</MenuItem>
            </Link>
            <Link to={ROUTER.ALL_GAMES}>
              <MenuItem onClick={handleClose}>All games</MenuItem>
            </Link>
            <Link to={ROUTER.HOTTEST_GAMES}>
              <MenuItem onClick={handleClose}>Hottest games</MenuItem>
            </Link>
          </Menu>
        </div>
      </div>
    </div>
  );
};
