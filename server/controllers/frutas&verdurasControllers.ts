import { Request, Response } from 'express';
import FrutasyverdurasModel from '../models/frutasyverduras';

// Obtener todos los registros por mes
export const getFrutasYVerdurasByMes = async (req: Request, res: Response) => {
  try {
    const { mes } = req.params;

    if (!mes) {
      return res.status(400).json({ error: 'El parámetro "mes" es requerido.' });
    }

    // Buscar registros donde el campo "mes" coincida con el parámetro
    const items = await FrutasyverdurasModel.findAll({ where: { mes } });

    if (items.length === 0) {
      return res.status(404).json({ error: `No se encontraron registros para el mes: ${mes}.` });
    }

    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los registros por mes.' });
  }
};
