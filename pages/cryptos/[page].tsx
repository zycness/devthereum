import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import React from "react";
import Layout from "../../components/Layout";
import {
  Cryptos,
  loadCrypto,
  loadSingleCrypto,
  SingleCrypto,
} from "../../lib/load-cryptos";

// Generates `/posts/1` and `/posts/2`
export const getStaticPaths: GetStaticPaths = async () => {
  const cryptos: Cryptos[] = await loadCrypto(1, "usd", "20");

  const paths = cryptos.map((crpyto) => {
    return {
      params: {
        page: crpyto.id,
      },
    };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
};

// `getStaticPaths` requires using `getStaticProps`
export const getStaticProps: GetStaticProps = async ({ params }) => {
  let crypto = await loadSingleCrypto(params?.page!);

  return {
    // Passed to the page component as props
    props: {
      crypto,
    },
  };
};

const Page = ({ crypto }: { crypto: SingleCrypto }) => {
  return (
    <Layout>
      <section className='min-h-[80vh] bg-slate-900 py-12'>
        <div className='container mx-auto   rounded-lg bg-slate-800 p-6 text-white lg:w-3/4'>
          <article className='flex  flex-wrap items-center justify-center'>
            <div className='flex justify-center md:w-1/2'>
              <img
                src={crypto.image}
                alt={crypto.name}
                className='w-1/2 md:w-[250px]'
              />
            </div>
            <ul className='flex flex-col justify-start space-y-2 self-start md:w-1/2'>
              {/* title */}
              <li>
                <h1 className='text-4xl font-bold'>
                  {crypto.name}{" "}
                  <span className='text-xl font-semibold text-gray-700'>
                    ({crypto.symbol.toUpperCase()})
                  </span>
                </h1>
              </li>
              {/* hashing algorithm */}
              <li className='font-semibold text-gray-400'>
                Hashing algorithm:{" "}
                <span className='font-normal text-gray-300'>
                  {crypto.hashing_algorithm}
                </span>
              </li>
              {/* market rank */}
              <li className='flex font-semibold text-gray-400'>
                MarketCap Rank:{" "}
                <span className='font-normal text-gray-300'>
                  {crypto.market_cap_rank === 1 ? (
                    <p className='ml-1'>{crypto.market_cap_rank} &#128081;</p>
                  ) : (
                    crypto.market_cap_rank
                  )}
                </span>
              </li>
              {/* all time high */}
              <li className='flex flex-wrap font-semibold text-gray-400'>
                All Time High:{" "}
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  USD:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.ath.usd.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  BNB:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.ath.bnb.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  ETH:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.ath.eth.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  EUR:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.ath.eur.toLocaleString()}
                  </span>
                </div>
              </li>
              {/* current price */}
              <li className='flex flex-wrap font-semibold text-gray-400'>
                Current price:{" "}
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  USD:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.current_price.usd.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  BNB:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.current_price.bnb.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  ETH:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.current_price.eth.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  EUR:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.current_price.eur.toLocaleString()}
                  </span>
                </div>
              </li>
              {/* all time low*/}
              <li className='flex flex-wrap font-semibold text-gray-400'>
                All Time Low:{" "}
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  USD:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.atl.usd.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  BNB:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.atl.bnb.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  ETH:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.atl.eth.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  EUR:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.atl.eur.toLocaleString()}
                  </span>
                </div>
              </li>
              {/* high 24hs */}
              <li className='flex flex-wrap font-semibold text-gray-400'>
                High 24hs:{" "}
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  USD:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.high_24h.usd.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  BNB:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.high_24h.bnb.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  ETH:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.high_24h.eth.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  EUR:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.high_24h.eur.toLocaleString()}
                  </span>
                </div>
              </li>
              {/* low 24hs */}
              <li className='flex flex-wrap font-semibold text-gray-400'>
                Low 24hs:{" "}
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  USD:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.low_24h.usd.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  BNB:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.low_24h.bnb.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  ETH:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.low_24h.eth.toLocaleString()}
                  </span>
                </div>
                <div className='m-1 rounded-md bg-slate-700 px-2 font-normal shadow-sm'>
                  EUR:{" "}
                  <span className='text-gray-300'>
                    {crypto.market_data.low_24h.eur.toLocaleString()}
                  </span>
                </div>
              </li>
            </ul>
          </article>
          <div className='flex flex-col items-center justify-center'>
            <p className='my-6'>
              {crypto.description.replace(
                /<a[^>]*>([^<]+)<\/a>/g,
                (match, p1) => {
                  return p1;
                }
              )}
            </p>
            <article className='flex flex-wrap justify-start break-all  font-semibold text-gray-400'>
              {crypto.links?.homepage ? (
                <div className='mx-1 flex flex-col'>
                  Home pages:
                  {crypto.links?.homepage?.map((url: string, i) =>
                    url.length > 0 ? (
                      <a
                        href={`${url}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='break-words font-normal text-gray-500 underline'
                        key={i + 1}
                      >
                        {url.replace("https://", "").replace("/", "")}
                      </a>
                    ) : (
                      ""
                    )
                  )}
                </div>
              ) : (
                ""
              )}

              {crypto.links?.blockchain_site ? (
                <div className='mx-1 flex flex-col'>
                  Blockchain sites:
                  {crypto.links?.blockchain_site?.map((url: string, i) => {
                    return url.length > 0 ? (
                      <a
                        href={`${url}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='break-words font-normal text-gray-500 underline'
                        key={i + 1}
                      >
                        {url.replace("https://", "").replace("/", "")}
                      </a>
                    ) : (
                      ""
                    );
                  })}
                </div>
              ) : (
                ""
              )}

              {crypto.links?.official_forum_url ? (
                <div className='mx-1 flex flex-col'>
                  Official forum:
                  {crypto.links?.official_forum_url?.map((url: string, i) => {
                    return url.length > 0 ? (
                      <a
                        href={`${url}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='break-words font-normal text-gray-500 underline'
                        key={i + 1}
                      >
                        {url.replace("https://", "").replace("/", "")}
                      </a>
                    ) : (
                      ""
                    );
                  })}
                </div>
              ) : (
                ""
              )}

              {crypto.links?.subreddit_url ? (
                <div className='mx-1 flex flex-col'>
                  Sub-reddit:
                  {crypto.links?.subreddit_url?.map((url: string, i) => {
                    return url.length > 0 ? (
                      <a
                        href={`${url}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='break-words font-normal text-gray-500 underline'
                        key={i + 1}
                      >
                        {url.replace("https://", "").replace("/", "")}
                      </a>
                    ) : (
                      ""
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </article>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Page;
