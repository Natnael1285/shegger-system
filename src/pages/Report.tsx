import Stock from "../components/charts/stocx";
function Report() {
  const data = [
    {
      name: "2000",
      uv: 1200,
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
    <div className="bg-[#E9F0EC] w-full h-full">
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
      <div className="mt-5 ">
        <p className="font-bold text-3xl text-center">Report</p>
      </div>
      <Stock data={data} />
    </div>
  );
}

export default Report;
