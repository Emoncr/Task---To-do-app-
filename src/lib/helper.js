export function generateRandomId() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomId = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }

  return randomId;
}

export const setLocalStorage = (array) => {
  localStorage.setItem("todoList", JSON.stringify(array));
};

export const sortedCompleteTask = (array) => {
  const completedTodos = array.filter((todo) => todo.isComplete);
  const incompleteTodos = array.filter((todo) => !todo.isComplete);
  const sortedTodoAry = [...incompleteTodos, ...completedTodos];
  return sortedTodoAry;
};
