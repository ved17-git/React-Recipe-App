import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import { FaEraser } from 'react-icons/fa6'

function Meal_Info() {

const {id}=useParams()
console.log(id)

const[info,setInfo]=useState()

async function getInfo(){
    const get= await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    const jsonData=await get.json()
    console.log(jsonData.meals[0])
    setInfo(jsonData.meals[0])
}


useEffect(()=>{
    getInfo()
},[])

return (<> 


<Navbar/>




{
    !info ? <div>Loading..</div>:
    <div className='w-full flex justify-evenly  gap-24 px-[16vh] py-[6vh] md:flex-col md:px-[8vh] sm:gap-10 sm:px-[4vh]'>


<div className='w-[70%] md:w-[100%]'>
    <img src={info.strMealThumb} className='w-full rounded-2xl' alt="" />
</div>

<div className='w-[30%] md:w-[100%] '>
    <h1 className='text-4xl text-center font-semibold bg-[#509e2f] text-white py-3 rounded-2xl shadow-xl '>{info.strMeal}</h1>
    <ul className='grid grid-cols-3 justify-items-center rounded-xl bg-gray-200  px-[8vh] py-[4vh] gap-x-32 gap-8 mt-10 text-xl md:gap-x-20 sm:text-xl sm:gap-x-12 sm:px-[4vh]'>

        <li>{info.strIngredient1}</li>
        <li>{info.strIngredient2}</li>
        <li>{info.strIngredient3}</li>
        <li>{info.strIngredient4}</li>
        <li>{info.strIngredient5}</li>
        <li>{info.strIngredient6}</li>
        <li>{info.strIngredient7}</li>
        <li>{info.strIngredient8}</li>
        <li>{info.strIngredient9}</li>
        <li>{info.strIngredient10}</li>
        <li>{info.strIngredient11}</li>
        <li>{info.strIngredient12}</li>
        <li>{info.strIngredient13}</li>
        <li>{info.strIngredient14}</li>
        <li>{info.strIngredient15}</li>
        <li>{info.strIngredient16}</li>
        <li>{info.strIngredient17}</li>
        <li>{info.strIngredient18}</li>
        <li>{info.strIngredient19}</li>
        <li>{info.strIngredient20}</li>
    
    </ul>
</div>

</div>
}



</>
  )
}

export default Meal_Info