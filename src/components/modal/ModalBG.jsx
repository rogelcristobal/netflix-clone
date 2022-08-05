import SearchModalContext from '../../context/SearchModalContext';
import React from 'react';
import { useContext } from 'react';
const ModalBG = () => {
    const {searchModal,setSearchModal}= useContext(SearchModalContext)
  return (
    <div className='h-screen w-screen z-50 fixed top-0 left-0 bg-black/30 ' onClick={()=>setSearchModal(!searchModal)}>
      
    </div>
  );
}

export default ModalBG;
