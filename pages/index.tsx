import { GetStaticProps, InferGetStaticPropsType } from "next";
import Link from "next/link";
import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ListCryptos from "../components/ListCryptos";
import { loadCrypto } from "../lib/load-cryptos";

export const getStaticProps: GetStaticProps = async () => {
  const res = await loadCrypto(1);
  return {
    props: {
      res,
    },
  };
};

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Layout>
      <>
        <Hero />
        <ListCryptos cryptos={props.res} />
        <div className='container w-full flex justify-end'>
          <Link href={"/cryptos"} className='font-semibold text-gray-400 '>
            <span className='underline mr-1'>View all</span> ⟶
          </Link>
        </div>
      </>
    </Layout>
  );
};

export default Home;
