import React from 'react'
import { Modal,ModalBody } from 'reactstrap'
import { useAddProductsMutation,useUpdateProductMutation } from './ProductsSlice'
export default function ProductsModal({open,toggle,edit}) {
    const [addUser] = useAddProductsMutation()
    const [updateUser] = useUpdateProductMutation()
    const handleSubmit =(e)=>{
        e.preventDefault()
        let payload ={
          name: e.target[0].value ? e.target[0].value : edit.name,
          price: e.target[1].value ? e.target[1].value : edit.price,
          code: +e.target[2].value ? +e.target[2].value : edit.code,
          brand: e.target[3].value ? e.target[3].value : edit.brand,
          model: e.target[4].value ? e.target[4].value : edit.model,
          description: e.target[5].value ? e.target[5].value : edit.description
      }
      if (edit !== "") {
        updateUser({...payload, id:edit.id})
      }else{
        addUser({...payload})
      }   
    }
  return (
    <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
        <form  onSubmit={handleSubmit}>
          <input type="text" defaultValue={edit.name} placeholder='name' className='form-control my-2' />
          <input type="text"  defaultValue={edit.price}  placeholder='price' className='form-control my-2' />
          <input type="number"  defaultValue={edit.code}   placeholder='code' className='form-control my-2' />
          <select className='form-control my-2' defaultValue={edit.brand}>
                <option value="" hidden>Select your brand</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Acer">Acer</option>
            </select>
            <select className='form-control my-2' defaultValue={edit.model}>
                <option value="" hidden>Select your Model</option>
                <option value="mobile">Mobile</option>
                <option value="laptop">Laptop</option>
                <option value="tablet">Tablet</option>
            </select>
          <input type="text"  defaultValue={edit.description}   placeholder='description..' className='form-control my-2' />
          <button type='submit'   className='btn btn-primary'>Add User</button>
      </form>
        </ModalBody>
    </Modal>
  )
}