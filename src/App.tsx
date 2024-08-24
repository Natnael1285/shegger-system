import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./lib/routes";
// import DatepickerProvider from "./lib/provider";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <DatepickerProvider> */}
        <AppRoutes />
        {/* </DatepickerProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;
