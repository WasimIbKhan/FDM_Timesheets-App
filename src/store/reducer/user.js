import {SET_USER, EDIT_USER, SET_USERS, ADD_TASK} from '../action/user'

const initialState = {
    userId: null,
    name: '',
    profileImage: '',
    description: '',
    tasks: [],
    users: []
  };


  export default (state = initialState, action) => {
    switch (action.type) {
      case SET_USER:
        return {
          ...state,
          userId: action.userId,
          name: action.name,
          profileImage: action.profileImage,
          description: action.description,
          tasks: state.tasks
        }
      case EDIT_USER:
        return {
            ...state,
            userId: action.userId,
            name: action.name,
            profileImage: action.profileImage,
            description: action.description,
            tasks: state.tasks
          }
      case SET_USERS:
        return {
          ...state,
          users: action.users,
          userId: state.userId,
          name: state.name,
          profileImage: state.profileImage,
          description: state.description,
          tasks: state.tasks
        }
        case ADD_TASK:
          const tasks = [...state.tasks]
          const updatedTasks = tasks.push(action.task)
          return{
            ...state,
          users: state.users,
          userId: state.userId,
          name: state.name,
          profileImage: state.profileImage,
          description: state.description,
          tasks: updatedTasks
          }
    }
    
    return state;
  };