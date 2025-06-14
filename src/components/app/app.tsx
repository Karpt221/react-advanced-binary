import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import { Outlet } from 'react-router';

function App() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
