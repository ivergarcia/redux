import React from 'react'
import {View, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

//type Props={dispatch: Function};
class AddTodo extends React.Component/*<Props>*/ {
  constructor(props){
    super(props);
    this.state = {
      newTodo: ''
    }
  }

  render(){
    //const {dispatch} = this.props;
    return (
      <View>
          <TextInput value={this.state.newTodo} onChangeText={(text=> this.setState({newTodo: text}))} />
          <Button title='Add Todo' onPress={()=>{
            if(this.state.newTodo.trim()){
              // dispatch(addTodo(this.state.newTodo)); con este metodo puedes enviar los datos al action
              this.props.dispatch(addTodo(this.state.newTodo));
              this.setState({newTodo: ''});
            }
          }}></Button>
      </View>);
    }
}

export default connect()(AddTodo)