import { Router } from 'express';



export const frutasyverdurasRouter = Router();

frutasyverdurasRouter.get('/', (req, res) => {
    res.send('Hola mundo');
});

