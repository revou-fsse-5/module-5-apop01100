import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ProductForm from '@/components/ProductForm';
import { Product, Products } from '@/constants/interface/Products';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router'
import React from 'react';

const index = ({products}: Products) => {
  return (
    <>
        <Navbar />
        <div
            className='bg-gray-200 grid grid-cols-4 gap-4 items-center p-4 w-full'
        >
            {products.map((item: Product, _key) => (
                    <Card styles='text-black w-full'>
                        <ProductForm 
                            id={item.id} 
                            images={item.images}
                            title={item.title}
                            description={item.description}
                            price={item.price}                  
                        />
                    </Card>
                )
            )}
        </div>
        <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
    // Fetch data from an API or database
    const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=30');
    const products = await response.json();
    
    console.log(products)
    return {
      props: {
        products,
      }
    };
  };
  

export default index