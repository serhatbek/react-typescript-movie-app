import { createBrowserRouter } from 'react-router-dom';

import { Bookmark, Error, Home, Layout, Movie, TvSeries } from './pages';

export const router = createBrowserRouter([
  {
    path: '/react-typescript-movie-app/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: '/react-typescript-movie-app/movie',
        element: <Movie />,
        errorElement: <Error />,
      },
      {
        path: '/react-typescript-movie-app/tvseries',
        element: <TvSeries />,
        errorElement: <Error />,
      },
      {
        path: '/react-typescript-movie-app/bookmark',
        element: <Bookmark />,
        errorElement: <Error />,
      },
    ],
  },
]);
