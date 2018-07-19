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
      return {
        ...state,
        todoList: [...state.todoList, action.todo]
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todoList: [
          ...state.todoList.slice(0, action.i),
          ...state.todoList.slice(action.i + 1)
        ]
      };
    default:
      return state;
  }
};

export default reducer;
