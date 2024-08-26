import Button from "@mui/material/Button/Button";
import TextField from "@mui/material/TextField";
import SheggarLogo from "./../assets/Sheger logo.png";

function Setting() {
  function handleOnChange() {
    // No parameters needed as `e` is not used
  }

  return (
    <div className="bg-[#E9F0EC] w-full h-full">
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
      <div className="border-[1px] w-[700px] border-black p-5 mx-auto mt-7 rounded-2xl bg-[#f6f5f5]">
        <p className="font-bold text-xl text-center">Update profile</p>
        <div className="justify-between flex flex-row px-20 gap-20 mt-3">
          <div className="flex flex-col pt-7 w-full">
            <p className="font-bold text-sm mb-2">Old User Name</p>
            <TextField
              type="text"
              variant="outlined"
              sx={{
                backgroundColor: "white",
              }}
            />
          </div>
          <div className="flex flex-col pt-7 w-full">
            <p className="font-bold text-sm mb-2">New User Name</p>
            <TextField
              type="text"
              variant="outlined"
              sx={{
                backgroundColor: "white",
              }}
            />
          </div>
        </div>
        <div className="justify-between flex flex-row px-20 gap-20 mt-2">
          <div className="flex flex-col pt-7 w-full">
            <p className="font-bold text-sm mb-2">Old Password</p>
            <TextField
              type="password"
              variant="outlined"
              sx={{
                backgroundColor: "white",
              }}
            />
          </div>
          <div className="flex flex-col pt-7 w-full">
            <p className="font-bold text-sm mb-2">New Password</p>
            <TextField
              type="password"
              variant="outlined"
              sx={{
                backgroundColor: "white",
              }}
            />
          </div>
        </div>
        <p className="pl-[80px] mt-[20px] font-bold">Upload Profile Picture</p>
        <div className="pl-[80px] mt-3">
          <input type="file" name="image" onChange={handleOnChange} />
        </div>
        <div className="pl-[80px] mt-7">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#14532D",
              ":hover": {
                backgroundColor: "#14532D",
                opacity: "0.8",
              },
              width: "500px",
            }}
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Setting;
