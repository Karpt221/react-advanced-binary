import RouterProvider from '../router-provider/router-provider';
import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import Main from '../layout/main/main-layout';
import appRoutes from '../routes/routes';

function App() {
    return (
        <>
            <Header />
            <Main>
                <RouterProvider routes={appRoutes} />
            </Main>
            <Footer />
        </>
    );
}

export default App;
