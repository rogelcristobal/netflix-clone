
import React from 'react';
const ModalBG = ({children,contextFunction,contextState}) => {
   return (
    <div className='h-screen w-screen z-50 fixed top-0 left-0 bg-black/30 flex items-start pt-16 justify-center ' onClick={()=>contextFunction(!contextState)}>
      {children}
    </div>
  );
}

export default ModalBG;
