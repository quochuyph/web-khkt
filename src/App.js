import './assets/css/App.css';
import MainPage from './pages/MainPage';

import DownloadApk from './pages/DownloadApk'

import AHStudy from './pages/AHStudy';
import AHStudyChatbot from './pages/AHStudyChatbot';  
import AIChatBot from './pages/AIChatBot';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/apkdownload",
    element: <DownloadApk />,
  },
  {
    path: "/ahstudy",
    element: <AHStudy />,
  },
  {
    path: "/ahstudychatbot",
    element: <AHStudyChatbot />,
  },
  {
    path: "/aichatbot",
    element: <AIChatBot />,
  },
]);

function App() {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
