import React, { useState} from 'react'
import '../../styles/Book.css'
import Books from './Books'
import Modal from './Modal'


const Homepage = () => {

    const [open, setOpen] = useState(false)

    const OpenModal = ()=>{
        setOpen(true)
    }

    const CloseModal = ()=>{
        setOpen(false)
    }

  return (
    <>
        {open ? <Modal CloseModal={CloseModal}/> : null}
        <Books OpenModal={OpenModal}/>
    </>
  )
}

export default Homepage