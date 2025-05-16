import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementAmount, reset } from './counterSlice';

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-indigo-600 mb-6">🚀 Counter: {count}</h1>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <button
            onClick={() => dispatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementAmount(5))}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition col-span-2"
          >
            Increment by 5
          </button>
        </div>

        <button
          onClick={() => dispatch(reset())}
          className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterView;
