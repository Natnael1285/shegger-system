import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import MyDocument from "../components/pdf/Mydocument";
import SheggarLogo from "./../assets/Sheger logo.png";

function View() {
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

      <div className="mt-4 mb-5 flex flex-col h-full gap-8 space-x-7 justify-center ">
        <MyDocument />
        <div>
          <Link to="/certificate">
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
      </div>
    </>
  );
}

export default View;
