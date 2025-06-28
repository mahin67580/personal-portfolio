import React from 'react';

const Modal = ({ children}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
      <div className="relative">
     
        {children}
      </div>
    </div>
  );
};

export default Modal;