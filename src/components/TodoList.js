import React from 'react'
import { FlatList } from 'react-native';
import Todo from './Todo'

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <FlatList
    data={todos}
    keyExtractor={(todo)=>String(todo.id)}
    renderItem={({item: todo}) => (
      <Todo {...todo} onClick={() => toggleTodo(todo.id)} onLongPress={() => removeTodo(todo.id)}  />
    )
  }
  >
  </FlatList>
)


export default TodoList