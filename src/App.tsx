import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <ProjectsPage /> },
      { path: '/resume', element: <ResumePage /> },
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )

}

export default App;
