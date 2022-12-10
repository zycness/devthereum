import { GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import ListCryptos from "../components/ListCryptos";
import { loadCrypto, Cryptos } from "../lib/load-cryptos";

export const getStaticProps: GetStaticProps = async () => {
  const res = await loadCrypto(1);
  return {
    props: {
      res,
    },
  };
};

const Home: React.FC<Cryptos[]> = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  return (
    <Layout>
      <main className='bg-slate-900'>
        <Hero />
        <ListCryptos cryptos={props.res} />
      </main>
    </Layout>
  );
};

export default Home;
