import React from 'react'
import { useAddNewProductMutation } from '../service/dummydata'


function AddNewProduct() {
  const res = useAddNewProductMutation()
  console.log(res);
  return (
    <div>AddNewProduct</div>
  )
}

export default AddNewProduct