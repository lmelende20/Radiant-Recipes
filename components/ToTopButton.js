import React from 'react';
import Image from "next/image"

function ToTopButton({className}) {
  return (
    <div className={` ${window.scrollY > 'h-screen' ? 'invisible' : 'visible'} cursor-pointer fixed bottom-0 right-0 lg:pr-[30px] lg:pb-[20px] pb-[3px] pr-[10px] `} onClick={() => window.scrollTo(0, 0)}>
        <Image src='/topButton.svg' alt='up arrow' width={50} height={50}/>
    </div>
  )
}

export default ToTopButton;
