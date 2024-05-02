import { Link } from "react-router-dom"
function Footer() {
  

    return (
      <>
        <footer className=" relative bottom-0 right-0 left-0 border-t-2   bg-white">
            <div className="flex flex-row justify-between  mr-24 p-9">
                <img className=" ml-24 h-32" src="https://img.freepik.com/free-vector/figure-folded-logo_1043-97.jpg?size=338&ext=jpg&ga=GA1.1.1803636316.1708300800&semt=ais" alt="Logo(Alt)" />
                <div className="flex flex-row justify-between items-center space-x-36">
                <div className="flex flex-col space-y-4">
                   <p className="  font-semibold text-slate-700"> Resources </p>
                    <ul className=" text-slate-500 font-medium">
                        <li className=" mb-3">
                            <Link className="hover:underline" target="_blank" to="https://www.linkedin.com/in/maheenfatma">Home</Link>
                        </li>
                        <li>
                            <Link className="hover:underline" to="/about" >About</Link>
                        </li>
                    </ul>

                </div>
                <div className="flex flex-col space-y-4">
                   <p className="  font-semibold text-slate-700"> Follow Us </p>
                    <ul className=" text-slate-500 font-medium">
                        <li className=" mb-3">
                            <Link className="hover:underline" target="_blank" to="https://www.linkedin.com/in/maheenfatma">Github</Link>
                        </li>
                        <li>
                            <Link className="hover:underline" target="_blank" to="https://www.linkedin.com/in/maheenfatma">Discord</Link>
                        </li>
                    </ul>

                </div>
                <div className="flex flex-col space-y-4">
                   <p className="  font-semibold text-slate-700"> Legal </p>
                    <ul className=" text-slate-500 font-medium">
                        <li className=" mb-3">
                            <Link className="hover:underline" to="https://www.techtarget.com/whatis/definition/privacy-policy" target="_blank">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link className="hover:underline" to="https://www.techtarget.com/whatis/definition/privacy-policy" target="_blank" >Terms and Condition</Link>
                        </li>
                    </ul>

                </div>
                </div>
                
                
            </div>
            <div className="flex justify-center border-t-2 p-3 text-slate-500 text-sm">
                <span>
                © 2024
                <a target="_blank" href="https://www.linkedin.com/in/maheenfatma" className="hover:underline">maheenfatma</a>
                . All Rights Reserved.
                </span>
                
            </div>
        </footer>
        
      </>
    )
  }
  
  export default Footer