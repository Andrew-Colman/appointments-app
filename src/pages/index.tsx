import Head from 'next/head';

import AppointmentCalendar from '@features/appointment/components/AppointmentCalendar';
import { EventsContextProvider } from '@features/appointment/appointment.context';
import AppointmentModal from '@features/appointment/components/AppointmentModal';
import Navbar from '@components/Navbar';
import { useSession } from 'next-auth/react';

import Landing from '@features/landing/Landing';
import AppointmentDetails from '@features/appointment/components/AppointmentDetails';

export default function Home({ data }) {
    const { data: session, status } = useSession();

    return (
        <>
            <Head>
                <title>Appointments App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="bg-gray-200 h-screen">
                <Navbar title="Appointments" />

                <main className="container mx-auto mt-8 bg-white p-2 rounded shadow">
                    {session && status === 'authenticated' && (
                        <EventsContextProvider>
                            <AppointmentModal />
                            <AppointmentCalendar />
                            <AppointmentDetails />
                        </EventsContextProvider>
                    )}
                    {!session && status === 'unauthenticated' && <Landing />}
                </main>
            </div>
        </>
    );
}

/* export const getStaticProps: GetStaticProps = async ctx => {
    const data = await api.get('/');

    return {
        props: { data },
    };
}; */
