import React, { Component } from 'react';
import { Text } from 'react-native';

export default class Peliculas extends Component {

  componentDidMount(){
    const {fetchData} = this.props;
    fetchData();
  }

  render() {
    console.warn(this.props);
    const {peliculas: {fetching, data}} = this.props;
    //console.warn(this.props.peliculas);
    if(fetching){
      return <Text>Cargando...</Text>
    }
    else if(data){
      return data.map((movie) => <Text>{movie.title}, {movie.releaseYear}</Text>)
    }
    return null;
  }
}
