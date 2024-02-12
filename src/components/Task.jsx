import React, { useContext, useState, } from 'react'
import { FaCheck, FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { todoContext } from '../Contexts/TaskContext';
import Swal from 'sweetalert2'
import EditForm from './EditForm';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";


const Task = ({ todo }) => {
    const { handleComplete, handleDelete } = useContext(todoContext)
    const { todoName, priority, isComplete, id } = todo;
    const [isEditClick, setIsEditClick] = useState(false)



    const handleTodoDelete = () => {
        Swal.fire({
            text: 'Do you want to delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
            }
        });
    }





    return (

        <div className={`border border-gray-300 ${isComplete ? "bg-zinc-200" : "bg-white"}  p-4  rounded-md`}>
            <div className='pb-2'>

                {
                    isEditClick
                        ?
                        <EditForm todoInfo={{ todo, isEditClick, setIsEditClick }} />
                        :
                        <p className='font-semibold text-sm sm:text-base font-barlow'>
                            {isComplete ? <s>{todoName}</s> : todoName}
                        </p>
                }
            </div>

            <div className='pt-2 border-t'>
                <div className='grid grid-cols-2 sm:grid-cols-4  items-start gap-x-1 gap-y-3'>

                    <div className='flex items-center justify-start'>
                        <div
                            className={`
                                    flex items-center justify-center gap-0 outline-none
                                    ${priority === "high" && "text-red-600"}
                                    ${priority === "medium" && "text-yellow-600"}
                                    ${priority === "low" && "text-green-600"}
                            `}
                        >
                            <span>
                                <MdKeyboardDoubleArrowUp
                                  
                                />
                            </span>
                            <span className='text-base font-barlow font-semibold capitalize'>{priority}</span>
                        </div>
                    </div>



                    <div>
                        <button
                            onClick={e => handleComplete(id)}
                            className='flex items-center justify-center gap-1 outline-none'
                        >
                            <span className={`flex items-center justify-center w-5 h-5 border rounded-full text-xs    ${isComplete ? "text-white bg-green-600 border-gray-800" : "bg-transparent border-gray-800 text-gray-800"}  `}>
                                {
                                    isComplete && <FaCheck />
                                }
                            </span>
                            <span className={`text-base font-barlow font-semibold ${isComplete ? "text-green-600" : "text-gray-800"} `}> Complate</span>
                        </button>

                    </div>



                    <div>
                        <button
                            onClick={() => setIsEditClick(!isEditClick)}
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
                            onClick={e => handleTodoDelete()}
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