import React from 'react'
import { TouchableWithoutFeedback, Text } from 'react-native';

const Todo = ({ onClick, onLongPress, completed, text }) => (
  <TouchableWithoutFeedback
    onPress={onClick}
    onLongPress={onLongPress}
  >
    <Text style={{
      textDecorationLine: completed ? 'line-through' : 'none',
      padding: 20,
      }}>
      {text}
    </Text>
  </TouchableWithoutFeedback>
)

export default Todo