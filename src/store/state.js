/**
 * state.js
 */
const state = {
    todoList: localStorage.getItem('todoList') || []
}
  
export default state