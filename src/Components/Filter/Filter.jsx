import React from 'react'

function Filter() {
  return (
    <aside className='w-[20%] sticky flex flex-col gap-6 px-[16vh] h-full py-[6vh] '>
<h1 className='text-2xl font-bold'>Filters</h1>

<div className='w-full'>
  <h1 className='font-bold'>Diet</h1>
   <p> <input type="checkbox" />  Vaggies</p>
   <p> <input type="checkbox" />  Vaggies</p>
</div>

<div>
  <h1 className='font-bold'>Diet</h1>
   <p> <input type="checkbox" />  Vaggies</p>
   <p> <input type="checkbox" />  Vaggies</p>
</div>

<div>
  <h1 className='font-bold'>Diet</h1>
   <p> <input type="checkbox" />  Vaggies</p>
   <p> <input type="checkbox" />  Vaggies</p>
</div>

<div>
  <h1 className='font-bold'>Diet</h1>
   <p> <input type="checkbox" />  Vaggies</p>
   <p> <input type="checkbox" />  Vaggies</p>
</div>

</aside>
  )
}

export default Filter