const initialState = {
  todoList: [],
  name: '',
  focus: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {};
    case 'NAME':
      return {};
    case 'ADD_FOCUS':
      return {};
    case 'REMOVE_FOCUS':
      return {};
    case 'ADD_TODO':
      return {};
    case 'REMOVE_TODO':
      return {};
    default:
      return state;
  }
};

export default reducer;
