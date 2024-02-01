import React from 'react'
import { Modal,ModalBody } from 'reactstrap'
import { useAddBrandMutation,useUpdateBrandMutation } from './BrandsSlice'
export default function BrandsModal({open,toggle,edit}) {
    const [addUser] = useAddBrandMutation()
    const [updateUser] = useUpdateBrandMutation()
    const handleSubmit =(e)=>{
        e.preventDefault()
        let payload ={
          name: e.target[0].value ? e.target[0].value : edit.name
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
          <button type='submit'   className='btn btn-primary'>save</button>
      </form>
        </ModalBody>
    </Modal>
  )
}