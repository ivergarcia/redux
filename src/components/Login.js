// import React, { Component } from 'react';
// import { StyleSheet, TouchableOpacity, Alert, ImageBackground } from 'react-native';
// import { View, Button, Form, Item, Input, Text} from 'native-base';
// import api from '../api/api';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: '',
//       pass: ''
//     };
//   }

//   navegar = async(param) => {
//     if(param == 'Main'){
//       let valLog = await api.valLog(this.state.user, this.state.pass);
//       if(valLog.status == 1){
//         this.props.navigation.navigate(param, {user: this.state.user});
//       }else{
//         Alert.alert("Error al iniciar sesion, verifique que los campos username o password este correctos");
//       }
//     }else{
//       this.props.navigation.navigate(param);
//     }
//   }

//   render() {
//     return (
//       <ImageBackground source={require('../img/fondo.jpg')} style={{width: '100%', height: '100%'}}>
//         <View style={styles.container}>
//           <View style={styles.titulo}>
//             <Text style={{fontSize: 30, color: 'white'}}>Iniciar Sesion</Text>
//           </View>
//           <Form>
//             <Item>
//               <Input placeholderTextColor="white" style={{color: 'white'}} placeholder="Username" onChangeText={(user) => this.setState({user})} />
//             </Item>
//             <Item>
//               <Input placeholderTextColor="white" style={{color: 'white'}} secureTextEntry={true} placeholder="Password" onChangeText={(pass) => this.setState({pass})} />
//             </Item>
//             <Button success block onPress={() => this.navegar('Main')}>
//               <Text>Inciar Sesion</Text>
//             </Button>
//             <TouchableOpacity onPress={() => this.navegar('Register')} style={{alignItems: 'center'}}>
//               <Text style={{color: 'white', fontWeight: 'bold', textDecorationLine: 'underline' }}>Registrar</Text>
//             </TouchableOpacity>
//           </Form>
//         </View>
//       </ImageBackground>
//     );
//   }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignContent: 'center',
//         justifyContent: 'center',
//         padding: 20
//     },
//     titulo: {
//       alignItems: 'center'
//     }
// });