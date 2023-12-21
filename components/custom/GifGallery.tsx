'use client'
import React from 'react'
import { Card } from '@/components/ui/card'
import { GiphyGif, getTrendingGIFs } from '@/lib/giphyapi'
import { useEffect, useState } from 'react'
import Image from 'next/image'
type Props = {}



function GifGallery({}: Props) {
  const [trendingGIFs, setTrendingGIFs] = useState<GiphyGif[]>([]);

  useEffect(() => {
    const fetchTrendingGIFs = async () => {
      const gifs = await getTrendingGIFs();
      setTrendingGIFs(gifs);
    };

    fetchTrendingGIFs();
  }, []);
  


  return (
    <div className='h-[70vh] w-[876px] bg-white m-4'>
        <Card className=' h-[100%] w-[100%]'>
          <h1>Trending</h1>
        {/* {trendingGIFs.map((gif) => (
          <Image key={gif.id} src={gif.images.fixed_height.url} alt={gif.title} width={100} height={50}/>
        ))} */}
        </Card>
    </div>
  )
}

export default GifGallery