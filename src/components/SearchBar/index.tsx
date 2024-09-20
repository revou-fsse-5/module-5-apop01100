import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  return (
    <div
        className='basis-1/4'
    >
        <div
            className='relative flex w-full flex-wrap items-stretch gap-2'
        >
            <input 
                type='search'
                className='relative m-0 px-2 py-1 block flex-auto rounded-lg border border-solid border-neutral-300'
                placeholder='Search...'
            />
            <span
                className='input-group-text flex items-center'
            >
                <SearchIcon />
            </span>
        </div>
    </div>
  )
}

export default SearchBar