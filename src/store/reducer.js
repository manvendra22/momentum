const initialState = {
  todoList: [],
  name: '',
  focus: '',
  insertFlag: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {};
    case 'REMOVE_NAME':
      return {};
    case 'ADD_FOCUS':
      return {
        ...state,
        focus: action.focus
      };
    case 'REMOVE_FOCUS':
      return {
        ...state,
        focus: ''
      };
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
    case 'UPDATE_INSERT_FLAG':
      return {
        ...state,
        insertFlag: true
      };
    default:
      return state;
  }
};

export default reducer;
