import { useAlertReducer } from "./AlertManager";

const AlertExample = () => {
  const [state, dispatch] = useAlertReducer()
  const { timeLimit, text, link, alertType, alertTitle } = state

  const onSubmit = (e) => {
    e.preventDefault()
    console.log('submitted')
  }

  return (
    <form onSubmit={onSubmit}>
      TimeLimit: <input type='text' value={timeLimit} onChange={(e) =>
        dispatch({
          type: 'timeLimit',
          fieldName: 'timeLimit',
          payload: e.target.value,
        })
      } />
      Text: <input type='text' value={text} onChange={(e) =>
        dispatch({
          type: 'text',
          fieldName: 'text',
          payload: e.target.value,
        })
      } />
      Link: <input type='text' value={link} onChange={(e) =>
        dispatch({
          type: 'link',
          fieldName: 'link',
          payload: e.target.value,
        })
      } />
      Alert Type: <input type='text' value={alertType} onChange={(e) =>
        dispatch({
          type: 'alertType',
          fieldName: 'alertType',
          payload: e.target.value,
        })
      } />
      Alert Title: <input type='text' value={alertTitle} onChange={(e) =>
        dispatch({
          type: 'alertTitle',
          fieldName: 'alertTitle',
          payload: e.target.value,
        })
      } />
      <input type='submit' value='submit'></input>
    </form>
  )
}

export default AlertExample