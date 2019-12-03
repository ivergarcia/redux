// lo que esta en TodoList se pasa aqui y se busca la constante addTodo y despues de aqui se lo pasa a reducer.
let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
})

function requestMovies(){
  return {
    type: 'REQUEST_MOVIES'
  }
}

// function requestSesion(){
//   return {
//     type: 'REQUEST_SESION'
//   }
// }

const receiveMovies = (movies) => ({
  type: 'RECEIVE_MOVIES',
  data: movies
})

export const fetchMovies = () =>{
  return (dispatch) =>{
    dispatch(requestMovies());
    fetch('https://facebook.github.io/react-native/movies.json')
    .then(response => response.json())
    .then(responseJson => dispatch(receiveMovies(responseJson.movies)))
  }
}

// export const fetchSesion = () =>{
//   return (dispatch) => {
//     dispatch(requestSesion());
//     fetch('')
//   }
// }

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}