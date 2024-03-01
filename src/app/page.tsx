import React from "react";
import Image from "next/image";

const HomePages = () => {
  return (
    <div className="xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2 ">
      <div className="container ">
        <div className="flex flex-wrap justify-between items-baseline">
          <input
            type="search"
            placeholder="Searching..."
            className="w-80  md:w-96 p-4 rounded-lg"
          />
          <select name="all" id="all" className="mt-5 p-3 rounded-lg">
            <option value="all">Filter by Region</option>
            <option value="oceania">Oceania</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
          </select>
        </div>
        <ul className="mt-28 flex flex-wrap justify-between items-baseline">
          <li>
            <Image src="/germany.png" alt="Hello " width={264} height={164} />
            <div>
              <h3 className="mt-6 mb-4 font-bold text-2xl"> Germany</h3>
              <p className="font-semibold text-base">
                Population:{" "}
                <span className="text-slate-400 ml-2">81,770,900</span>
              </p>
              <p className="font-semibold text-base">
                Region: <span className="text-slate-400 ml-2">Europe</span>
              </p>
              <p className="font-semibold text-base">
                Capital: <span className="text-slate-400 ml-2">Berlin</span>
              </p>
            </div>
          </li>
          <li>
            <Image src="/amerika.png" alt="Hello " width={264} height={164} />
            <div>
              <h3 className="mt-6 mb-4 font-bold text-2xl">
                {" "}
                United States of America
              </h3>
              <p className="font-semibold text-base">
                Population:{" "}
                <span className="text-slate-400 ml-2">323,947,000</span>
              </p>
              <p className="font-semibold text-base">
                Region: <span className="text-slate-400 ml-2"> Americas</span>
              </p>
              <p className="font-semibold text-base">
                Capital:{" "}
                <span className="text-slate-400 ml-2">Washington, D.C.</span>
              </p>
            </div>
          </li>
          <li>
            <Image src="/germany.png" alt="Hello " width={264} height={164} />
            <div>
              <h3 className="mt-6 mb-4 font-bold text-2xl"> Germany</h3>
              <p className="font-semibold text-base">
                Population:{" "}
                <span className="text-slate-400 ml-2">81,770,900</span>
              </p>
              <p className="font-semibold text-base">
                Region: <span className="text-slate-400 ml-2">Europe</span>
              </p>
              <p className="font-semibold text-base">
                Capital: <span className="text-slate-400 ml-2">Berlin</span>
              </p>
            </div>
          </li>

          <li>
            <Image src="/germany.png" alt="Hello " width={264} height={164} />
            <div>
              <h3 className="mt-6 mb-4 font-bold text-2xl"> Germany</h3>
              <p className="font-semibold text-base">
                Population:{" "}
                <span className="text-slate-400 ml-2">81,770,900</span>
              </p>
              <p className="font-semibold text-base">
                Region: <span className="text-slate-400 ml-2">Europe</span>
              </p>
              <p className="font-semibold text-base">
                Capital: <span className="text-slate-400 ml-2">Berlin</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePages;
