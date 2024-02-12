import React, { createContext, useReducer } from 'react'
import { TaskMangeReducer, primaryState } from '../Reducers/TaskReducer'

export const todoContext = createContext()

const TaskContext = ({ children }) => {

    const [todos, dispatch] = useReducer(TaskMangeReducer, primaryState)

    const addToDo = ({ todoName, isComplete, priority, }) => {
        dispatch({
            type: 'ADD_TODO',
            payload: { todoName, isComplete, priority, }
        })
    }
    const handleComplete = (todoId) => {
        dispatch({
            type: 'COMPLETE_TODO',
            payload: todoId
        })
    }
    const handleDelete = (todoId) => {
        dispatch({
            type: 'DELETE_TODO',
            payload: todoId
        })
    }


    const handleEdit = ({ todoName, isComplete, priority, id }) => {
        dispatch({
            type: 'EDIT_TODO',
            payload: { todoName, isComplete, priority, id }
        })
    }


    return (
        <todoContext.Provider value={{ todos, addToDo, handleComplete, handleDelete, handleEdit }}>
            {children}
        </todoContext.Provider>
    )
}

export default TaskContext