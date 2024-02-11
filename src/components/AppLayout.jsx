import React from 'react'
import Task from './Task'
import { IoIosArrowDown } from "react-icons/io";

const AppLayout = () => {
    return (
        <div>
            <div>
                <form>
                    <div className="grid grid-cols-12 ">
                        <div className='col-span-3'>
                            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-[11px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  font-medium font-barlow rounded-e-sm"
                            >
                                <option className='font-medium font-barlow py-1 ' selected>High</option>
                                <option value="US">midum</option>
                                <option value="DE">low</option>

                            </select>
                        </div>
                        <div className="col-span-9">
                            <input
                                type="text"
                                className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg  border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                placeholder="Enter Task"
                                required
                            />
                            <div className='flex items-center justify-end mt-1 lg:mt-2'>
                                <button type="submit" className="custom_btn capitalize">
                                    Add task
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
            <div>
                <Task />
            </div>
        </div>
    )
}

export default AppLayout