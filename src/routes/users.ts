import express from 'express';
import { db } from '../database/database';
import { users } from '../models/users';

const router = express.Router();

router.post('', async (req, res) => {
  const { name, email, age } = req.body;
  try {
    console.log("test", name, email, age);
    const newUser = await db.insert(users).values({ name, email, age }).returning();
    console.log("test", newUser);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

router.get('', async (req, res) => {
  try {
    console.log("getting all users")
    const allUsers = await db.select().from(users);
    console.log("allUsers", allUsers);
    res.json(allUsers);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

export default router;