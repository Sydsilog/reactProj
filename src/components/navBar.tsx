const navBar = () => {
  return (
    <div className="bg-black flex h-17">
      <div id="left" className="w-2/4"></div>
      <div id="right" className="w-2/4 bg-red-700">
        <ul className="text-white flex justify-evenly items-center h-full">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Log Out</li>
        </ul>
      </div>
    </div>
  );
};

export default navBar;
