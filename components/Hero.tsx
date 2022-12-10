import Image from "next/image";
import React from "react";

import image from "../assets/hero_img2.svg";
import btc from "../assets/btc.svg";
import eth from "../assets/eth.svg";
import ltc from "../assets/ltc.svg";
import usdt from "../assets/usdt.svg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className=' min-h-[100vh] container mx-auto flex flex-col-reverse md:flex-row justify-center items-center px-2'>
      <article className='w-3/4 md:w-1/2 lg:w-1/3'>
        <h1 className='text-white text-2xl font-bold text-left '>
          Most recently prices and news from cryptocurrencies
        </h1>
      </article>
      <article className='w-3/4 md:w-1/2 lg:w-1/3 flex justify-center relative'>
        <Image src={image} alt={"Hero image"} width={300} height={300} />
        <Image
          src={btc}
          alt={"Bitcoin crypto"}
          width={50}
          height={50}
          className='absolute left-[2%] top-[30%] xm:left-[10%] sm:left-[20%] md:left-[15%] lg:left-[5%] 2xl:left-[15%]'
        />
        <Image
          src={eth}
          alt={"Ethereum crypto"}
          width={50}
          height={50}
          className='absolute'
        />
        <Image
          src={ltc}
          alt={"Litecoin crypto"}
          width={50}
          height={50}
          className='absolute'
        />
        <Image
          src={usdt}
          alt={"USDT crypto"}
          width={50}
          height={50}
          className='absolute'
        />
      </article>
    </section>
  );
};

export default Hero;
