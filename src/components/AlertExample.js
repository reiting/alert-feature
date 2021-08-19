import { initialState, reducer, useAlertReducer } from "./AlertManager";
import { useReducer } from "react"


const AlertExample = ({ setSubmitted }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleSubmit = (e) => {
    e.preventDefault()
    let timeLimit = e.target.time.value
    let text = e.target.text.value
    let link = e.target.link.value
    let alertType = e.target.alertType.value.toLowerCase()
    let alertTitle = e.target.alertTitle.value
    dispatch({ type: { alertType }, payload: { timeLimit, text, link, alertType, alertTitle }, })
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit}>
      TimeLimit: <input type='text' name='time' />
      Text: <input type='text' name='text' />
      Link: <input type='text' name='link' />
      Alert Type: <input type='text' name='alertType' />
      Alert Title: <input type='text' name='alertTitle' />
      <input type='submit' value='submit'></input>
      <button onClick={() => console.log('state', state)}>console</button>
    </form>
  )
}

export default AlertExample
