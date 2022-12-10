export interface Cryptos {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap_rank: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  ath: number;
}

export const loadCrypto = async (page_number: number, vs_currency?: string) => {
  let info = {
    page_number,
    vs_currency,
  };

  const res: Cryptos[] = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
      vs_currency ? vs_currency : "usd"
    }&order=market_cap_desc&per_page=24&page=${
      info.page_number
    }&sparkline=false`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) =>
      data.map((crypto: Cryptos) => {
        return {
          id: crypto.id,
          symbol: crypto.symbol,
          name: crypto.name,
          image: crypto.image,
          current_price: crypto.current_price,
          market_cap_rank: crypto.market_cap_rank,
          high_24h: crypto.high_24h,
          low_24h: crypto.low_24h,
          price_change_percentage_24h: crypto.price_change_percentage_24h,
          ath: crypto.ath,
        };
      })
    );

  return res;
};
