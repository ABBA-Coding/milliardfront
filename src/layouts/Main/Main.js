import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { UserHeader } from "../../components/UserHeader/UserHeader";

export const Main = ({ children }) => {
  return (
    <div className="cover">
      <Header />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
};
