import { Request, Response } from "express";
import { IPgHandler } from "../data/instances";

class MainController {
    static async obtainAllRegisters(_req: Request, res: Response) {
        try {
            const data = await IPgHandler.executeQuery({ key: "obtenerDatos" });
            return res.json(data);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al obtener los registros" });
        }
    }

    static async ingresarNombre(req: Request, res: Response) {
        const { nombre } = req.query;
        console.log(nombre)
        try {
            await IPgHandler.executeQuery({
                key: "ingresarDatos",
                params: [nombre]
            });

            const allData = await IPgHandler.executeQuery({ key: "obtenerDatos" });
            return res.json({ message: "Nombre ingresado correctamente", allData });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al obtener los registros" });
        }
    }

}

export default MainController;
