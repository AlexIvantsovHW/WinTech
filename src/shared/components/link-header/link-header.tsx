import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";

export const routerLink = (
  link: string,
  title: string,
  handleClose: () => void
) => {
  return (
    <Link to={link}>
      <MenuItem onClick={handleClose}>{title}</MenuItem>
    </Link>
  );
};

export const routerLinkXl = (link: string, title: string) => {
  return (
    <Link to={link}>
      <span className="font-bold text-white" style={{ fontSize: "16px" }}>
        {title}
      </span>
    </Link>
  );
};
