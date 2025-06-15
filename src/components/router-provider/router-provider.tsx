import { type JSX } from 'react';
import { RouterProvider as LibraryRouterProvider, type RouteObject, createBrowserRouter } from 'react-router';

type RouterProviderProps = {
    routes: Pick<RouteObject, 'path' | 'children' | 'element' | 'loader' | 'action'>[];
};

const RouterProvider = ({ routes }: RouterProviderProps): JSX.Element => {
    const router = createBrowserRouter(routes);

    return <LibraryRouterProvider router={router} />;
};

export default RouterProvider;
