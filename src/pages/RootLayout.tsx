import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const RootLayout = () => {
    return (
        <>
            <Header />
            <main className='mx-4 my-3'>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout