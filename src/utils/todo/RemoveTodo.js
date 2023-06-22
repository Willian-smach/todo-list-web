export const removeTodo = (todo) => {
    todos.value = todos.value.filter(t => t !== todo)
}