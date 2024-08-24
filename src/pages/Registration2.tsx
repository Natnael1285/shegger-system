import { Button, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { Link } from "react-router-dom";

function Registration2() {
  function handleOnChange(_event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="bg-[#E9F0EC] w-full h-Sreen">
      <div className="bg-[#696868] h-[70px] w-full ">
        <header className="flex justify-end items-center my-auto h-full px-6">
          <div className="flex items-center space-x-4">
            <div className="text-black">Helen Guta</div>
            <img
              src="/src/assets/react.svg"
              alt="Profile"
              className="h-10 w-10 rounded-full"
            />
          </div>
        </header>
      </div>

      <div className="border-[0px] w-[1000px] pt-6 pb-6 pl-2 pr-2 mx-auto mt-3">
        <p className="font-bold text-xl text-center">
          Individual Registration Form
        </p>

        <div className="flex flex-col">
          <div className="justify-between flex flex-row pl-8px  ">
            <div className=" flex flex-col pt-7  w-full">
              <p className="font-bold text-sm mb-2 ">First Name </p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Abebe"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2">Middle Name </p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Abebe"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2">Lastname</p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Abebe"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div>
              <p className="pl-[80px] mt-[35px] font-bold">
                Upload Profile Picture
              </p>
              <div className=" pt-4">
                <input type="file" name="image" onChange={handleOnChange} />
              </div>
            </div>
          </div>
          <div className="justify-between flex flex-row pl-8px  ">
            <div className=" flex flex-col pt-7  w-full">
              <p className="font-bold text-sm mb-2 ">Gender </p>
              <select className=" w-[200px] h-[60px] rounded-lg ">
                <option value="" disabled>
                  Gender
                </option>
                <option value="option1">Male</option>
                <option value="option2">Female</option>
              </select>
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2"> Age</p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="25"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2">Educational Status</p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="10+"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div>
              <p className="pl-[80px] mt-[35px] font-bold">
                Upload National Id
              </p>
              <div className=" pt-4">
                <input type="file" name="image" onChange={handleOnChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="justify-between flex flex-row pl-8px  ">
            <div className=" flex flex-col pt-7  w-full">
              <p className="font-bold text-sm mb-2 ">First Name </p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Abebe"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2">Middle Name </p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Abebe"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2">Lastname</p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Abebe"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div>
              <p className="pl-[80px] mt-[35px] font-bold">
                Upload Profile Picture
              </p>
              <div className=" pt-4">
                <input type="file" name="image" onChange={handleOnChange} />
              </div>
            </div>
          </div>
          <div className="justify-between flex flex-row pl-8px  ">
            <div className=" flex flex-col pt-7  w-full">
              <p className="font-bold text-sm mb-2 ">Gender </p>
              <select className=" w-[200px] h-[60px] rounded-lg ">
                <option value="" disabled>
                  Gender
                </option>
                <option value="option1">Male</option>
                <option value="option2">Female</option>
              </select>
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2"> Age</p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="25"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2">Educational Status</p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="10+"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div>
              <p className="pl-[80px] mt-[35px] font-bold">
                Upload National Id
              </p>
              <div className=" pt-4">
                <input type="file" name="image" onChange={handleOnChange} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="justify-between flex flex-row pl-8px  ">
            <div className=" flex flex-col pt-7  w-full">
              <p className="font-bold text-sm mb-2 ">First Name </p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Abebe"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2">Middle Name </p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Abebe"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2">Lastname</p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="Abebe"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div>
              <p className="pl-[80px] mt-[35px] font-bold">
                Upload Profile Picture
              </p>
              <div className=" pt-4">
                <input type="file" name="image" onChange={handleOnChange} />
              </div>
            </div>
          </div>
          <div className="justify-between flex flex-row pl-8px  ">
            <div className=" flex flex-col pt-7  w-full">
              <p className="font-bold text-sm mb-2 ">Gender </p>
              <select className=" w-[200px] h-[60px] rounded-lg ">
                <option value="" disabled>
                  Gender
                </option>
                <option value="option1">Male</option>
                <option value="option2">Female</option>
              </select>
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2"> Age</p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="25"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div className=" flex flex-col pt-7 w-full">
              <p className="font-bold text-sm  mb-2">Educational Status</p>
              <TextField
                type="text"
                variant="outlined"
                placeholder="10+"
                className="w-[200px] bg-slate-50"
              />
            </div>
            <div>
              <p className="pl-[80px] mt-[35px] font-bold">
                Upload National Id
              </p>
              <div className=" pt-4">
                <input type="file" name="image" onChange={handleOnChange} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10  flex flex-row space-x-7 justify-center ">
          <div>
            <Link to="/registration">
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
                Next
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration2;
