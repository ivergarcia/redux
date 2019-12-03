import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import movies from './movies';

export default combineReducers({
  todos,
  visibilityFilter,
  peliculas: movies
})