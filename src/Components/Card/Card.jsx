import React from 'react'
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Card({ meal }) {
  const navigate = useNavigate();

  function handleInfo() {
    navigate(`/${meal.idMeal}`);
  }



return (<>  



<div className='w-[30%] rounded-lg shadow-xl px-3 py-3 h-fit border-2 border-gray-100 transition ease-in-out duration-500 hover:scale-105  md:w-[40%] sm:w-[100%]  cursor-pointer' onClick={handleInfo}>

<img src={meal.strMealThumb}/>




<div className='flex justify-between w-full mt-3 items-center'>
    <h1 className='text-xl font-semibold'>{meal.strMeal}</h1>
    <h1><FaStar size={30} color='#fdc040'/></h1>
</div>

<div className='flex justify-between w-full mt-2 items-center'>
    <h1 className='text-[#dc582a] font-bold text-2xl'>40min</h1>
    <h1><CiHeart size={30} /></h1>
</div>

</div>


</>
)
}

export default Card