"use client";
import React from 'react'
import { useRouter } from 'next/navigation'

const About = () => {
  const router = useRouter()

  return (
    <div>
      <h1 className='text-4xl'>About</h1>
      <button onClick={() => router.push('/')}>Home</button>
    </div>
  )
}

export default About