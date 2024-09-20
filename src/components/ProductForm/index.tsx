import React, { lazy } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/constants/interface/Products';
import { useRouter } from 'next/router';
// import ButtonAddChart from '../ButtonAddCart';
import dynamic from 'next/dynamic';

const ButtonAddCart = dynamic(() => import('../ButtonAddCart'), {
    ssr: false,
});

const ProductForm: React.FC<Product> = ({id, title, price, description, images}) => {
    const router = useRouter();

    const handleClickProduct = () => {
        router.push(`/shop/${id}`)
    }

  return (
    <div
        className='flex flex-col justify-center items-center p-4 gap-2 w-full '
    >   
        <div
            className='row-span-2 flex flex-wrap justify-center items-center w-full'
        >   
            <Link 
                href={`/shop/${id}`}
                onClick={handleClickProduct}
            >
                <Image
                    src={images[0]}
                    width={250}
                    height={200}
                    alt={description}
                    className='rounded-xl'
                    priority
                />
            </Link>
        </div>
        
        <div
            className='grid grid-cols-3 items-center w-full h-24'
        >
            <Link
                href={`/shop/${id}`}
                onClick={handleClickProduct}
                className='text-start col-span-2 text-md font-semibold'
            >
                {title}
            </Link>
            <Link
                href={`/shop/${id}`}
                onClick={handleClickProduct}
                className='text-end text-xl font-semibold text-neutral-800'
            >
                ${price}
            </Link>
        </div>

        <ButtonAddCart id={id} title={title} price={price}/>
    </div>
  )
}

export default ProductForm