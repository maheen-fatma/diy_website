import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  

    return (
      <>
      <div className=" flex justify-center items-center p-5">
        <div className=" grid grid-flow-col gap-11 mt-32 ">
            <span className=" bg-gray-200 font-semibold text-gray-500 rounded-md w-80 p-4">
                <div className="text-4xl text-black font-bold">Get in Touch</div>
                <p className="">Fill in the form to start the conversation</p>
                
                <div className='flex flex-row items-center'>
                    <span>
                    <FontAwesomeIcon className='h-8' icon={faMapMarkerAlt} />
                    </span>
                 <span className='p-4 '>
                    123 Address St, <br /> City, Country
                 </span> 
                </div>
                <div className='flex flex-row items-center'>
                    <span>
                    <FontAwesomeIcon className='h-8' icon={faPhone} />
                    </span>
                 <span className='p-4 '>
                    +123456789
                 </span> 
                </div>
                <div className='flex flex-row items-center'>
                    <span>
                    <FontAwesomeIcon className='h-8' icon={faEnvelope} />
                    </span>
                 <span className='p-4 '>
                    lorem@info.co.in
                 </span> 
                </div>
            </span>
            <span className=" w-80 pt-4">
                <div className='flex flex-col   '>
                <form action="#">
                    <input type="text" name="" id="" placeholder='Full Name' className=' text-gray-300 font-semibold w-72 p-2 rounded-md border-solid border-2 border-gray-300 ' />
                    <input type="text" name="" id="" placeholder='Email' className='  text-gray-300 font-semibold w-72 p-2 rounded-md mt-7 border-solid border-2 border-gray-300 ' />
                    <input type="text" name="" id="" placeholder='Telephone' className=' mt-7   text-gray-300 font-semibold w-72 p-2 rounded-md border-solid border-2 border-gray-300 ' />
                    <button className='bg-orange-600 hover:bg-orange-300 text-white pl-6 pr-6 pt-3 pb-3 rounded-lg font-bold mt-7' type="submit">Submit</button>
                </form>
                </div>
                
            </span>
        </div>
      </div>
      </>
    )
  }
  
  export default Contact;