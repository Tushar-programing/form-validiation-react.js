import React, {useState} from 'react'

import { RiUser3Line } from "react-icons/ri";
import { FiHome } from "react-icons/fi";

import header1 from "../images/header1.png"
import header4 from "../images/header4.png"
import { LuIndianRupee  } from "react-icons/lu";
import { TiBookmark } from "react-icons/ti";
import { PiStampBold } from "react-icons/pi";
import { IoIosSend } from "react-icons/io";
import { LuPrinter } from "react-icons/lu";
import { LuBookMarked } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";

import { IoAddOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { HiSpeakerWave } from "react-icons/hi2";
import { LuUserCheck } from "react-icons/lu";
import { FiRefreshCw } from "react-icons/fi";

import cuurentAccount from "../images/cuurrentAccount.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDotCircle } from "react-icons/fa";
import zono from "../images/zono.png"
import { RxCross2 } from "react-icons/rx";

function ui() {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };



  return (
    <div className=' flex'>
      <div className=' w-14 fixed'>

        <div className={` h-screen bg-gray-800 text-white transition-all duration-200 ${isExpanded ? 'w-64' : 'w-14'}`}>
          <button className="bg-gray-[#0c123c] w-full py-2 focus:outline-none my-2" onClick={toggleSidebar}>
            {!isExpanded && <img src={header1} className='h-8 ms-1' />}
            {isExpanded && <img src="https://x.razorpay.com/dist/assets/img/RazorpayX-logo.svg" className='h-8 ms-3' />}
          </button>
          <div className="flex flex-col items-start">
              <button className="flex items-center bg-gray-[#0c123c] w-full text-left focus:outline-none hover:bg-gray-700 mb-1 my-2 py-[6px]">
              <div className='w-7 h-7 mr-2 mx-2 p-1'><FiHome className="w-5 h-5 " /></div>
                {isExpanded && <span className=' '>Home</span>}
              </button>
              <button className="flex items-center bg-gray-[#0c123c] w-full text-left focus:outline-none hover:bg-gray-700 mb-1 my-2 py-[6px]">
                <div className='w-7 h-7 mr-2 mx-2 p-1'><GoArrowUpRight className="w-5 h-5 " /></div>
                {isExpanded && <span className=' '>Payouts</span>}
              </button>
              <button className="flex items-center bg-gray-[#0c123c] w-full text-left focus:outline-none hover:bg-gray-700 mb-1 my-2 py-[6px]">
                <img src={header4} alt="Home" className="w-7 h-7 mr-2 mx-2" />
                {isExpanded && <span className=' '>Account&nbsp;Statements</span>}
              </button>
              <button className="flex items-center bg-gray-[#0c123c] w-full text-left focus:outline-none hover:bg-gray-700 mb-1 my-2 py-[6px]">
                <div className='w-7 h-7 mr-2 mx-2 p-1'><RiUser3Line className="w-5 h-5 " /></div>
                {isExpanded && <span className=' '>Contacts</span>}
              </button>
              <hr className='border my-3 w-full border-gray-700'/>

              <button className="flex items-center bg-gray-[#0c123c] w-full text-left focus:outline-none hover:bg-gray-700 mb-1 my-2 py-[6px]">
                <div className='w-7 h-7 mr-2 mx-2 p-1'><LuIndianRupee className="w-5 h-5 " /></div>
                {isExpanded && <><span className=' '>Loans</span><button className='bg-green-600 rounded-xl text-white px-3 ms-2 text-xs py-[1px]'>NEW</button></>}
              </button>
              <button className="flex items-center bg-gray-[#0c123c] w-full text-left focus:outline-none hover:bg-gray-700 mt-2 py-[6px]">
                <div className='w-7 h-7 mr-2 mx-2 p-1'><TiBookmark className="w-5 h-5 " /></div>
                {isExpanded && <span className=' '>Vendors&nbsp;Payments</span>}
              </button>
              {isExpanded && <div className='mb-2 w-56'><button className='bg-green-600 rounded-xl text-white px-3 ms-10 text-xs py-[1px]'>NEW</button><span className='ms-1 text-sm text-blue-500'>Invoice approvals -</span></div>}
              <button className="flex items-center bg-gray-[#0c123c] w-full text-left focus:outline-none hover:bg-gray-700 mb-1 my-2 py-[6px]">
                <div className='w-7 h-7 mr-2 mx-2 p-1'><PiStampBold className="w-5 h-5 " /></div>
                {isExpanded && <span className=' '>Tax&nbsp;Payments</span>}
              </button>
              <button className="flex items-center bg-gray-[#0c123c] w-full text-left focus:outline-none hover:bg-gray-700 mb-1 my-2 py-[6px]">
                <div className='w-7 h-7 mr-2 mx-2 p-1'><IoIosSend className="w-5 h-5 " /></div>
                {isExpanded && <span className=' '>Payout&nbsp;Links</span>}
              </button>
              <button className="flex items-center bg-gray-[#0c123c] w-full text-left focus:outline-none hover:bg-gray-700 mb-1 my-2 py-[6px]">
                <div className='w-7 h-7 mr-2 mx-2 p-1'><LuPrinter className="w-5 h-5 " /></div>
                {isExpanded && <span className=' '>Payroll</span>}
              </button>
              <button className="flex items-center bg-gray-[#0c123c] w-full text-left focus:outline-none hover:bg-gray-700 mb-1 my-2 py-[6px]">
                <div className='w-7 h-7 mr-2 mx-2 p-1'><LuBookMarked className="w-5 h-5 " /></div>
                {isExpanded && <span className=' '>Reports</span>}
              </button>
          </div>
        </div>
      </div>

      <div className=' w-full h-[900px] bg-[#0d1219]'>

        <div className=' flex justify-end mt-2'>
          <button className="bg-blue-600 px-5 text-sm py-2 text-white grid grid-cols-12 "><IoAddOutline className=' col-span-3 ms-auto w-4 h-4 me-1 my-auto'/><span className=' col-span-9 '>PAYOUT</span></button>
          <button className='bg-blue-600 border-l-2 border-black text-white px-2'><MdOutlineKeyboardArrowDown /></button>
          <IoSearch className='text-blue-500 my-auto mx-5 h-5 w-5' />
          <HiSpeakerWave className='text-yellow-700 my-auto me-5 h-5 w-5' />
          <LuUserCheck className='text-blue-500 my-auto me-5 h-5 w-5' />
        </div>

        <div className=' ms-[500px] me-80 mt-5'>

          <div className=' flex text-gray-400'><img src={header1} className='h-5 ms-1' />&nbsp;&nbsp;&nbsp;RazorpayX Lite&nbsp;&nbsp;<span className='text-xs my-auto'>as a few seconds ago</span><FiRefreshCw className='my-auto ms-2' /></div>
          <div className=' grid grid-cols-12'>
            <div className=' col-span-5 text-gray-400 flex'>
              <LuIndianRupee className='mt-2' /><span className='text-2xl ms-2 text-white'>100.09</span>
            </div>
            <div className=' col-span-7 border-l-2  border-gray-700 flex'>
              <IoAddOutline className='text-blue-600 ms-4 my-auto'/>
              <span className='my-auto text-blue-600 ms-2 text-sm'>Add balance</span>
            </div>
          </div>

          <div className='border mt-10 border-dashed  border-gray-500 flex py-3'>
            <img className='w-4 mx-4' src='https://cdn-icons-png.freepik.com/256/2788/2788750.png?semt=ais_hybrid' />
            <span className='text-gray-500 text-sm'>You're all caught up. There are no more items pending on you</span>
          </div>

          <div className=' text-gray-100 mt-7 text-sm mb-2'>Onboarding updates (1)</div>
          <div className='bg-gray-900 flex'>
            <img src={cuurentAccount} className='w-[110px]' />
            <div className=' ms-10'>
              <div className='text-xl text-gray-100 mt-4'>Open your RazorpayX account.</div>
              <div className='text-xs text-gray-500 mt-1'>Don't let bankache come in the way of your growth. Apply for your RazorpayX account with a few basic details</div>
              <div className='grid grid-cols-12 mt-4'>
                <div className=' col-span-3 me-1 grid grid-cols-12'>
                  <div className='border border-blue-400 col-span-6'></div>
                  <div className='border border-gray-600 col-span-6'></div>
                </div>
                <div className='border border-gray-600 col-span-3 me-1'></div>
                <div className='border border-gray-600 col-span-3 me-1'></div>
                <div className='border border-gray-600 col-span-3 me-1'></div>
              </div>
              <button className='px-6 py-[6px] bg-blue-500 mt-2 text-white text-sm flex'>Start application <FaArrowRightLong className='my-auto ms-2'/></button>
            </div>
          </div>

          <div className='border mt-5 border-green-500'></div>
          <div className='bg-gray-800 h-[130px] grid grid-cols-12'>
            <div className='col-span-4'>
              <div className='my-4 text-lg mx-6 text-white '>Amazon Instant Settlements</div>
            </div>
            <div className='col-span-8  flex'>
              <div className=' mx-3 mt-5'><FaDotCircle className='text-blue-400' /></div>
              <div className=' mt-5 text-sm'>
                <span className='text-gray-300'>Let's get you started</span>
                <div className='text-gray-300 text-xs'>Complete your application and get instant acceess to your Amazon payouts</div>
                <button className='px-3 py-[6px] bg-blue-500 text-white mt-3'>APPLY NOW</button>
              </div>
            </div>
          </div>

          <div className='border border-green-500'></div>
          <div className='bg-gray-800 h-[130px] grid grid-cols-12'>
            <div className='col-span-4'>
              <div className='my-4 text-lg mx-6 text-white '>Creating payouts <br/> in Live mode</div>
            </div>
            <div className='col-span-8  flex'>
              <div className=' mx-3 mt-4'><FaDotCircle className='text-gray-500' /> <FaDotCircle className='text-blue-500 mt-2' /></div>
              <div className=' mt-3 text-sm'>
                <span className='text-gray-300 text-sm'>Add balance <span className='text-xs text-gray-600'>to create payout in Live mode</span></span>
                <hr className='border-gray-500 my-[1px]' />
                <div className='text-gray-100 text-base'>Create payout</div>
                <div className='text-gray-400 text-xs'>There are multiple ways in which you can create the first payout:</div>
                <button className='px-2 py-[6px] bg-blue-500 text-white mt-2 text-xs me-3'>MAKE A PAYOUT</button>
                <button className='px-2 py-[6px] bg-gray-700 text-white mt-2 text-xs me-3'>SHOW APPS FOR ME</button>
                <button className='px-2 py-[6px] bg-gray-700 text-white mt-2 text-xs me-3'>API PAYOUT</button>
              </div>
            </div>
          </div>

          <div className='border h-20 my-5 border-violet-900 bg-gray-900 flex'>
            <img src={zono} />
            <div className='ms-12'>
              <p className='text-gray-100 text-base mt-2'>Automate Bookeeping For Payouts</p>
              <p className='text-gray-400 text-xs'>Close your books 60% faster and with better accuracy by <br /> automating bookeeping for your Payouts.</p>
            </div>
            <div className=' '>
              <div className=' w-52'><RxCross2 className='ms-auto text-gray-400 mt-2 me-2' /></div>
              <button className='flex text-xs mt-1 ms-9 border border-violet-800 text-violet-800 px-2 py-1'>Connect Zoho Books <FaArrowRightLong className='my-auto ms-[1px]'/></button>
            </div>
          </div>

        </div>

      </div>


    </div>
  )
}

export default ui
