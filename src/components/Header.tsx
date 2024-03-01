import React from "react";

const Header = () => {
  return (
    <header className=" bg-white  pt-5 pb-5  left-0 right-0 shadow-xl  xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2 ">
      <div className="conatiner">
        <div className="flex justify-between items-center p-5 h-{80} mx-auto flex  ">
          <h3 className="text-slate-800 leading-8 font-extrabold text-lg">
            Where in the world?
          </h3>

          <p className="text-slate-800 leading-8 font-extrabold text-lg">
            Dark Mode
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
