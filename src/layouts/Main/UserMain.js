import React from "react";
import { Footer } from "../../components/Footer";
import { UserHeader } from "../../components/UserHeader/UserHeader";

export const UserMain = ({ children }) => {
  return (
    <div className="cover">
      <UserHeader />
      <main className="site-main">{children}</main>
      <Footer />
    </div>
  );
};
