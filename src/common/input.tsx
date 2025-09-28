import { LucideSearch } from 'lucide-react';
import React, { useState } from 'react';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Search', onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='relative '>
        <div
          className={`absolute inset-y-0 start-0 ps-[11px]  flex items-center pointer-events-none`}
        >
          <LucideSearch className='w-[13.19px] h-[13.19px]' color='#3AA3A3' />
        </div>

        <input
          type='text'
          value={query}
          onChange={handleInputChange}
          placeholder={placeholder}
          className=' w-full lg:w-[370px]  ps-[39px] pe-[28px] h-[40px] bg-white border-transparent rounded-[15px] appearance-none focus:outline-none focus:ring-1 focus:ring-[#3AA3A3] transition duration-300 ease-in-out  font-[Oxygen] text-[11px] text-[#1F263E] min-w-[150px]'
        />
      </div>
    </form>
  );
};
