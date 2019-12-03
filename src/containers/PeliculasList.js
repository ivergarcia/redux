import Peliculas from '../components/Peliculas';
import { connect } from 'react-redux';
import { fetchMovies} from '../actions';

const mapStateToProps = (state) => {
  return {peliculas: state.peliculas};
}

const mapDispatchToProps = {fetchData: fetchMovies};

export default connect(mapStateToProps, mapDispatchToProps)(Peliculas);