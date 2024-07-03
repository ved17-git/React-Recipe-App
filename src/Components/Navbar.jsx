import  { useContext, useState,useEffect } from 'react'
import logo from '../assets/Cookpal.svg'
import { NavLink } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { SearchContext } from '../../context/Context';
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";


function Navbar(props) {



const{search,setSearch}=useContext(SearchContext)

const[showNav, setShowNav]=useState(false)

function handleNav(){
setShowNav(!showNav)
}



useEffect(() => {
    if (showNav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showNav]);




return ( <> 
   
   
<div className=' flex justify-between w-full py-[6vh] px-[16vh] items-center md:px-[8vh]  sm:px-[4vh]  '>

<div className='w-[10%] md:w-[20%] sm:w-[25%]'> 
<NavLink to="/"> <img src={logo} alt="" className='w-full cursor-pointer'/> </NavLink>


</div>


<div className=' flex w-[50%]  '>
    <input type="search" name="" id="" placeholder='Search For Recipes...' className='w-full rounded-s-md pl-3 bg-[#F3F3F3] text-lg sm:text-xs '
    value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
    <button className='bg-[#509e2f] p-2 rounded-e-md sm:py-1' onClick={props.dataFunction} ><IoSearch color='white' size={30} className='sm:size-7' /></button>
</div>

<ul className='flex gap-12 text-lg md:hidden'>
    <NavLink to="/" className={({isActive})=> isActive? 'text-[#509e2f]': 'transition ease-in-out duration-200 rounded-lg hover:scale-110 hover:text-[#509e2f]'}>Home</NavLink>
    <NavLink to="/contact" className={({isActive})=> isActive? 'text-[#509e2f]': 'transition ease-in-out duration-300 rounded-lg hover:scale-110 hover:text-[#509e2f]'} >Contact</NavLink>
    <NavLink to="/about" className={({isActive})=> isActive? 'text-[#509e2f]': 'transition ease-in-out duration-300 rounded-lg hover:scale-110 hover:text-[#509e2f]'}>About</NavLink>
</ul>

<div className='hidden md:block'>
<button onClick={handleNav}> 
{showNav? <RxCross2 size={30} /> : <FaBarsStaggered size={30}/>}
</button>

</div>


</div>





{/* responsiveNavbar */}

<div className=''> 

<ul className={showNav? `absolute flex flex-col  bg-[#f5f5f5] w-[100%] h-full gap-6 px-[4vh] ease-out duration-700 py-3 `: `fixed left-[-100%] `}>



    <NavLink to="/" className={({isActive})=> isActive? 'text-[#509e2f] border-b-2 border-gray-400 p-2': 'border-b-2 border-gray-400 p-2   hover:text-[#509e2f]'}>Home</NavLink>
    <NavLink to="/contact" className={({isActive})=> isActive? 'text-[#509e2f] border-b-2 border-gray-400': 'border-b-2 border-gray-400 p-2   hover:text-[#509e2f]'} >Contact</NavLink>
    <NavLink to="/about" className={({isActive})=> isActive? 'text-[#509e2f] border-b-2 border-gray-400': 'border-b-2 border-gray-400 p-2  hover:text-[#509e2f] '}>About</NavLink>
</ul>

</div>



</> )
}

export default Navbar