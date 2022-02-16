import React from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'

function Card({picture, name, ID}) {
    const router = useRouter()

    return(
        <div className='cursor-pointer' onClick={()=>router.push(`/recipe/${ID}`)}>
            <Image src={picture} alt={name} width={250} height={200} className='rounded-[20px]'/>
            <h1 className='font-Nunito md:text-[25px] text-[20px] lg:text-left text-center text-lightGreen w-[250px]'>
                {name}
            </h1>
            
        </div>
    ) 
}

export default Card;
