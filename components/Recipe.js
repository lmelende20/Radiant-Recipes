import React from 'react'
import Image from 'next/image'

function Recipe({picture, name, ingredients, instructions}) {
  return (
    <div className='flex flex-col'>
        <div className='flex'>
            <div>
                <h1 className='font-Lora text-lightGreen text-[45px]'>{name}</h1>
                <Image src={picture} alt={name} width={500} height={391} className='rounded-[20px]'/> 
            </div>
            
            <div>
                <h1 className='font-Lora text-lightGreen text-[35px]'>Ingredients:</h1>
                <ul className='list-disc font-Nunito text-[25px] text-medGreen'>
                    {ingredients.map((item)=>(
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='font-Lora text-lightGreen text-[35px]'>Preparation:</h1>
            <h1 className='font-Nunito text-[25px] text-medGreen w-[250px]'>
                {instructions}
            </h1>
        </div>
        

    </div>
  )
}

export default Recipe