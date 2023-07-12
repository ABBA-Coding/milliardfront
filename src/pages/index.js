import React from "react";
import { Route, Routes } from "react-router-dom";
import { Global } from "./Global";
import { Contact } from "./Contact";
import { Journal } from "./Journal";
import { Main } from "../layouts/Main/Main";

export const Modules = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<Global />} />
        <Route path="/journal/*" element={<Journal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Main>
  );
};
