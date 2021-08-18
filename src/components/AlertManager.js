import { useReducer } from "react"

let uniqueId =
  Math.floor(Math.random() * 1000)

const initialState = {
  timeLimit: '10000',
  text: '',
  link: '',
  alertType: '',
  id: uniqueId,
  alertTitle: ''
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'timeLimit':
      return { ...state, }
    case 'text':
      return { ...state, }
    case 'link':
      return { ...state }
    case 'alertType':
      return { ...state }
    case 'alertTitle':
      return { ...state }
    default:
      return state
  }
}

export const useAlertReducer = () => {
  return useReducer(reducer, initialState);
};


