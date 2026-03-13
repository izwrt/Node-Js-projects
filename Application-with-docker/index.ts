import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import db from './db/index.js';
import { userTable } from './drizzle/schema.js';

type User = InferSelectModel<typeof userTable>;
type NewUser = InferInsertModel<typeof userTable>;

async function getAllUsers(): Promise<User[]> {
    const users = await db.select().from(userTable);
    return users;
}

async function createUser(user: NewUser): Promise<void> {
    await db.insert(userTable).values(user);
}

// createUser({ id:1, name: 'Ishwar', email:'izwrt@gmail.com' });

// // Call the async function and handle the promise
getAllUsers().then(users => {
    console.log(users);
}).catch(error => {
    console.error('Error fetching users:', error);
});