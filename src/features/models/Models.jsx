import React, { useState } from 'react'
import { useGetModelQuery,useDeleteModelMutation } from './ModelsSlice'
import ModelsModal from './ModelsModal'
export default function Models() {
  const [modal,setModal] = useState(false)
  const [edit,setEdit] = useState('')
    const [deleteUser] = useDeleteModelMutation()
    const {data:models} = useGetModelQuery()
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
      <ModelsModal open={modal} toggle={toggle} edit={edit}/>
    <h1 className='text-center'>Models</h1>
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
            models?.map((item,index)=>{
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