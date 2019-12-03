import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import Footer from './src/components/Footer'
import AddTodo from './src/containers/AddTodo'
import VisibleTodoList from './src/containers/VisibleTodoList'
import rootReducer from './src/reducers'
import thunk from 'redux-thunk';
import PeliculasList from './src/containers/PeliculasList';

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <AddTodo />
        <VisibleTodoList />
        <Footer /> 
        {/* <PeliculasList /> */}
      </Provider>
    );
  }
}

// const App = () => (
//   <Provider store={store}>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer /> 
//     {/*<PeliculasList />*/}
//   </Provider>
// )

// export default App