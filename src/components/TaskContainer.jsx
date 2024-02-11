import React, { useContext } from 'react'
import Task from "./Task"
import { todoContext } from '../Contexts/TaskContext'

const TaskContainer = () => {
    const { todos } = useContext(todoContext)
    console.log("current state", todos);
    return (
        <div>
            {/* <div>

            </div> */}

            <div className='pb-6 lg:pb-8'>
                <div className='grid gap-2' >
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