import axios from 'axios';

interface CoinData {
  mint: string;
  name: string;
  symbol: string;
  description: string;
  image_uri: string;
  video_uri: string | null;
  metadata_uri: string;
  twitter: string | null;
  telegram: string | null;
  bonding_curve: string;
  associated_bonding_curve: string;
  creator: string;
  created_timestamp: number;
  raydium_pool: string | null;
  complete: boolean;
  virtual_sol_reserves: number;
  virtual_token_reserves: number;
  total_supply: number;
  website: string | null;
  show_name: boolean;
  king_of_the_hill_timestamp: number;
  market_cap: number;
  reply_count: number;
  nsfw: boolean;
  market_id: string | null;
  inverted: string | null;
  is_currently_live: boolean;
  username: string;
  profile_image: string | null;
  usd_market_cap: number;
}

export const fetchData = async (): Promise<CoinData> => {
  try {
    const response = await axios.get(
      'https://frontend-api-v2.pump.fun/coins/king-of-the-hill?includeNsfw=false',
    );
    return response.data;
  } catch (error) {
    console.error('Fetch data failed:', error);
    throw error;
  }
};
