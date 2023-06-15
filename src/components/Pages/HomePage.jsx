import Footer from "../Footer";
import Header from "../Header";
import Products from "../Products";

function HomePage(){
    return(
        <>
           
            <div className=" mx-auto box-border">
                <div>
                    <Header/>
                </div>                          
            
                <div className="flex flex-wrap items-center justify-center">
                    <img className="w-[94%]" src="/images/homepage1.png" />
                    
                </div>       
                <div>
                    <p className="mt-4 mb-4 text-center font-lato tracking-wide">The best way to beat the heat is to buy new clothes, but if you're not sure where to start, we've got you covered.<br/>
                    Here are some of our favourite products that will make you look amazing in the summer.</p>
                    <div className="flex flex-col items-center justify-center ">
                        <button className="bg-gray-950 text-white py-2 px-4 border">Summer shop</button>
                    </div>
                </div>
                    


                <div className="mt-6 mb-10">
                    <p className="flex justify-center mt-12 text-2xl font-bold italic ">FEATURED PRODUCT</p>
                    <div class="flex mt-4 items-center justify-center ">   
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                            <div class="group relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <div class="h-96 w-80">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/explore5.png"  alt="" />
                                </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-white">NIKE AIR </h1>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Flynit 3.</p>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Vapormask</p>
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See more</button>
                            </div>
                            </div>
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div class="h-96 w-80">
                                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"  src="/images/explore4.png" alt="" />
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-white">NIKE AIR</h1>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Force 1</p>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Uptown force's</p>
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See more</button>
                            </div>
                            </div>
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div class="h-96 w-80">
                                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"  src="/images/explore8.png" alt="" />
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-white">NIKE DUNK HIGH </h1>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Retro black</p>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Power house</p>
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See more</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="mt-8 mb-8 font-lato m-w-11/12 ">
                    <p className="text-bold text-lg ml-16 ">Don't miss on our Exclusive sales</p>
                    <div className="flex items-center justify-center">
                        <img className="w-11/12 relative" src="/images/homepage4.png" />
                        <div className=" absolute  ">
                            <h1 className="flex justify-end text-white text-5xl font-black tracking-wider ">SUMMER POSSIBILITIES</h1>
                        </div>
                       
                    </div>
                    <div className="flex flex-col items-center justify-center mt-8">
                        <p>We've got you covered this summer when it's comes to shopping for gifts</p>
                        <button className="bg-gray-950 text-white py-2 px-4 border mt-4">Explore gift</button>
                    </div>
                </div>




                <div className="mt-6 mb-10">
                    <p className="flex justify-center mt-12 text-2xl font-bold italic ">Work-Out Outfit</p>
                    <div class="flex mt-4 items-center justify-center ">   
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-auto">
                            <div class="group relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <div class="h-96 w-80">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-0 group-hover:scale-125" src="/images/homepage5.png"  alt="" />
                                </div>
                            
                            <div class="absolute inset-0 flex translate-x-[70%] flex-col items-center justify-center px-12 text-center transition-all duration-1000 group-hover:translate-x-0">
                                <button class="font-dmserif text-2xl font-bold text-white border rounded px-2 hover hover:scale-125">See more </button>
                                
                            </div>
                            </div>
                            <div class="group relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <div class="h-96 w-80">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-0 group-hover:scale-125" src="/images/homepage6.png"  alt="" />
                                </div>   
                            <div class="absolute inset-0 flex translate-y-[70%] flex-col items-center justify-center px-12 text-center transition-all duration-1000 group-hover:translate-y-0">
                                <button class="font-dmserif text-2xl font-bold text-white border rounded px-2 hover:scale-125 ">See more </button>                             
                            </div>
                            </div>
                            <div class="group relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <div class="h-96 w-80">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-0 group-hover:scale-125" src="/images/homepage7.png"  alt="" />
                                </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  group-hover:to-black/70"></div>
                            <div class="absolute inset-0 flex translate-x-[-70%] flex-col items-center justify-center px-12 text-center transition-all duration-1000 group-hover:translate-x-[-0]">
                                <button class="font-dmserif text-2xl font-bold text-white border px-2 rounded hover:scale-125">See more </button>                               
                            </div>
                            </div>
                        
                        </div>
                    </div>
                </div>

                <Products />
                <Footer />
                                   
             </div>       
            
        </>
    )
}

export default HomePage;