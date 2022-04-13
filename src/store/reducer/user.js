import {SET_USER, EDIT_USER, SET_USERS} from '../action/user'

const initialState = {
    userId: null,
    name: '',
    profileImage: '',
    description: '',
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
          description: action.description
        }
      case EDIT_USER:
        return {
            ...state,
            userId: action.userId,
            name: action.name,
            profileImage: action.profileImage,
            description: action.description
          }
      case SET_USERS:
        return {
          ...state,
          users: action.users,
          userId: state.userId,
          name: state.name,
          profileImage: state.profileImage,
          description: state.description
        }
    }
    return state;
  };