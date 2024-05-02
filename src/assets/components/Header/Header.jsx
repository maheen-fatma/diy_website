import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
function Header() {
  

    return (
      <>
        
        <header className="drop-shadow-md shadow-slate-300  sticky  z-50 top-0 bg-white">
            <div className="flex flex-row justify-between items-center "> 
                <img className=" h-40 ml-24" src="https://img.freepik.com/free-vector/figure-folded-logo_1043-97.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1708300800&semt=ais" alt="Logo(Alt)" />
                
                <div className="flex flex-row justify-between items-center">
                    <ul className="flex flex-row justify-between items-center">
                        <li className=" ml-16 font-medium ">
                            <NavLink to="/" className={({isActive}) => ` transition duration-150 ease-in-out hover:bg-gray-50 hover:bg-transparent hover:text-sky-800 ${isActive? "text-sky-800":"text-gray-700"} `}>Home</NavLink>
                        </li>
                        <li className="ml-16 text-gray-600 font-medium">
                            <NavLink to="/about" className={({isActive}) => ` transition duration-150 ease-in-out hover:bg-gray-50 hover:bg-transparent hover:text-sky-800 ${isActive? "text-sky-800":"text-gray-700"} `}>About</NavLink>
                        </li>
                        <li className="ml-16 text-gray-600 font-medium">
                            <NavLink to="/contact" className={({isActive}) => ` transition duration-150 ease-in-out hover:bg-gray-50 hover:bg-transparent hover:text-sky-800 ${isActive? "text-sky-800":"text-gray-700"} `}>Contact</NavLink>
                        </li>
                        <li className="ml-16 text-gray-600 font-medium">
                            <NavLink to="/params" className={({isActive}) => ` transition duration-150 ease-in-out hover:bg-gray-50 hover:bg-transparent hover:text-sky-800 ${isActive? "text-sky-800":"text-gray-700"} `}>Parameter</NavLink>
                        </li>
                        
                    </ul>
                </div>
                <div className="flex flex-row justify-between items-center">
                   <Link to="#" className=" mr-5">Log In</Link>
                   <Link to="#" className="p-2 pl-3 pr-3 rounded-lg bg-sky-800  text-white m-1 mr-24 hover:bg-sky-900">Get Started</Link>
                </div>
                
            </div>
            
        </header>
      </>
    )
  }
  
  export default Header