"use client"
import React from 'react'


export const Form = () => {
  return (
    <div className='p-[20px] bg-white w-[400px]' >
      <div className='flex flex-col gap-[20px]'>
        <input type="text" placeholder="Name" className='bg-slate-800 p-[10px] w-full'/>
        <input type="text" placeholder="Password" className='bg-slate-800 p-[10px] w-full'/>
      </div>
      <button className='bg-blue-500 p-[10px]'>Submit</button>
    </div>
  )
}
