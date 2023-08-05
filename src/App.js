import { Modules } from "./pages";
import i18n from "./lang/generator/LangGenerator";
import { Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Admin } from "./pages/Admin";
import { UserModules } from "./page";
function App() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token && role === "ADMIN") {
    return (
      <div className="App">
        <Routes>
          <Route path="/*" element={<Admin />} />
          {/* <Route path="/*" element={<Modules />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  }

  if (token && role === "TEACHER") {
    return (
      <div className="App">
        <Routes>
          <Route path="/*" element={<Modules />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  }

  if (token && role === "USER") {
    return (
      <div className="App">
        <Routes>
          <Route path="/*" element={<UserModules />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    );
  }

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/*" element={<Admin />} /> */}
        {/* <Route path="/*" element={<UserModules />} /> */}
        {/* <Route path="/*" element={<Modules />} /> */}
        <Route index element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
