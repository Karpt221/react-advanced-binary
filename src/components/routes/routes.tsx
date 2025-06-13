import Button from '../primitives/button/button';

const appRoutes = [
    {
        path: '/',
        children: [
            {
                path: '/',
                element: <Button dataTestId="">text</Button>,
            },
            {
                path: '/sign-in',
                element: <Button dataTestId="">Sign In</Button>,
            },
            {
                path: '*',
                element: <Button dataTestId="">text</Button>,
            },
        ],
    },
];

export default appRoutes;
