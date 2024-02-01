import { apiSlice } from "../api/apiSlice";
export const ProductsSlice =apiSlice.injectEndpoints({
  endpoints:builder =>({
    getProducts: builder.query({
      query: ()=>"/products"
    }),
    addProducts:builder.mutation({
      query: (payload)=>({
          url:'/products',
          method:'POST',
          body:payload
      }),
      providesTags: ['products']
  }),     
   updateProduct:builder.mutation({
    query: (payload)=>({
        url:`/products/${payload.id}`,
        method:'PUT',
        body:payload
    }),
    invalidatesTags: ['products']
}),
deleteProduct:builder.mutation({
    query: (id)=>({
        url:`/products/${id}`,
        method:'DELETE',
    }),
    invalidatesTags: ['products']
})
  })
})
export const {useGetProductsQuery,useAddProductsMutation,useUpdateProductMutation,useDeleteProductMutation} = ProductsSlice