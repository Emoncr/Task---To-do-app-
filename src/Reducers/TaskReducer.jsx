import { generateRandomId, setLocalStorage, sortedCompleteTask } from "../lib/helper";


const storageState = JSON.parse(localStorage.getItem("todoList"))

export const primaryState = {
    todoList: storageState ? storageState : [],
}

export const TaskMangeReducer = (state, action) => {

    switch (action.type) {
        case "ADD_TODO":
            const randomId = generateRandomId();
            const newTodo = { ...action.payload, id: randomId }
            const updatedTodoList = [...state.todoList, newTodo];
            const reverseAry = updatedTodoList.reverse()
            const sortedTodo = sortedCompleteTask(reverseAry)
            setLocalStorage(sortedTodo)
            return { ...state, todoList: sortedTodo }



        case "COMPLETE_TODO":
            const completeToDoId = action.payload;
            const updatedTodoAry = state.todoList.map(todo => {
                if (todo.id === completeToDoId) {
                    todo.isComplete ? todo.isComplete = false : todo.isComplete = true
                }
                return todo
            })
            const sortedTodoAry = sortedCompleteTask(updatedTodoAry)

            setLocalStorage(sortedTodoAry)
            return { ...state, todoList: sortedTodoAry }





        case "DELETE_TODO":
            const deleteTodoID = action.payload;
            const updatedAry = state.todoList.filter(todo => todo.id !== deleteTodoID)
            setLocalStorage(updatedAry)
            return { ...state, todoList: updatedAry }



        case "EDIT_TODO":
            const { todoName, isComplete, priority, id } = action.payload;
            const editAry = state.todoList.map(todo => {
                if (todo.id === id) {
                    todo.isComplete = isComplete;
                    todo.priority = priority;
                    todo.todoName = todoName
                }
                return todo
            })

            const sortEditedTodo = sortedCompleteTask(editAry)
            setLocalStorage(sortEditedTodo)
            return { ...state, todoList: sortEditedTodo }



        default:
            return state;
    }

}