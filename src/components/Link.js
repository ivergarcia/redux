import React from 'react'
import { TouchableNativeFeedback, Text, View} from 'react-native'

const Link = ({ active, children, onClick }) => (
  <TouchableNativeFeedback
    onPress={onClick}
    disabled={active}
    style={{flex: 1}}
  >
    <View style={{marginLeft: 4, 
      backgroundColor: active ? '#dfdfdf' : '#2196F3'
      }}>
      <Text style={{
        padding: 10,
        color: active ? '#333' : 'white'}}>{children}</Text>
    </View>
  </TouchableNativeFeedback>
)



export default Link