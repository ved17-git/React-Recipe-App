import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home/Home'
import Contact from './Components/Contact/Contact'
import About from './Components/About/About'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { SearchContext } from '../context/Context'
import Footer from './Components/Footer/Footer'
import Meal_Info from './Components/Meal_Information/Meal_Info'

function App() {

const[search,setSearch]=useState('')


return (
<>

<SearchContext.Provider value={{search,setSearch}}>

<BrowserRouter>
<Routes>


<Route path='/' element={<Home/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/:id' element={<Meal_Info/>}/>



</Routes>
<Footer/>
</BrowserRouter>

</SearchContext.Provider>

</>
  )
}

export default App
