import React from 'react'
import { Modal,ModalBody } from 'reactstrap'
import { useAddModelMutation , useUpdateModelMutation} from './ModelsSlice'
export default function ModelsModal({open,toggle,edit}) {
    const [addUser] = useAddModelMutation()
    const [updateUser] = useUpdateModelMutation()
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