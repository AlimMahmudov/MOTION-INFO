import React, { FC, ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";

interface LayoutSliceProps {
  children: ReactNode;
}

const LayoutSlice: FC<LayoutSliceProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutSlice;
