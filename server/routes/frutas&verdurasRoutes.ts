import { Router } from 'express';
import { getFrutasYVerdurasByMes } from '../controllers/frutas&verdurasControllers';

const frutasYVerdurasRoutes = Router();

frutasYVerdurasRoutes.get('/:mes', getFrutasYVerdurasByMes);

export default frutasYVerdurasRoutes;
