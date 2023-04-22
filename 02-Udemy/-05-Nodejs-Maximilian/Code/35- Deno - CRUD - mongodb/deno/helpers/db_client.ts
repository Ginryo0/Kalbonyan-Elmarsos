import { MongoClient, Database } from 'https://deno.land/x/mongo/mod.ts';

let db: Database;

export async function connect() {
  const client = new MongoClient();

  await client.connect(
    'mongodb+srv://ginryo:LYcvrzU7BRLV8nLx@cluster0.spv0bgt.mongodb.net/deno?authMechanism=SCRAM-SHA-1'
  );

  db = client.database('deno');
}

export function getDb() {
  return db;
}
