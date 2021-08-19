
const AlertExample = ({ setSubmitted, dispatch }) => {
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
      TimeLimit: <input type='number' name='time' /> <br/>
      Text: <input type='text' name='text' /> <br/>
      Link: <input type='text' name='link' /> <br/>
      Alert Type: <input type='text' name='alertType' /> <br/>
      Alert Title: <input type='text' name='alertTitle' /> <br/>
      <input type='submit' value='submit'></input>
    </form>
  )
}

export default AlertExample
