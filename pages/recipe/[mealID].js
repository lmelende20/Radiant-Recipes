import React from 'react';
import axios from 'axios'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import Head from "next/head"

function MealID({ID}) {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    console.log(router.query.mealID)

    useEffect(() => {

        if(!router.query.mealID) return

        const fetch = async () => {
            setLoading(true)
          
            let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${router.query.mealID}`);
            setData(data.meals[0])
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
    function getIngredientList(item){
        const ingredientList = [];
        for (let i = 1; i < 21; i++){
          if (item["strIngredient" + i] === null || item["strIngredient" + i].trim() === ""){
            break
          }
          else{
            ingredientList.push({quantity: item["strMeasure" + i], name: item["strIngredient" + i]})
          }
          
        }
        return ingredientList
    }
    function getMeasurementsList(item){
        const measurementsList = [];
        for (let i = 1; i < 21; i++){
          if (item["strMeasure" + i].trim() === null || item["strMeasure" + i].trim() === ""){
            break
          }
          else{
            measurementsList.push(item["strMeasure" + i])
          }
          
        }
        return measurementsList
    }
    function getInstructions(inst){
        /*if (inst.lastIndexOf(".") === inst.length-1){
            inst = inst.substring[0, inst.length-1]
        }*/
        
        return inst.split("\n")
    }

    
    return (
        <div className='pb-[50px] pt-[30px]'>
            <Head>
                <title>{data.strMeal} | Radiant Recipes</title>
            </Head>
            <div className=' flex md:flex-row flex-col md:justify-between justify-center md:items-start items-center'>
                <div className='hidden md:flex'>
                    <div className='flex flex-col md:items-start items-center'>
                        <h1 className='text-darkCoral font-Lora lg:text-[40px] md:text-[35px] text-[30px] pb-[30px]'>{data.strMeal}</h1>
                        <Image src={data.strMealThumb} alt={data.strMeal} width={400} height={400}/>
                    </div>
                    
                </div>
                <div className='md:hidden flex flex-col md:items-start items-center'>
                    <h1 className='text-darkCoral font-Lora lg:text-[40px] md:text-[35px] text-[30px] pb-[30px]'>{data.strMeal}</h1>
                    <Image src={data.strMealThumb} alt={data.strMeal} width={300} height={300}/>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-lightGreen font-Lora lg:text-[35px] md:text-[30px] text-[25px] pt-[20px] md:pt-[0]'>Ingredients:</h1>

                    <div className='flex '>
                        <div>
                            <ul className='list-disc'>
                            {
                                getIngredientList(data).map((ingredient)=> (
                                    <li key={ingredient}  className='text-medGreen font-Nunito lg:text-[20px] md:text-[15px] text-[10px]'>{ingredient.quantity} {ingredient.name}</li>
                                ))
                            }
                            </ul> 
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-lightGreen font-Lora lg:text-[35px] md:text-[30px] text-[25px] pt-[20px]'>Preparations:</h1>
                <div>
                    <ul className='list-disc'>
                    {
                        getInstructions(data.strInstructions).map((inst)=> (
                            <li key={inst}  className='text-medGreen font-Nunito lg:text-[20px] md:text-[15px] text-[10px]'>{inst}</li>
                        ))
                    }
                    </ul> 
                </div>

                {/*<h5 className='text-medGreen font-Lora text-[20px]'>{data.strInstructions}</h5>*/}
            </div>
        </div>
        
    )
}

export default MealID