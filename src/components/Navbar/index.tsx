import { useRouter } from 'next/router';
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchBar from '../SearchBar';

const index = () => {
    const router = useRouter();

    const navigateToShop= () => {
        router.push('/shop')
    }
    const navigateToLogin= () => {
        router.push('/login')
    }
    const navigateToRegister= () => {
        router.push('/register')
    }

  return (
    <>
    <div
        className='sticky w-screen'
    >
        <nav
            className='bg-white border-gray-200 text-black'
        >
            <div
                className='flex flex-wrap justify-between items-center py-4 px-6'
            >
                <button onClick={navigateToShop}>
                    <span
                        className='text-2xl font-semibold'
                    >
                        🏪Toko Onlenku
                    </span>
                </button>

                <div
                    className='flex gap-8'
                >
                    <button onClick={navigateToLogin}>
                        Login
                    </button>
                    <button onClick={navigateToRegister}>
                        Register
                    </button>
                </div>
                
            </div>
        </nav>
        <nav
            className='bg-gray-100 text-gray-800'
        >
            <div
                className='max-w-screen-xl px-6 py-3 mx-auto'
            >
                <div
                    className='flex flex-row items-center justify-between'
                >
                    <ul
                        className='flex flex-row font-medium gap-8 basis-1/3'
                    >
                        <li>
                            <button
                                onClick={navigateToShop}
                            >
                                Home
                            </button>
                        </li>
                        <li>
                            <button>
                                About us
                            </button>
                        </li>
                    </ul>

                    <SearchBar />

                    <button 
                        className='basis-1/3 flex flex-row-reverse'
                    >
                        <ShoppingCartIcon />
                    </button>
                </div>
            </div>

        </nav>
    </div>
    </>
  )
}

export default index