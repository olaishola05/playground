const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

// const postReducer = (state, action) => {
//   switch (action.type) {
//     case "CREATE_POST":
//       return {
//         post: action.payload,
//       };

//     default:
//       return state;
//   }
// };

export default AuthReducer;
