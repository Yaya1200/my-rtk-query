import React from 'react'
import { useDeleteProductMutation } from '../service/dummydata'

function DeleteProduct(productId) {
  const [deleteProduct, {data,isError, isLoading}] = useDeleteProductMutation();
 if(isError){
  <h1>there is an error</h1>
 }
 if (isLoading){
   <h1> loading ... </h1>
 }
 const deletehandler = async() =>{
  try{
      await deleteProduct(productId);
  }
  catch(err){
    console.error("there is an error deleting the product:", err)
  }
 }
  return (
    <div>
      <h1>{`${data?.title} is successfully deleted` }
      </h1>
      <button onClick={deletehandler} disabled={isLoading}>
        deleteProduct
      </button>
    </div>
  )
}

export default DeleteProduct