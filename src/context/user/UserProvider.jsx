import UserContext from "./UserContext"


const UserProvider = ({children}) => {
    //initialState

    //useReducer ---> estados

    //Create, getProfile, EditUser, ...

  return (
    <UserContext.Provider value={""}>{children}</UserContext.Provider>
  )
}

export default UserProvider