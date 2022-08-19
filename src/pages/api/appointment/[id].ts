import type { NextApiHandler } from 'next';

import prisma from '@services/db/prisma';
import { getSession } from 'next-auth/react';

const appointmentHandler: NextApiHandler = async (req, res) => {
    const appointmentId = req.query.id as string;

    const session = await getSession({ req });

    if (req.method === 'PUT') {
        const { appointment } = req.body;

        if (session) {
            const post = await prisma.appointmentEvent.update({
                where: { id: appointmentId },
                data: appointment,
            });
            return res.json(post);
        } else {
            return res.status(401).send({ message: 'Unauthorized' });
        }
    }

    if (req.method === 'DELETE') {
        if (session) {
            const post = await prisma.appointmentEvent.delete({
                where: { id: appointmentId },
            });
            return res.json(post);
        } else {
            return res.status(401).send({ message: 'Unauthorized' });
        }
    }
    throw new Error(
        `The HTTP ${req.method} method is not supported at this route.`
    );
};

export default appointmentHandler;
