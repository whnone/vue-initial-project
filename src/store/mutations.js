/**
 * mutations.js
 */
 import * as types from './mutation-types'
 
 const mutations = {
     [types.SET_TODO_LIST] (state, todoList) {
         state.todoList = todoList
     }
 }

 export default mutations