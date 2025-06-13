import { type JSX } from 'react';
import { RouterProvider as LibraryRouterProvider, type RouteObject, createBrowserRouter } from 'react-router';

type RouterProviderProps = {
    routes: Pick<RouteObject, 'path' | 'children' | 'Component'>[];
};

const RouterProvider = ({ routes }: RouterProviderProps): JSX.Element => {
    const router = createBrowserRouter(routes);

    return <LibraryRouterProvider router={router} />;
};

export default RouterProvider ;
