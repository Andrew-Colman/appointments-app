import { Text } from '@chakra-ui/react';
import AddEditModal from '@components/AddEditModal';
import DateDisplay from '@components/DateDisplay';
import useAppointmentActions from '../useAppointmentActions';
import EventStatus from './EventStatus';

type Props = {};

export default function AppointmentDetails({}: Props) {
    const {
        isDetailsModalOpen,
        onDetailsModalOpen,
        onDetailsModalClose,
        selectedEvent,
    } = useAppointmentActions();

    return (
        <AddEditModal
            isOpen={isDetailsModalOpen}
            onOpen={onDetailsModalOpen}
            onClose={onDetailsModalClose}
            title={'Event Details'}
        >
            <DateDisplay date={selectedEvent?.start} />
            {selectedEvent?.title && (
                <Text fontSize="lg" fontWeight={'bold'}>
                    {selectedEvent?.title}
                </Text>
            )}
            {selectedEvent?.description && (
                <Text fontSize="md">{selectedEvent?.description}</Text>
            )}
            {selectedEvent?.status && (
                <EventStatus status={selectedEvent?.status} />
            )}
        </AddEditModal>
    );
}
