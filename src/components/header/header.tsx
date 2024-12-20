"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const urlData = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  },
  {
    name: 'Contact',
    path: '/contact'
  }
]

export const Header = () => {
  const pathName = usePathname()

  return (
    <header className='flex justify-center gap-[40px] p-[20px] bg-blue-500'>
      {urlData.map((item) => (
        <Link className={pathName === item.path ? 'text-red-600' : 'text-black'} key={item.path} href={item.path}>{item.name}</Link>
      ))}
    </header>
  )
}
