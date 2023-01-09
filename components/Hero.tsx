import Image from "next/image";
import React from "react";

import image from "../assets/hero_img2.svg";
import rocket from "../assets/hero_rocket.png";
import btc from "../assets/btc.svg";
import eth from "../assets/eth.svg";
import ltc from "../assets/ltc.svg";
import usdt from "../assets/usdt.svg";

const Hero = () => {
  return (
    <section className=' min-h-[80vh] container mx-auto flex flex-col-reverse md:flex-row justify-center items-center px-2'>
      <Image
        src={rocket}
        alt={"Hero rocket image"}
        width={300}
        height={300}
        className='pointer-events-none absolute top-0 scale-[0.5] right-[40vw] opacity-20'
      />
      <Image
        src={rocket}
        alt={"Hero rocket image"}
        width={300}
        height={300}
        className='pointer-events-none absolute top-80 scale-[0.5] -left-[15vw] sm:left-[15vw] opacity-20 -rotate-45'
      />
      <Image
        src={rocket}
        alt={"Hero rocket image"}
        width={300}
        height={300}
        className='pointer-events-none absolute top-30 scale-[0.5] -rotate-45 -right-[5vw] md:top-[50vh] lg:right-[10vw]  opacity-20'
      />
      <article className='w-3/4 md:w-1/2 lg:w-1/3'>
        <h1 className='text-white text-2xl font-bold text-left font-mono'>
          Most recent prices from cryptocurrencies
        </h1>
      </article>
      <article className='w-3/4 md:w-1/2 lg:w-1/3 flex justify-center relative pointer-events-none select-none scale-125'>
        <Image
          src={image}
          alt={"Hero image"}
          width={300}
          height={300}
          className='pointer-events-none'
        />

        <Image
          src={btc}
          alt={"Bitcoin crypto"}
          width={50}
          height={50}
          className='pointer-events-none absolute left-[0] top-[30%] xm:left-[5%] sm:left-[20%] md:left-[15%] lg:left-[5%] xl:left-[13%] 2xl:left-[20%] animate-pulse'
        />
        <Image
          src={eth}
          alt={"Ethereum crypto"}
          width={50}
          height={50}
          className='pointer-events-none absolute right-[5%] top-[30%] xm:right-[15%] sm:right-[27%] md:right-[20%] lg:right-[20%] xl:right-[25%] 2xl:right-[30%] animate-pulse'
        />
        <Image
          src={ltc}
          alt={"Litecoin crypto"}
          width={50}
          height={50}
          className='pointer-events-none absolute left-[25%] top-[5%] xm:left-[20%] xm:top-[10%] sm:left-[30%] md:left-[25%] lg:left-[20%] xl:left-[25%] 2xl:left-[30%] animate-pulse'
        />
        <Image
          src={usdt}
          alt={"USDT crypto"}
          width={50}
          height={50}
          className='pointer-events-none absolute right-[20%] top-[10%] xm:right-[35%] sm:right-[37%] md:right-[35%] xl:right-[40%] 2xl:right-[40%] animate-pulse'
        />
      </article>
    </section>
  );
};

export default Hero;
