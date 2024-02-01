import React, { useState } from 'react'
import ProductsModal from './ProductsModal'
import { useGetProductsQuery , useDeleteProductMutation} from './ProductsSlice'
export default function Users() {
  const [modal,setModal] = useState(false)
  const [edit,setEdit] = useState('')
    const [deleteUser] = useDeleteProductMutation()
    const {data:products} = useGetProductsQuery()
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
      <ProductsModal open={modal} toggle={toggle} edit={edit}/>
    <h1 className='text-center'>Products</h1>
    <button className='btn btn-info m-3' onClick={()=>setModal(true)}>Add User</button>
          <div className="col-md-8">
          <table className="table table-bordered">
          <thead>
            <tr>
              <th>T/R</th>
              <th> Name</th>
              <th>Price</th>
              <th>Code</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            products?.map((item,index)=>{
              return <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.code}</td>
                <td>{item.brand}</td>
                <td>{item.model}</td>
                <td>{item.description}</td>
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