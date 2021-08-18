
const AlertExample = () => {
  return (
    <form onSubmit>
      Text: <input type='text' name='text'></input>
      Link: <input type='text' name='link'></input>
      Time Limit: <input type='text' name='timeLimit'></input>
      Alert Type: <input type='text' name='alertType'></input>
      <input type='submit' value='submit'></input>
    </form>
  )
}

export default AlertExample