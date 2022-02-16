import {useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import Link from "next/link";
import axios from 'axios'
import Image from 'next/image'
import DropDown from '../components/Dropdown'
import ByName from '../components/ByName'
import Card from '../components/Card'
import Filter from '../components/Filter'
import Recipe from '../components/Recipe'
import { Icon } from '@iconify/react';
import ToTopButton from '../components/ToTopButton'

export default function Home() {
    const router = useRouter()
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    const [State, setState] = useState('ByName')
    const [Letter, setLetter] = useState('A')
    const [Country, setCountry] = useState("American")

    
    useEffect(() => {

      const fetch = async () => {
        setLoading(true)
        if (State === 'ByName'){
          let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${Letter.toLowerCase()}`);
          setData(data)
        }
        else{
          let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${Country}`);
          setData(data)
        }
        
        setLoading(false)
      }

      fetch();

    }, [Letter, Country, State])

    if (loading){
      return (
        <div>
          <h1 className='font-Lora lg:text-[45px] md:text-[37px] text-[30px] text-medCoral'> Loading.... </h1>
        </div>
      );
    }
  function Error(){
    return (
      <div className='flex flex-col items-center'>
        <Icon icon="bxs:error-alt" color="#ddbea9" height="70" />
        {State === 'ByName' ? 
          <h1 className='font-Lora lg:text-[45px] md:text-[35px] text-[30px] text-center text-medCoral '>No recipes starting with the letter {Letter}</h1>
          :
          <h1 className='font-Lora lg:text-[45px] md:text-[35px] text-[30px] text-center text-medCoral '>There are no {Country} recipes</h1>
      }
        
      </div> 
    )
    
  }
  
  return (  
    <div >
      
      <Filter State={State} setState={setState} Letter={Letter} setLetter={setLetter} Country={Country} setCountry={setCountry}/>
      
      <div className='w-full bg-lightGreen h-[1px] mt-[20px]'/>
      {State === 'ByName' ? <h1 className='font-Lora lg:text-[30px] text-[25px] text-lightGreen pt-[20px] lg:text-left text-center'>Recipes that start with {Letter}</h1> : <h1 className='font-Lora lg:text-[30px] md:text-[25px] text-[20px] text-lightGreen pt-[20px]'>{Country} Recipes</h1>}
      
      <div className='py-[40px]'>
        {data.meals === null ? <Error /> : 
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start place-items-center'>
          {
            data.meals ? 
            
            data.meals.map((item) => ( 
              
              <Card key={item} picture={item.strMealThumb} name={item.strMeal} ID={item.idMeal}/> 
            ))
            : 
            <></>
          }
          {/*onClick={()=><Recipe picture={item.strMealThumb} name={item.strMeal} ingredients={getIngredientList(item)} instructions={item.strInstructions}/>}*/}
          </div>
        }
      </div>
      
      
      
        
    </div>
  )
}
