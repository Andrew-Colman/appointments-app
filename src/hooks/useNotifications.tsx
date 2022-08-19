import { useToast } from '@chakra-ui/react';

export default function useNotifications() {
    const toast = useToast();
    function notification(
        title,
        description?,
        status?,
        duration = 5000,
        isClosable = true
    ) {
        toast({
            title,
            description: description || '',
            status: status || 'success',
            duration,
            isClosable,
        });
    }
    return {
        notification,
    };
}
