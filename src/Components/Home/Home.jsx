import  { useEffect, useState,useContext } from 'react'
import Card from '../Card/Card'
import { useActionData } from 'react-router-dom'
import { SearchContext } from '../../../context/Context'
import Navbar from '../Navbar'

function Home() {

  const[data,setData]=useState([])
  const{search}=useContext(SearchContext)

const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`






async function getData(){

let ans= await fetch(url)
let res=await ans.json()
console.log(res.meals)

if(res.meals){
  setData(res.meals)
}else{
  setData([])
}

}



useEffect(()=>{

async function defaultMenu(){  

let defaultShow=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
let defaultAns=await defaultShow.json()
console.log(defaultAns.meals)

if(defaultAns.meals){ 
setData(defaultAns.meals)
}else{
  setData([])
}

}

defaultMenu()
},[])








return (<> 





<Navbar dataFunction={getData}/>


<div className={`w-full ${data.length==0? `h-screen`:`` } ` }> 
  

{/* <div>
  for filter
</div> */}

<div className={`w-[100%] flex gap-10 px-[16vh] md:px-[0vh] sm:px-[2vh] py-[6vh] flex-wrap ${data.length >=3 ? `justify-center`:`` }`}>

{data.length ? data.map((item) => (
  <Card key={item.idMeal} meal={item} />
)): ( <div className=' w-[50%] mx-auto text-center px-3 py-6 rounded-xl bg-black text-red-500 font-bold'>Loading...</div>) }




</div>

</div>


   



</>
  )
}

export default Home