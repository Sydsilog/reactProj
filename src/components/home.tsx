import NavBar from "./navBar";

const home = () => {
  return (
    <div className=" bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,1)),url('/img/search.jpg')] bg-cover  h-[200vh] ">
      <NavBar />
      <div id="upper" className="w-full h-screen">
        <div
          id="rightUpper"
          className="w-2/4  h-full flex flex-col justify-center items-center"
        >
          <div
            id="logo"
            className="bg-[url('./img/loho.png')] bg-no-repeat bg-center bg-cover h-64 w-100 mb-7"
          ></div>
          <input
            placeholder="Search here..."
            type="search"
            name="search"
            id="search"
            className="w-4/5 h-10 bg-white rounded-3xl border-2 pl-5"
          />
        </div>
      </div>
      <div className="bg-green-400 h-screen"></div>
    </div>
  );
};

export default home;
