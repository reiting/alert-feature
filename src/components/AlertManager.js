import { useReducer } from "react"
import AlertComponent from "./AlertComponent"

let uniqueId =
  Math.floor(Math.random() * 1000)

const initialState = {
  timeLimit: '10000',
  text: '',
  link: '',
  alertType: '',
  alertTitle: ''
}

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'timeLimit':
//       return { ...state, }
//     case 'text':
//       return { ...state, }
//     case 'link':
//       return { ...state }
//     case 'alertType':
//       return { ...state }
//     case 'alertTitle':
//       return { ...state }
//     default:
//       return state
//   }
// }

const reducer = (state, action) => {
  console.log('actionnnnnnnn', action)
  switch (action.type.alertType) {
    case 'error':
      console.log('made it in error')
      return { ...state, id: uniqueId}
    case 'warning':
      return { ...state, id: uniqueId}
    case 'info':
      return { ...state, id: uniqueId}
    case 'sucess':
      return { ...state, id: uniqueId}
    default:
      return state
  }
}

export const useAlertReducer = () => {
  return useReducer(reducer, initialState);
};

export const AlertManager = () => {
  const [state, dispatch] = useAlertReducer()
  console.log('stattteeeeeee', state)
  return (
      <h1>TITLE</h1>,

    Object.keys(state).map(alert => (
      <AlertComponent
        text={alert.text}
        link={alert.link}
        alertTitle={alert.alertTitle}
        alertType={alert.alertType}
      />
    ))
  )

}



