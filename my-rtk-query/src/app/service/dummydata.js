import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),
  getProductById: builder.query({
    query: (id) => `/products/${id}`
  }),
  addNewProduct: builder.mutation({
   query: (newProduct)=>({
    url: "/products/add",
    method: "POST",
    header: {"Content-Type": "application/json"},
    body: newProduct
   })
  }),
  updateProduct: builder.mutation({
    query: ({updatedProduct, id})=>({
    uri: `/products/${id}`,
    method: "PUT",
    header: {"Content-Type": "application/json"},
    body:updatedProduct,
  
  })}),
  deleteProduct: builder.mutation({
    query: (id)=>({
      uri:`/products/${id}`,
      method: "Delete",
    })
  })

  })
  });


export const { useGetAllProductsQuery,useGetProductByIdQuery, useAddNewProductMutation,useUpdateProductMutation, useDeleteProductMutation} = productApi;
