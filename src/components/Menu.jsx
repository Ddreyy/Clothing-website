import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";



function Menu({showNav, active}){
    return(
        <>
        
             <ul className={active ? "flex-col flex items-center sm:fixed inset-0 w-full h-96 bg-white backdrop-blur-lg justify-center p-8 gap-8 uppercase md:hidden" : "hidden"}>
                <AiOutlineClose onClick={showNav} className="cursor-pointer font-extrabold "/>     
                <li className="cursor-pointer  list-none text-md font-bold ">
                    <Link to="/men">Men</Link>  
                </li>  
                <li className="cursor-pointer list-none text-md font-bold ">
                    <Link to="/men">Women</Link> 
                </li> 
                <li className="cursor-pointer list-none text-md font-bold ">
                    <Link to="/men">Kids</Link> 
                </li> 
                <li className="cursor-pointer list-none text-md font-bold " >
                    <Link to="/men">Sale</Link> 
                </li>  
                <li className="cursor-pointer list-none border bg-gray-200 rounded-lg px-2 py-1 text-md font-bold ">
                    <Link to="/men">Sign up</Link> 
                </li>        
            </ul>  
        
        </>
    )
}

export default Menu;