import { RiSearch2Line } from "react-icons/ri";

function SearchBar(){
    return(
        <div className="relative text-white text-opacity-20">
            <input
                className="pl-10 p-2 w-full text-sm text-gray-400 placeholder-gray-400 bg-gray-100 rounded-full focus:border-1"
                type="text"
                placeholder="Search..."
                />
        <RiSearch2Line className="absolute top-0 mt-2.5 ml-4 w-4 h-4 text-gray-400 text-opacity-50" />
        </div>
    )
}
export default SearchBar;