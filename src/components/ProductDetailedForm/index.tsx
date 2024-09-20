import { ProductDetailed } from '@/constants/interface/ProductsDetailed';
import React from 'react';
import Image from 'next/image';


const ProductDetailedForm: React.FC<ProductDetailed> = ({images, title, description, price, category}) => {
  return (
    <div
      className='flex flex-row gap-4 h-full w-full px-2'
    >
      <div
        className='flex justify-center items-center'
      >
        <Image
          src={images[0]}
          width={1000}
          height={600}
          alt={title}
          className='rounded-xl'
        />
      </div>

      <div
        className='flex flex-col justify-center items-start h-80 gap-4'
      >
        <div className='font-semibold text-3xl'>{title}</div> 
        <div className='font-semibold text-xl'>
          <div
            className='flex justify-center items-center gap-3 bg-blue-400 rounded-full'
          >
            <Image
              src={category.image}
              width={40}
              height={40}
              alt={title}
              className='rounded-full'
            />
            <div
              className='me-3'
            >
              {category.name}
            </div>
          </div>
        </div>
        <div
          className='text-justify'
        >
          <span className='font-semibold'>Description:</span>
          <br/>
          {description}
        </div>
        <div className='font-semibold text-4xl self-end text-lime-600'>${price}</div>
      </div>
    </div>
  )
}

export default ProductDetailedForm