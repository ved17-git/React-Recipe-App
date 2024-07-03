import logo from './Cookpal.svg'


function Footer() {
return (<> 



<div className="w-full flex justify-between  gap-24 px-[16vh] py-[6vh] place-items-start shadow-xl md:px-[4vh] md:gap-10 sm:flex-col
sm:gap-10">


<div>
    <img src={logo} alt="" />
    <p className="text-wrap mt-7 text-[#666666] sm:mt-2">Cookpal is a recipe website with  a wide variety of delicious recipes, easy-to-use search  function.  Join our community  and let's cook together!</p>
</div>

<div>
    <h1 className="text-xl font-semibold">Company</h1>
    <ul className="flex flex-col gap-2 mt-7 text-[#666666] sm:mt-2">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
    </ul>
</div>

<div>
    <h1 className="text-xl font-semibold">Resources</h1>
    <ul className="flex flex-col gap-2 mt-7 text-[#666666] sm:mt-2">
        <a href="/">Blog</a>
        <a href="/contact">testimonials</a>
        <a href="/about">Insights</a>
    </ul>
</div>


<div className="flex sm:flex-col md:flex-col ">
    <input type="email" placeholder="Email" className="py-1 rounded-lg pl-3 bg-[#F3F3F3] shadow-2xl"/>
    <button className="ml-2 text-xl font-semibold bg-[#509e2f] text-white px-3 py-1 rounded-lg shadow-2xl sm:mt-3 md:mt-3">Subscribe</button>
</div>


</div>









   
</>
)
}

export default Footer