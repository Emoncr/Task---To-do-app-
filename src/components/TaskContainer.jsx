import React, { useContext, useState } from 'react'
import Task from "./Task"
import { todoContext } from '../Contexts/TaskContext'
import SearchBar from './SearchBar'
import Sortbar from './Sortbar'


const TaskContainer = () => {
    const { todos } = useContext(todoContext)
    // const [isSearch, SetIsSearch] = useState(false)
    return (
        <div>
            <div className='mb-2 grid grid-cols-1 sm:grid-cols-2 items-center gap-y-1 gap-4'>
                {/* <SearchBar />
                <Sortbar /> */}
            </div>

            <div className='pb-6 lg:pb-8'>
                <div className='grid gap-2 max-h-[400px] lg:max-h-[550px] overflow-y-scroll todo_scrollber'   >
                    {
                        todos.todoList?.length !== 0 ? todos.todoList?.map((todo, index) =>
                            <Task key={index} todo={todo} />
                        )
                            :
                            <h4 className='text-lg font-semibold font-barlow text-center capitalize'>Add your first todo</h4>
                    }
                </div>
            </div>
        </div>
    )
}

export default TaskContainer