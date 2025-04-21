import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAmount, reset } from './counterSlice';

const CounterView = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>Counter : {count} </h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementAmount(5))}>Increment by 5</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}

export default CounterView;
