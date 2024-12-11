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

export const createUser = async (req: Request, res: Response): Promise<any> => {
    try {
      const { id, name, email, password } = req.body;
  
      if (!name || !email || !password) {
        return res.status(400).json({ error: 'Faltan campos requeridos: name, email o password.' });
      }
  
      const newUser = await UsersModel.create({ id, name, email, password });
  
      return res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Error al crear el usuario.' });
    }
  };
  export const loginUser = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
  
      // Buscar el usuario por su email y contraseña (sin encriptar)
      const user = await UsersModel.findOne({ where: { email, password } });
      
      // Si no se encuentra el usuario o la contraseña no es correcta
      if (!user) {
        return res.status(401).json({ error: "Correo o contraseña incorrecta." });
      }
  
      // Si todo es correcto, devolver los datos del usuario
      res.status(200).json({
        message: "Usuario autenticado correctamente.",
        id: user.id,
        nameUser: user.name,
      });
    } catch (error) {
      console.error("Error en el servidor:", error);
      res.status(500).json({ error: "Error al autenticar el usuario." });
    }
  };
