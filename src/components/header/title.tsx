import SheggarLogo from "./../../assets/Sheger logo.png";
const Title = () => {
  return (
    <div className="flex flex-row px-10 border-b-2">
      <img src={SheggarLogo} alt="" className="w-24 object-contain" />
      <div className=" flex flex-row gap-40 items-center justify-start w-full">
        <p className="mx-auto text-2xl font-semibold text-gray-500">
          Welcome to Furi job and skill development center{" "}
        </p>
      </div>
    </div>
  );
};

export default Title;
