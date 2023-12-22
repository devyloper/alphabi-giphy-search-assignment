import GifGallery from '@/components/custom/GifGallery'
import LoginCard from '@/components/custom/LoginCard'
import Navbar from '@/components/custom/Navbar'
import Pagination from '@/components/custom/Pagination'
import SearchBar from '@/components/custom/SearchBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center h-[100%] p-7 bg-slate-50">
      <Navbar />
      <GifGallery />
      <Pagination />
    </main>
  )
}
