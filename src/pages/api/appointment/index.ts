// create/delete/edit
import type { NextApiHandler } from 'next';

import prisma from '@services/db/prisma';
import { getSession } from 'next-auth/react';

const appointmentHandler: NextApiHandler = async (req, res) => {
    const { appointment } = req.body;

    const { title, description, status, start, end } = appointment;

    const session = await getSession({ req });
    if (session) {
        const result = await prisma.appointmentEvent.create({
            data: {
                title: title,
                description: description,
                status: status || 'created',
                date_start: start,
                date_end: end,
                author: { connect: { email: session?.user?.email } },
            },
        });
        res.json(result);
    } else {
        res.status(401).send({ message: 'Unauthorized' });
    }
};

export default appointmentHandler;
