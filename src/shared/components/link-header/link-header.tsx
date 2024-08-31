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

export const routerLinkXl = (link: string, title: string, header?: boolean) => {
  return (
    <Link to={link}>
      <span
        className={`font-bold ${
          !header ? "text-black" : "text-white"
        }  transition duration-300 ease-in-out`}
        style={{
          fontSize: "16px",
          filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))",
          transition: "filter 0.3s ease-in-out",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.filter =
            "drop-shadow(0 5px 10px rgba(128, 0, 128, 1))";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.filter =
            "drop-shadow(0 0 0 rgba(0, 0, 0, 0))";
        }}
      >
        {title}
      </span>
    </Link>
  );
};
