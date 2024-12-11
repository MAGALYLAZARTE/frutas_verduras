import { Router } from 'express';
import { UserInterface } from '../interfaces/userInterface';
import UsersModel from '../models/usersModel';
import { getUsers, createUser, loginUser } from '../controllers/userControllers';


export const router = Router();
export const loginRouter = Router();

router.post('/', createUser);
loginRouter.post('/', loginRouter);
