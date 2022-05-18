import React from 'react';
// import './Container.css';
import { FaTicketAlt } from 'react-icons/fa';
import { AiFillPieChart, AiOutlineApartment } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { IoIosSettings } from 'react-icons/io';
import { FiSearch } from 'react-icons/fi';
import {MdOutlineNotificationAdd} from 'react-icons/md';
import {GoPerson} from 'react-icons/go';


function Container() {
    return (
        <div className="container flex flex-row leading-relaxed ">
            <div className="w-1/6 bg-black h-screen block border border-2xl rounded-lg   border-white">
                <p className="flex flex-row justify-start ml-4 items-center pt-12 ">
                    <span className="text-orange-400 text-2xl font-bold tracking-wider">Eat-</span>
                    <span className=" text-white text-2xl font-bold tracking-wider">Up</span>
                </p>
                <div className="block mt-4 pt-4">



                    <div className="flex flex-row ml-4 h-4 w-3/4 my-8 h-8 justify-between hover:border-l-4 border-orange-300">
                        <AiFillPieChart className='text-white text-xl mt-2 ml-2' />
                        <p className=" text-white text-xl text-center font-sansserif font-semibold  mr-1 mt-1">Overview</p>


                    </div>
                    <div className="flex flex-row ml-4  h-4 w-3/4 my-8 h-8 justify-between hover:border-l-4 border-orange-300" >
                        <FaTicketAlt className='text-gray-100 opacity-25 text-xl mt-2 ml-2' />
                        <p className='text-gray-100 opacity-25  text-xl text-center font-sansserif font-semibold mr-7 mt-1'>Clients</p>


                    </div>
                    <div className="flex flex-row ml-4  h-4 w-3/4 my-8 h-8 justify-between hover:border-l-4 border-orange-300" >
                        <HiUserGroup className='text-gray-100 opacity-25 text-xl mt-2 ml-2' />
                        <p className="text-gray-100 opacity-25 text-xl text-center font-sansserif font-semibold mr-9 mt-1">Users</p>

                    </div>




                </div>
                <div className="block mt-8 py-4">



                    <div className="flex flex-row ml-4 h-4 w-3/4 my-8 h-8 justify-between hover:border-l-4 border-orange-300">
                        <IoIosSettings className='text-gray-100 opacity-25 text-xl mt-2 ml-2' />
                        <p className='text-gray-100 opacity-25  text-xl text-center font-sansserif font-semibold mr-3 mt-1'>Settings</p>

                    </div>
                    <div className="flex flex-row ml-4  h-4 w-3/4 my-8 h-8 justify-between hover:border-l-4 border-orange-300" >
                        <AiOutlineApartment className='text-gray-100 opacity-25  text-xl text-xl mt-2 ml-2 ' />

                        <p className='text-gray-100 opacity-25  text-xl text-center font-sansserif font-semibold  mt-1 '>My account</p>

                    </div>




                </div>

            </div>
            <div className="w-5/6 bg-indigo-100 opacity-3  h-screen block py-4  ">
                <div className='header flex flex-row px-4 h-1/6 py-8 justify-between'>
                    <p className='menu text-2xl font-semibold text-black '>Menu</p>
                    <div className='left flex flex-row px-8 justify-around'>
                        <FiSearch className='mr-4 text-xl mt-1   text-indigo-400' />
                        <MdOutlineNotificationAdd  className='text-xl mr-4 mt-1 text-indigo-400'/>
                        <p className='text-xl font-normal  ml-8 '>Mugabo Javis</p>
                        <GoPerson className='mr-4 text-xl mt-1 ml-4   outline-indigo-100'  />

                    </div>

                </div>
                <div className=' bg-white mx-4 h-4/6 my-16 py-3 border-2 border-purple-300 '>




                </div>
                <div>

                </div>
            </div>






        </div>
    )
}
export default Container;