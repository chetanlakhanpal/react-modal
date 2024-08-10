import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import Toast from '../Toast';

function App() {
  const [toasts, setSelectedToasts] = React.useState([]);

  const addNewToast = (toast) => {
    setSelectedToasts([...toasts, toast]);
  }

  const removeToast = (toastId) => {
    const newToasts = toasts.filter((toast) => toast.id !== toastId);
    setSelectedToasts(newToasts);
  }
  
  return (
    <>
      {toasts.length > 0 && toasts.map(({...info}) => (
        <Toast {...info} dismiss={removeToast} key={info.id}/>
       ))}
      <ToastPlayground addNewToast={addNewToast} />
      <Footer />
    </>
  );
}

export default App;
