"use client";
import React from 'react'

interface ModalProps {
  open: boolean;
  close: () => void; 
  children: React.ReactNode;
}

export const Modal = ({open, close, children}: ModalProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  if (!open) return null

  return (
    <div className='fixed justify-center inset-0 items-center flex bg-[#0000006d]' >
      <div>
        <button onClick={close}>X</button>
        {children}
      </div>
    </div>
  )
}
