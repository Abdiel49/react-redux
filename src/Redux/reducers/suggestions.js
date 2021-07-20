const defaultState = [
  {
    id:1,
    title: 'react',
  },
  {
    id:2,
    title: 'react native',
  },
];

const reducer = ( state = defaultState, { type, payload }) => {
  switch (type) {
    case 'findSuggestions':{
      
      break;
    }
    default:
      return state;
  }
} 

export default reducer; 