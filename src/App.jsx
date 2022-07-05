import  Sidebar  from './components/Sidebar';
import {useSelector, useDispatch} from 'react-redux'
import { increment, decrement,incrementByAmount, resetCounter } from './features/counterSlice';
import { useState } from 'react';
function App() {
  // bg-[#06090f]
  const count = useSelector((state)=> state.counter.count)
  const dispatch = useDispatch()

  const [value,setValue] = useState(1)
  const handleReset=()=>{
    setValue(1)
    dispatch(resetCounter())
  }
  return (
        <div className=" min-h-screen bg-neutral-100 text-black flex justify-center items-start font-outfit">
          <Sidebar></Sidebar>
          <div className="w-full px-10 pt-32 h-auto  flex flex-col items-center justify-start">
              <div className='h-full  border-sample flex pt-8 pb-4 rounded  flex-col  items-center justify-start w-52'>
                  <p className='text-6xl text-neutral-500 my-8'>{count}</p>
                  <div className='flex items-center justify-between  w-full px-6'>
                    {/* increment */}
                    <button className='hover:bg-neutral-200 py-1 px-4 border-sample rounded' onClick={()=>dispatch(increment())}>+</button>
                    {/* reset */}
                    <button className='hover:bg-neutral-200 py-1 px-4 text-sm border-sample rounded' onClick={handleReset}>reset</button>
                    {/* decrement */}
                    <button className='hover:bg-neutral-200 py-1 px-4 border-sample rounded' onClick={()=>dispatch(decrement())}>-</button>
                  </div>
                  <div className='flex items-center space-x-2 my-4 w-fit mx-4'>
                    {/* input */}
                  <input
                     value={value}
                     onChange={(e)=>setValue(Number(e.target.value))}
                     type="text" className='w-9 bg-neutral-200 h-8 rounded shadow-inner text-center' />
                     {/* increment by input */}
                     <button className='hover:bg-neutral-200 py-1 text-sm px-4 border-sample rounded' onClick={()=>dispatch(incrementByAmount(value))}>add amount</button>
                  </div>
              </div>
          </div>
        </div>
  );
}



export default App;





