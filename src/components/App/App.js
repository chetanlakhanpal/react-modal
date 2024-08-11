import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import { useEscapeKey } from '../../hooks/hooks';

export const ToastContext = React.createContext(null);

function App() {
  const [toasts, setSelectedToasts] = React.useState([]);

  const addNewToast = (toast) => {
    setSelectedToasts([...toasts, toast]);
  }

  const removeToast = (toastId) => {
    const newToasts = toasts.filter((toast) => toast.id !== toastId);
    setSelectedToasts(newToasts);
  }

  useEscapeKey(() => {
    setSelectedToasts([]);
  });

  return (
    <ToastContext.Provider value={{toasts, removeToast}}>
      <ToastPlayground addNewToast={addNewToast} />
      <Footer />
    </ToastContext.Provider>
  );
}

export default App;
