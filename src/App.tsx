import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';
import RootLayout from './pages/RootLayout';
import ErrorPage from './pages/ErrorPage';
import ProjectOnePage from './pages/projects/ProjectOnePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <ProjectsPage /> },
      { path: '/resume', element: <ResumePage /> },
      { path: '/projects/1', element: <ProjectOnePage /> },
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )

}

export default App;
