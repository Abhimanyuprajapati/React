import { useQuery } from '@tanstack/react-query'
import React from 'react'
import '../css/loader.css'

const todogetData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    return await response.json();
}

export const FeatchingData = () => {

    const {data,error,isPending} = useQuery({
        queryKey: ['productData'],
        queryFn : todogetData,  
    })

    // we can destructure the querry or we can use querry.fn 


    if (isPending) return <span class="loader"></span>
    if (error) return 'An error has occurred please try again';

    

  return (
    <>
     <div>
      <h1>Products:</h1>
      <ul>
        {data?.products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
    </>
  )
}
