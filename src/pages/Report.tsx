import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Report() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("Select Period");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handlePeriodSelect = (period: React.SetStateAction<string>) => {
    setSelectedPeriod(period);
    setIsOpen(false);
    // Here you can add logic to generate the report based on the selected period
    console.log(`Generating ${period} report...`);
  };

  return (
    <div className="bg-[#E9F0EC] w-full h-full">
      <div className="bg-[#696868] h-[70px] w-full">
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
      <div className="mt-5 text-center">
        <p className="font-bold text-3xl">Report</p>
      </div>
      <div className="relative mt-5 mx-auto max-w-xs">
        <button
          onClick={toggleDropdown}
          className="bg-[#bbb3b3] text-white px-4 py-2 rounded-md flex items-center justify-between w-full"
        >
          {selectedPeriod}
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg">
            <button
              onClick={() => handlePeriodSelect("3 months")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              3 Months
            </button>
            <button
              onClick={() => handlePeriodSelect("6 months")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              6 Months
            </button>
            <button
              onClick={() => handlePeriodSelect("12 months")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              12 Months
            </button>
          </div>
        )}
      </div>
      <div className="mt-40  mx-auto w-full flex flex-col items-center justify-center">
        <Link to="/certificate/:id" className="mx-auto">
          <Button
            variant="contained"
            style={{ width: "340px" }} // Set the desired width in pixels
            sx={{
              backgroundColor: "#1c623c",
              ":hover": {
                backgroundColor: "#1c623c",
                opacity: "0.8",
              },
            }}
          >
            Generate
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Report;
