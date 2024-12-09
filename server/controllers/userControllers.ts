import { Request, Response, RequestHandler } from 'express';
import UsersModel from '../models/usersModel';
import { UserInterface } from '../interfaces/userInterface';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await UsersModel.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los usuarios.' });
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
      // Extraer los campos directamente del body
      const { id, name, email, password } = req.body;
  
      // Validar que los campos necesarios estén presentes
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Faltan campos requeridos: name, email o password.' });
      }
  
      // Crear el usuario en la base de datos
      const newUser = await UsersModel.create({ id,name, email, password });
  
      // Devolver el usuario creado con un código 201 (Created)
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error); // Loguear el error para depuración
      res.status(500).json({ error: 'Error al crear el usuario.' });
    }
  };
export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await UsersModel.findOne({ where: { email, password } });
        if (!user) {
            return res.status(401).json({ error: 'No se encontró el usuario o la contraseña no es correcta.' });
        }
       
        res.status(200).json({
            message: 'Usuario autenticado correctamente.',
            id: user.id,
            nameUser: user.name,  
        });

    } catch (error) {
        res.status(500).json({ error: 'Error al autenticar el usuario.' });
    }
}
