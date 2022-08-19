// create/delete/edit
import type { NextApiHandler } from 'next';

import prisma from '@services/db/prisma';
import { getSession } from 'next-auth/react';

const appointmentHandler: NextApiHandler = async (req, res) => {
    const session = await getSession({
        req,
    });
    if (session) {
        const result = await prisma.appointmentEvent.findMany({
            where: {
                authorId: session?.user?.id,
            },
        });
        res.json(result);
    } else {
        res.status(401).send({ message: 'Unauthorized' });
    }
};

export default appointmentHandler;
