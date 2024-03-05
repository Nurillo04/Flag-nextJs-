("use client");
import useCounter from "@/counter/countres";
import React, { useEffect, useState } from "react";

const DetailPage = () => {
  const { getIdVal, idval } = useCounter();
  console.log(idval);
  let [loading, setLoading] = useState(true);
  let [torf, setTorf] = useState<any>([]);

  let func = async () => {
    setTorf(idval);
    setLoading(false);
  };
  useEffect(() => {
    func();
  }, []);
  return (
    <>
      <div className="container">
        <button className="mt-[80px] mb-[80px] w-[136px] h-[40px] bg-[#2B3844] rounded-md">
          <i className="bx bx-left-arrow-alt"></i> Back
        </button>
      </div>
      <div>
        <div className="container">
          <div
            className={
              loading
                ? " w-full flex justify-center flex-col items-center"
                : "hidden"
            }
          >
            <div className="spinner"></div>
            <h1>Loading..</h1>
          </div>
          {idval.map((e: any, i: number) => (
            <div className="w-full flex items-center justify-between" key={i}>
              <img
                className="w-[560px] h-[401px] rounded-md"
                src={e.flags.png}
                alt="alt"
              />
              <div className="w-[574px]">
                <p className="text-[32px] font-extrabold leading-[43.65px]">
                  {e.name.common}
                </p>
                <div className="flex w-full justify-between mt-[23px]">
                  <div>
                    <p>Native Name: {e.name.common}</p>
                    <p>Population: {e.population}</p>
                    <p>Region: {e.region}</p>
                    <p>Sub Region: Western Europe</p>
                    <p>Capitall: {e.capital}</p>
                  </div>
                  <div>
                    <p>Top Level Domain: .be</p>
                    <p>Currencies: Euro</p>
                    <p>Languages: Dutch, French, German</p>
                  </div>
                </div>
                <div className="mt-[68px] h-[28px] flex">
                  <p className="">Border Countries: </p>
                  <div className="flex pl-[16px] ">
                    <button className="w-[96px] bg-[#2B3844] rounded-sm  mr-[10px] text-[14px]">
                      France
                    </button>
                    <button className="w-[96px] bg-[#2B3844] rounded-sm  mr-[10px] text-[14px]">
                      Germany
                    </button>
                    <button className="w-[96px] bg-[#2B3844] rounded-sm  mr-[10px] text-[14px]">
                      Netherlands
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DetailPage;
