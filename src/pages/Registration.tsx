import { Button, TextareaAutosize, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import SheggarLogo from "./../assets/Sheger logo.png";

function Registration() {
  return (
    <div className="bg-[#E9F0EC] w-full h-Screen">
      <div className="bg-[#696868] h-[70px] w-full ">
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

      <div className="border-[1px] w-[1000px] border-black p-6 mx-auto mt-7">
        <p className="font-bold text-xl text-center">
          Enterprise Registration Form
        </p>
        <div className="justify-between flex flex-row px-20 gap-20 ">
          <div className=" flex flex-col pt-7  w-full">
            <p className="font-bold text-sm mb-2 ">Name of the Enterprise </p>
            <TextField type="text" variant="outlined" />
          </div>
          <div className=" flex flex-col pt-7 w-full">
            <p className="font-bold text-sm  mb-2">Date </p>
            <TextField type="text" variant="outlined" />
          </div>
        </div>
        <div className="justify-between flex flex-row px-20 gap-20 ">
          <div className=" flex flex-col pt-7  w-full">
            <p className="font-bold text-sm mb-2 ">SubCity </p>
            <TextField type="text" variant="outlined" />
          </div>
          <div className=" flex flex-col pt-7 w-full">
            <p className="font-bold text-sm  mb-2">Phone Number </p>
            <TextField type="text" variant="outlined" placeholder="+251" />
          </div>
        </div>
        <div className="justify-between flex flex-row px-20 gap-20 ">
          <div className=" flex flex-col pt-7  w-full">
            <p className="font-bold text-sm mb-2 ">Enterprise Description </p>
            <TextareaAutosize
              minRows={"10"}
              style={{
                width: "420x",
              }}
            />
          </div>
          <div className=" flex flex-col pt-7 w-full ">
            <div className="w-15px ml-20 ">
              <p className="font-bold text-sm mb-2 ">Number of People </p>
              <TextField type="text" variant="outlined" placeholder="3" />
            </div>
            <div className="w-15px ml-20 mt-3 ">
              <p className="font-bold text-sm mb-2 ">Shade-number </p>
              <TextField type="text" variant="outlined" placeholder="AA-001" />
            </div>
            <div className="w-15px ml-20 ">
              <p className="font-bold text-sm mb-2 ">Record-number </p>
              <TextField type="text" variant="outlined" placeholder="LK-003" />
            </div>
          </div>
        </div>
        <div className="mt-10 ml-20 ">
          <Link to="/registration2" className="w-full">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#1c623c",
                width: "790px",
                ":hover": {
                  backgroundColor: "#1c623c",
                  opacity: "0.8",
                },
              }}
            >
              Next
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Registration;
