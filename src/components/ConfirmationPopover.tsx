import React from 'react';

import {
    Button,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    Portal,
    Tooltip,
    useDisclosure,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

type Props = { onConfirm: () => void };

export default function ConfirmationPopover({ onConfirm }: Props) {
    return (
        <Popover>
            <Tooltip label="Delete event">
                <PopoverTrigger>
                    <Button colorScheme="twitter" variant="outline" size="xs">
                        <DeleteIcon color="red.500" />
                    </Button>
                </PopoverTrigger>
            </Tooltip>
            <Portal>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Confirmation</PopoverHeader>
                    <PopoverBody>
                        <p className="text-gray-400 text-sm">
                            Are you sure you want to delete this event?
                        </p>
                        <Button
                            mt="2"
                            colorScheme="red"
                            size="xs"
                            onClick={onConfirm}
                        >
                            Delete
                        </Button>
                    </PopoverBody>
                </PopoverContent>
            </Portal>
        </Popover>
    );
}
