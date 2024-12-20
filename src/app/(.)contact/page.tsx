'use client';
import { Form } from '@/components/form/form';
import { Modal } from '@/components/modal/modal';
import React from 'react'

const ContactModal = () => {
  const [isShow, setIsShow] = React.useState(true)

  const close = () => {
    setIsShow(false)
  }

  return (
    <Modal open={isShow} close={close}>
      <Form/>
    </Modal>
  )
}

export default ContactModal