const navBar = () => {
  return (
    <div className="bg-black flex h-17 ">
      <div id="left" className="w-2/4 flex  items-center">
        <div className="bg-white w-10 h-10 rounded-full mx-5"></div>
        <h1 className="text-white">CHRISTOPHER</h1>
      </div>
      <div id="right" className="w-2/4 ">
        <ul className="text-orange-600 flex justify-evenly items-center h-full">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
          <li className="bg-orange-600 text-black h-9 w-20 rounded-2xl flex justify-center items-center">
            LOG OUT
          </li>
        </ul>
      </div>
    </div>
  );
};

export default navBar;
