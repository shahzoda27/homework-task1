import { apiSlice } from "../api/apiSlice";
export const ModelsSlice =apiSlice.injectEndpoints({
  endpoints:builder =>({
    getModel: builder.query({
      query: ()=>"/models"
    }),
    addModel:builder.mutation({
      query: (payload)=>({
          url:'/models',
          method:'POST',
          body:payload
      }),
      providesTags: ['models']
  }),     
   updateModel:builder.mutation({
    query: (payload)=>({
        url:`/models/${payload.id}`,
        method:'PUT',
        body:payload
    }),
    invalidatesTags: ['models']
}),
deleteModel:builder.mutation({
    query: (id)=>({
        url:`/models/${id}`,
        method:'DELETE',
    }),
    invalidatesTags: ['models']
})
  })
})
export const {useGetModelQuery,useAddModelMutation,useUpdateModelMutation,useDeleteModelMutation} = ModelsSlice