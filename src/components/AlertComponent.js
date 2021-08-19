import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import { useState } from 'react';
import { useEffect } from 'react';

const AlertComponent = ({ text, link, alertTitle, alertType, timeLimit }) => {
  const [show, setShow] = useState(true);

  useEffect(
    () => {
      let timer1 = setTimeout(() => setShow(false), timeLimit * 1000);
      return () => {
        clearTimeout(timer1);
      };
    }, [timeLimit])
  return (
    <div>
      {alertType === 'error' && show ? (
        <a href={link}>
          <Alert variant='outlined' severity='error' style={{
            position: 'absolute',
            right: 5,
            top: 5
          }}>
            <AlertTitle>{alertTitle}</AlertTitle>
            {text}
          </Alert>
        </a>
      )
        : alertType === 'warning' && show ? (
          <a href={link}>

            <Alert variant='outlined' severity='warning' style={{
              position: 'absolute',
              right: 5,
              top: 5
            }}>
              <AlertTitle>{alertTitle}</AlertTitle>
              {text}
            </Alert>
          </a>
        )
          : alertType === 'info' && show ? (
            <a href={link}>
              <Alert variant='outlined' severity='info' style={{
                position: 'absolute',
                right: 5,
                top: 5
              }}>
                <AlertTitle>{alertTitle}</AlertTitle>
                {text}
              </Alert>
            </a>
          )
            : alertType === 'success' && show ? (
              <a href={link}>
                <Alert variant='outlined' severity='success'> style={{
                  position: 'absolute',
                  right: 5,
                  top: 5
                }}
                  <AlertTitle>{alertTitle}</AlertTitle>
                  {text}
                </Alert>
              </a>
            ) : null}
    </div>
  )
}

export default AlertComponent