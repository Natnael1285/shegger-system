import { Link } from "react-router-dom";
import "../../assets/Sheger logo.png";

function Sidebar() {
  return (
    <div className="fixed z-50 left-0 top-0 bottom-0 w-64 bg-green-900 text-white flex flex-col overflow-hidden h-screen ">
      <div className="flex items-center justify-center h-20 border-b border-gray-700">
        <img
          src="/src/assets/Sheger logo.png"
          alt="Logo"
          className="h-fit w-36 object-contain"
        />
      </div>
      <nav className="flex flex-col mt-10 space-y-4">
        <Link
          to="/dashboard"
          className="flex items-center pl-6 py-2 hover:bg-green-700"
        >
          <span className="ml-3">Dashboard</span>
        </Link>
        <Link
          to="/registration"
          className="flex items-center pl-6 py-2 hover:bg-green-700"
        >
          <span className="ml-3">Registration</span>
        </Link>
        <Link
          to="/certificate"
          className="flex items-center pl-6 py-2 hover:bg-green-700"
        >
          <span className="ml-3">Certificate</span>
        </Link>
        <Link
          to="/setting"
          className="flex items-center pl-6 py-2 hover:bg-green-700"
        >
          <span className="ml-3">Setting</span>
        </Link>
        <Link
          to="/report"
          className="flex items-center pl-6 py-2 hover:bg-green-700"
        >
          <span className="ml-3">Report</span>
        </Link>
        <Link to="/" className="flex items-center pl-6 py-2 hover:bg-green-700">
          <span className="ml-3">Logout</span>
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
