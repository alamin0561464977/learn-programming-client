import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './routs/router';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App bg-gray-800">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
