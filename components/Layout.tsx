import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactElement;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className='bg-slate-900'>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
