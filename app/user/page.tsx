import GifGallery from '@/components/custom/GifGallery'
import LoginCard from '@/components/custom/LoginCard'
import Pagination from '@/components/custom/Pagination'
import SearchBar from '@/components/custom/SearchBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center h-[100vh] p-7 bg-slate-50">
      <SearchBar />
      <GifGallery />
      <Pagination />
    </main>
  )
}
