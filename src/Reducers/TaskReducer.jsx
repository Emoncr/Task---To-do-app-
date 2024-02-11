export const primaryState = {
    todoList: [],
}

export const TaskMangeReducer = (state, action) => {
    console.log("primary", primaryState);
    switch (action.type) {
        case "ADD_TODO":
            const { todoName, isComplete, priority } = action.payload;
            const newTodo = { todoName, isComplete, priority };
            const updatedTodoList = [...state.todoList, newTodo];
            return { ...state, todoList: updatedTodoList }


        default:
            return state;
    }

}