import { useReducer } from "react"
import AlertComponent from "./AlertComponent"

let uniqueId =
  Math.floor(Math.random() * 1000)

export const initialState = { alerts: [] }

export const reducer = (state, action) => {

  console.log('state', state)
  switch (action.type.alertType) {
    case 'error':
      return { ...state, alerts: [...state.alerts, { timeLimit: action.payload.timeLimit, text: action.payload.text, link: action.payload.link, alertType: action.payload.alertType, alertTitle: action.payload.alertTitle, id: uniqueId }] }
    case 'warning':
      return { ...state, alerts: [...state.alerts, { timeLimit: action.payload.timeLimit, text: action.payload.text, link: action.payload.link, alertType: action.payload.alertType, alertTitle: action.payload.alertTitle, id: uniqueId }] }
    case 'info':
      return { ...state, alerts: [...state.alerts, { timeLimit: action.payload.timeLimit, text: action.payload.text, link: action.payload.link, alertType: action.payload.alertType, alertTitle: action.payload.alertTitle, id: uniqueId }] }
    case 'sucess':
      return { ...state, alerts: [...state.alerts, { timeLimit: action.payload.timeLimit, text: action.payload.text, link: action.payload.link, alertType: action.payload.alertType, alertTitle: action.payload.alertTitle, id: uniqueId }] }
    default:
  } return state
}

// export const useAlertReducer = () => {
//   return useReducer(reducer, initialState);
// };

export const AlertManager = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    Object.keys(state).map(alert => (
      <AlertComponent
        text={alert.text}
        link={alert.link}
        alertTitle={alert.alertTitle}
        alertType={alert.alertType}
        dispatch={dispatch}
      />
    ))
  )

}



