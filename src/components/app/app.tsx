import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import Main from '../layout/main/main-layout';
import { Outlet } from 'react-router';

function App() {
    return (
        <>
            <Header />
            <Main>
                 <Outlet />
            </Main>
            <Footer />
        </>
    );
}

export default App;
