import { AddProduct } from '@/constants/interface/AddProduct';
import local from 'next/font/local';
import React, { useState } from 'react'

const ButtonAddChart: React.FC<AddProduct> = ({id, title, price}) => {
    const [count, setCount] = useState(0);
    const [addToCart, setAddToCart] = useState(false);

    const increment = () => {
        setCount(count + 1);
        localStorage.setItem(`${id}-product`, JSON.stringify({
            id: id,
            title: title,
            price: price,
            amount: count + 1
        }));
    }

    const decrement = () => {
        if (count <= 1) {
            localStorage.removeItem(`${id}-product`);
            setAddToCart(false)
        } else {
            setCount(count - 1);
            localStorage.setItem(`${id}-product`, JSON.stringify({
                id: id,
                title: title,
                price: price,
                amount: count - 1
            }));
        }
    }

    const clickAddToCart = () => {
        setAddToCart(!addToCart)
        setCount(count + 1)
        localStorage.setItem(`${id}-product`, JSON.stringify({
            id: id,
            title: title,
            price: price,
            amount: count + 1
        }));
    }

  return (
    addToCart ? 
        <div
            className='flex flex-row justify-between items-center w-full gap-4'
        >
            <button
                onClick={decrement}
                className='bg-sky-500 text-white text-xl w-10 h-10 font-semibold rounded-full'
            >
                -
            </button>

            <p
                className='text-xl font-semibold'
            >
                {count}
            </p>

            <button
                onClick={increment}
                className='bg-sky-500 text-white text-xl w-10 h-10 font-semibold rounded-full'
            >
               +
            </button>
        </div>
    : 
        <button
            onClick={clickAddToCart}
            className='bg-sky-500 text-white p-2 text-md font-semibold rounded-full w-full'
        >
            Add to Cart
        </button>
  )
}

export default ButtonAddChart