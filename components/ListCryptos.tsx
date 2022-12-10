import React, { useEffect } from "react";
import { Cryptos } from "../lib/load-cryptos";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";

type Props = {
  cryptos: Cryptos[];
};

const ListCryptos: React.FC<Props> = ({ cryptos }: Props) => {
  useEffect(() => {
    console.log(cryptos);
  }, []);

  return (
    <section className='container mx-auto space-y-6 w-3/4'>
      <h2 className='text-white text-2xl font-bold  font-mono text-center '>
        List of cryptocurrencies prices
      </h2>
      <ul className=' bg-gray-800 grid grid-cols-fill-300 place-content-center row-auto text-white p-5 rounded-lg gap-6 '>
        {cryptos ? (
          cryptos.map((crypto) => {
            return (
              <li
                key={crypto.id}
                className=' w-[300] h-[300] bg-slate-800 shadow-md rounded-lg p-2 space-y-2 flex flex-col justify-center items-center font-semibold text-sm scale-[0.75] xm:scale-100 '
              >
                <div className='w-full flex justify-between '>
                  <span className='text-gray-500 '>
                    RANK #{crypto.market_cap_rank}
                  </span>
                  <span className='text-gray-500'>{crypto.name}</span>
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <span>{crypto.symbol.toUpperCase()}</span>
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    width={100}
                    height={100}
                  />
                </div>
                <hr className='w-[90%] border-none h-[1px] bg-gray-600' />
                <ul className='w-[90%]'>
                  <li className='flex items-center '>
                    CURRENT PRICE:{" "}
                    <span className='mx-1 font-normal'>
                      {crypto.current_price} USD
                    </span>{" "}
                    {crypto.current_price > crypto.high_24h ? (
                      <span className='text-green-500 ml-1'>
                        <FaArrowUp />
                      </span>
                    ) : (
                      <span className='text-red-500 ml-1'>
                        <FaArrowDown />
                      </span>
                    )}
                  </li>
                  <li className='flex items-center'>
                    HIGH{" "}
                    <span className='font-normal text-gray-400'>(24H):</span>{" "}
                    <span className='font-normal ml-1'>
                      {crypto.high_24h} USD{" "}
                    </span>
                    <span className='text-green-500 ml-1'>
                      <FaArrowUp />
                    </span>
                  </li>
                  <li className='flex items-center'>
                    LOW{" "}
                    <span className='font-normal text-gray-400'>(24H):</span>{" "}
                    <span className='font-normal ml-1'>
                      {crypto.low_24h} USD
                    </span>
                    <span className='text-red-500 ml-1'>
                      <FaArrowDown />
                    </span>
                  </li>
                  <li>
                    PRICE CHANGE{" "}
                    <span className='font-normal text-gray-400'>(24H):</span>{" "}
                    <span
                      className={`${
                        crypto.price_change_percentage_24h < 0
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {crypto.price_change_percentage_24h}%
                    </span>
                  </li>
                  <li>
                    All Time High{" "}
                    <span className='font-normal text-gray-400'>(ATH):</span>{" "}
                    <span className='font-normal'>{crypto.ath} USD</span>
                  </li>
                </ul>
              </li>
            );
          })
        ) : (
          <p>There was a problem by rendering all cryptos</p>
        )}
      </ul>
    </section>
  );
};

export default ListCryptos;
