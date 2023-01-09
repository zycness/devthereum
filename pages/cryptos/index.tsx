import { GetStaticProps } from "next";
import React from "react";
import Layout from "../../components/Layout";
import ListCryptos from "../../components/ListCryptos";
import { Cryptos, loadCrypto } from "../../lib/load-cryptos";

export const getStaticProps: GetStaticProps = async () => {
  const res = await loadCrypto(1, "usd", String(20));
  return {
    props: {
      res,
    },
  };
};

type Props = {
  res: Cryptos[];
};

const index = (props: Props) => {
  return (
    <Layout>
      <ListCryptos cryptos={props.res} />
    </Layout>
  );
};

export default index;
