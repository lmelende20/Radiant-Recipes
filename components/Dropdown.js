import React, { useState, useRef, useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function DropDown({children, label}) {
    const [size, setSize] = useState('300px');
    const [isOpen, setIsOpen] = useState(false);
    const content = useRef();


    useEffect(() => {
        if (!content.current) return;
        if(!content.current.offsetHeight) return;

        const resize = () => {
            setSize(`${content.current.offsetHeight}px`)
        }
        
        window.addEventListener('resize', resize);
        resize();

        return (() => {
            window.removeEventListener('resize', resize);
        })

    }, [content])


    return (
        <div className='flex flex-col relative'>
            <div className='flex justify-between py-[20px] cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
                <h1 className='font-Lora lg:text-[30px] md:text-[25px] text-[20px] text-darkCoral'>{label}</h1>
                <KeyboardArrowDownIcon className={`${isOpen ? "rotate-180" : "rotate-0" } transition-transform text-[30px] text-darkCoral`}/>
            </div>

            <div className='slide' style={{height: isOpen ? size : '0px'}}>
                <div ref={content}>
                    {children}
                </div> 
            </div>
        </div>
    )
}

export default DropDown
