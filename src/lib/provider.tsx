import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// date-fns
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// or for dayjs
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// // or for luxon
// import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
// // or for moment
// import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

const DatepickerProvider = ({ children }: { children: any }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      {children}
    </LocalizationProvider>
  );
};
export default DatepickerProvider;
