import React, { useState } from 'react';
import { useRouter } from 'next/router'
import DropDown from './Dropdown'

function ByName({Letter, setLetter}) {
    const router = useRouter();
    const options1 = "ABCDEFGHIJKLM"
    const options2 = "NOPQRSTUVWXYZ"
    
    return (
        <div className="flex md:flex-row flex-col w-[100%]">
            <div className='flex justify-around w-[100%] flex-wrap '>
            {
                [...options1].map(option => <button key={option} className={`font-Lora lg:text-[25px] text-[22px] text-medGreen ${option===Letter ? 'font-bold underline' : 'font-normal no-underline'}`} onClick={() => setLetter(option)}>{option}</button> )
            }         
            </div> 
            <div className='flex justify-around w-[100%] flex-wrap '>
            {
                [...options2].map(option => <button key={option} className={`font-Lora lg:text-[25px] text-[22px] text-medGreen ${option===Letter ? 'font-bold underline' : 'font-normal no-underline'}`} onClick={() => setLetter(option)}>{option}</button> )
            }         
            </div> 
        </div>
           
        
        
    )
}

export default ByName;
