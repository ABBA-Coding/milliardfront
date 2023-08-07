import React from "react";
import { AdminBar } from "../components/AdminBar/AdminBar";
import { Route, Routes } from "react-router-dom";
import { StudentTable } from "../components/StudentTable/StudentTable";
import { TeacherTable } from "../components/TeacherTable/TeacherTable";
import { AdminTable } from "../components/AdminTable/AdminTable";
import { SettingTable } from "../components/SettingTable/SettingTable";
import { ClassTable } from "../components/ClassTable/Classtable";
// import useZustand from "../context/CreateZustand";

export const Admin = () => {
  // const roles = useZustand((state) => state?.roles);
  // console.log(roles);
  return (
    <div className="admin">
      <div className="admin__inner">
        <AdminBar />
        <div className="admin__table info">
          <Routes>
            <Route index element={<AdminTable />} />
            <Route path="/class" element={<TeacherTable />} />
            <Route path="/student" element={<StudentTable />} />
            <Route path="/classes" element={<ClassTable />} />
            <Route path="/settings" element={<SettingTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
