import React from 'react'
import { useAddNewProductMutation } from '../service/dummydata'


function AddNewProduct() {
  const [addNewProduct,{data,isError,isLoading} ] = useAddNewProductMutation();
  if(isError){
    <h1>there is an error</h1>
  }
  if(isLoading){
    <h1> loading ...</h1>
  }
  const eventhandler = async()=>{
    try{
      const newproduct = {
        id: "1",
        title:"Apple MAC BOOK",
        discription: "it is the best mac book now"
      }
      await addNewProduct(newproduct)

    }
    catch
    {
     console.log("there is an error", err);
    }
  }

  return (
    <div>
      <h1>
        {data?.id}
      </h1>
      <h1>
        {data?.title}
      </h1>
      <h1>
        {data?.discription}
      </h1>
    <button onClick={eventhandler} 
    disabled={isLoading}>AddNewProduct</button>
    </div>
  )
}

export default AddNewProduct