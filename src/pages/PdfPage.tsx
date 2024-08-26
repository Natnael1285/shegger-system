import Button from "@mui/material/Button";
import CertificatePDF from "../components/pdf/Generator";
import { Link } from "react-router-dom";
import SheggarLogo from "./../assets/Sheger logo.png";

const data = {
  name: "Jane Smith",
  date: "August 15, 2024",
  details: "Successfully completed the Advanced React PDF Course.",
};

function PdfPage() {
  return (
    <>
      <div>
        <div className="bg-[#696868] h-[70px] w-full">
          <header className="flex justify-end items-center my-auto h-full px-6">
            <div className="flex items-center space-x-4">
              <div className="text-black">Helen Guta</div>
              <img
                src={SheggarLogo}
                alt="Profile"
                className="h-10 w-10 rounded-full"
              />
            </div>
          </header>
        </div>
      </div>
      <CertificatePDF {...data} />;
      <div className="mt-4 mb-5 flex flex-row space-x-7 justify-center ">
        <div>
          <Link to="/registration2">
            <Button
              variant="contained"
              style={{ width: "450px" }} // Set the desired width in pixels
              sx={{
                color: "#1B5F3A",
                backgroundColor: "#F8FAFC",
                ":hover": {
                  backgroundColor: "#F8FAFC",
                  opacity: "0.8",
                },
              }}
            >
              Back
            </Button>
          </Link>
        </div>
        <div>
          <Link to="/certificate/:id">
            <Button
              variant="contained"
              style={{ width: "450px" }} // Set the desired width in pixels
              sx={{
                backgroundColor: "#1c623c",
                ":hover": {
                  backgroundColor: "#1c623c",
                  opacity: "0.8",
                },
              }}
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default PdfPage;
