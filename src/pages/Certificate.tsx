import { useState, ChangeEvent } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Badge from "../components/badge/badge";
import Button from "@mui/material/Button";

interface CertificateData {
  id: number;
  startDate: string;
  dueStatus: string;
  endDate: string;

  enterpriseName: string;
}

const sampleData: CertificateData[] = [
  {
    id: 1,
    startDate: "2024-01-01",
    dueStatus: "Promoted",
    endDate: "2024-12-31",

    enterpriseName: "Trident tec",
  },
  {
    id: 2,
    startDate: "2023-05-15",
    dueStatus: "Active",
    endDate: "2024-05-15",

    enterpriseName: "Biya poutary",
  },
  {
    id: 3,
    startDate: "2022-08-10",
    dueStatus: "Passed",
    endDate: "2023-08-10",

    enterpriseName: "Dadis foam",
  },
  {
    id: 4,
    startDate: "2023-11-20",
    dueStatus: "Promoted",
    endDate: "2024-11-20",

    enterpriseName: "Abel plastic",
  },
  {
    id: 5,
    startDate: "2021-02-25",
    dueStatus: "Active",
    endDate: "2022-02-25",

    enterpriseName: "Hotspot",
  },
];

function Certificate() {
  const [activeSearch, setActiveSearch] =
    useState<CertificateData[]>(sampleData);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm === "") {
      setActiveSearch(sampleData);
    } else {
      const filteredData = sampleData.filter((item) =>
        item.enterpriseName.toLowerCase().includes(searchTerm)
      );
      setActiveSearch(filteredData);
    }
  };

  return (
    <div className="bg-[#E9F0EC] w-full h-full ">
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
      <div className="flex flex-row gap-40 items-center justify-start w-full">
        <p className="mx-auto text-4xl font-semibold text-gray-500 mt-8">
          Annual Renewal
        </p>
      </div>
      <div>
        <form className="w-[950px] relative mx-auto pt-3">
          <div className="relative w-2/3 mx-auto">
            <input
              type="search"
              placeholder="Search Enterprise"
              className="w-full p-4 rounded-full bg-white"
              onChange={handleSearch}
            />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-slate-400 rounded-full">
              <AiOutlineSearch />
            </button>
          </div>

          <div className="mt-8 ">
            <div className="p-4 bg-slate-300 text-black w-full rounded-xl grid grid-cols-6">
              <span>ID</span>
              <span>Enterprise </span>
              <span>Start Date</span>
              <span>Due Status</span>
              <span>End Date</span>
              <span>Details</span>
            </div>
            {activeSearch.length > 0 ? (
              <div className="flex flex-col space-y-2 mt-4">
                {activeSearch.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-white rounded-xl grid grid-cols-6"
                  >
                    <span>{item.id}</span>
                    <span>{item.enterpriseName}</span>
                    <span>{item.startDate}</span>
                    <span>
                      <Badge status={item.dueStatus} />
                    </span>
                    <span>{item.endDate}</span>
                    <div className="flex flex-row gap-4 ">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#E9F0EC",
                          color: "black",
                          ":hover": {
                            backgroundColor: "#E9F0EC",
                            opacity: "0.8",
                          },
                        }}
                      >
                        View
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#14532D",
                          ":hover": {
                            backgroundColor: "#14532D",
                            opacity: "0.8",
                          },
                        }}
                      >
                        Renew
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="mt-4 text-center">No results found</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Certificate;
