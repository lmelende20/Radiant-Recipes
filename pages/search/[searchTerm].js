import React from 'react';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { Icon } from '@iconify/react';
import Card from '../../components/Card'
import Head from "next/head"

function SearchTerm() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const router = useRouter()


    useEffect(() => {

        if(!router.query.searchTerm) return

        const fetch = async () => {
            setLoading(true)
          
            let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${router.query.searchTerm}`);
            
            setData(data)
            console.log(data)
            setLoading(false)
        }
  
        fetch();
  
    }, [router.query])
  
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
            <h1 className='font-Lora lg:text-[45px] md:text-[35px] text-[30px] text-center text-medCoral '>No recipes that match the search term `{router.query.searchTerm}`</h1> 
          </div> 
        )
        
      }
    return (
        <div>
            <Head>
                <title>Search | Radiant Recipes</title>
            </Head>
            <h1 className='font-Lora lg:text-[30px] text-[25px] text-lightGreen lg:pt-[20px] pr-[10px] lg:text-left text-center'>Search Results:</h1>
            <div className='pt-[30px]'>
            {data.meals === null ? <Error /> : 
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-start place-items-center'>
            {
                
                data.meals.map((item) => ( 
                
                    <Card key={item} picture={item.strMealThumb} name={item.strMeal} ID={item.idMeal}/> 
                ))
                
            }
            {/*onClick={()=><Recipe picture={item.strMealThumb} name={item.strMeal} ingredients={getIngredientList(item)} instructions={item.strInstructions}/>}*/}
            </div>
            }
        </div>
        </div>
  )
}

export default SearchTerm