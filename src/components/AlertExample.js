import { useAlertReducer } from "./AlertManager";

const AlertExample = () => {
  const [state, dispatch] = useAlertReducer()
  const { timeLimit, text, link, alertType, alertTitle } = state

  const onSubmit = (e) => {
    e.preventDefault()
    let timeLimit = e.target.timeLimit.value
    let text = e.target.text.value
    let link = e.target.link.value
    let alertType = e.target.alertType.value.toLowerCase()
    let alertTitle = e.target.alertTitle.value
    dispatch({type: {alertType}, action: timeLimit, text, link, alertType, alertTitle })
  }


  return (
    <form onSubmit={onSubmit}>
      TimeLimit: <input type='text' defaultValue={timeLimit} name='timeLimit' />
      Text: <input type='text' name='text' />
      Link: <input type='text' name='link' />
      Alert Type: <input type='text' name='alertType' />
      Alert Title: <input type='text' name='alertTitle' />
      <input type='submit' value='submit'></input>
    </form>
  )
}

export default AlertExample



