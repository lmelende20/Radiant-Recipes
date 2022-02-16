import React, { useState } from 'react';
import { useRouter } from 'next/router'
import DropDown from './Dropdown'

function ByName({Letter, setLetter}) {
    const router = useRouter();
    const options = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    return (
            
        <div className='flex justify-evenly w-[100%] flex-wrap'>
        {
            [...options].map(option => <button key={option} className={`font-Lora lg:text-[25px] text-[20px] text-medGreen ${option===Letter ? 'font-bold underline' : 'font-normal no-underline'}`} onClick={() => setLetter(option)}>{option}</button> )
        }         
        </div>    
        
        
    )
}

export default ByName;
