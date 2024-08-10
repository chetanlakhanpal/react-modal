import React from 'react';

import ToastPlayground from '../ToastPlayground';
import Footer from '../Footer';
import Toast from '../Toast';

function App() {
  const [toasts, setSelectedToasts] = React.useState([]);

  const addNewToast = (toast) => {
    setSelectedToasts([...toasts, toast]);
  }
  
  return (
    <>
      {toasts.length > 0 && toasts.map(({id, ...info}) => (
        <Toast {...info} key={id}/>
       ))}
      <ToastPlayground addNewToast={addNewToast} />
      <Footer />
    </>
  );
}

export default App;
