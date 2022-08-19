import { Box, Button, Flex, HStack, Tooltip } from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons';

import useAppointmentActions from '../useAppointmentActions';
import EventStatus from './EventStatus';
import EventMenu from './EventMenu';

export default function EventDisplay({ event }) {
    const {
        handleDeleteEvent,

        handleSelectEventForDetails,
    } = useAppointmentActions();

    return (
        <div className={`p-1`}>
            <strong>{event.title}</strong>
            <p className="text-gray-300 text-sm">
                {event.description && event.description}
            </p>
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <EventStatus status={event.status} />
                <HStack spacing="1">
                    <Tooltip label="View more details">
                        <Button
                            variant="outline"
                            size="xs"
                            onClick={() => handleSelectEventForDetails(event)}
                            _hover={{
                                backgroundColor: 'blackAlpha.500',
                            }}
                        >
                            <ViewIcon />
                        </Button>
                    </Tooltip>
                    <EventMenu event={event} />
                </HStack>
            </Flex>
        </div>
    );
}
