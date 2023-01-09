import React from "react";
import { Cryptos } from "../lib/load-cryptos";

import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

type Props = {
  cryptos: Cryptos[];
};

const ListCryptos: React.FC<Props> = ({ cryptos }: Props) => {
  return (
    <section className=' container mx-auto w-3/4 space-y-6'>
      <h2 className='text-center font-mono text-2xl  font-bold text-white '>
        Top 20 cryptocurrencies and prices
      </h2>
      <ul className='row-auto grid grid-cols-fill-300 place-content-center gap-6 rounded-lg p-5 text-white '>
        {cryptos ? (
          cryptos.map((crypto) => {
            return (
              <li
                key={crypto.id}
                className=' flex h-[300] w-[300] scale-[0.75] flex-col items-center justify-center space-y-2 rounded-lg bg-slate-800 p-2 text-sm font-semibold shadow-md xm:scale-100 '
              >
                <Link
                  href={`/cryptos/${crypto.id}`}
                  className='flex w-full flex-col items-center justify-center'
                  title={`Go to ${crypto.name}'s details`}
                >
                  <div className='flex w-full justify-between '>
                    <span className='text-gray-500 '>
                      RANK #{crypto.market_cap_rank}
                    </span>
                    <span className='text-gray-500'>{crypto.name}</span>
                  </div>
                  <div className='flex flex-col items-center justify-center '>
                    <span>{crypto.symbol.toUpperCase()}</span>
                    <img
                      src={crypto.image}
                      alt={crypto.name}
                      className='h-[70px] w-[70px] '
                    />
                  </div>
                  <hr className='my-2 h-[1px] w-[90%] border-none bg-gray-600' />
                  <ul className='w-[90%]'>
                    <li className='flex items-center '>
                      CURRENT PRICE:{" "}
                      <span className='mx-1 font-normal'>
                        {crypto.current_price} USD
                      </span>{" "}
                      {crypto.current_price > crypto.high_24h ? (
                        <span className='ml-1 text-green-500'>
                          <FaArrowUp />
                        </span>
                      ) : (
                        <span className='ml-1 text-red-500'>
                          <FaArrowDown />
                        </span>
                      )}
                    </li>
                    <li className='flex items-center'>
                      HIGH{" "}
                      <span className='font-normal text-gray-400'>(24H):</span>{" "}
                      <span className='ml-1 font-normal'>
                        {crypto.high_24h} USD{" "}
                      </span>
                      <span className='ml-1 text-green-500'>
                        <FaArrowUp />
                      </span>
                    </li>
                    <li className='flex items-center'>
                      LOW{" "}
                      <span className='font-normal text-gray-400'>(24H):</span>{" "}
                      <span className='ml-1 font-normal'>
                        {crypto.low_24h} USD
                      </span>
                      <span className='ml-1 text-red-500'>
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
                </Link>
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
