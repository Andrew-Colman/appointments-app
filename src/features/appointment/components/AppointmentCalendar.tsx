import { useContext, useMemo } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import EventDisplay from './EventDisplay';
import useAppointmentActions from '../useAppointmentActions';
import { useSession } from 'next-auth/react';
import { EventsContext } from '../appointment.context';
import useEffectOnce from '@hooks/useEffectOnce';
import api from '@services/http/api.client';

const localizer = momentLocalizer(moment);

export type AppointmentCalendarProps = {};

export default function AppointmentCalendar({}: AppointmentCalendarProps) {
    const {
        events,
        handleSelectEvent,
        handleSelectSlot,
    } = useAppointmentActions();
    const { data: session } = useSession();

    const { setEvents } = useContext(EventsContext);

    useEffectOnce(() => {
        async function fetchAppointmentsData() {
            const appointments = await api.getAppointments();
            setEvents(
                appointments.map(a => ({
                    ...a,
                    start: new Date(a.date_start),
                    end: new Date(a.date_end),
                }))
            );
        }
        if (session) fetchAppointmentsData();
    });

    const { components, defaultDate } = useMemo(
        () => ({
            defaultDate: new Date(),
            components: {
                event: EventDisplay,
            },
        }),
        []
    );

    return (
        <div>
            <Calendar
                localizer={localizer}
                defaultDate={defaultDate}
                defaultView="month"
                events={events}
                style={{ height: '80vh' }}
                onSelectEvent={handleSelectEvent}
                onSelectSlot={handleSelectSlot}
                selectable
                components={components}
            />
        </div>
    );
}
