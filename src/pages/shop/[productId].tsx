import Card from '@/components/Card';
import Navbar from '@/components/Navbar';
import ProductDetailedForm from '@/components/ProductDetailedForm';
import { Product, Products } from '@/constants/interface/Products';
import { ProductDetailed, ProductsDetailed } from '@/constants/interface/ProductsDetailed';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router'
import React from 'react'

const ProductID: React.FC<ProductsDetailed> = ({product}) => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <div>Loading</div>
        )
    }

    console.log("ISR")
  return (
    <>
        <Navbar />

        <div
            className='flex justify-center items-center bg-neutral-500 h-lvh px-8'
        >   
            <Card styles='text-black'>
                <ProductDetailedForm 
                    id={Number(router.query.productId)}   
                    images={product.images}
                    title={product.title}
                    description={product.description}
                    category={product.category}
                    price={product.price}         
                />
            </Card>
        </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const response = await fetch(`https://api.escuelajs.co/api/v1/products?offset=0&limit=30`);
    const products: ProductDetailed[] = await response.json();

    console.log(products);

    const paths = products.map((item) => ({
        params: { productId: item.id.toString() },
    }));

    return { paths, fallback: true }
};

export const getStaticProps: GetStaticProps<ProductsDetailed> = async (context) => {
    const { params } = context;
    if (!params?.productId) {
        return {
            notFound: true
        };
    };

    console.log("server");

    const response = await fetch(`https://api.escuelajs.co/api/v1/products/${params.productId}`);
    const product: ProductDetailed = await response.json();

    if (!product) {
        return { notFound: true }
    }

    return {
        props: {
            product,
        },
        revalidate: 60,
    }
}

export default ProductID