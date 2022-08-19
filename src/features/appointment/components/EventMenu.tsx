import {
    DeleteIcon,
    EditIcon,
    HamburgerIcon,
    CheckIcon,
    CloseIcon,
} from '@chakra-ui/icons';
import {
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Portal,
    Tooltip,
} from '@chakra-ui/react';

import useAppointmentActions from '../useAppointmentActions';

type Props = { event: any };

export default function EventMenu({ event }: Props) {
    const {
        handleEditEvent,
        handleDeleteEvent,
        handleSelectEventForEdit,
    } = useAppointmentActions();

    return (
        <>
            <Menu>
                <Tooltip label="Options">
                    <MenuButton
                        as={IconButton}
                        aria-label="Options"
                        icon={<HamburgerIcon />}
                        variant="outline"
                        size="xs"
                        _hover={{
                            backgroundColor: 'blackAlpha.500',
                        }}
                    />
                </Tooltip>
                <Portal>
                    <MenuList zIndex={999}>
                        <MenuItem
                            icon={<CheckIcon />}
                            onClick={() =>
                                handleEditEvent(event, { status: 'done' })
                            }
                        >
                            Mark as Done
                        </MenuItem>
                        <MenuItem
                            icon={<CloseIcon />}
                            onClick={() =>
                                handleEditEvent(event, { status: 'cancelled' })
                            }
                        >
                            Mark as Cancelled
                        </MenuItem>
                        <MenuItem
                            icon={<DeleteIcon />}
                            onClick={() => handleDeleteEvent(event?.id)}
                        >
                            Delete Event
                        </MenuItem>
                        <MenuItem
                            icon={<EditIcon />}
                            onClick={() => handleSelectEventForEdit(event)}
                        >
                            Edit Event
                        </MenuItem>
                    </MenuList>
                </Portal>
            </Menu>
        </>
    );
}
