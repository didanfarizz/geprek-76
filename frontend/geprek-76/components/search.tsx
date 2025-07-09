'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const SearchComponents = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: { target: { value: React.SetStateAction<string> } }) => {
    setSearchTerm(event.target.value);
    // You can add debouncing here for API calls if needed
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="pt-16">
      <form onSubmit={handleSubmit} className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-3">
          <Image src={'/search.png'} alt='search' width={20} height={20} className=''/>
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Mau makan apa?"
          value={searchTerm}
          onChange={handleInputChange}
          className="w-full pl-10 pr-4 py-2 rounded-full bg-[#e1e9ed] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
        />
      </form>
    </div>
  );
};

export default SearchComponents;
