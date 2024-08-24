import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Registration from "../pages/Registration";
import Certificate from "../pages/Certificate";
import Setting from "../pages/Setting";
import Report from "../pages/Report";
import Logout from "../pages/Logout";
import Login from "../pages/Login";
import Sidebar from "../components/nav/Sidebar";
import Registration2 from "../pages/Registration2";
import PdfPage from "../pages/PdfPage";
import Renew from "../pages/Renew";
import View from "../pages/View";

const AppRoutes = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  return (
    <div className="flex">
      {!isLoginPage && <Sidebar />}
      <main
        className={
          isLoginPage ? "w-full overflow-hidden" : "flex-1 ml-60 h-screen"
        }
      >
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/report" element={<Report />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/certificate/:id" element={<PdfPage />} />
          <Route path="/registration2" element={<Registration2 />} />
          <Route path="" element={<Renew />} />
          <Route path="/view/:id" element={<View />} />
        </Routes>
      </main>
    </div>
  );
};

export default AppRoutes;
