import React from "react";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <main className='bg-slate-900'>
        <Hero />
      </main>
    </Layout>
  );
};

export default Home;
