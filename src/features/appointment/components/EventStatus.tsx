import { Badge, SlideFade } from '@chakra-ui/react';
import React from 'react';

type Props = { status: string };

export default function EventStatus({ status }: Props) {
    return (
        <div>
            {status === 'done' && (
                <SlideFade in={true}>
                    <Badge colorScheme="green">Done</Badge>
                </SlideFade>
            )}
            {status === 'cancelled' && (
                <SlideFade in={true}>
                    <Badge colorScheme="red">Cancelled</Badge>
                </SlideFade>
            )}
        </div>
    );
}
