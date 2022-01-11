import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './actions';

function App() {

  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();
  
  return (
    <div>
      <div>COUNT:<span>{counter}</span></div>
      <div>
        <button onClick={() => {dispatch(increment())}}>+</button>
        <button onClick={() => {dispatch(decrement())}}>-</button>
      </div>
    </div>
  );
}

export default App;
