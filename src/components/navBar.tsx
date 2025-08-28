const navBar = () => {
  return (
    <div className="bg-gradient-to-b from-black/50 to-black/50 flex h-17 font-mono tracking-wide fixed w-full">
      <div id="left" className="w-2/5 flex  items-center">
        <div className="bg-white w-10 h-10 rounded-full mx-5"></div>
        <h1 className="text-white">CHRISTOPHER</h1>
      </div>
      <div id="right" className="w-3/5 ">
        <ul className="text-white flex justify-evenly items-center h-full">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
          <a
            href="#"
            className="bg-orange-600 text-black h-9 w-25 rounded-2xl flex justify-center items-center"
          >
            CHECK CART
          </a>
          <a href="#">LOG OUT</a>
        </ul>
      </div>
    </div>
  );
};

export default navBar;
