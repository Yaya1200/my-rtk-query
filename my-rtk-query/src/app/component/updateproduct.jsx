import React from 'react'
import { useAddNewProductMutation } from '../service/dummydata'

function UpdateProduct(productId) {
  const [updatedProduct, {data, isLoading, isError}] = useAddNewProductMutation()
  if(isError){
    <h1>there is an error</h1>
  }
  if(isLoading){
    <h1> Loading ...</h1>

  }
  const updatehandler = async()=>{
   const updatedNewProduct ={
    title: "iphone",
    discription: "this is new updated phone"
   }
   await updatedProduct({
    id: productId,
    updatedProduct: updatedNewProduct
   });

  }
  return (
    <div>
      
        <h1>{data?.id}</h1>
        <h1>{data?.title}</h1>
        <h1>{data?.discription}</h1>
        <button onClick={updatehandler} disabled={isLoading}>update the product</button>
      
    </div>
  )
}

export default UpdateProduct;