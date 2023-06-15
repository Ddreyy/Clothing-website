import SearchBar from "./SeachBar";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from "react-router-dom";
import Menu from "../components/Menu"
import { GiHamburgerMenu } from "react-icons/gi"
import { useState } from "react";


function Header (){

  const [active, setActive] = useState(false)


  const showNav = () =>{
    setActive(!active)
  }
    return(
                
            <div className="w-[92%] text-black mx-auto flex p-2 items-center justify-between bg-white">
                    <div className="text-2xl font-bold text-center uppercase">
                        <h1 className=""><Link to="/">Clothing's</Link></h1>
                    </div>
               
                <nav>
                    <div className=" flex items-center right-6 md:hidden cursor-pointer scale-125 p-2">
                        <GiHamburgerMenu onClick={showNav} className="scale-125 mx-auto"/>
                    </div>

                    <ul className="hidden md:flex gap-8 p-4 items-center ">
                            <li className="cursor-pointer font-bold  list-none">
                                <Link to="/men">Men</Link> 
                            </li>  
                            <li className="cursor-pointer font-bold  list-none">
                                <Link to="/men">Women</Link> 
                            </li> 
                            <li className="cursor-pointer font-bold  list-none">
                                <Link to="/men">Kids</Link> 
                            </li> 
                            <li className="cursor-pointer font-bold  list-none">
                                <Link to="/men">Sale</Link> 
                            </li>  
                            <SearchBar />  
                            <AiOutlineShoppingCart className="cursor-pointer" />    

                            <li className="cursor-pointer font-bold border bg-gray-200 rounded-lg px-2 py-1 list-none">
                                <Link to="/men">Sign up</Link> 
                            </li>        
                        </ul>  


                     <Menu showNav={showNav} active={active } />
                </nav>
               
            
            </div>
     )
}

export default Header;


