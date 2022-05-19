import React from 'react';
// import './Container.css';
import { FaTicketAlt } from 'react-icons/fa';
import { AiFillPieChart, AiOutlineApartment } from 'react-icons/ai';
import { HiUserGroup } from 'react-icons/hi';
import { IoIosSettings } from 'react-icons/io';
import {MdAddBox} from 'react-icons/md';
import {BsCircle} from 'react-icons/bs'
import { FiSearch } from 'react-icons/fi';
import { MdOutlineNotificationAdd } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import {BsCheckCircleFill} from 'react-icons/bs'
import pic from '../food.jpg'
const buttons = ["Drink", "Starter", "Appetizer", "Dessert", "Main"];
const box = [{
    items: ['kaffir', 'vodka', 'Lemongrass', 'Ginger','citrus'],
    selected: 'Tommy-yummy-12.5',
    amount: 'FRW 5,000'
}, {
    items: ['Gin', 'Grenadine', 'Citrus', 'Cucumber'],
    selected: 'Singapore Sling-12.5',
    amount: 'FRW 5,000'

}, {
    items: ['Gin', 'Grenadine', 'Citrus', 'Cucumber'],
    selected: 'Singapore Sling-12.5',
    amount: 'FRW 5,000'

}, {
    items: ['Gin', 'Grenadine', 'Citrus', 'Cucumber'],
    selected: 'Singapore Sling-12.5',
    amount: 'FRW 5,000'

}
];
const recipes = ['Desert', 'Main', 'Drink', 'Appetizer', 'Starter'];


function Menu() {
    return (
        <div className="container flex flex-row leading-relaxed ">
            <div className="w-1/6 bg-black h-screen block border border-2xl rounded-lg   border-white">
                <p className="flex flex-row justify-start ml-4 items-center pt-12 ">
                    <span className="text-orange-400 text-2xl font-bold tracking-wider">Fico-</span>
                    <span className=" text-white text-2xl font-bold tracking-wider">Food</span>
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
                    <div className="flex flex-row ml-4  h-4 w-3/4 my-8 h-8 justify-between hover:border-l-4 border-orange-300 hover:bg-black   " >
                        <AiOutlineApartment className='text-gray-100 opacity-25  text-xl text-xl mt-2 ml-2 ' />

                        <p className='text-gray-100 opacity-25  text-xl text-center font-sansserif font-semibold  mt-1 hover:text-white  '>My account</p>

                    </div>




                </div>

            </div>
            <div className="w-5/6 bg-indigo-100 opacity-3  h-screen block py-4  ">
                <div className='header flex flex-row px-4 h-1/6 py-8 justify-between'>
                    <p className='menu text-2xl font-semibold text-black '>Menu</p>
                    <div className='left flex flex-row px-8 justify-around'>
                        <FiSearch className='mr-4 text-xl mt-1   text-indigo-400' />
                        <MdOutlineNotificationAdd className='text-xl mr-4 mt-1 text-indigo-400' />
                        <p className='text-xl font-normal  ml-8 '>Mugabo Javis</p>
                        <GoPerson className='mr-4 text-xl mt-1 ml-4   outline-indigo-100' />

                    </div>

                </div>
                <div className=' bg-white mx-4 h-4/6 my-16 py-3 border-2 border-indigo-200 block  '>
                    <div className='flex flex-row px-4  space-x-4 '>
                        <div className=' flex  flex-row w-1/8  '>

                            <p className='text-xl font-semibold text-black h-full'>Menus</p>
                        </div>
                        <div className='comb block w-4/8 h-full '>
                            <div className=' flex  flex-row justify-evenly px-8 space-x-4 h-1/6'>

                                {buttons.map((btn, index) => {
                                    if (index === 0) {

                                        return <button className='bg-orange-400 rounded-xl w-24 h-10 text-center text-white  ' key={index}>{btn}</button>
                                    }
                                    else {
                                        return <button className='bg-white-400 rounded-xl w-24 h-10 text-center text-black border-2 border-orange-400 ' key={index}>{btn}</button>

                                    }
                                })}


                            </div>



                        <div className='block space-y-4 align-end py-3 px-44 w-full h-5/6 '>

                            {box.map((wer) => {
                                // console.log(box);
                                return (

                                    <div className='bg-indigo-100 h-20 border-3 p-2 border-indigo-700 rounded-lg text-center flex flex-row '>
                                        <div className='w-3/12 h-full'>
                                            <img src={pic} className=' w-full h-full ml-1 rounded-xs object-cover rounded-lg' />
                                        </div>
                                        <div className=' w-9/12 h-10 space-x-1 w-full  pl-4  flex flex-col items-start justify-start'>
                                            <p className='block  w-3/4 object-contain text-gray-500 text-xs tracking-wide object-scale-down pl-1' >{wer.items + " "}</p>
                                            <p className='block  text-black font-semibold text-md' >{wer.selected}</p>
                                            <p className='block  text-orange-400 font-semibold text-md text-stretch  ' >{wer.amount}</p>
                                        </div>
                                    </div>
                                )

                            })}




                        </div>
                        </div>

                    <div className='bg-white border-2 border-indigo-100 rounded-lg w-3/4 h-5/8  block  '> 
                    <p className='font-semibold text-xl text-left pl-6 pt-6'>Add Item</p>
                    <div className='flex flex-row justify-between pt-12 mr-2'>
                    <p className='text-xl text-indigo-200 pl-6'>Create new menu item</p>

<MdAddBox className='text-indigo-200 text-2xl mr-6'/>
                    </div>
                    <div class="grid grid-cols-1 divide-y space-y-4 pt-12">
                        {
                         
                            recipes.map((ing,index)=>{
                                if(index===2){

                                    return (
                                        
    
                                    <div className='flex flex-row justify-left px-6 '>
                                     
    
                                        < BsCheckCircleFill className='text-orange-500 mt-2 mr-4'/>
    
                                        <div className='text-xl' key={index}>{ing}</div>
                                    </div>
                                    )
                                }
                                else{
                                    return (
                                        <div className='flex flex-row justify-left px-6 '>
                                     
    <BsCircle className='text-indigo-400  mt-2 mr-4 ' />
                                        
    
                                        <div className='text-xl' key={index}>{ing}</div>
                                    </div>

                                    )
                                }
                            })
                        }
  
 


</div>
                    
                    
                    
                    </div>
                    </div>







                </div>
                <div>

                </div>
            </div>






        </div>
    )
}
export default Menu;