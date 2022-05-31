import { Fragment } from 'react';
import { Button, ButtonGroup, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/configureStore';
import { decrement, increment } from './counterSlice';

function App() {

  const { data, title } = useAppSelector(state => state.counter);
  const dispatch = useAppDispatch();

  return (
    <Fragment>
    
      <Typography variant='h3'>{ title }</Typography>
      <Typography variant='h2'> the data is: {data} </Typography>

      <ButtonGroup>
          {/* <Button onClick={() => dispatch({type: DECREMENT_COUNTER})} variant='contained' color="error">decrement</Button> */}
          <Button onClick={() => dispatch(decrement(1))} variant='contained' color="error">decrement</Button>
          <Button onClick={() => dispatch(increment(1))} variant='contained' color='primary'>increment</Button>
          <Button onClick={() => dispatch(increment(2))} variant='contained' color='primary'>increment by 2</Button>
      </ButtonGroup>
    </Fragment>
  );
}

export default App; 
