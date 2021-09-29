export const LoginStart = (userCreds) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_SUCCESS",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_FAILURE",
  payload: error,
});

// export const CreatePost = (post) => ({
//   type: "CREATE_POST",
//   payload: post,
// });
// export const PostError = (error) => ({
//   type: "POST_ERROR",
//   payload: error,
// });
