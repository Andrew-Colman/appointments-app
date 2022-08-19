import React from 'react';

import { CalendarIcon } from '@chakra-ui/icons';

import moment from 'moment';
import { Stat, StatHelpText, StatLabel } from '@chakra-ui/react';

type Props = { date: any };

export default function DateDisplay({ date }: Props) {
    const displayDate = moment(date).format('MM/DD/yyyy');

    return (
        <Stat>
            <StatLabel>Event Date</StatLabel>

            <StatHelpText>
                <CalendarIcon /> {displayDate}
            </StatHelpText>
        </Stat>
    );
}
