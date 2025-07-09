import React from 'react'
import SearchComponents from '@/components/search'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='px-5'>
      <SearchComponents />

      <div className="py-3.5 flex items-center gap-2.5">
        <Image src={'/logo.png'} alt='logo-geprek' width={55} height={55}/>
        <div className="">
          <h1 className="text-2xl font-bold text-[#000000]">Fried Chicken Geprek 78</h1>
          <p className="text-sm text-[#000000] opacity-50">Jl. Kelapa Dua Raya No. XX, Kabupaten Tangerang</p>
        </div>
      </div>

      <div className="">
        <p className='text-sm opacity-50'>Menyediakan Ayam Geprek enak, murah, dan berkualitas di Kampus K Gunadarma. <br/> Telp: +6288888888</p>
      </div>
    </div>
  )
}

export default Home