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
  info: {};
}

export interface SingleCrypto {
  id: string;
  name: string;
  symbol: string;
  hashing_algorithm: string;
  description: string;
  links?: {
    homepage?: string[];
    blockchain_site?: string[];
    official_forum_url?: string[];
    subreddit_url?: string[];
  };
  image: string;
  market_cap_rank: number;
  market_data: {
    current_price: {
      usd: number;
      bnb: number;
      eth: number;
      eur: number;
    };
    ath: {
      usd: number;
      bnb: number;
      eth: number;
      eur: number;
    };
    ath_change_percentage: {
      usd: number;
      bnb: number;
      eth: number;
      eur: number;
    };
    atl: {
      usd: number;
      bnb: number;
      eth: number;
      eur: number;
    };
    atl_change_percentage: {
      usd: number;
      bnb: number;
      eth: number;
      eur: number;
    };
    high_24h: {
      usd: number;
      bnb: number;
      eth: number;
      eur: number;
    };
    low_24h: {
      usd: number;
      bnb: number;
      eth: number;
      eur: number;
    };
    max_supply: number;
    circulating_supply: number;
  };
}

export const loadCrypto = async (
  page_number: number,
  vs_currency?: string,
  per_page?: string
) => {
  let info = {
    page_number,
    vs_currency,
    total_pages: per_page || "4",
  };

  const res: Cryptos[] = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${
      vs_currency ? vs_currency : "usd"
    }&order=market_cap_desc&per_page=${per_page ? per_page : "4"}&page=${
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

  Object.assign(res, info);

  return res;
};

export const loadSingleCrypto = async (id: string | string[]) => {
  const res: SingleCrypto = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}?tickers=false`,
    {
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return {
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        hashing_algorithm: data.hashing_algorithm,
        description: data.description.en,
        links: {
          homepage: data.links.homepage?.map((url: string) => url),
          blockchain_site: data.links.blockchain_site?.map(
            (url: string) => url
          ),
        },
        image: data.image.large,
        market_cap_rank: data.market_cap_rank,
        market_data: {
          current_price: {
            usd: data.market_data.current_price.usd,
            bnb: data.market_data.current_price.bnb,
            eth: data.market_data.current_price.eth,
            eur: data.market_data.current_price.eur,
          },
          ath: {
            usd: data.market_data.ath.usd,
            bnb: data.market_data.ath.bnb,
            eth: data.market_data.ath.eth,
            eur: data.market_data.ath.eur,
          },
          ath_change_percentage: {
            usd: data.market_data.ath_change_percentage.usd,
            bnb: data.market_data.ath_change_percentage.bnb,
            eth: data.market_data.ath_change_percentage.eth,
            eur: data.market_data.ath_change_percentage.eur,
          },
          atl: {
            usd: data.market_data.atl.usd,
            bnb: data.market_data.atl.bnb,
            eth: data.market_data.atl.eth,
            eur: data.market_data.atl.eur,
          },
          atl_change_percentage: {
            usd: data.market_data.atl_change_percentage.usd,
            bnb: data.market_data.atl_change_percentage.bnb,
            eth: data.market_data.atl_change_percentage.eth,
            eur: data.market_data.atl_change_percentage.eur,
          },
          high_24h: {
            usd: data.market_data.high_24h.usd,
            bnb: data.market_data.high_24h.bnb,
            eth: data.market_data.high_24h.eth,
            eur: data.market_data.high_24h.eur,
          },
          low_24h: {
            usd: data.market_data.low_24h.usd,
            bnb: data.market_data.low_24h.bnb,
            eth: data.market_data.low_24h.eth,
            eur: data.market_data.low_24h.eur,
          },
          max_supply: data.market_data.max_supply,
          circulating_supply: data.market_data.circulating_supply,
        },
      };
    });

  return res;
};
