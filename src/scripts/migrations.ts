import { migrate } from 'drizzle-orm/better-sqlite3/migrator';
import { db } from '../database/database';

// This will run migrations on the database, creating tables if they don't exist.
migrate(db, { migrationsFolder: './drizzle' });

console.log('Migrations complete');