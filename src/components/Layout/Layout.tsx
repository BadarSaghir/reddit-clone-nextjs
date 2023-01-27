import React, { PropsWithChildren } from "react";
import Navbar from "../Navbar";

type LayoutProps = {} & PropsWithChildren;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar/>
      <main>{children}</main>
    </>
  );
};
export default Layout;
