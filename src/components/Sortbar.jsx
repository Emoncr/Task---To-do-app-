import React from 'react'

const Sortbar = () => {
    return (
        <div>

            <select
                id="sort_todo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 py-[15px] font-barlow font-semibold"
            >
                <option className='font-medium font-barlow ' value={""} >Sort To-Do</option>
                <option className='font-medium font-barlow' value="high"> High </option>
                <option className='font-medium font-barlow' value="medium">Medium</option>
                <option className='font-medium font-barlow' value="Low">Low</option>
                <option className='font-medium font-barlow' value="complete">Complete</option>
                <option className='font-medium font-barlow' value="incomplete">Incomplete</option>
            </select>
        </div>
    )
}

export default Sortbar