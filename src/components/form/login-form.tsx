import { Checkbox } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

import SheggarLogo from "./../../assets/Sheger logo.png";

const LoginForm = () => {
  return (
    <div className="flex flex-col w-1/4 mx-auto gap-4">
      <img src={SheggarLogo} alt="" className="w-32 object-contain mx-auto" />

      <p>Username</p>
      <TextField type="text" variant="outlined" />
      <p>Password</p>
      <TextField type="password" variant="outlined" />
      <div className="flex flex-row  items-center">
        <Checkbox />
        <p>Remember me </p>
      </div>
      <Link to="/dashboard" className="w-full">
        <Button
          variant="contained"
          className="w-full"
          sx={{
            backgroundColor: "#1c623c",

            ":hover": {
              backgroundColor: "#1c623c",
              opacity: "0.8",
            },
          }}
        >
          Login
        </Button>
      </Link>
    </div>
  );
};

export default LoginForm;
