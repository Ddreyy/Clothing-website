import Footer from "../Footer";
import Header from "../Header";
import { TbCurrencyNaira } from "react-icons/tb"


function Men(){
    return(
        <>
            <div>
                <Header />
               
                <div className="">
                    <div className=" items-center mt-4 ">
                        {/* <h1 className="sm:text-md md:text-2xl lg:text-4xl absolute  mt-8 justify-center text-center font-bold font-lato tracking-wider">
                            SUMMER IS HERE, AND IT'S TIME TO<br/> GET OUT AND
                        <span className="text-white"> ENJOY THE SUN!</span>
                        </h1> */}
                        <div className="flex justify-center ">
                            <img className="w-[94%] "  src="/images/men1.png" alt="logo"/>
                        </div>
                    </div>
                            
                    </div>
             
                <div>
                    <p className="mt-4  text-center font-lato tracking-wide">The best way to beat the heat is to buy new clothes, but if you're not sure where to start, we've got you covered.<br/>
                    Here are some of our favourite products that will make you look amazing in the summer.</p>
                    <div className="flex flex-col items-center justify-center mt-8">
                        <button className="bg-gray-950 text-white py-2 px-2 border ">Summer shop</button>
                    </div>
                </div>
                
                <div class="flex mt-12 items-center justify-center">
                    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                        <div class="group relative items-center justify-center ">
                            <div class=" w-80 font-lato">
                                <p className="flex items-center justify-center text-lg">SUMMER SALE</p>
                                <h1 className="flex items-center justify-start font-bold text-3xl">EXCLUSIVE SHOES</h1>
                                <p className="flex items-center justify-center">Our greatest show of suits has always been when we come together</p>
                            </div>           
                        </div>
                        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div class="h-96 w-80">
                                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/homepage2.png" alt="" />
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-white">NIKE AIR</h1>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Mac 90 black</p>
                                <p class="flex mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Price : <span className="flex items-center "><TbCurrencyNaira className="text-2xl" /> 12,500</span></p>
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">buy</button>
                            </div>
                        </div>
                        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div class="h-96 w-80">
                                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/explore3.png"alt="" />
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-white">NIKE METCON</h1>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> green</p>
                                <p class="flex mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    Price : <span className="flex items-center "><TbCurrencyNaira className="text-2xl" /> 15,000</span></p>
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">buy</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 mb-10">
                    <p className="flex justify-center mt-12 text-2xl font-bold italic ml-16">Men Dress</p>
                    <div class="flex mt-4 items-center justify-center ">   
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            <div class="group relative  cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                <div class="h-96 w-80">
                                    <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="/images/men2.png"  alt="" />
                                </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-white">SUITS</h1>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Shop Suits</button>
                            </div>
                            </div>
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div class="h-96 w-80">
                                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"  src="/images/men3.png" alt="" />
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-white">SUMMER WEARS</h1>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Shop Summer</button>
                            </div>
                            </div>
                            <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                            <div class="h-96 w-80">
                                <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"  src="/images/men4.png" alt="" />
                            </div>
                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                <h1 class="font-dmserif text-3xl font-bold text-white">HIKE'S WEARS</h1>
                                <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
                                <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Shop for Hiking </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Men;