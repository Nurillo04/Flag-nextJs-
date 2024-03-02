"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import useCounter from "../counter/countres";
// import Image from "next/image";

const HomePages = () => {
  const { getIdVal, idval } = useCounter();
  let [datas, setDatas] = useState<
    {
      id: number;
      imgUrl: string;
      name: string;
      ppulation: string;
      region: string;
      capitals: string;
      currons: string;
    }[]
  >([]);

  let axiosdata = async () => {
    try {
      let res = await axios.get("http://localhost:3000/counters");
      let data = await res.data;
      setDatas(data);
    } catch (error) {
      console.log(error);
    }
  };

  let func = (id: number) => {
    getIdVal(id);
  };

  useEffect(() => {
    axiosdata();
    console.log(idval);
  }, []);

  return (
    <div className="w-full xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2 ">
      <div className="container w-full ">
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

        <section className="w-full mt-[48px]">
          <div className="container">
            <div className="w-full flex flex-wrap gap-[70px]">
              {datas.map((e, i) => (
                <Link
                  onClick={() => func(e.id)}
                  href="#"
                  className="w-[264px] flex flex-col cursor-grabbing"
                  key={i}
                >
                  <img
                    className="w-[264px] h-[160px] rounded-md"
                    src={e.imgUrl}
                    alt="alt"
                  />
                  <div className="w-full p-[24px] bg-[#2B3844]">
                    <h2 className="text-[18px] mb-[16px]">{e.name}</h2>
                    <p className="text-[12px] flex mb-[8px] items-center gap-x-2 text-slate-500">
                      <p className="text-[#FFFFFF] text-[14px]">Population:</p>
                      {e.ppulation}
                    </p>
                    <p className="text-[12px] flex mb-[8px] items-center gap-x-2 text-slate-500">
                      <p className="text-[#FFFFFF] text-[14px]">Region:</p>
                      {e.region}
                    </p>
                    <p className="text-[12px] flex mb-[8px] items-center gap-x-2 text-slate-500">
                      <p className="text-[#FFFFFF] text-[14px]">Capital:</p>
                      {e.capitals}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePages;
