// mongo db connection client ( for next.js api routes / or SSR)

import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB;

if (!MONGODB_URI) {
    console.warn(
        'Please define the MONGODB_URI environment variable inside .env.local'
    );
}

if (!MONGODB_DB) {
    console.warn(
        'Please define the MONGODB_DB environment variable inside .env.local'
    );
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
let cached = global.mongo;

if (!cached) {
    cached = global.mongo = { conn: null, promise: null };
}

/* 

*/
/** @summary connects to mongo db
 * @example
 *  const { client, db } = await connectToDatabase();
    const isConnected = await client.isConnected();
    
    const results = await db.collectionName.find(...) // etc
 */
export async function connectToDatabase() {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = MongoClient.connect(MONGODB_URI, opts).then(client => {
            return {
                client,
                db: client.db(MONGODB_DB),
            };
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
