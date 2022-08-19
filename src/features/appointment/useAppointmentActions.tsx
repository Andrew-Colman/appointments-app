import useNotifications from '@hooks/useNotifications';
import api from '@services/http/api.client';
import { useCallback, useContext } from 'react';
import { EventsContext } from './appointment.context';

export default function useAppointmentActions() {
    const { notification } = useNotifications();
    const {
        events,
        selectedDate,
        selectedEvent,
        handleSelectDate,
        handleSelectEvent,
        addEvent,
        editEvent,
        deleteEvent,
        isFormModalOpen,
        onFormModalOpen,
        onFormModalClose,
        isDetailsModalOpen,
        onDetailsModalOpen,
        onDetailsModalClose,
    } = useContext(EventsContext);

    /**
     * create new
     */
    const handleSelectSlot = useCallback(({ start, end }) => {
        handleSelectEvent(null);
        handleSelectDate({ start, end });
        return onFormModalOpen();
    }, []);

    const handleSelectEventForEdit = useCallback(event => {
        handleSelectEvent(event);
        return onFormModalOpen();
    }, []);

    const handleSelectEventForDetails = useCallback(event => {
        handleSelectEvent(event);
        return onDetailsModalOpen();
    }, []);

    const handleCreateEvent = useCallback(async ({ title, description }) => {
        const newAppointment = {
            description,
            status: 'created' as 'created',
            start: selectedDate.start,
            end: selectedDate.end,
            title,
        };
        const appointment = await api.createAppointment(newAppointment);
        addEvent({ id: appointment.id, ...newAppointment });
        notification(`${title} Event Created`);
        onFormModalClose();
    }, []);

    const handleEditEvent = useCallback(
        async (event, newEvent, showNotification?) => {
            editEvent({ ...event, ...newEvent });
            const appointment = await api.updateAppointment(event.id, newEvent);
            if (showNotification) notification(`${newEvent.title} Updated`);
            onFormModalClose();
        },
        []
    );

    const handleDeleteEvent = useCallback(async eventId => {
        deleteEvent(eventId);
        notification(`Event Deleted`);
        const res = await api.deleteAppointment(eventId);
    }, []);

    return {
        events,
        addEvent,
        deleteEvent,
        selectedEvent,
        handleSelectSlot,
        handleSelectEventForEdit,
        handleSelectEventForDetails,
        handleSelectEvent,
        handleCreateEvent,
        handleEditEvent,
        handleDeleteEvent,
        isFormModalOpen,
        onFormModalOpen,
        onFormModalClose,
        isDetailsModalOpen,
        onDetailsModalOpen,
        onDetailsModalClose,
        selectedDate,
    };
}
