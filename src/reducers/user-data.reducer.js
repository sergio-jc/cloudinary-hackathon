// export const cartInitialState =
//   JSON.parse(window.localStorage.getItem('cart')) || []

import { DEFAULT_URL_IMAGES } from '@constants/filter.constants'

export const userInitialState = {
  image: window.localStorage.getItem('image_1') || DEFAULT_URL_IMAGES[0],
  filterImage: '',
  name: '',
  nickName: '',
  description: ''
}

export const USER_ACTION_TYPES = {
  UPDATE_IMAGE: 'UPDATE_IMAGE',
  REMOVE_IMAGE: 'REMOVE_IMAGE',
  UPDATE_USER_INFO: 'UPDATE_USER_INFO',
  CLEAR_USER_DATA: 'CLEAR_USER_DATA',
  UPDATE_FILTER: 'UPDATE_FILTER',
  CLEAR_FILTER: 'CLEAR_FILTER'
}

// update localStorage with state for cart
// export const updateLocalStorage = (state) => {
//   window.localStorage.setItem('cart', JSON.stringify(state))
// }

const UPDATE_STATE_BY_ACTION = {
  [USER_ACTION_TYPES.UPDATE_IMAGE]: (state, action) => {
    const url = action.payload
    console.log(action.payload, 'desde reducer')
    return {
      ...state,
      image: url
    }
  },
  [USER_ACTION_TYPES.UPDATE_FILTER]: (state, action) => {
    const url = action.payload
    console.log(action.payload, 'desde reducer')
    return {
      ...state,
      filterImage: url
    }
  },
  [USER_ACTION_TYPES.CLEAR_FILTER]: (state, action) => {
    return {
      ...state,
      filterImage: ''
    }
  },
  [USER_ACTION_TYPES.REMOVE_IMAGE]: (state, action) => {
    return {
      ...state,
      image: DEFAULT_URL_IMAGES[0]
    }
  },
  [USER_ACTION_TYPES.UPDATE_USER_INFO]: (state, action) => {
    const { value, property } = action.payload
    return { ...state, [property]: value }
  },
  [USER_ACTION_TYPES.CLEAR_USER_DATA]: (state, action) => {
    return userInitialState
  }
}

export const userDataReducer = (state, action) => {
  const { type: actionType } = action
  const updateState = UPDATE_STATE_BY_ACTION[actionType]
  return updateState ? updateState(state, action) : state
}
