'use client'
import React from 'react'
import { Card } from '@/components/ui/card'
import { GiphyGif } from '@/lib/giphyapi'
import { useEffect, useState } from 'react'
import Image from 'next/image'
type Props = {}
import axios from 'axios';
const getTrendingGIFs = async () => {
  const response = await axios.get('https://api.giphy.com/v1/gifs/trending', {
    params: {
      api_key: 'GIPHY_API_KEY',
      limit: 12
    }
  });

  return response.data.data;
};


export const GifGallery: React.FC<Props> = () => {
  const [gifs, setGifs] = useState<GiphyGif[]>([])
  useEffect(() => {
    getTrendingGIFs().then((gifs) => setGifs(gifs))
  }, [])
  return (
    <div className="h-[100%] w-[876px] m-4 ">
      <Card className='m-2 rounded-md flex flex-wrap justify-center'>
      {gifs.map((gif) => (
          <img key={gif.id}
            src={gif.images.downsized.url}
            alt={gif.title}
            width={100}
            height={50}
            className='m-2 rounded-md w-[12rem]'
          ></img>
      ))}
        </Card>
    </div>
  )
}


export default GifGallery