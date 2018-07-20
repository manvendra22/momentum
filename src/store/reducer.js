const initialState = {
  todoList: [],
  name: 'Manav',
  email: '',
  password: '',
  stage: 1,
  focus: '',
  insertFlag: false,
  timeHours: new Date().getHours(),
  timeMinutes: new Date().getMinutes(),
  showLinks: true,
  showBookmarks: false,
  showSearch: false,
  showWeather: true,
  showFocus: true,
  showQuote: true,
  showTodo: true
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
        timeHours: new Date().getHours(),
        timeMinutes: new Date().getMinutes()
      };
    case 'UPDATE_SHOW_LINKS':
      return {
        ...state,
        showLinks: !state.showLinks
      };
    case 'UPDATE_SHOW_BOOKMARKS':
      return {
        ...state,
        showBookmarks: !state.showBookmarks
      };
    case 'UPDATE_SHOW_SEARCH':
      return {
        ...state,
        showSearch: !state.showSearch
      };
    case 'UPDATE_SHOW_WEATHER':
      return {
        ...state,
        showWeather: !state.showWeather
      };
    case 'UPDATE_SHOW_FOCUS':
      return {
        ...state,
        showFocus: !state.showFocus
      };
    case 'UPDATE_SHOW_QUOTE':
      return {
        ...state,
        showQuote: !state.showQuote
      };
    case 'UPDATE_SHOW_TODO':
      return {
        ...state,
        showTodo: !state.showTodo
      };

    default:
      return state;
  }
};

export default reducer;
