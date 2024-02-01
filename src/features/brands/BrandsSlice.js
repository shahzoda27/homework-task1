import { apiSlice } from "../api/apiSlice";
export const BrandSlice =apiSlice.injectEndpoints({
  endpoints:builder =>({
    getBrand: builder.query({
      query: ()=>"/brands"
    }),
    addBrand:builder.mutation({
      query: (payload)=>({
          url:'/brands',
          method:'POST',
          body:payload
      }),
      providesTags: ['brands']
  }),     
   updateBrand:builder.mutation({
    query: (payload)=>({
        url:`/brands/${payload.id}`,
        method:'PUT',
        body:payload
    }),
    invalidatesTags: ['brands']
}),
deleteBrand:builder.mutation({
    query: (id)=>({
        url:`/brands/${id}`,
        method:'DELETE',
    }),
    invalidatesTags: ['brands']
})
  })
})
export const {useGetBrandQuery,useAddBrandMutation,useUpdateBrandMutation,useDeleteBrandMutation} = BrandSlice