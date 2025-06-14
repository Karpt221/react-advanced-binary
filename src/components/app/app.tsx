import Header from '../layout/header/header';
import Footer from '../layout/footer/footer';
import { Outlet } from 'react-router';
import { type Booking, type UUID } from '~/types/types';
import importedBookings from '~/assets/data/bookings.json';
import { useState } from 'react';

const bookingsData = importedBookings as Booking[];

function App() {
    const [bookings, setBookings] = useState<Booking[]>(bookingsData);

    const addBooking = (newBooking: Omit<Booking, 'id' | 'userId' | 'createdAt'>) => {
        const id = crypto.randomUUID();
        const userId = crypto.randomUUID();
        const createdAt = new Date().toString();
        const bookingWithID = { ...newBooking, id, userId, createdAt };
        setBookings((prevBookings) => [...prevBookings, bookingWithID]);
    };

    const removeBooking = (bookingId: UUID) => {
        setBookings((prevBookings) => [...prevBookings.filter((booking) => booking.id !== bookingId)]);
    };

    return (
        <>
            <Header />
            <Outlet context={{ bookings, addBooking, removeBooking }} />
            <Footer />
        </>
    );
}

export default App;
