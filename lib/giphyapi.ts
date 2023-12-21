// utils/giphyApi.ts
import axios, { AxiosResponse } from 'axios';

export interface GiphyGif {
  id: string;
  title: string;
  images: {
    fixed_height: {
      url: string;
    };
  };
}

const GIPHY_API_KEY = 'mE2PsRiDuWO7PbTPmZATQvv6qBN5TFdw';
const GIPHY_BASE_URL = 'https://api.giphy.com/v1/gifs';

export const getTrendingGIFs = async (): Promise<GiphyGif[]> => {
  try {
    const response: AxiosResponse<{ data: GiphyGif[] }> = await axios.get(
      `${GIPHY_BASE_URL}/trending`,
      {
        params: {
          api_key: GIPHY_API_KEY,
          rating: 'g',
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error fetching trending GIFs:', error);
    return [];
  }
};

export const searchGIFs = async (query: string): Promise<GiphyGif[]> => {
  try {
    const response: AxiosResponse<{ data: GiphyGif[] }> = await axios.get(
      `${GIPHY_BASE_URL}/search`,
      {
        params: {
          api_key: GIPHY_API_KEY,
          q: query,
          rating: 'g',
        },
      }
    );
    return response.data.data;
  } catch (error) {
    console.error('Error searching GIFs:', error);
    return [];
  }
};
