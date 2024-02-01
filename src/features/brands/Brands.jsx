import React, { useState } from 'react'
import { useGetBrandQuery,useDeleteBrandMutation } from './BrandsSlice'
import BrandsModal from './BrandsModal'
export default function Users() {
  const [modal,setModal] = useState(false)
  const [edit,setEdit] = useState('')
    const [deleteUser] = useDeleteBrandMutation()
    const {data:brands} = useGetBrandQuery()
    const toggle = ()=>{
    setModal(false)
    setEdit('')
   }
   const openEditModal = (item)=>{
    setEdit(item)
    setModal(true)
   }
  return (
    <div className='container'>
      <BrandsModal open={modal} toggle={toggle} edit={edit}/>
    <h1 className='text-center'>Brands</h1>
    <button className='btn btn-info m-3' onClick={()=>setModal(true)}>Add User</button>
          <div className="col-md-8">
         <h1>Title</h1>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>T/R</th>
                  <th>Brand name</th>
                  <th>Action</th>
                </tr>
              </thead>
          <tbody>
           {
            brands?.map((item,index)=>{
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>
                  <button className='btn btn-success' onClick={()=>openEditModal(item)}>Edit</button>
                  <button className='btn btn-danger' onClick={()=>deleteUser(item.id)}>Delete</button>
                </td>
              </tr>
            })
           }
           </tbody>
         </table>
          </div>
        </div>

  )
}