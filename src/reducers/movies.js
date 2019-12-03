const initialState = {};

export default (state = initialState, action) => {
  
  //console.warn('Movie Reducer')
  switch (action.type) {

  case 'REQUEST_MOVIES':
    console.warn('Requesting')
    return { 
      fetching: true,
    };
  case 'RECEIVE_MOVIES':
    console.warn('exitoso');
    return {
      fetching: false,
      data: action.data
    }

  default:
    return state
  }
};
