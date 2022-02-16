import React from 'react';
import {useState, useEffect} from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

function Navbar() {
  const router = useRouter()
  const [input, setInput] = useState("")
  return (
    <div className='flex md:justify-between md:flex-row flex-col items-center'>
        <Image src='/logo2.svg' alt='logo' width={250} height={100} className='cursor-pointer' onClick={()=>router.push(`/`)}/>

        <div className='flex'>
            <form onSubmit={(e)=>{
              e.preventDefault();
              if(input.trim() == "") return;
              router.push(`/search/${input}`)
              setInput("")
              }}>
                <input value={input} onChange={(e)=>setInput(e.target.value)} type='text' id='search' placeholder='Search Recipes...' className='font-Nunito text-medGreen md:text-[20px] text-[10px] pl-[10px] py-[5px] md:rounded-l-[10px] rounded-l-[5px]' />
                
                <input type="submit" value="Search" className='bg-darkCoral font-Nunito md:text-[20px] text-[10px] px-[10px] py-[5px] text-lightCoral md:rounded-r-[10px] rounded-r-[5px]'/>
            </form>
            
        </div>
    </div>
  )
}

export default Navbar;
