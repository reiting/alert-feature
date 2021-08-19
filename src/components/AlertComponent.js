import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

const AlertComponent = ({ text, link, alertTitle, alertType }) => {
  return (
    <div>
      {alertType === 'error' ? (
        <Alert variant='outlined' severity='error'>
          <AlertTitle>{alertTitle}</AlertTitle>
          {text}
        </Alert>
      )
        : alertType === 'warning' ? (
          <Alert variant='outlined' severity='warning'>
            <AlertTitle>{alertTitle}</AlertTitle>
            {text}
          </Alert>
        )
          : alertType === 'info' ? (
            <Alert variant='outlined' severity='info'>
              <AlertTitle>{alertTitle}</AlertTitle>
              {text}
            </Alert>
          )
            : alertType === 'success' ? (
              <Alert variant='outlined' severity='success'>
                <AlertTitle>{alertTitle}</AlertTitle>
                {text}
              </Alert>
            ) : null}
    </div>
  )
}

export default AlertComponent