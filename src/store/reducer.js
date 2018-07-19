const initialState = {
  todoList: [],
  name: '',
  email: '',
  password: '',
  stage: 1,
  focus: '',
  insertFlag: false,
  time: new Date().getHours() + ':' + new Date().getMinutes()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        name: action.name,
        stage: 2
      };
    case 'ADD_EMAIL':
      return {
        ...state,
        email: action.email,
        stage: 3
      };
    case 'SKIP_SIGNUP':
      return {
        ...state,
        stage: 4
      };
    case 'ADD_PASSWORD':
      return {
        ...state,
        password: action.password,
        stage: 4
      };
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
    case 'UPDATE_TIME':
      return {
        ...state,
        time: new Date().getHours() + ':' + new Date().getMinutes()
      };
    default:
      return state;
  }
};

export default reducer;
