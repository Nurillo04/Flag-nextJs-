"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import useCounter from "../counter/countres";

interface Data {
  id: number;
  imgUrl: string;
  name: string;
  population: string;
  region: string;
  capitals: string;
  currencies: string;
}

const HomePages: React.FC = () => {
  const { getIdVal, idval } = useCounter();
  const [datas, setDatas] = useState<Data[]>([]);
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const axiosdata = async () => {
    try {
      const res = await axios.get<Data[]>("http://localhost:3000/counters");
      setDatas(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const func = (id: number) => {
    getIdVal(id);
  };

  useEffect(() => {
    axiosdata();
    // console.log(idval);
  }, []);

  return (
    <div className="w-full xl:pl-20 xl:pr-20 md:pl-2 md:pr-2 pl-2 pr-2 ">
      <div className="container w-full ">
        <div className="flex flex-wrap justify-between items-baseline">
          <input
            type="search"
            placeholder="Searching..."
            className="w-80  md:w-96 p-4 rounded-lg"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <select
            name="all"
            id="all"
            className="mt-5 p-3 rounded-lg"
            onChange={(e) => setSelectedRegion(e.target.value)}
            value={selectedRegion}
          >
            <option value="all">Filter by Region</option>

            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <section className="w-full mt-[48px]">
          <div className="container">
            <div className="w-full flex flex-wrap gap-[70px] bg-inherit">
              {datas
                .filter((item) =>
                  item.name.toLowerCase().includes(searchText.toLowerCase())
                )
                .filter((item) =>
                  selectedRegion === "all"
                    ? true
                    : item.region === selectedRegion
                )
                .map((e, i) => (
                  <Link
                    onClick={() => func(e.id)}
                    href="/detail"
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
                        <p className="text-[#FFFFFF] text-[14px]">
                          Population:
                        </p>
                        {e.population}
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
