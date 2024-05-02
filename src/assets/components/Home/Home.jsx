import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css'; // Ensure you are importing the correct CSS file



function Home() {
  

    return (
      <>
       <div className="flex flex-row justify-between items-center pl-32 pr-32 pt-16">
        <div>
          <img className=" h-96 w-auto " src="https://www.freevector.com/uploads/vector/preview/31087/07Januari2021-06_generated.jpg" alt="" />
        </div>
        <div className=" text-right ">
          <h1 className="font-bold text-6xl">Download Now
          <div className=" text-4xl  ">Lorem Ipsum</div></h1>
          <div className="mt-7">
          <Link to="https://www.google.com/" target="_blank" >
           <span className=" bg-sky-800 text-white hover:opacity-75 p-3 text-2xl rounded-lg ">
          <i className="fab fa-google-play pr-3"></i> 
          Download
          </span>
           
            </Link>
          </div>
          
        </div>
       </div>
       <br />
       <br />
       <br /> <br />
       <div className="flex flex-col justify-center items-center ">
       <img className=" h-72" src="https://img.freepik.com/premium-vector/cartoon-people-standing-together_723833-221.jpg" alt="hi" />
       <p className=" text-4xl p-3">Lorem Ipsum Yojo</p>
       
       </div>
       
      </>
    )
  }
  
  export default Home;