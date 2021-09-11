import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "613cfb6d2b14a11a051da516",
    profilePicture: "",
    coverPicture: "",
    followers: [
      "613cf9362b14a11a051da510",
      "613cf9dd2b14a11a051da512",
      "613cfa9c2b14a11a051da514",
    ],
    followings: [
      "613cf9362b14a11a051da510",
      "613cf9dd2b14a11a051da512",
      "613cfa9c2b14a11a051da514",
    ],
    isAdmin: false,
    stacks: [
      "HTML",
      "CSS",
      "Python",
      "Saas",
      "Material UI",
      "Bootstrap",
      "ReactJS",
      "NodeJS",
      "MongoDB",
    ],
    username: "legit_coder",
    email: "legit_c@google.com",
    city: "Atlanta",
    desc: "A snake language developer by heart and a guidance of the open source realm.",
    experience: "Senior",
    from: "Germany",
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
