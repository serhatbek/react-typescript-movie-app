import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './assets/css/styles.scss';
import { Bookmark, Error, Home, Layout, Movies, TvSeries } from './pages';

const router = createBrowserRouter([
  {
    path: '/react-typescript-movie-app/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/react-typescript-movie-app/movies',
        element: <Movies />,
      },
      {
        path: '/react-typescript-movie-app/tvseries',
        element: <TvSeries />,
      },
      {
        path: '/react-typescript-movie-app/bookmark',
        element: <Bookmark />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
