import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';
import { ReactNode } from 'react';

type AddEditModalProps = {
    operation?: 'add' | 'edit';
    title: string;
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    children: ReactNode;
};

export default function AddEditModal({
    title,
    isOpen,
    onOpen,
    onClose,
    children,
}: AddEditModalProps) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{children}</ModalBody>

                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}
