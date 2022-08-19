import { getSession } from 'next-auth/client';
import { connectToDatabase } from '../db/mongo.client';

export default async function authMiddleware(req, res) {
    const session = await getSession({ req });

    if (!session) return { error: 'not authorized' };

    const { db } = await connectToDatabase();

    return { db, session };
}
