import React, { useState, useEffect } from 'react';
import ByName from './ByName';
import ByCountry from './ByCountry';

function Filter({State, setState, Letter, setLetter, Country, setCountry}) {
    
    return (
        <div>
            <div className='flex flex-col md:items-start items-center pt-[30px]'>
                <div className='pb-[30px]'>
                    <h1 className='font-Lora lg:text-[30px] md:text-[25px] text-[20px] text-lightGreen'>Filter By:</h1>
                    <select className="font-Nunito lg:text-[20px] text-[15px] text-medGreen form-select block mt-1" value={State} onChange={(e) => setState(e.target.value)}>
                        <option selected value='ByName'>By Name</option>
                        <option value='ByCountry'>By Country</option>    
                    </select>
                </div>
                
                {State==='ByName' ? <ByName Letter={Letter} setLetter={setLetter}/> : <ByCountry Country={Country} setCountry={setCountry}/>}
            </div>

        </div>
    )
}

export default Filter;
