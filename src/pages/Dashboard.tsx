import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Barchart from "../components/charts/bar";
import Stock from "../components/charts/stocx";

function Dashboard() {
  const cardsContent = [
    {
      title: " Total Certification Expired Enterprises",
      value: 40,
    },
    {
      title: " Total Certification Expired Enterprises",
      value: 40,
    },
    {
      title: " Total Certification Expired Enterprises",
      value: 40,
    },
    {
      title: " Total Certification Expired Enterprises",
      value: 40,
    },
  ];
  const data = [
    {
      name: "2021",
      uv: 800,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2022",
      uv: 1630,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "2023",
      uv: 420,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "2024",
      uv: 2100,
      pv: 3908,
      amt: 2000,
    },
  ];
  return (
    <div className=" flex-1 h-screen overflow-y-scroll bg-[#E9F0EC] ">
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
      <div className="grid grid-cols-4 gap-4 mb-6 px-6 pt-7">
        {cardsContent.map((card, index) => (
          <Card
            key={index}
            sx={{
              backgroundColor: "#696868",
              color: "#fff",
            }}
          >
            <CardContent className="flex flex-col items-center justify-center gap-4">
              <h2 className="text-sm font-semibold">{card.title}</h2>
              <div className="text-4xl">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex flex-row">
        <Barchart />
        <Stock data={data} />
      </div>
      <div className="bg-[#E9F0EC]   shadow ml-12  ">
        <table className="w-full text-left bg-[#E9F0EC] ">
          <thead className=" p-2 bg-[#D9D9D9] h-[30px] w-full " rounded-lg>
            <th className="py-2 ">Recent Entenprises</th>
            <th className="py-2">Start Date</th>
            <th className="py-2">Finish Date</th>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="py-2 flex items-center">
                <img
                  src="/src/assets/react.svg"
                  alt="Avatar"
                  className="h-10 w-10 rounded-full mr-4"
                />
                Sierra Ferguson
              </td>
              <td className="py-2">June, 2019</td>
              <td className="py-2">June, 2020</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 flex items-center">
                <img
                  src="/src/assets/react.svg"
                  alt="Avatar"
                  className="h-10 w-10 rounded-full mr-4"
                />
                Sierra Ferguson
              </td>
              <td className="py-2">June, 2019</td>
              <td className="py-2">June, 2020</td>
            </tr>
            <tr className="border-t">
              <td className="py-2 flex items-center">
                <img
                  src="/src/assets/react.svg"
                  alt="Avatar"
                  className="h-10 w-10 rounded-full mr-4"
                />
                Sierra Ferguson
              </td>
              <td className="py-2">June, 2019</td>
              <td className="py-2">June, 2020</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
