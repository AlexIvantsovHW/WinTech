import React, { ReactNode } from "react";
import { Header } from "../header";
import { imgs } from "../../../shared/images";

export const BaseLayout = ({
  children,
  cl,
}: {
  children: ReactNode;
  cl?: string;
}) => {
  return (
    <div
      className={`flex flex-col min-h-screen ${cl}`}
      style={{
        backgroundImage: `url("${imgs.bgImg}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Header />
      {children}
    </div>
  );
};
