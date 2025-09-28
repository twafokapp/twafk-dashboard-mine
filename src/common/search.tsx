import { LucideSearch } from 'lucide-react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Update props to control the component from the outside
interface SearchBarProps {
  placeholder?: string;
  query?: string;
  onQueryChange?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = () => {
  const { t } = useTranslation();

  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  // The form's onSubmit now just prevents the page from reloading on Enter key press
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
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
          placeholder={t('placeholder')}
          className=' w-full lg:w-[370px]  ps-[39px] pe-[28px] h-[40px] bg-white border-transparent rounded-[15px] appearance-none focus:outline-none focus:ring-1 focus:ring-[#3AA3A3] transition duration-300 ease-in-out  font-[Oxygen] text-[11px] text-[#1F263E] '
        />
      </div>
    </form>
  );
};
