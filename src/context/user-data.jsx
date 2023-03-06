import {
  userDataReducer,
  userInitialState,
  USER_ACTION_TYPES
} from '@/reducers/user-data.reducer'
import { createContext, useReducer } from 'react'

export const userData = createContext()

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userDataReducer, userInitialState)
  const updateUserImage = ({ url }) => {
    console.log(url, 'desde contexto')
    return dispatch({
      type: USER_ACTION_TYPES.UPDATE_IMAGE,
      payload: url
    })
  }
  const updateUserInfo = ({ property, value }) => {
    return dispatch({
      type: USER_ACTION_TYPES.UPDATE_USER_INFO,
      payload: { property, value }
    })
  }
  const updateFiletImage = ({ url }) => {
    return dispatch({
      type: USER_ACTION_TYPES.UPDATE_FILTER,
      payload: url
    })
  }

  console.log(state)

  const removeImage = () => dispatch({ type: USER_ACTION_TYPES.REMOVE_IMAGE })

  const clearUserData = () =>
    dispatch({ type: USER_ACTION_TYPES.CLEAR_USER_DATA })
  const clearFilterImage = () =>
    dispatch({ type: USER_ACTION_TYPES.CLEAR_FILTER })
  return (
    <userData.Provider
      value={{
        user: state,
        updateUserImage,
        removeImage,
        clearUserData,
        updateUserInfo,
        clearFilterImage,
        updateFiletImage
      }}
    >
      {children}
    </userData.Provider>
  )
}

export default UserProvider
