import React from 'react';

const Box = ({children}) => {
  return (
    <div className={`bg-gray-900 w-fit py-8 px-20 capitalize text-sm  font-outfit text-white tracking-wide rounded`}>
      {children}
    </div>
  );
}

export default Box;
