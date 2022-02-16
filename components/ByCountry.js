import React from 'react';
import DropDown from './Dropdown'
import Image from 'next/image'

function ByCountry({Country, setCountry}) {
    const options=[
        /*<Image src='/Algeria.svg' alt='Algerian' key='Algerian' layout='intrinsic' width={60} height={60}/>,*/
        <Image src='/America.svg' alt='American' key='American' width={60} height={60}/>,
        /*<Image src='/Argentina.svg' alt='Argentinian' key='Argentinian' width={60} height={60}/>,*/
        <Image src='/Canada.svg' alt='Canadian' key='Canadian' width={60} height={60}/>,
        <Image src='/China.svg' alt='Chinese' key='Chinese' width={60} height={60}/>,
        <Image src='/Croatia.svg' alt='Croatian' key='Croatian' width={60} height={60}/>,
        <Image src='/Egypt.svg' alt='Egyptian' key='Egyptian' width={60} height={60}/>,
        <Image src='/France.svg' alt='French' key='French' width={60} height={60}/>,
        <Image src='/Greece.svg' alt='Greek' key='Greek' width={60} height={60}/>,
        <Image src='/India.svg' alt='Indian' key='Indian' width={60} height={60}/>,
        <Image src='/Ireland.svg' alt='Irish' key='Irish' width={60} height={60}/>,
        <Image src='/Italy.svg' alt='Italian' key='Italian' width={60} height={60}/>,
        <Image src='/Jamaica.svg' alt='Jamaican' key='Jamaican' width={60} height={60}/>,
        <Image src='/Japan.svg' alt='Japanese' key='Japanese' width={60} height={60}/>,
        <Image src='/Kenya.svg' alt='Kenyan' key='Kenyan' width={60} height={60}/>,
        <Image src='/Malaysia.svg' alt='Malaysian' key='Malaysian' width={60} height={60}/>,
        <Image src='/Mexico.svg' alt='Mexican' key='Mexican' width={60} height={60}/>,
        <Image src='/Morocco.svg' alt='Moroccan' key='Moroccan' width={60} height={60}/>,
        <Image src='/Netherlands.svg' alt='Dutch' key='Dutch' width={60} height={60}/>,
        /*<Image src='/Norway.svg' alt='Norwegian' key='Norwegian' width={60} height={60}/>,*/
        <Image src='/Poland.svg' alt='Polish' key='Polish' width={60} height={60}/>,
        <Image src='/Portugal.svg' alt='Portuguese' key='Portuguese' width={60} height={60}/>,
        <Image src='/Russia.svg' alt='Russian' key='Russian' width={60} height={60}/>,
        /*<Image src='/SaudiArabia.svg' alt='Saudi Arabian' key='Saudi Arabian' width={60} height={60}/>,*/
        /*<Image src='/Slovakia.svg' alt='Slovakian' key='Slovakian' width={60} height={60}/>,*/
        <Image src='/Spain.svg' alt='Spanish' key='Spanish' width={60} height={60}/>,
        /*<Image src='/Syria.svg' alt='Syrian' key='Syrian' width={60} height={60}/>,*/
        <Image src='/Thailand.svg' alt='Thai' key='Thai' width={60} height={60}/>,
        <Image src='/Tunisia.svg' alt='Tunisian' key='Tunisian' width={60} height={60}/>,
        <Image src='/Turkey.svg' alt='Turkish' key='Turkish' width={60} height={60}/>,
        <Image src='/UK.svg' alt='British' key='British' width={60} height={60}/>,
        <Image src='/Vietnam.svg' alt='Vietnamese' key='Vietnamese' width={60} height={60}/>
    ]
    
    return (
        <div>
            <div className='flex flex-wrap'>
            {
                options.map(option => <button key={option.alt} onClick={()=>setCountry(option.key)} className={`${Country == option.key ? "drop-shadow-[0_0px_8px_rgba(165,165,141,1)]" : ""}`}>{option}</button> )
                
            }
            </div>
        </div>
    );
}

export default ByCountry;
