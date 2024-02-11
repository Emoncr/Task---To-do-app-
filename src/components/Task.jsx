import React, { useState } from 'react'
import { FaCheck, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";




const Task = ({todo}) => {
    const [btnClick, setBtnClick] = useState(false)



    return (
     
            <div className="border border-gray-300 bg-white  p-4  rounded-md">
                <div className='pb-2'>
                    <p className='font-semibold text-sm sm:text-base font-barlow'>{todo.todoName}</p>
                </div>
                <div className='pt-2 border-t'>
                    <div className='grid grid-cols-2 sm:grid-cols-4  items-start gap-x-1 gap-y-3'>

                        <div className='flex items-center justify-start'>
                            <div
                                className='flex items-center justify-center gap-1 outline-none'
                            >
                                <span className='text-base font-barlow font-semibold'>{todo.priority}</span>
                                <span>
                                    {/* <FaEdit /> */}
                                </span>
                            </div>
                        </div>
                        <div>
                            <button
                                onClick={e => setBtnClick(!btnClick)}
                                className='flex items-center justify-center gap-1 outline-none'
                            >
                                <span className={`flex items-center justify-center w-5 h-5 border rounded-full text-xs    ${btnClick ? "text-white bg-green-600 border-gray-800" : "bg-transparent border-gray-800 text-gray-800"}  `}>
                                    {
                                        btnClick && <FaCheck />
                                    }
                                </span>
                                <span className={`text-base font-barlow font-semibold ${btnClick ? "text-green-600" : "text-gray-800"} `}> Complate</span>
                            </button>

                        </div>
                        <div>
                            <button

                                className='flex items-center justify-center gap-1 outline-none'
                            >
                                <span>
                                    <FaEdit />
                                </span>
                                <span className='text-base font-barlow font-semibold'> Edit</span>
                            </button>
                        </div>


                        <div>
                            <button

                                className='flex items-center justify-center gap-1 outline-none'
                            >
                                <span>
                                    <MdDeleteForever className='text-red-600 text-lg' />
                                </span>
                                <span className='text-base font-barlow font-semibold text-red-600'> Delete</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
     
    )
}

export default Task