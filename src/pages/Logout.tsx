// import Title from "../components/header/title";

function Logout() {
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
    </div>
  );
}

export default Logout;
