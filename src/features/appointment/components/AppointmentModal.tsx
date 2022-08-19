import AddEditModal from '@components/AddEditModal';
import React from 'react';
import useAppointmentActions from '../useAppointmentActions';
import AppointmentForm from './AppointmentForm';

type Props = {};

export default function AppointmentModal({}: Props) {
    const {
        isFormModalOpen,
        onFormModalOpen,
        onFormModalClose,
        selectedEvent,
    } = useAppointmentActions();

    return (
        <AddEditModal
            isOpen={isFormModalOpen}
            onOpen={onFormModalOpen}
            onClose={onFormModalClose}
            title={!!selectedEvent ? 'Edit Event' : `Create a new Event`}
        >
            <AppointmentForm />
        </AddEditModal>
    );
}
