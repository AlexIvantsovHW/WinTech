import React from "react";
import { imgs } from "../../../shared/images";
import { Button, Fade, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { ROUTER } from "../../../routers";
import {
  routerLink,
  routerLinkXl,
} from "../../../shared/components/link-header/link-header";
import { Link, useLocation, useNavigate } from "react-router-dom";
export const Header = () => {
  const location = useLocation();
  const block = location.pathname === "/";
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const token = localStorage.getItem("token") === "" ? false : true;
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" w-full h-[72px] py-[16px]">
      <div className="w-full h-[40px] flex justify-between items-center px-[16px] ">
        <Link to={ROUTER.HOME} style={{ display: block ? "none" : "flex" }}>
          {" "}
          <img src={imgs.headerLogo} width={120} height={38} alt="logo" />
        </Link>

        <div className="lg:hidden">
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
            {routerLink(ROUTER.HOME, "Home", handleClose)}
            {routerLink(ROUTER.HOTTEST_GAMES, "Hottest games", handleClose)}
            {routerLink(ROUTER.NEWEST_GAMES, "Newest games", handleClose)}
            {routerLink(ROUTER.ALL_GAMES, "All games", handleClose)}
            {routerLink(ROUTER.ABOUT_US, "About us", handleClose)}
            {routerLink(ROUTER.CONTACT, "Contact us", handleClose)}
          </Menu>
        </div>
        <div
          className={`hidden lg:flex  gap-[15px] justify-center ${
            block ? "w-full max-w-full" : "max-w-[637px]"
          }`}
        >
          {routerLinkXl(ROUTER.HOME, "Home", true)}
          {routerLinkXl(ROUTER.HOTTEST_GAMES, "Hottest games", true)}
          {routerLinkXl(ROUTER.NEWEST_GAMES, "Newest games", true)}
          {routerLinkXl(ROUTER.ALL_GAMES, "All games", true)}
          {routerLinkXl(ROUTER.ABOUT_US, "About us", true)}
          {routerLinkXl(ROUTER.CONTACT, "Contact us", true)}
        </div>
        <div
          className={`hidden lg:flex `}
          style={{ display: block ? "none" : "flex" }}
        >
          {token ? (
            <Button
              variant="contained"
              onClick={() => {
                localStorage.setItem("token", "");
                navigate(ROUTER.HOME);
              }}
              color="warning"
              style={{
                height: "50px",
                fontSize: "18px",
                paddingLeft: "15px",
                paddingRight: "15px",
                paddingTop: "10px",
                paddingBottom: "10px",
                borderRadius: "25px",
              }}
            >
              Log out
            </Button>
          ) : (
            <Link to={ROUTER.REGISTER}>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  height: "50px",
                  fontSize: "18px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  borderRadius: "25px",
                }}
              >
                Create Account
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
